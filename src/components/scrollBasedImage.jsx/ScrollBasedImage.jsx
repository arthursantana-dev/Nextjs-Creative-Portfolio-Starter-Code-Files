"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function ScrollBasedImage(props) {

    const images = props.images

    const [imageSrc, setImageSrc] = useState(0)

    function doOnScroll(){
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        const currentPosition = window.scrollY;

        const scrollPercentage = (currentPosition / (fullHeight - windowHeight)) * 100;

        const i = Math.min(Math.floor(scrollPercentage / 100 * images.length), images.length - 1);
        console.log(i);
        
        setImageSrc(i)
    }

    useEffect(() => {
        (() => {
            window.addEventListener("scroll", doOnScroll)
        })()

        return () => {
            window.removeEventListener("scroll", doOnScroll)
        }
        

    })

    return (
        <>
            <Image className="m-auto transition-opacity duration-300 ease-in-out" src={images[imageSrc]} width={3000} height={3000}/>

        </>
    )
}