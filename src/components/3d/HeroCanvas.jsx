import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Central Cinematic Mass Quantum Artifact
function CinematicCore({ mouse }) {
  const meshRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();
  const ringRef3 = useRef();
  const satGroupRef = useRef();

  useFrame((state, delta) => {
    // Smooth cinematic rotations
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.28;
      meshRef.current.rotation.y += delta * 0.4;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x += delta * 0.18;
      ringRef1.current.rotation.z += delta * 0.24;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y -= delta * 0.22;
      ringRef2.current.rotation.z += delta * 0.15;
    }
    if (ringRef3.current) {
      ringRef3.current.rotation.x -= delta * 0.12;
      ringRef3.current.rotation.y += delta * 0.16;
    }
    if (satGroupRef.current) {
      satGroupRef.current.rotation.y += delta * 0.25;
    }

    // Camera parallax tracking
    const targetX = mouse.current.x * 0.6;
    const targetY = mouse.current.y * 0.4;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
    state.camera.position.y += (-targetY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Metallic Torus Knot with Gold/Chrome Emissive Core */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.35, 0.4, 140, 36, 2, 3]} />
        <meshStandardMaterial
          color="#fbbf24"
          metalness={0.94}
          roughness={0.15}
          emissive="#d97706"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* Primary Amber-Gold Anamorphic Ring */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[2.7, 0.035, 16, 120]} />
        <meshBasicMaterial color="#f59e0b" wireframe={true} transparent opacity={0.7} />
      </mesh>

      {/* Secondary Electric-Cyan Anamorphic Ring */}
      <mesh ref={ringRef2}>
        <torusGeometry args={[3.3, 0.03, 16, 120]} />
        <meshBasicMaterial color="#00f2fe" wireframe={true} transparent opacity={0.65} />
      </mesh>

      {/* Tertiary Outer Horizon Ring */}
      <mesh ref={ringRef3}>
        <torusGeometry args={[3.8, 0.02, 16, 120]} />
        <meshBasicMaterial color="#818cf8" wireframe={true} transparent opacity={0.4} />
      </mesh>

      {/* Orbiting Satellites */}
      <group ref={satGroupRef}>
        <mesh position={[4.1, 0.8, 0]}>
          <octahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} emissive="#b45309" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[-3.8, -1.0, 0.6]}>
          <icosahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#00f2fe" metalness={0.9} roughness={0.1} emissive="#0284c7" emissiveIntensity={0.6} />
        </mesh>
      </group>
    </group>
  );
}

// Rising Cinematic Ember Sparks & Cosmic Field
function CinematicEmbers({ count = 750 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#fbbf24'),
      new THREE.Color('#f59e0b'),
      new THREE.Color('#00f2fe'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#ef4444')
    ];

    for (let i = 0; i < count; i++) {
      const radius = 9 + Math.random() * 24;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const chosen = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.075}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroCanvas() {
  const mouse = useRef({ x: 0, y: 0 });
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }

    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!webglSupported) {
    return (
      <div className="hero-fallback-backdrop">
        <div className="fallback-glow-orb gold"></div>
        <div className="fallback-glow-orb cyan"></div>
      </div>
    );
  }

  return (
    <div
      className="hero-canvas-container"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.75
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.85} />
        {/* Warm Cinematic Key Light */}
        <directionalLight position={[10, 12, 8]} intensity={2.2} color="#fbbf24" />
        {/* Cool Anamorphic Fill Light */}
        <directionalLight position={[-10, -10, -8]} intensity={1.5} color="#00f2fe" />
        {/* Dramatic Rim Point Light */}
        <pointLight position={[0, 4, 3]} intensity={2.5} color="#f59e0b" distance={10} />
        <pointLight position={[0, -4, -3]} intensity={1.8} color="#0284c7" distance={10} />

        <CinematicCore mouse={mouse} />
        <CinematicEmbers count={750} />
      </Canvas>
    </div>
  );
}
