import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { useEffect, useState } from "react";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [key, setKey] = useState(0);

  // Force re-render on resize to fix 3D model stopping
  useEffect(() => {
    const handleResize = () => {
      setKey(prev => prev + 1);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cameraPosition = isMobile ? [0, 0, 20] : isTablet ? [0, 0, 17] : [0, 0, 15];
  const cameraFov      = isMobile ? 55 : isTablet ? 50 : 45;
  const roomScale      = isMobile ? 0.55 : isTablet ? 0.8 : 1;
  const roomPosition   = isMobile ? [0, -2.5, 0] : isTablet ? [0, -3, 0] : [0, -3.5, 0];
  const roomRotation   = isMobile
    ? [0, -Math.PI / 6, 0]
    : isTablet
    ? [0, -Math.PI / 5, 0]
    : [0, -Math.PI / 4, 0];
  const particleCount  = isMobile ? 100 : isTablet ? 200 : 300;

  return (
    <Canvas
      key={key}
      gl={{ alpha: true }}
      camera={{ position: cameraPosition, fov: cameraFov }}
      style={{
        width: "100%",
        height: "100%",
        minHeight: isMobile ? "300px" : "400px", // ← never collapses to 0
        display: "flex"
      }}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={isTablet || isMobile}
        maxDistance={isMobile ? 25 : isTablet ? 22 : 20}
        minDistance={isMobile ? 8 : isTablet ? 6 : 5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={isMobile ? -Math.PI / 4 : -Infinity}
        maxAzimuthAngle={isMobile ? Math.PI / 4 : Infinity}
      />
      <HeroLights />
      <Particles count={particleCount} />
      <group
        scale={roomScale}
        position={roomPosition}
        rotation={roomRotation}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;