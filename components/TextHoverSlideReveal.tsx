'use client';

import { ReactNode, useCallback, useRef, useState } from "react";
import Typography, { TypographyVariant } from "./Typography";
import clsx from "clsx";
import { useGSAP, gsap } from "@/lib/gsap-plugins";

interface TextHoverSlideRevealProps {
    variant: TypographyVariant;
    className?: string;
    children: ReactNode;
    onChange?: (state: boolean) => void;
}

export default function TextHoverSlideReveal({ variant, className, onChange, children }: Readonly<TextHoverSlideRevealProps>) {
    const [isHovered, setIsHovered] = useState(false);

    const text1 = useRef<HTMLElement>(null);
    const text2 = useRef<HTMLElement>(null);

    const tl = useRef<gsap.core.Timeline>(null);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
        onChange?.(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        onChange?.(false);
    }, [])

    useGSAP(() => {
        gsap.set(text2.current, {
            yPercent: 120,
        })

        tl.current = gsap.timeline({ paused: true, defaults: { duration: 0.3, ease: 'power1.inOut' } })
            .fromTo(text1.current,
                { yPercent: 0 },
                { yPercent: -120, },
                0
            )
            .fromTo(text2.current,
                { yPercent: 120 },
                { yPercent: 0, },
                0
            );
    }, [])

    useGSAP(() => {
        if (!tl.current) return;

        if (isHovered) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isHovered])

    return (
        <button
            className="relative overflow-hidden cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Typography variant={variant} ref={text1} className={className}>
                {children}
            </Typography>

            <Typography variant={variant} ref={text2} className={clsx("absolute inset-0", className)}>
                {children}
            </Typography>
        </button>
    )
}