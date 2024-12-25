import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import Model from "../../public/Model.tsx";

function Render() {
  return (
    <Canvas shadows dpr={[5, 5]} className=" absolute  lg:top-28 h-[200dvh] ">
      <ambientLight intensity={2} />
      <spotLight
        position={[1, 6, 1.5]}
        angle={0.2}
        penumbra={1}
        intensity={2.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <spotLight
        position={[-5, 5, -1.5]}
        angle={0.03}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <spotLight
        position={[5, 5, -5]}
        angle={0.3}
        penumbra={1}
        intensity={4}
        castShadow={true}
        shadow-mapSize={[256, 256]}
        color="#ffffc0"
      />
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -0.5, 0]}
        opacity={0.5}
        width={10}
        height={10}
        blur={0.2}
      />
      <pointLight position={[-10, -9, -10]} decay={0} intensity={Math.PI} />
      <Model scale={window.innerWidth > 1024 ? [1.8, 1.8, 1.8] : 1.8} />
    </Canvas>
  );
}

export default Render;
