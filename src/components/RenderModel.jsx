"use client"
import React, { Suspense } from 'react'
import clsx from 'clsx'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

const RenderModel = ({children, className}) => {
  return (
    <Canvas className={clsx("h-screen -z-10 relative", className)}>
        <Suspense fallback={null}>
            {children}
        </Suspense>
        <Environment preset='forest'/>
    </Canvas>
  )
}

export default RenderModel