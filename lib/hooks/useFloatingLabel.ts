'use client';

import { useRef } from "react";
import { gsap, useGSAP } from "../gsap-plugins";

export default function useFloatingLabel(isFocused: boolean, isEmpty: boolean) {
    const labelRef = useRef<HTMLLabelElement>(null);

    useGSAP(() => {
        console.log(isEmpty);
        const isActive = isFocused || !isEmpty;

        gsap.to(labelRef.current, {
            y: isActive ? -20 : 0,
            x: isActive ? -5 : 0,
            scale: isActive ? 0.9 : 1,
        })
    }, [isFocused])

    return labelRef;
}