'use client';

import { useEffect, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-plugins";
import { usePreloader } from "../context/PreloaderContext";

interface PageEntryAnimationProps {
    onSetup: (tl: gsap.core.Timeline) => void;
}

export default function usePageEntryAnimation({ onSetup }: PageEntryAnimationProps) {
    const { isLoading } = usePreloader();
    const tl = useRef<gsap.core.Timeline>(null);

    useGSAP(() => {
        const timeline = gsap.timeline({ paused: true, defaults: { duration: 1.2, ease: 'power3.out' } });
        onSetup(timeline);
        tl.current = timeline;
    }, [])

    useEffect(() => {
        if (!isLoading && tl.current) {
            tl.current.play();
        }
    }, [isLoading])
}