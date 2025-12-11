import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { AdditiveBlending, Points, Vector3 } from 'three';
import { OrbitControls, MeshTransmissionMaterial, Float, Sphere } from '@react-three/drei';

// Floating Holographic Card
function HolographicCard({ position, rotation }: { position: [number, number, number], rotation?: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation || [0, 0, 0]}>
        <planeGeometry args={[1.8, 2.5, 32, 32]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.9}
          roughness={0.1}
          emissive="#00d9ff"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
      {/* Card Border */}
      <mesh position={position} rotation={rotation || [0, 0, 0]}>
        <planeGeometry args={[1.85, 2.55]} />
        <meshBasicMaterial color="#00d9ff" wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

// Elegant Wireframe Sphere
function WireframeSphere({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

// Glowing Ring
function GlowingRing({ position, rotation, color = "#00d9ff" }: { 
  position: [number, number, number], 
  rotation?: [number, number, number],
  color?: string 
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} rotation={rotation || [0, 0, 0]}>
        <torusGeometry args={[0.8, 0.08, 16, 100]} />
        <meshStandardMaterial
          color={color}
          metalness={1}
          roughness={0}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Minimal Code Symbol
function CodeSymbol({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5}>
      <group position={position}>
        {/* Left angle bracket */}
        <mesh position={[-0.4, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.1, 0.8, 0.1]} />
          <meshStandardMaterial
            color="#00ff88"
            metalness={0.9}
            roughness={0.1}
            emissive="#00ff88"
            emissiveIntensity={0.6}
          />
        </mesh>
        <mesh position={[-0.2, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <boxGeometry args={[0.1, 0.8, 0.1]} />
          <meshStandardMaterial
            color="#00ff88"
            metalness={0.9}
            roughness={0.1}
            emissive="#00ff88"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Right angle bracket */}
        <mesh position={[0.2, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.1, 0.8, 0.1]} />
          <meshStandardMaterial
            color="#00ff88"
            metalness={0.9}
            roughness={0.1}
            emissive="#00ff88"
            emissiveIntensity={0.6}
          />
        </mesh>
        <mesh position={[0.4, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <boxGeometry args={[0.1, 0.8, 0.1]} />
          <meshStandardMaterial
            color="#00ff88"
            metalness={0.9}
            roughness={0.1}
            emissive="#00ff88"
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Elegant Helix DNA-like structure
function HelixStructure({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} position={position}>
        {Array.from({ length: 20 }).map((_, i) => {
          const y = (i - 10) * 0.15;
          const angle = (i / 20) * Math.PI * 4;
          const x = Math.cos(angle) * 0.5;
          const z = Math.sin(angle) * 0.5;
          
          return (
            <mesh key={i} position={[x, y, z]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial
                color="#a855f7"
                metalness={0.8}
                roughness={0.2}
                emissive="#a855f7"
                emissiveIntensity={0.5}
              />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

// Minimal Cube Array
function CubeArray({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={groupRef} position={position}>
        {[0, 1, 2].map((x) =>
          [0, 1, 2].map((y) =>
            [0, 1, 2].map((z) => (
              <mesh
                key={`${x}-${y}-${z}`}
                position={[(x - 1) * 0.35, (y - 1) * 0.35, (z - 1) * 0.35]}
              >
                <boxGeometry args={[0.25, 0.25, 0.25]} />
                <meshStandardMaterial
                  color="#ffaa00"
                  metalness={0.9}
                  roughness={0.1}
                  emissive="#ffaa00"
                  emissiveIntensity={0.3}
                  wireframe
                />
              </mesh>
            ))
          )
        )}
      </group>
    </Float>
  );
}

// Central Glass Crystal
function CentralCrystal() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main glass octahedron */}
      <mesh position={[0, 0, 0]} castShadow>
        <octahedronGeometry args={[1.5, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          transmission={0.95}
          roughness={0.05}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.6}
          anisotropy={0.5}
          distortion={0.3}
          distortionScale={0.4}
          temporalDistortion={0.2}
          color="#00d9ff"
        />
      </mesh>

      {/* Inner core */}
      <mesh>
        <dodecahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#61dafb"
          metalness={1}
          roughness={0}
          emissive="#61dafb"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Orbiting particles */}
      {Array.from({ length: 3 }).map((_, i) => {
        const angle = (i / 3) * Math.PI * 2;
        const radius = 1.8;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 0.5) * 0.5,
              Math.sin(angle) * radius
            ]}
          >
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial
              color="#00d9ff"
              metalness={1}
              roughness={0}
              emissive="#00d9ff"
              emissiveIntensity={1}
            />
          </mesh>
        );
      })}

      {/* Outer wireframe shell */}
      <mesh scale={2}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#00d9ff" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

// Enhanced Particles with colors
function EnhancedParticles() {
  const particlesRef = useRef<Points>(null);
  const count = 2000;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    // Positions
    positions[i * 3] = (Math.random() - 0.5) * 35;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 35;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 35;
    
    // Colors - mix of cyan, purple, and teal
    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      colors[i * 3] = 0;
      colors[i * 3 + 1] = 0.85;
      colors[i * 3 + 2] = 1;
    } else if (colorChoice < 0.66) {
      colors[i * 3] = 0.66;
      colors[i * 3 + 1] = 0.33;
      colors[i * 3 + 2] = 0.97;
    } else {
      colors[i * 3] = 0;
      colors[i * 3 + 1] = 1;
      colors[i * 3 + 2] = 0.53;
    }
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.04} 
        vertexColors
        transparent 
        opacity={0.7}
        sizeAttenuation
        blending={AdditiveBlending}
      />
    </points>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0">
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#000000']} />
        
        {/* Sophisticated Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#00d9ff" />
        <pointLight position={[-5, -5, -5]} intensity={1.2} color="#a855f7" />
        <pointLight position={[0, 8, -5]} intensity={1} color="#00ff88" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.6}
          penumbra={1}
          intensity={1.5}
          color="#ffffff"
        />
        
        {/* Central piece */}
        <CentralCrystal />
        
        {/* Surrounding elegant elements */}
        <HolographicCard position={[-3.5, 0, -1]} rotation={[0, 0.3, 0]} />
        <HolographicCard position={[3.5, 0, -1]} rotation={[0, -0.3, 0]} />
        
        <WireframeSphere position={[0, 3.5, -2]} scale={0.8} />
        <WireframeSphere position={[0, -3.5, -2]} scale={0.7} />
        
        <GlowingRing position={[-3, 2.5, 0]} rotation={[Math.PI / 4, 0, 0]} color="#00d9ff" />
        <GlowingRing position={[3, -2.5, 0]} rotation={[-Math.PI / 4, 0, 0]} color="#a855f7" />
        
        <CodeSymbol position={[2.5, 2, 1]} />
        <HelixStructure position={[-2.8, -1.5, 1]} />
        <CubeArray position={[2.8, -2, -1]} />
        
        <EnhancedParticles />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
}
