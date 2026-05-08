import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
const TechIcon = ({model}) => {
    const scene = useGLTF(model.modelPath);

    useEffect(() => {
        if(model.name === "Interactive Developer") {
            scene.scene.traverse((child) => {
                if(child.isMesh && child.name === 'Object_5'){
                    child.material = new THREE.MeshStandardMaterial({ color: 'cyan' })
                    child.material.needsUpdate = true
                }
            })
        }

        if(model.name === "Golang Developer") {
            scene.scene.traverse((child) => {
                if(child.isMesh){
                    const material = child.material?.clone?.() ?? new THREE.MeshStandardMaterial()
                    material.color = new THREE.Color('cyan')
                    material.needsUpdate = true
                    child.material = material
                }
            })
        }
        if(model.name === "FastApi API Design") {
            scene.scene.traverse((child) => {
                if(child.isMesh){
                    const material = child.material?.clone?.() ?? new THREE.MeshStandardMaterial()
                    material.color = new THREE.Color('cyan')
                    material.needsUpdate = true
                    child.material = material
                }
            })
        }
    }, [scene, model.name]);

    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
            <Float
                speed={0.5} rotationIntensity={0.5} floatIntensity={0.9}
            >
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene} />
                </group>
            </Float>
        </Canvas>
    )
}

export default TechIcon