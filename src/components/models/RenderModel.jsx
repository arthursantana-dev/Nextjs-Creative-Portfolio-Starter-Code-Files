"use client"

import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import clsx from "clsx"
import { Suspense } from "react"

export default function RenderModel({ children }) {
    return (
        <Canvas>
            <Suspense fallback={null}>
                {children}
            </Suspense>
        </Canvas>
    )
} 