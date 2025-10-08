'use client';

import ParallaxImage from "@/components/ParallaxImage";
import Typography from "@/components/Typography";
import { MEDIA } from "@/lib/gsap-constants";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

export default function StatementBlock() {
    const isDesktop = useMediaQuery(MEDIA.desktop);

    if (!isDesktop) return null;

    return (
        <div className="relative">
            <ParallaxImage
                src="/mockup-4.jpg"
                alt="Mockup image"
                className="w-[100svw] aspect-[1920/2000]"
            />

            <div className="absolute bottom-12 left-12">
                <Typography variant="hero" className="text-white mix-blend-difference">
                    We believe architecture should move beyond structure — to inspire calm, connection, and belonging. Each Forma space is designed to breathe with its surroundings and endure with meaning.
                </Typography>
            </div>
        </div>
    )
}