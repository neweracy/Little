/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    model: THREE.Mesh
  }
  materials: {
    place_holder: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/base_basic_shaded.glb') as GLTFResult
  const animated = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (animated.current) {
      animated.current.rotation.y += 0.01 // Rotate the model every frame
    }
  })
  return (
    <group ref={animated} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model.geometry}
        material={materials.place_holder}
      />
    </group>
  )
}

useGLTF.preload('/base_basic_shaded.glb')
