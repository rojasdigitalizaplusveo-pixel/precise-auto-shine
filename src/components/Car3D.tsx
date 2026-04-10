import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

interface CarModelProps {
  activeZone: string | null;
  targetRotation: number;
}

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

  const bodyColor = "#f0f0f0";
  const bodyMetal = { color: bodyColor, metalness: 0.8, roughness: 0.2 };
  const glassColor = "#88ccee";
  const glassEmissive = "#225588";
  const highlightColor = "#d4a020";
  const darkTrim = "#1a1a1a";

  const isActive = (id: string) => activeZone === id;

  const glassMat = (id: string) => ({
    color: isActive(id) ? highlightColor : glassColor,
    emissive: isActive(id) ? highlightColor : glassEmissive,
    emissiveIntensity: isActive(id) ? 0.8 : 0.15,
    transparent: true,
    opacity: isActive(id) ? 0.9 : 0.45,
    metalness: 0.1,
    roughness: 0.05,
  });

  return (
    <group ref={group} position={[0, -0.5, 0]} scale={1.0}>
      {/* ── Lower body (SUV – GLE style) ── */}
      <mesh position={[0, 0.45, 0]} castShadow>
        <boxGeometry args={[4.8, 0.9, 2.0]} />
        <meshStandardMaterial {...bodyMetal} />
      </mesh>

      {/* ── Wheel arches ── */}
      {[[1.5, 0.35, 1.05], [1.5, 0.35, -1.05], [-1.5, 0.35, 1.05], [-1.5, 0.35, -1.05]].map(([x, y, z], i) => (
        <mesh key={`fender-${i}`} position={[x, y, z]} castShadow>
          <boxGeometry args={[1.0, 0.5, 0.15]} />
          <meshStandardMaterial color={darkTrim} metalness={0.3} roughness={0.7} />
        </mesh>
      ))}

      {/* ── Cabin ── */}
      <mesh position={[0, 1.15, 0]} castShadow>
        <boxGeometry args={[2.8, 0.8, 1.9]} />
        <meshStandardMaterial {...bodyMetal} />
      </mesh>

      {/* ── Roof ── */}
      <mesh position={[0, 1.57, 0]}>
        <boxGeometry args={[2.6, 0.04, 1.8]} />
        <meshStandardMaterial {...bodyMetal} />
      </mesh>

      {/* ── Roof rails ── */}
      {[0.85, -0.85].map((z, i) => (
        <mesh key={`rail-${i}`} position={[0, 1.62, z]}>
          <boxGeometry args={[2.2, 0.06, 0.06]} />
          <meshStandardMaterial color="#ccc" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}

      {/* ── Windshield (front) ── */}
      <mesh position={[1.45, 1.15, 0]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.05, 0.75, 1.75]} />
        <meshStandardMaterial {...glassMat("windshield")} />
      </mesh>

      {/* ── Rear windshield ── */}
      <mesh position={[-1.35, 1.15, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.05, 0.75, 1.75]} />
        <meshStandardMaterial {...glassMat("rear")} />
      </mesh>

      {/* ── Door windows (left) ── */}
      <mesh position={[0.6, 1.18, 0.96]}>
        <boxGeometry args={[0.9, 0.55, 0.05]} />
        <meshStandardMaterial {...glassMat("door")} />
      </mesh>
      {/* ── Door windows (right) ── */}
      <mesh position={[0.6, 1.18, -0.96]}>
        <boxGeometry args={[0.9, 0.55, 0.05]} />
        <meshStandardMaterial {...glassMat("door")} />
      </mesh>

      {/* ── Side lateral windows (left rear) ── */}
      <mesh position={[-0.4, 1.18, 0.96]}>
        <boxGeometry args={[0.9, 0.55, 0.05]} />
        <meshStandardMaterial {...glassMat("side")} />
      </mesh>
      {/* ── Side lateral windows (right rear) ── */}
      <mesh position={[-0.4, 1.18, -0.96]}>
        <boxGeometry args={[0.9, 0.55, 0.05]} />
        <meshStandardMaterial {...glassMat("side")} />
      </mesh>

      {/* ── Sunroof ── */}
      <mesh position={[0, 1.6, 0]}>
        <boxGeometry args={[1.2, 0.04, 0.9]} />
        <meshStandardMaterial {...glassMat("sunroof")} />
      </mesh>

      {/* ── Side mirrors ── */}
      {[1.05, -1.05].map((z, i) => (
        <group key={`mirror-group-${i}`}>
          <mesh position={[1.0, 0.95, z]}>
            <boxGeometry args={[0.18, 0.12, 0.12]} />
            <meshStandardMaterial
              color={isActive("mirror") ? highlightColor : bodyColor}
              emissive={isActive("mirror") ? highlightColor : "#000"}
              emissiveIntensity={isActive("mirror") ? 0.8 : 0}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          {/* Mirror glass */}
          <mesh position={[0.92, 0.95, z * 1.04]}>
            <boxGeometry args={[0.12, 0.08, 0.02]} />
            <meshStandardMaterial
              color={isActive("mirror") ? highlightColor : glassColor}
              emissive={isActive("mirror") ? highlightColor : glassEmissive}
              emissiveIntensity={isActive("mirror") ? 0.8 : 0.2}
              transparent
              opacity={isActive("mirror") ? 0.9 : 0.6}
            />
          </mesh>
        </group>
      ))}

      {/* ── Wheels ── */}
      {[
        [1.5, 0.05, 1.05],
        [1.5, 0.05, -1.05],
        [-1.5, 0.05, 1.05],
        [-1.5, 0.05, -1.05],
      ].map(([x, y, z], i) => (
        <group key={`wheel-${i}`} position={[x, y, z]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.42, 0.42, 0.3, 24]} />
            <meshStandardMaterial color="#111" metalness={0.4} roughness={0.8} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.28, 0.28, 0.32, 12]} />
            <meshStandardMaterial color="#aaa" metalness={0.95} roughness={0.05} />
          </mesh>
        </group>
      ))}

      {/* ── Headlights ── */}
      {[0.7, -0.7].map((z, i) => (
        <mesh key={`head-${i}`} position={[2.42, 0.55, z]}>
          <boxGeometry args={[0.08, 0.2, 0.4]} />
          <meshStandardMaterial color="#fff" emissive="#ffffcc" emissiveIntensity={0.5} transparent opacity={0.95} />
        </mesh>
      ))}

      {/* ── Taillights ── */}
      {[0.7, -0.7].map((z, i) => (
        <mesh key={`tail-${i}`} position={[-2.42, 0.55, z]}>
          <boxGeometry args={[0.08, 0.18, 0.4]} />
          <meshStandardMaterial color="#cc0000" emissive="#cc0000" emissiveIntensity={0.4} />
        </mesh>
      ))}

      {/* ── Front grille ── */}
      <mesh position={[2.42, 0.4, 0]}>
        <boxGeometry args={[0.08, 0.45, 1.2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[2.44, 0.4, 0]}>
        <boxGeometry args={[0.03, 0.02, 1.0]} />
        <meshStandardMaterial color="#ccc" metalness={0.95} roughness={0.05} />
      </mesh>

      {/* ── Bumpers ── */}
      <mesh position={[2.42, 0.2, 0]}>
        <boxGeometry args={[0.12, 0.3, 1.9]} />
        <meshStandardMaterial color={darkTrim} metalness={0.3} roughness={0.6} />
      </mesh>
      <mesh position={[-2.42, 0.2, 0]}>
        <boxGeometry args={[0.12, 0.4, 1.9]} />
        <meshStandardMaterial color={darkTrim} metalness={0.3} roughness={0.6} />
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
        camera={{ position: [6, 3.5, 6], fov: 35 }}
        shadows
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[8, 10, 5]} intensity={1.4} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <directionalLight position={[-5, 5, -5]} intensity={0.4} />
        <spotLight position={[0, 10, 0]} intensity={0.6} angle={0.4} penumbra={1} />

        <CarModel activeZone={activeZone} targetRotation={targetRotation} />

        <ContactShadows position={[0, -0.5, 0]} opacity={0.5} scale={14} blur={2.5} far={5} />

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
