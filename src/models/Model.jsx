
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
	const { nodes, materials } = useGLTF("/brownstool123.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Sphere.geometry}
				material={materials["Material.002"]}
				position={[-0.668, 1.639, 0.705]}
				rotation={[0, -0.186, 0]}
				scale={0.157}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane.geometry}
				material={materials["Material.003"]}
				position={[-0.748, 1.287, 1.015]}
				rotation={[Math.PI / 2, 0, -1.385]}
				scale={-0.043}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder001.geometry}
				material={nodes.Cylinder001.material}
				position={[-0.729, 1.154, 1.027]}
				rotation={[0, -0.186, 0]}
				scale={[-0.056, -0.092, -0.056]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder002.geometry}
				material={nodes.Cylinder002.material}
				position={[-0.724, 1.019, 1.023]}
				rotation={[0, -0.186, 0]}
				scale={-0.037}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder003.geometry}
				material={nodes.Cylinder003.material}
				position={[-0.727, -1.616, 1.016]}
				rotation={[0, -0.186, 0]}
				scale={[0.07, 0.07, 0.108]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder004.geometry}
				material={nodes.Cylinder004.material}
				position={[-0.726, -1.723, 1.012]}
				rotation={[0, -0.186, 0]}
				scale={[0.393, 0.04, 0.41]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder005.geometry}
				material={materials["Material.001"]}
				position={[0.956, -0.929, -1.35]}
				rotation={[0.175, -0.04, -0.12]}
				scale={0.039}
			/>
		</group>
	);
}

useGLTF.preload("/brownstool123.glb");



