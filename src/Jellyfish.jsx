import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Jellyfish() {
  const { scene, animations, meshes } = useGLTF("./models/jellyfish.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    actions.KeyAction.play();
  });

  return (
    <>
      // Creating a new mesh using some parts of the imported one so we can add
      a material with Three, rather than one made in Blender.
      <mesh
        geometry={meshes.Jellyfish.geometry}
        morphTargetDictionary={meshes.Jellyfish.morphTargetDictionary}
        morphTargetInfluences={meshes.Jellyfish.morphTargetInfluences}>
        <meshBasicMaterial color={new THREE.Color("cyan")} />
      </mesh>
    </>
  );
}
