import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, Center } from "@react-three/drei";

function Experience() {
  const knotRef = useRef();

  useFrame((state, delta) => {
    knotRef.current.rotation.x += delta;
  });

  return (
    <>
      <OrbitControls />

      <Center>
        <mesh ref={knotRef}>
          <torusKnotGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
      </Center>
    </>
  );
}

export default Experience;
