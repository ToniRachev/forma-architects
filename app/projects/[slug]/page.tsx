'use client';

import SectionContainer from "@/components/SectionContainer";
import Typography from "@/components/Typography";
import { projects } from "@/lib/data/projects";
import Image from "next/image";
import { RefObject, useCallback, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-plugins";


const project = projects[0];
const containerHeight = project.gallery.length * 250;

interface GalleryProps {
    gallery: string[];
    container: RefObject<HTMLElement | null>;
}

const Gallery = ({ gallery, container }: Readonly<GalleryProps>) => {
    const slider = useRef<HTMLUListElement>(null);
    const images = useRef<HTMLDivElement[]>([]);
    const skewSetters = useRef<gsap.QuickToFunc[]>(null);

    const setRef = useCallback((element: HTMLDivElement | null, index: number) => {
        if (element) {
            images.current[index] = element;
        }
    }, [])

    useGSAP(() => {
        skewSetters.current = images.current.map((image) => gsap.quickTo(image, 'skewX', { duration: 0.8, ease: 'power3.out' }))
    }, [])

    useGSAP(() => {

        if (!container || !slider.current) return;

        const totalScroll = slider.current.scrollWidth - window.innerWidth;

        gsap.to(slider.current, {
            x: -totalScroll,
            ease: 'none',
            duration: 1,
            scrollTrigger: {
                trigger: container.current,
                start: 'bottom bottom',
                end: `+=${containerHeight}`,
                pin: slider.current,
                scrub: 1,
                onUpdate: (self) => {
                    if (!skewSetters.current) return;
                    const velocity = self.getVelocity() / -300;
                    const skewAmount = gsap.utils.clamp(-8, 8, velocity);
                    skewSetters.current.forEach((setSkew) => setSkew(skewAmount));
                },
            },

        })
    }, [])

    return (
        <div className="w-full h-[calc(100svh-4rem)] items-end overflow-hidden flex flex-nowrap">
            <ul ref={slider} className="flex gap-4 pb-12 ">
                {gallery.map((image, index) => (
                    <div
                        key={`${image}-${index}`}
                        ref={(element) => setRef(element, index)}
                        className="w-[25vw] aspect-[400/200] relative"
                    >
                        <Image
                            src={image}
                            alt="Mockup project image"
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default function Project() {
    const container = useRef<HTMLElement>(null);

    return (
        <SectionContainer ref={container} className="flex flex-col justify-between relative" style={{ height: containerHeight }}>
            <div className="h-[50svh] fixed top-24 left-6">
                <div className="pb-12">
                    <Typography variant={"bodyBoldUpper"}>
                        {project.name}
                    </Typography>
                </div>

                <div className="flex gap-24">
                    <div className="space-y-4">
                        <Typography variant={"bodyLarge"}>
                            Project Details
                        </Typography>

                        <div className="space-y-3">
                            <Typography variant={"body"}>
                                {project.details.location}
                            </Typography>

                            <Typography variant={"body"}>
                                {project.year}
                            </Typography>

                            <Typography variant={"body"}>
                                {project.details.size}
                            </Typography>

                            <Typography variant={"body"}>
                                {project.details.client}
                            </Typography>

                            <Typography variant={"body"}>
                                {project.category}
                            </Typography>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Typography variant={"bodyLarge"}>
                            Credits
                        </Typography>

                        <div className="space-y-3">
                            <Typography variant={"body"}>
                                Lead Architect: {project.credits.leadArchitect}
                            </Typography>

                            <Typography variant={"body"}>
                                Project Architect: {project.credits.projectArchitect}
                            </Typography>

                            <Typography variant={"body"}>
                                Interior Design: {project.credits.interiorDesign}
                            </Typography>

                            <Typography variant={"body"}>
                                Structural Engineer: {project.credits.structuralEngineer}
                            </Typography>

                        </div>
                    </div>
                </div >
            </div>

            <Gallery container={container} gallery={project.gallery} />
        </SectionContainer>
    )
}