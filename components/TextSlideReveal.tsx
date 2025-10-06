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
    active?: boolean;
    duration?: number;
}

export default function TextSlideReveal({ variant, className, onChange, active, duration = 0.3, children }: Readonly<TextHoverSlideRevealProps>) {
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
        const timeline = gsap.timeline({ paused: true, defaults: { duration: duration, ease: 'power1.inOut' }, repeat: active ? -1 : 0 })

        timeline.fromTo(text1.current,
            { yPercent: 0 },
            { yPercent: -120, },
            0
        )
            .fromTo(text2.current,
                { yPercent: 120 },
                { yPercent: 0, },
                0
            );

        tl.current = timeline;

    }, [])

    useGSAP(() => {
        if (!tl.current) return;

        const shouldPlay = active || isHovered;

        if (shouldPlay) {
            tl.current.play();

        } else {
            tl.current.reverse();
        }
    }, [isHovered])

    return (
        <button
            className={clsx('relative overflow-hidden', !active && 'cursor-pointer')}
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