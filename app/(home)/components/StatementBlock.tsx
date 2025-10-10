'use client';

import ParallaxImage from "@/components/ParallaxImage";
import { MEDIA } from "@/lib/gsap-constants";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

export default function StatementBlock() {
    const isDesktop = useMediaQuery(MEDIA.desktop);

    if (!isDesktop) return null;

    return (
        <div className="relative">
            <ParallaxImage
                src="/home/building.webp"
                alt="Mockup image"
                className="w-[100svw] aspect-[1920/2000]"
            />
        </div>
    )
}