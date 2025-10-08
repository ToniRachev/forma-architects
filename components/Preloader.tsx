'use client';

import { gsap, useGSAP } from "@/lib/gsap-plugins";
import { useCallback, useEffect, useRef } from "react";
import Typography from "./Typography";
import TextSlideReveal from "./TextSlideReveal";
import { usePreloader } from "@/lib/context/PreloaderContext";

const shapes = [
    'M437.3 158.3A99.5 99.5 0 0 0 321.6 42.8a99.5 99.5 0 0 0-163.4 0A99.5 99.5 0 0 0 42.7 158.3a99.5 99.5 0 0 0 0 163.4 99.5 99.5 0 0 0 115.6 115.6 99.5 99.5 0 0 0 163.4 0 99.5 99.5 0 0 0 115.5-115.6 99.5 99.5 0 0 0 0-163.4Z',
    'M398.7 240A239.4 239.4 0 0 0 480 60V0h-60c-71.7 0-136 31.4-180 81.3A239.4 239.4 0 0 0 60 0H0v60c0 71.7 31.4 136 81.3 180A239.4 239.4 0 0 0 0 420v60h60c71.7 0 136-31.4 180-81.3A239.4 239.4 0 0 0 420 480h60v-60c0-71.7-31.4-136-81.3-180Z',
    'M480 240a160 160 0 0 0-240-138.6V0a160 160 0 0 0-138.6 240H0a160 160 0 0 0 240 138.6V480a160 160 0 0 0 138.6-240H480Z',
]

export default function Preloader() {
    const { finishPreloader } = usePreloader();

    const progress = useRef<HTMLHeadingElement>(null);
    const preloader = useRef<HTMLDivElement>(null);
    const shapesRefs = useRef<SVGPathElement[]>([]);

    const setRef = useCallback((element: SVGPathElement | null, index: number) => {
        if (element) {
            shapesRefs.current[index] = element;
        }
    }, [])

    useGSAP(() => {
        const morphShape = shapesRefs.current[0];

        const preloaderTl = gsap.timeline(
            {
                defaults: { duration: 0.5, ease: 'expo.out' },
                onComplete: () => {
                    if (preloader.current) {
                        preloader.current.remove();
                    }
                }
            });
        const morphTl = gsap.timeline({ yoyo: true, repeat: -1, defaults: { duration: 1 } });

        shapesRefs.current.slice(1).forEach((shape) => {
            morphTl.to(morphShape, {
                morphSVG: {
                    shape: shape,
                }
            })
        })

        const object = { value: 0 };

        preloaderTl.to(object, {
            value: 100,
            duration: 3,
            ease: 'sine',
            onUpdate: () => {
                if (progress.current) {
                    progress.current.textContent = String(Math.floor(object.value))
                }
            }
        })

        preloaderTl.to(preloader.current, {
            autoAlpha: 0,
            duration: 0.8,
        }, '>+=0.5')

        preloaderTl.call(() => {
            finishPreloader();
        }, [], '>-0.8')
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div ref={preloader} className="w-full h-[100svh] fixed bg-black z-[9999999999] flex justify-center items-center origin-top">
            <svg xmlns="http://www.w3.org/2000/svg" width={250} height={500} viewBox="0 0 480 480">
                {shapes.map((shape, index) => (
                    <path ref={(el) => setRef(el, index)} key={index} d={shape} fill="#EEE" style={{ visibility: index > 0 ? 'hidden' : 'visible' }} />
                ))}
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <Typography ref={progress} variant={"body"} className="progress-indicator">
                    0
                </Typography>
            </div>

            <div className="absolute bottom-12 right-12">
                <TextSlideReveal variant="bodyLarge" className="text-white" active duration={1}>
                    Loading assets...
                </TextSlideReveal>
            </div>
        </div >
    )
}