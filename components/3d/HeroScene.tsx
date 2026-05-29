"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function FloatingOrb({ color, position, speed = 1, distort = 0.4 }: {
  color: string;
  position: [number, number, number];
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.8, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          speed={speed * 2}
          distort={distort}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 60;

  const particles = useRef(
    Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
      ] as [number, number, number],
      scale: Math.random() * 0.15 + 0.05,
    }))
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    particles.current.forEach((particle, i) => {
      const t = state.clock.elapsedTime;
      dummy.position.set(
        particle.position[0] + Math.sin(t + i * 0.3) * 0.3,
        particle.position[1] + Math.cos(t + i * 0.3) * 0.3,
        particle.position[2]
      );
      dummy.scale.setScalar(particle.scale * (0.8 + Math.sin(t + i) * 0.2));
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#b5ebff" transparent opacity={0.6} />
    </instancedMesh>
  );
}

function HeroSceneInner() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#b5ebff" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#0a0d6f" />

      <FloatingOrb color="#0a0d6f" position={[0, 0, 0]} speed={0.8} distort={0.3} />
      <FloatingOrb color="#00677e" position={[-2, 1, -1]} speed={1.2} distort={0.5} />
      <FloatingOrb color="#b5ebff" position={[2, -1, 1]} speed={0.6} distort={0.4} />

      <ParticleField />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
        >
          <HeroSceneInner />
        </Canvas>
      </Suspense>
    </div>
  );
}