import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
  {/* Primary: Strong teal monitor bloom — the hero light */}
  <spotLight
    position={[1.5, 3, 2]}
    angle={0.4}
    intensity={80}
    penumbra={0.8}
    color="#00e5c8"
    target-position={[0, 0, 0]}
  />

  {/* Secondary: Cold blue-steel fill from upper left */}
  <spotLight
    position={[-3, 6, 4]}
    angle={0.5}
    intensity={25}
    penumbra={1.0}
    color="#0d4a8a"
  />

  {/* Subtle teal underglow — RGB strip under desk */}
  <pointLight position={[1, 0.2, 1]} intensity={15} color="#00e5c8" />

  {/* Deep ambient — cold dark room feel */}
  <pointLight position={[0, 4, 0]} intensity={8} color="#001a33" />

  {/* Accent: faint violet only on chair/pillows — echoes Zion's secondary palette */}
  <spotLight
    position={[-1, 2, 3]}
    angle={0.3}
    intensity={12}
    penumbra={1.0}
    color="#6030cc"
  />

  {/* RectAreaLight replacing magenta — teal screen simulation */}
  <primitive
    object={new THREE.RectAreaLight("#00e5c8", 6, 3, 2)}
    position={[1, 3, 4]}
    rotation={[-Math.PI / 4, Math.PI / 4, 0]}
  />
</>
  )
}

export default HeroLights
