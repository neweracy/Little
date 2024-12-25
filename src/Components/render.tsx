import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ContactShadows, ScrollControls } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import Model from '../../public/Model.tsx'

interface BoxProps {
  position?: [number, number, number];
}


function Box(props: BoxProps) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<THREE.Mesh>(null);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
    }
  });

  const { scale } = useSpring<{ scale: number }>({
    scale: active ? 1.5 : 1,
    config: config.wobbly,
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <animated.mesh
      {...props}
      ref={meshRef}
      scale={scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      castShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </animated.mesh>
  );
}



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
      <Model  scale={window.innerWidth > 1024 ? [1.8, 1.8, 1.8] : 1.8} />
     
    </Canvas>
  );
}

export default Render;
