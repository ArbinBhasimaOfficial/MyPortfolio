
import { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
  const matcapTexture = useTexture("/images/textures/mat1.png");

  const curtainMaterial = new THREE.MeshPhongMaterial({
    color: "#060E1A",
  });

  const bodyMaterial = new THREE.MeshPhongMaterial({
    map: matcapTexture,
  });

  const tableMaterial = new THREE.MeshPhongMaterial({
    color: "#0D1A2E",
  });

  const radiatorMaterial = new THREE.MeshPhongMaterial({
    color: "#1A3555",
  });

  const compMaterial = new THREE.MeshStandardMaterial({
    color: "#0D2535",
  });

  const pillowMaterial = new THREE.MeshPhongMaterial({
    color: "#00e5c8",
  });

  const chairMaterial = new THREE.MeshPhongMaterial({
    color: "#060E1A",
  });
  // --- Vacuum Robot ---
const vacuumBodyMaterial = new THREE.MeshStandardMaterial({ color: "#1a1a2e" }) // dark plastic
const vacuumGreyMaterial = new THREE.MeshStandardMaterial({ color: "#2a2a3e" }) // grey panels
const vacuumRedMaterial = new THREE.MeshStandardMaterial({ color: "#8b0000" })  // red accents (kept muted)
const vacuumBlackMaterial = new THREE.MeshStandardMaterial({ color: "#0d0d1a" }) // black trim

// --- Desk Items ---
const stylusMaterial = new THREE.MeshStandardMaterial({ color: "#00e5c8", metalness: 0.6, roughness: 0.2 }) // teal stylus
const tabletMaterial = new THREE.MeshStandardMaterial({ color: "#0d1520", metalness: 0.3, roughness: 0.5 }) // dark tablet body
const triangleMaterial = new THREE.MeshStandardMaterial({ color: "#1a3555", metalness: 0.5, roughness: 0.3 }) // steel blue tool

// --- Room Structure ---
const railingMaterial = new THREE.MeshStandardMaterial({ color: "#0d1a2e", metalness: 0.7, roughness: 0.3 }) // dark metal railing
const windowMaterial = new THREE.MeshPhysicalMaterial({ color: "#0a2a3a", transmission: 0.6, roughness: 0.1, metalness: 0 }) // dark teal glass
const windowFrameMaterial = new THREE.MeshStandardMaterial({ color: "#0d1520", metalness: 0.2, roughness: 0.6 }) // dark frame

// --- Cables & Wires ---
const wiresMaterial = new THREE.MeshStandardMaterial({ color: "#00e5c8", metalness: 0.1, roughness: 0.8 }) // teal cables

// --- Radiator ---
const radiatorSecondMaterial = new THREE.MeshStandardMaterial({ color: "#1a2a3a", metalness: 0.4, roughness: 0.5 }) // dark steel

// --- Buttons ---
const redButtonsMaterial = new THREE.MeshStandardMaterial({ color: "#00e5c8", emissive: "#00e5c8", emissiveIntensity: 0.5 }) // repurposed as teal glowing buttons

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={2.5} // Strength of the bloom
          luminanceThreshold={0.1} // Minimum luminance needed
          luminanceSmoothing={0.9} // Smooth transition
          blendFunction={BlendFunction.ADD} // How it blends
        />
      </EffectComposer>
      <mesh
        geometry={nodes._________6_blinn1_0.geometry}
        material={curtainMaterial}
      />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
      <mesh
        geometry={nodes.chair_body_blinn1_0.geometry}
        material={chairMaterial}
      />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        geometry={nodes.handls_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.keyboard_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.kovrik_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_bl_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_white_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.miuse_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor2_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor3_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pCylinder5_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pillows_blinn1_0.geometry}
        material={pillowMaterial}
      />
      <mesh
        geometry={nodes.polySurface53_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0.geometry}
        material={radiatorMaterial}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0001.geometry}
        material={radiatorSecondMaterial}
      />
      <mesh
        geometry={nodes.railing_blinn1_0.geometry}
        material={railingMaterial}
      />
      <mesh
        geometry={nodes.red_bttns_blinn1_0.geometry}
        material={redButtonsMaterial}
      />
      <mesh
        geometry={nodes.red_vac_blinn1_0.geometry}
        material={vacuumRedMaterial}
      />
      <mesh
        geometry={nodes.stylus_blinn1_0.geometry}
        material={stylusMaterial}
      />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
      <mesh
        geometry={nodes.tablet_blinn1_0.geometry}
        material={tabletMaterial}
      />
      <mesh
        geometry={nodes.triangle_blinn1_0.geometry}
        material={triangleMaterial}
      />
      <mesh
        geometry={nodes.vac_black_blinn1_0.geometry}
        material={vacuumBlackMaterial}
      />
      <mesh
        geometry={nodes.vacuum1_blinn1_0.geometry}
        material={vacuumBodyMaterial}
      />
      <mesh
        geometry={nodes.vacuumgrey_blinn1_0.geometry}
        material={vacuumGreyMaterial}
      />
      <mesh
        geometry={nodes.vires_blinn1_0.geometry}
        material={wiresMaterial}
      />
      <mesh
        geometry={nodes.window_blinn1_0.geometry}
        material={windowMaterial}
      />
      <mesh
        geometry={nodes.window4_phong1_0.geometry}
        material={windowFrameMaterial}
      />
    </group>
  );
}