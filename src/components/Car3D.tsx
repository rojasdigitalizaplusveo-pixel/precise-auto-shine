import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

interface CarModelProps {
  activeZone: string | null;
  targetRotation: number;
}

/* ── Stylised sedan built from box / cylinder primitives ── */
function CarModel({ activeZone, targetRotation }: CarModelProps) {
  const group = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetRotation,
        0.04
      );
    }
  });

  const bodyColor = "#1a2a3a";
  const glassColor = "#88ccee";
  const glassEmissive = "#225588";
  const highlightColor = "#d4a020";

  const isActive = (id: string) => activeZone === id;

  return (
    <group ref={group} position={[0, -0.3, 0]} scale={1.1}>
      {/* ── Main body ── */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <boxGeometry args={[4.2, 0.7, 1.8]} />
        <meshStandardMaterial color={bodyColor} metalness={0.7} roughness={0.3} />
      </mesh>

      {/* ── Cabin ── */}
      <mesh position={[0.1, 0.9, 0]} castShadow>
        <boxGeometry args={[2.2, 0.6, 1.7]} />
        <meshStandardMaterial color={bodyColor} metalness={0.7} roughness={0.3} />
      </mesh>

      {/* ── Roof top ── */}
      <mesh position={[0.1, 1.22, 0]}>
        <boxGeometry args={[2.0, 0.04, 1.6]} />
        <meshStandardMaterial color={bodyColor} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* ── Windshield (front) ── */}
      <mesh position={[1.15, 0.92, 0]} rotation={[0, 0, 0.35]}>
        <boxGeometry args={[0.05, 0.65, 1.6]} />
        <meshStandardMaterial
          color={isActive("windshield") ? highlightColor : glassColor}
          emissive={isActive("windshield") ? highlightColor : glassEmissive}
          emissiveIntensity={isActive("windshield") ? 0.8 : 0.15}
          transparent
          opacity={isActive("windshield") ? 0.9 : 0.5}
          metalness={0.1}
          roughness={0.05}
        />
      </mesh>

      {/* ── Rear windshield ── */}
      <mesh position={[-0.95, 0.92, 0]} rotation={[0, 0, -0.35]}>
        <boxGeometry args={[0.05, 0.65, 1.6]} />
        <meshStandardMaterial
          color={isActive("rear") ? highlightColor : glassColor}
          emissive={isActive("rear") ? highlightColor : glassEmissive}
          emissiveIntensity={isActive("rear") ? 0.8 : 0.15}
          transparent
          opacity={isActive("rear") ? 0.9 : 0.5}
          metalness={0.1}
          roughness={0.05}
        />
      </mesh>

      {/* ── Side windows (left) ── */}
      {/* Rear left */}
      <mesh position={[-0.35, 0.92, 0.86]}>
        <boxGeometry args={[0.8, 0.5, 0.05]} />
        <meshStandardMaterial
          color={isActive("side-rear") ? highlightColor : glassColor}
          emissive={isActive("side-rear") ? highlightColor : glassEmissive}
          emissiveIntensity={isActive("side-rear") ? 0.8 : 0.15}
          transparent
          opacity={isActive("side-rear") ? 0.9 : 0.5}
        />
      </mesh>
      {/* Front left (door) */}
      <mesh position={[0.55, 0.92, 0.86]}>
        <boxGeometry args={[0.8, 0.5, 0.05]} />
        <meshStandardMaterial
          color={isActive("door") ? highlightColor : glassColor}
          emissive={isActive("door") ? highlightColor : glassEmissive}
          emissiveIntensity={isActive("door") ? 0.8 : 0.15}
          transparent
          opacity={isActive("door") ? 0.9 : 0.5}
        />
      </mesh>

      {/* ── Side windows (right) ── */}
      <mesh position={[-0.35, 0.92, -0.86]}>
        <boxGeometry args={[0.8, 0.5, 0.05]} />
        <meshStandardMaterial
          color={isActive("side-rear") ? highlightColor : glassColor}
          emissive={isActive("side-rear") ? highlightColor : glassEmissive}
          emissiveIntensity={isActive("side-rear") ? 0.8 : 0.15}
          transparent
          opacity={isActive("side-rear") ? 0.9 : 0.5}
        />
      </mesh>
      <mesh position={[0.55, 0.92, -0.86]}>
        <boxGeometry args={[0.8, 0.5, 0.05]} />
        <meshStandardMaterial
          color={isActive("door") ? highlightColor : glassColor}
          emissive={isActive("door") ? highlightColor : glassEmissive}
          emissiveIntensity={isActive("door") ? 0.8 : 0.15}
          transparent
          opacity={isActive("door") ? 0.9 : 0.5}
        />
      </mesh>

      {/* ── Sunroof ── */}
      <mesh position={[0.1, 1.25, 0]}>
        <boxGeometry args={[1.0, 0.04, 0.8]} />
        <meshStandardMaterial
          color={isActive("sunroof") ? highlightColor : glassColor}
          emissive={isActive("sunroof") ? highlightColor : glassEmissive}
          emissiveIntensity={isActive("sunroof") ? 0.8 : 0.15}
          transparent
          opacity={isActive("sunroof") ? 0.9 : 0.5}
        />
      </mesh>

      {/* ── Side mirrors ── */}
      {[0.9, -0.9].map((z, i) => (
        <mesh key={i} position={[0.8, 0.72, z * 1.05]}>
          <boxGeometry args={[0.15, 0.1, 0.1]} />
          <meshStandardMaterial
            color={isActive("mirror") ? highlightColor : bodyColor}
            emissive={isActive("mirror") ? highlightColor : "#000"}
            emissiveIntensity={isActive("mirror") ? 0.6 : 0}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}

      {/* ── Wheels ── */}
      {[
        [1.3, 0, 0.95],
        [1.3, 0, -0.95],
        [-1.3, 0, 0.95],
        [-1.3, 0, -0.95],
      ].map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.35, 0.35, 0.25, 24]} />
            <meshStandardMaterial color="#111" metalness={0.5} roughness={0.7} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.27, 8]} />
            <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      ))}

      {/* ── Headlights ── */}
      {[0.6, -0.6].map((z, i) => (
        <mesh key={i} position={[2.12, 0.4, z]}>
          <boxGeometry args={[0.05, 0.15, 0.35]} />
          <meshStandardMaterial
            color="#fff"
            emissive="#ffffcc"
            emissiveIntensity={0.5}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}

      {/* ── Taillights ── */}
      {[0.6, -0.6].map((z, i) => (
        <mesh key={i} position={[-2.12, 0.4, z]}>
          <boxGeometry args={[0.05, 0.15, 0.35]} />
          <meshStandardMaterial color="#cc0000" emissive="#cc0000" emissiveIntensity={0.4} />
        </mesh>
      ))}

      {/* ── Front bumper ── */}
      <mesh position={[2.15, 0.15, 0]}>
        <boxGeometry args={[0.15, 0.3, 1.7]} />
        <meshStandardMaterial color="#111" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* ── Rear bumper ── */}
      <mesh position={[-2.15, 0.15, 0]}>
        <boxGeometry args={[0.15, 0.3, 1.7]} />
        <meshStandardMaterial color="#111" metalness={0.3} roughness={0.6} />
      </mesh>
    </group>
  );
}

interface Car3DProps {
  activeZone: string | null;
  targetRotation: number;
}

const Car3D = ({ activeZone, targetRotation }: Car3DProps) => {
  return (
    <div className="w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden bg-card border border-border">
      <Canvas
        camera={{ position: [5, 3, 5], fov: 35 }}
        shadows
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[8, 10, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-5, 5, -5]} intensity={0.3} />
        <spotLight position={[0, 8, 0]} intensity={0.5} angle={0.5} penumbra={1} />

        <CarModel activeZone={activeZone} targetRotation={targetRotation} />

        <ContactShadows
          position={[0, -0.32, 0]}
          opacity={0.6}
          scale={12}
          blur={2.5}
          far={4}
        />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate={!activeZone}
          autoRotateSpeed={0.5}
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Car3D;
