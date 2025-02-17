"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/hat.glb');
  const modelRef = useRef();
  useFrame((state, delta, xFrame) => {
    modelRef.current.position.y = -1.5 + (Math.sin(state.clock.elapsedTime))/8;
  });

  return (
    <group {...props} 
    dispose={null} 
    ref={modelRef}
    position={[0.5, -1.5, -2]}
    scale={[1, 1, 1]}
    rotation={[0.5, 0, 0]}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.initialShadingGroup} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/hat.glb')
