'use client';

import Typography from "@/components/Typography";
import { ProjectInterface } from "@/lib/data/projects";
import Image from "next/image";
import { useCallback, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-plugins";
import Link from "next/link";
import Button from "@/components/Button";
import TextHoverSlideReveal from "@/components/TextHoverSlideReveal";

interface ProjectProps {
    project: ProjectInterface;
    nextProject: ProjectInterface;
}

export default function Project({ project, nextProject }: Readonly<ProjectProps>) {
    const container = useRef<HTMLDivElement>(null);

    const slider = useRef<HTMLUListElement>(null);
    const galleryWrapper = useRef<HTMLDivElement>(null);
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
        if (!slider.current || !container.current) return;

        const containerStyles = getComputedStyle(container.current);
        const paddingX = parseFloat(containerStyles.paddingLeft) + parseFloat(containerStyles.paddingRight);

        const scrollWidth = slider.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = scrollWidth - (viewportWidth - paddingX);

        gsap.to(slider.current, {
            x: -scrollDistance,
            ease: 'none',
            scrollTrigger: {
                trigger: container.current,
                start: 'bottom bottom',
                end: () => `+=${scrollDistance}`,
                pin: true,
                scrub: 1,
                onUpdate: (self) => {
                    if (!skewSetters.current) return;
                    const velocity = self.getVelocity() / -300;
                    const skewAmount = gsap.utils.clamp(-50, 50, velocity);
                    skewSetters.current.forEach((setSkew) => setSkew(skewAmount));
                },
                onScrubComplete: (self) => {
                    skewSetters.current?.forEach((setSkew) => setSkew(0))
                },
                invalidateOnRefresh: true,
            },
        })
    }, { scope: container, dependencies: [container] })

    return (
        <div ref={container} className="flex flex-col justify-between relative h-[calc(100svh-3rem)] overflow-hidden py-4 lg:py-12 px-6">
            <div className="">
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

                <div className="pt-12 md:pt-8 lg:pt-12 max-w-prose">
                    <Typography variant={"body"}>
                        {project.description}
                    </Typography>
                </div>
            </div>

            <div>
                <div className="pb-4 lg:pb-12">
                    <div className="w-full flex items-center justify-between lg:justify-end">
                        <Link href={'/projects'} className="whitespace-nowrap">
                            <TextHoverSlideReveal variant={"body"}>
                                Back to projects
                            </TextHoverSlideReveal>
                        </Link>

                        <Link href={`/projects/${nextProject.slug}`} className="lg:ml-12 lg:mr-24">
                            <Button kind="link">
                                {nextProject.name}
                            </Button>
                        </Link>
                    </div>
                </div>
                <div
                    ref={galleryWrapper}
                    className="w-full overflow-hidden"
                >
                    <ul ref={slider} className="flex gap-4 ">
                        {project.gallery.map((image, index) => (
                            <div
                                key={`${image}-${index}`}
                                ref={(element) => setRef(element, index)}
                                className="w-full aspect-[350/250] sm:aspect-[500/200] lg:w-[30vw] lg:aspect-[550/300] shrink-0 relative"
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
            </div>
        </div>
    )
}
