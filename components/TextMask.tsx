'use client';

import { useRef } from "react";
import { gsap, useGSAP, SplitText, ScrollTrigger } from "@/lib/gsap-plugins";
import Typography, { TypographyVariant } from "./Typography";

interface TextMaskProps {
    variant?: TypographyVariant;
    children: string;
}

export default function TextMask({ variant = 'body', children }: Readonly<TextMaskProps>) {
    const hasPlayed = useRef(false);
    const tweenRef = useRef<gsap.core.Tween>(null);
    const maskWrapper = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        SplitText.create(maskWrapper.current, {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            onSplit: (self) => {
                const tween = gsap.from(self.lines, {
                    paused: true,
                    yPercent: 120,
                    opacity: 0,
                    ease: 'power3.out',
                    duration: 1,
                    stagger: { each: 0.1 },
                });

                ScrollTrigger.create({
                    trigger: maskWrapper.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    onUpdate: (scrollSelf) => {
                        if (!tweenRef.current) return;
                        const progress = scrollSelf.progress;
                        if (progress >= 0.2 && !hasPlayed.current) {
                            hasPlayed.current = true;
                            tweenRef.current.play();
                        } else if (progress <= 0 && hasPlayed.current) {
                            hasPlayed.current = false;
                            tweenRef.current.pause(0);
                        }
                    },
                })

                tweenRef.current = tween;
                return tween;
            },
        });

    }, { scope: maskWrapper })

    return (
        <div ref={maskWrapper}>
            <Typography variant={variant}>
                {children}
            </Typography>
        </div>
    )
}