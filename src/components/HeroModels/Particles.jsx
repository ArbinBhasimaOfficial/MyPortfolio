/* eslint-disable react-hooks/purity */
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COLORS = [
  new THREE.Color("#00e5c8"),
  new THREE.Color("#00b8a0"),
  new THREE.Color("#4466cc"),
  new THREE.Color("#8338ec"),
  new THREE.Color("#0088cc"),
];

const Particles = ({ count = 200 }) => {
  const mesh = useRef();

  const { positions, colors, speeds, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors    = new Float32Array(count * 3);
    const speeds    = new Float32Array(count);
    const sizes     = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = Math.random() * 10 + 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const col = COLORS[Math.floor(Math.random() * COLORS.length)];
      colors[i * 3]     = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      speeds[i] = 0.005 + Math.random() * 0.008;
      sizes[i]  = Math.random() < 0.15 ? 0.12 : 0.035 + Math.random() * 0.04;
    }

    return { positions, colors, speeds, sizes };
  }, [count]); // ← count as dep so it reinits if count changes

  useFrame(({ clock }) => {
    const pos  = mesh.current.geometry.attributes.position.array;
    const cols = mesh.current.geometry.attributes.color.array;
    const t    = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] -= speeds[i];
      pos[i * 3]     += Math.sin(t * 0.5 + i * 0.3) * 0.001;

      if (pos[i * 3 + 1] < -2) {
        pos[i * 3]     = (Math.random() - 0.5) * 10;
        pos[i * 3 + 1] = Math.random() * 10 + 5;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }

      const pulse = 0.6 + 0.4 * Math.sin(t * 2 + i * 0.7);
      const base  = COLORS[i % COLORS.length];
      cols[i * 3]     = base.r * pulse;
      cols[i * 3 + 1] = base.g * pulse;
      cols[i * 3 + 2] = base.b * pulse;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.geometry.attributes.color.needsUpdate    = true;
  });

  return (
    <points ref={mesh}>
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
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.06}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default Particles;