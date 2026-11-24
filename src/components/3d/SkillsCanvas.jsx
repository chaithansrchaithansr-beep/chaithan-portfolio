import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function TechCrystal({ position, geometryType, color, emissive, speed = 0.4 }) {
  const meshRef = useRef();
  const wireRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * (speed * 1.3);
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2 + position[0]) * 0.25;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x -= delta * (speed * 0.7);
      wireRef.current.rotation.z += delta * (speed * 0.9);
      wireRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2 + position[0]) * 0.25;
    }
  });

  const renderGeometry = () => {
    switch (geometryType) {
      case 'octa':
        return <octahedronGeometry args={[0.75, 0]} />;
      case 'dodeca':
        return <dodecahedronGeometry args={[0.7, 0]} />;
      case 'tetra':
        return <tetrahedronGeometry args={[0.8, 0]} />;
      default:
        return <icosahedronGeometry args={[0.7, 0]} />;
    }
  };

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        {renderGeometry()}
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.55}
          metalness={0.92}
          roughness={0.15}
        />
      </mesh>

      <mesh ref={wireRef}>
        {renderGeometry()}
        <meshBasicMaterial color="#ffffff" wireframe={true} transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

function ArsenalCluster({ mouse }) {
  const groupRef = useRef();

  useFrame((state) => {
    const targetX = mouse.current.x * 0.5;
    const targetY = mouse.current.y * 0.35;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
    state.camera.position.y += (-targetY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      <TechCrystal position={[-3.8, 1.8, -1]} geometryType="octa" color="#fbbf24" emissive="#b45309" speed={0.35} />
      <TechCrystal position={[3.8, -1.6, -1]} geometryType="dodeca" color="#00f2fe" emissive="#0284c7" speed={0.4} />
      <TechCrystal position={[-4.2, -1.8, 0]} geometryType="tetra" color="#818cf8" emissive="#4338ca" speed={0.3} />
      <TechCrystal position={[4.0, 1.7, 0]} geometryType="icosa" color="#10b981" emissive="#047857" speed={0.45} />
    </group>
  );
}

function TechParticleStream({ count = 350 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#fbbf24'),
      new THREE.Color('#00f2fe'),
      new THREE.Color('#818cf8'),
      new THREE.Color('#10b981')
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
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
      pointsRef.current.rotation.y += delta * 0.035;
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

export default function SkillsCanvas() {
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
          <directionalLight position={[6, 8, 6]} intensity={2.0} color="#fbbf24" />
          <directionalLight position={[-6, -6, -4]} intensity={1.8} color="#00f2fe" />
          <pointLight position={[0, 0, 3]} intensity={1.5} color="#ffffff" distance={10} />

          <ArsenalCluster mouse={mouse} />
          <TechParticleStream count={350} />
        </Canvas>
      )}
    </div>
  );
}
