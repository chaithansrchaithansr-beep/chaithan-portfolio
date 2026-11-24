import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function GlobalCommSphere({ mouse }) {
  const sphereRef = useRef();
  const ringRef = useRef();
  const satRef = useRef();

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.2;
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.28;
      ringRef.current.rotation.y -= delta * 0.15;
    }
    if (satRef.current) {
      satRef.current.rotation.y += delta * 0.35;
    }

    const targetX = mouse.current.x * 0.4;
    const targetY = mouse.current.y * 0.3;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
    state.camera.position.y += (-targetY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group position={[3.4, 0, 0]}>
      {/* Wireframe Holographic Globe */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1.5, 24, 24]} />
        <meshBasicMaterial color="#00f2fe" wireframe={true} transparent opacity={0.35} />
      </mesh>

      {/* Solid Inner Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" emissive="#d97706" emissiveIntensity={0.65} metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Orbiting Meridian Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.3, 0.025, 16, 80]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.65} />
      </mesh>

      {/* Orbiting Satellite Node */}
      <group ref={satRef}>
        <mesh position={[2.6, 0.5, 0]}>
          <octahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial color="#ffffff" emissive="#00f2fe" emissiveIntensity={0.8} />
        </mesh>
      </group>
    </group>
  );
}

function NetworkParticles({ count = 300 }) {
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
      pointsRef.current.rotation.y += delta * 0.025;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.065} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function ContactCanvas() {
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
          camera={{ position: [0, 0, 7.5], fov: 48 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[6, 8, 6]} intensity={2.2} color="#00f2fe" />
          <directionalLight position={[-6, -6, -4]} intensity={1.8} color="#fbbf24" />

          <GlobalCommSphere mouse={mouse} />
          <NetworkParticles count={300} />
        </Canvas>
      )}
    </div>
  );
}
