'use client';

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-plugins";
import clsx from "clsx";

interface ParallaxImageProps {
    src: string;
    alt: string;
    className: string;
}

export default function ParallaxImage({ src, alt, className }: Readonly<ParallaxImageProps>) {
    const imageWrapper = useRef<HTMLDivElement>(null);
    const image = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        gsap.to(image.current, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: imageWrapper.current,
                start: 'top 110%',
                end: 'bottom top',
                scrub: true,
            }
        })
    }, { scope: imageWrapper })

    return (
        <div ref={imageWrapper} className={clsx('relative overflow-hidden', className)}>
            <Image
                ref={image}
                src={src}
                alt={alt}
                fill
                className="object-cover scale-125"
            />
        </div>
    )
}