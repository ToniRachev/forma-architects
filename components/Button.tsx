'use client';

import { ReactNode, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap-plugins";
import Typography from "./Typography";
import { ArrowLeft } from "lucide-react";

interface ButtonInterface {
    children: ReactNode;
}

export default function Button({ children }: Readonly<ButtonInterface>) {
    const [isHovered, setIsHovered] = useState(false);

    const button = useRef<HTMLButtonElement>(null);
    const icon = useRef<SVGSVGElement>(null);

    useGSAP(() => {
        gsap.timeline()
            .to(button.current, {
                width: isHovered ? '130%' : '100%',
                duration: 0.3,
            })
            .to(icon.current, {
                scale: isHovered ? 1 : 0,
                rotate: isHovered ? 120 : 0,
                duration: 0.2,
            }, isHovered ? '-=0.15' : '-=0.3')
    }, { dependencies: [isHovered] })

    return (
        <div>
            <button
                ref={button}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-black text-white w-full h-full min-h-[44px] min-w-[44px] px-6 cursor-pointer  ease-in-out flex items-center gap-2 rounded-3xl relative whitespace-nowrap"
            >
                <Typography variant={"body"}>
                    {children}
                </Typography>

                <ArrowLeft ref={icon} className="absolute top-1/2 -translate-y-1/2 right-8 w-6 bg-white text-black rounded-full scale-0" />
            </button>
        </div>
    )
}