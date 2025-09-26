'use client';

import { ScrollSmoother, useGSAP } from "@/lib/gsap-plugins";

export default function ScrollSmootherWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
    useGSAP(() => {
        ScrollSmoother.create({
            wrapper: '#smoother-wrapper',
            content: '#smoother-content',
            smooth: 1.5,
            effects: true,
            normalizeScroll: true,
            smoothTouch: 0.1,
        })
    }, [])

    return (
        <div id="smoother-wrapper">
            <div id="smoother-content">
                {children}
            </div>
        </div>
    )
}