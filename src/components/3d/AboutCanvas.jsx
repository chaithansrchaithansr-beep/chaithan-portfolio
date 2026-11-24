import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function LogicHelix({ mouse }) {
  const groupRef = useRef();

  const [sphereData] = useMemo(() => {
    const count = 36;
    const items = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 4;
      const y = (i - count / 2) * 0.22;
      const radius = 1.6;
      items.push({
        pos1: [Math.cos(angle) * radius, y, Math.sin(angle) * radius],
        pos2: [Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius],
        color1: i % 2 === 0 ? '#fbbf24' : '#f59e0b',
        color2: i % 2 === 0 ? '#00f2fe' : '#38bdf8'
      });
    }
    return [items];
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }

    const targetX = mouse.current.x * 0.4;
    const targetY = mouse.current.y * 0.3;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
    state.camera.position.y += (-targetY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef} position={[-3.2, 0, 0]}>
      {sphereData.map((item, idx) => (
        <group key={idx}>
          {/* Strand 1 (Gold) */}
          <mesh position={item.pos1}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color={item.color1} emissive={item.color1} emissiveIntensity={0.6} metalness={0.8} />
          </mesh>
          {/* Strand 2 (Cyan) */}
          <mesh position={item.pos2}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color={item.color2} emissive={item.color2} emissiveIntensity={0.6} metalness={0.8} />
          </mesh>
        </group>
      ))}

      {/* Central Axis Glow Beam */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 8, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function FloatingConstellationParticles({ count = 300 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#fbbf24'),
      new THREE.Color('#00f2fe'),
      new THREE.Color('#818cf8')
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.025;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

export default function AboutCanvas() {
  const mouse = useRef({ x: 0, y: 0 });
  const [inView, setInView] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: inView ? 0.85 : 0,
        transition: 'opacity 0.6s ease'
      }}
    >
      {inView && (
        <Canvas
          camera={{ position: [0, 0, 7], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[-6, 8, 5]} intensity={2.0} color="#00f2fe" />
          <directionalLight position={[6, -6, -4]} intensity={1.5} color="#fbbf24" />
          <pointLight position={[-3, 0, 2]} intensity={2.2} color="#38bdf8" distance={8} />

          <LogicHelix mouse={mouse} />
          <FloatingConstellationParticles count={300} />
        </Canvas>
      )}
    </div>
  );
}
