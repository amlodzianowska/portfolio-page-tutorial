"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Staff(props) {
  const { nodes, materials } = useGLTF('/models/staff.glb')
  const modelRef = useRef();
  useFrame((state, delta, xFrame) => {
    modelRef.current.rotation.y += 0.006;
  });

  return (
    <group {...props} dispose={null}
    ref = {modelRef}
    position={[0.15, -1.5, 1]}
    scale={[2.3, 2.3, 2.3]}>
      <mesh geometry={nodes.Wizard_Staff3_Wizard_Staff3_0.geometry} material={materials.Wizard_Staff3} position={[-0.041, 0.983, 0.768]} rotation={[0, Math.PI / 2, 0]} scale={0.04} />
      <mesh geometry={nodes.Wizard_Staff2_Wizard_Staff2_0.geometry} material={materials.Wizard_Staff2} position={[-0.041, 0.983, 0.768]} rotation={[0, Math.PI / 2, 0]} scale={0.04} />
    </group>
  )
}

useGLTF.preload('/models/staff.glb')
