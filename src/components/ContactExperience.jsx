import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Computer } from "./Models/Computer-optimized";



const ContactExperience = () => {
  return (
      <Canvas camera={{ position: [0, 3, 7], fov: 50 }} shadows>
        <spotLight position={[1.5, 3, 2]} angle={0.4} intensity={120} penumbra={0.8} color="#00e5c8" target-position={[0, 0, 0]} />
        <spotLight position={[-3, 6, 4]} angle={0.5} intensity={40} penumbra={1.0} color="#0d4a8a" />
        <pointLight position={[1, 0.2, 1]} intensity={25} color="#00e5c8" />
        <pointLight position={[0, 4, 0]} intensity={15} color="#003366" />
        <spotLight position={[-1, 2, 3]} angle={0.3} intensity={20} penumbra={1.0} color="#6030cc" />
        <ambientLight intensity={0.8} color="#1a4a6a" />
        <directionalLight position={[5, 10, 5]} intensity={0.8} color="#ffffff" castShadow />

        {/* Room floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#0a1520" />
        </mesh>

        {/* Back wall */}
        <mesh position={[0, 3, -5]} receiveShadow>
          <planeGeometry args={[20, 10]} />
          <meshStandardMaterial color="#060e1a" />
        </mesh>

        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2}/>
        <group scale={0.03} position={[0,-1.5,-2]} castShadow>
          <Computer/>
        </group>
        <group scale={[1,1,1]}>
          <mesh receiveShadow position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0 , 0]}>
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#060e1a" />
          </mesh>

        </group>
      </Canvas>
  );
};

export default ContactExperience;