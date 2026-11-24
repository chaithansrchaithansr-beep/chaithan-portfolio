import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function HolographicIdentityCore({ mouse }) {
  const meshRef = useRef();
  const wireRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x -= delta * 0.15;
      wireRef.current.rotation.y -= delta * 0.2;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.22;
      ring1Ref.current.rotation.x += delta * 0.14;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.18;
      ring2Ref.current.rotation.y += delta * 0.12;
    }

    // Parallax tracking
    const targetX = mouse.current.x * 0.5;
    const targetY = mouse.current.y * 0.3;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
    state.camera.position.y += (-targetY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group position={[3.2, 0, 0]}>
      {/* Solid Inner Core */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#fbbf24"
          metalness={0.92}
          roughness={0.18}
          emissive="#b45309"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Wireframe Outer Armor */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial
          color="#00f2fe"
          wireframe={true}
          transparent={true}
          opacity={0.35}
        />
      </mesh>

      {/* Orbiting Quantum Gold Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.3, 0.025, 16, 80]} />
        <meshBasicMaterial color="#f59e0b" transparent={true} opacity={0.6} />
      </mesh>

      {/* Orbiting Cyan Horizon Ring */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.7, 0.02, 16, 80]} />
        <meshBasicMaterial color="#00f2fe" transparent={true} opacity={0.5} />
      </mesh>
    </group>
  );
}

function AmbientIdentityDust({ count = 350 }) {
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
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
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
      pointsRef.current.rotation.y += delta * 0.03;
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
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function ProfileCanvas() {
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
        opacity: inView ? 0.4 : 0,
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
          <directionalLight position={[6, 8, 6]} intensity={2.0} color="#fbbf24" />
          <directionalLight position={[-6, -6, -4]} intensity={1.5} color="#00f2fe" />
          <pointLight position={[3, 2, 2]} intensity={2.2} color="#f59e0b" distance={8} />

          <HolographicIdentityCore mouse={mouse} />
          <AmbientIdentityDust count={350} />
        </Canvas>
      )}
    </div>
  );
}
