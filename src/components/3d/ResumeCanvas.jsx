import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function QuantumGyroscope({ mouse }) {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();
  const prism = useRef();

  useFrame((state, delta) => {
    if (ring1.current) {
      ring1.current.rotation.x += delta * 0.3;
      ring1.current.rotation.y += delta * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.y -= delta * 0.25;
      ring2.current.rotation.z += delta * 0.18;
    }
    if (ring3.current) {
      ring3.current.rotation.x -= delta * 0.15;
      ring3.current.rotation.z -= delta * 0.22;
    }
    if (prism.current) {
      prism.current.rotation.y += delta * 0.45;
      prism.current.rotation.x += delta * 0.2;
    }

    const targetX = mouse.current.x * 0.4;
    const targetY = mouse.current.y * 0.3;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
    state.camera.position.y += (-targetY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Diamond Credential Prism */}
      <mesh ref={prism}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.95} roughness={0.12} emissive="#b45309" emissiveIntensity={0.6} />
      </mesh>

      {/* Ring 1 - Gold */}
      <mesh ref={ring1}>
        <torusGeometry args={[2.2, 0.03, 16, 80]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.7} />
      </mesh>

      {/* Ring 2 - Cyan */}
      <mesh ref={ring2}>
        <torusGeometry args={[2.6, 0.025, 16, 80]} />
        <meshBasicMaterial color="#00f2fe" transparent opacity={0.6} />
      </mesh>

      {/* Ring 3 - Violet */}
      <mesh ref={ring3}>
        <torusGeometry args={[3.0, 0.02, 16, 80]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

function VaultEmbers({ count = 280 }) {
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
      pointsRef.current.rotation.y += delta * 0.03;
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

export default function ResumeCanvas() {
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
          camera={{ position: [0, 0, 7.5], fov: 48 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[6, 8, 6]} intensity={2.2} color="#fbbf24" />
          <directionalLight position={[-6, -6, -4]} intensity={1.6} color="#00f2fe" />

          <QuantumGyroscope mouse={mouse} />
          <VaultEmbers count={280} />
        </Canvas>
      )}
    </div>
  );
}
