'use client';

import { useRef, useState } from "react";
import PageStartSection from "@/components/PageStartSection";
import PageWrapper from "@/components/PageWrapper";
import SectionContainer from "@/components/SectionContainer";
import Typography from "@/components/Typography";
import { ProjectInterface, projects } from "@/lib/data/projects";
import Image from "next/image";
import { useGSAP, gsap, SplitText } from "@/lib/gsap-plugins";
import clsx from "clsx";
import { MEDIA } from "@/lib/gsap-constants";
import NavLink from "@/components/NavLink";
import usePageEntryAnimation from "@/lib/hooks/usePageEntryAnimation";
import { IMAGE_SLIDE, SPLIT_TEXT_MASK } from "@/lib/gsap-defaults";

interface ProjectsGridProps {
    projects: ProjectInterface[];
    className: string;
}

const Project = ({ project }: Readonly<{ project: ProjectInterface }>) => {
    const [isHovered, setIsHovered] = useState(false);
    const image = useRef<HTMLImageElement>(null);
    const content = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add(MEDIA.desktop, () => {
            gsap.to(image.current, {
                scale: isHovered ? 1.05 : 1,
                y: isHovered ? 10 : 0
            })

            gsap.to(content.current, {
                y: isHovered ? 3 : 0
            })
        })

    }, { dependencies: [isHovered] })

    return (
        <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <NavLink href={`/projects/${project.slug}`}>
                <div className="w-full lg:max-w-[50vw] aspect-[890/515] relative cursor-pointer overflow-hidden">
                    <Image
                        ref={image}
                        src={project.image}
                        alt={`Photo of project ${project.name}`}
                        fill
                        className="object-cover"
                    />
                </div>

                <div ref={content} className="w-full flex px-4 justify-between items-center pt-4 cursor-pointer">
                    <div className="flex gap-4 items-center">
                        <Typography variant={"body"}>
                            {project.name}
                        </Typography>

                        <Typography variant={"label"}>
                            ({project.year})
                        </Typography>
                    </div>

                    <div>
                        <Typography variant={"body"}>
                            {project.category}
                        </Typography>
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

const ProjectsGrid = ({ projects, className }: Readonly<ProjectsGridProps>) => {
    return (
        <li>
            <ul className={clsx("grid grid-cols-1 gap-y-4", className)}>
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </ul>
        </li>
    )
}

export default function Projects() {

    const heading = useRef<HTMLHeadingElement>(null);
    const projectsList = useRef<HTMLUListElement>(null);

    usePageEntryAnimation({
        onSetup: (timeline) => {
            SplitText.create(heading.current, SPLIT_TEXT_MASK(timeline))
            timeline.from(projectsList.current, IMAGE_SLIDE, 0)
        }
    })

    return (
        <PageWrapper>
            <PageStartSection>
                <Typography ref={heading} variant={"hero"} className="max-w-[20ch]">
                    Crafted with vision and detail, our projects tell unique stories.
                </Typography>
            </PageStartSection>

            <SectionContainer className="pb-24">
                <ul ref={projectsList} className="space-y-4">
                    <ProjectsGrid className="lg:grid-cols-2 gap-4" projects={projects.slice(0, 2)} />
                    <ProjectsGrid className="lg:grid-cols-3 gap-4" projects={projects.slice(2)} />
                </ul>
            </SectionContainer>

        </PageWrapper>
    )
}