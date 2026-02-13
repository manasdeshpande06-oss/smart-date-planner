'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

interface HeartProps {
  position: [number, number, number];
  speed: number;
  drift: number;
}

const Heart: React.FC<HeartProps> = ({ position, speed, drift }) => {
  const meshRef = useRef<Mesh>(null);
  const geometryRef = useRef<THREE.ExtrudeGeometry>(null);

  // Create geometry once
  if (!geometryRef.current) {
    const heartShape = new THREE.Shape();
    const x = 0;
    const y = 0;
    const scale = 0.5;

    heartShape.moveTo(x + 5 * scale, y + 5 * scale);
    heartShape.bezierCurveTo(
      x + 5 * scale,
      y + 5 * scale,
      x + 4 * scale,
      y,
      x,
      y
    );
    heartShape.bezierCurveTo(
      x - 6 * scale,
      y,
      x - 6 * scale,
      y + 7 * scale,
      x - 6 * scale,
      y + 7 * scale
    );
    heartShape.bezierCurveTo(
      x - 6 * scale,
      y + 11 * scale,
      x - 3 * scale,
      y + 15.4 * scale,
      x + 5 * scale,
      y + 19 * scale
    );
    heartShape.bezierCurveTo(
      x + 12 * scale,
      y + 15.4 * scale,
      x + 16 * scale,
      y + 11 * scale,
      x + 16 * scale,
      y + 7 * scale
    );
    heartShape.bezierCurveTo(
      x + 16 * scale,
      y + 7 * scale,
      x + 16 * scale,
      y,
      x + 10 * scale,
      y
    );
    heartShape.bezierCurveTo(
      x + 7 * scale,
      y,
      x + 5 * scale,
      y + 2 * scale,
      x + 5 * scale,
      y + 5 * scale
    );

    const extrudeSettings = {
      depth: 0.5,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelSegments: 3,
    };

    geometryRef.current = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  }

  const geometry = geometryRef.current;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y -= speed;
      meshRef.current.position.x += Math.sin(meshRef.current.position.y * drift) * 0.01;
      meshRef.current.rotation.z += 0.01;

      if (meshRef.current.position.y < -15) {
        meshRef.current.position.y = 15;
        meshRef.current.position.x = position[0];
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={0.3}
      geometry={geometry}
    >
      <meshPhongMaterial
        color="#C41E3A"
        emissive="#FF69B4"
        shininess={100}
      />
    </mesh>
  );
};

const HeartsScene: React.FC = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 10,
        Math.random() * 20 - 10,
        (Math.random() - 0.5) * 5,
      ] as [number, number, number],
      speed: Math.random() * 0.02 + 0.01,
      drift: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#FFB6C1" />

      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          position={heart.position}
          speed={heart.speed}
          drift={heart.drift}
        />
      ))}
    </>
  );
};

export const FloatingHearts: React.FC = () => {
  return (
    <div className="w-full h-96 bg-gradient-to-b from-secondary to-romantic-light">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <HeartsScene />
      </Canvas>
    </div>
  );
};
