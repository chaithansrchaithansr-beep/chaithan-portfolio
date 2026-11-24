import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CyberGridFloor() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.z = (state.clock.elapsedTime * 0.4) % 1.5;
    }
  });

  return (
    <group position={[0, -2.8, 0]} rotation={[-Math.PI / 2.35, 0, 0]}>
      <gridHelper ref={meshRef} args={[35, 35, '#fbbf24', '#1e293b']} />
    </group>
  );
}

function FloatingProjectSlabs({ mouse }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
    const targetX = mouse.current.x * 0.4;
    const targetY = mouse.current.y * 0.25;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
    state.camera.position.y += (-targetY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      {/* Floating Monolith 1 (Left High) */}
      <mesh position={[-4.5, 1.6, -1]} rotation={[0.4, 0.6, 0.2]}>
        <boxGeometry args={[1.2, 1.8, 0.15]} />
        <meshStandardMaterial color="#00f2fe" metalness={0.9} roughness={0.2} emissive="#0284c7" emissiveIntensity={0.4} />
      </mesh>

      {/* Floating Monolith 2 (Right High) */}
      <mesh position={[4.6, 1.2, -1.2]} rotation={[-0.3, -0.5, 0.1]}>
        <boxGeometry args={[1.3, 1.9, 0.15]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.2} emissive="#d97706" emissiveIntensity={0.4} />
      </mesh>

      {/* Floating Ring Horizon */}
      <mesh position={[0, 0, -2]} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[4.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function ProjectEmbers({ count = 300 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#fbbf24'),
      new THREE.Color('#00f2fe'),
      new THREE.Color('#ffffff')
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.025;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.065} vertexColors transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

export default function ProjectsCanvas() {
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
        opacity: inView ? 0.8 : 0,
        transition: 'opacity 0.6s ease'
      }}
    >
      {inView && (
        <Canvas
          camera={{ position: [0, 0, 8], fov: 48 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.65} />
          <directionalLight position={[8, 10, 6]} intensity={2.2} color="#fbbf24" />
          <directionalLight position={[-8, -8, -4]} intensity={1.8} color="#00f2fe" />

          <CyberGridFloor />
          <FloatingProjectSlabs mouse={mouse} />
          <ProjectEmbers count={300} />
        </Canvas>
      )}
    </div>
  );
}
