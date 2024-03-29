/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Stool(props) {
  const { nodes, materials } = useGLTF("/stool0.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Material.001"]}
        position={[-0.038, 0.931, -0.219]}
        rotation={[0.175, -0.04, -0.12]}
        scale={0.039}
      />
    </group>
  );
}

useGLTF.preload("/stool0.glb");
