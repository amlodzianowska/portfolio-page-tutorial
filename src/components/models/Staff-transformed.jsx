/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 staff-transformed.glb --transform 
Files: staff-transformed.glb [1.58MB] > /Users/an/Documents/Projects/freeCodeCamp/portfolio-page-tutorial/public/models/staff-transformed-transformed.glb [1.59MB] (-1%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/staff-transformed-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Wizard_Staff3_Wizard_Staff3_0.geometry} material={materials.Wizard_Staff3} position={[-0.041, 0.983, 0.768]} rotation={[0, Math.PI / 2, 0]} scale={0.04} />
      <mesh geometry={nodes.Wizard_Staff2_Wizard_Staff2_0.geometry} material={materials.Wizard_Staff2} position={[-0.041, 0.983, 0.768]} rotation={[0, Math.PI / 2, 0]} scale={0.04} />
    </group>
  )
}

useGLTF.preload('/staff-transformed-transformed.glb')
