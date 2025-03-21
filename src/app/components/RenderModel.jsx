"use client"

import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import clsx from "clsx"
import { Suspense } from "react"

export default function RenderModel({children}){
    return (
        <Canvas 
        // style={{backgroundColor: "#DDDDDD"}}
        >
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Environment preset="apartment" background/>
        </Canvas>
    )
} 