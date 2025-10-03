import SectionContainer from "@/components/SectionContainer";
import Typography from "@/components/Typography"
import { ProjectInterface, projects } from "@/lib/data/projects"
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    project: ProjectInterface;
    orientation: "horizontal" | "vertical";
}

const ProjectCard = ({ project, orientation }: Readonly<ProjectCardProps>) => {
    return (
        <div className={clsx("w-full pb-6 last:pb-0 lg:pb-0", orientation === "vertical" ? "lg:w-[39vw]" : " lg:w-[61vw]")}>
            <Link href={`/projects/${project.slug}`}>
                <div className={clsx("w-full relative", orientation === "vertical" ? "aspect-[728/741]" : "aspect-[728/741] lg:aspect-[1184/760]")}>
                    <Image
                        src={project.image}
                        alt={`Photo of project ${project.name}`}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="w-full flex justify-between pt-4">
                    <div className="flex gap-4">
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
            </Link>
        </div>
    )
}

export default function FeaturedProjects() {
    return (
        <SectionContainer>
            <div className="w-full flex flex-col lg:flex-row justify-between pt-24 lg:pt-0">
                <Typography variant={"hero"} className="max-w-[20ch]">
                    Architectural Highlights
                </Typography>

                <div className="pt-2 lg:pt-0 lg:self-end">
                    <Typography variant={"bodyBoldUpper"} className="max-w-[30ch]">
                        Showcasing a selection of projects that reflect our design ethos. Each space is crafted with clarity, context, and a commitment to timeless form.
                    </Typography>
                </div>
            </div>

            <div className="pt-24 space-y-6 lg:space-y-24">
                <div className="flex flex-col lg:flex-row justify-between">
                    {projects.slice(0, 2).map((project) => (
                        <ProjectCard key={project.id} project={project} orientation={"vertical"} />
                    ))}
                </div>

                <div className="lg:ml-[24.5vw]">
                    <ProjectCard project={projects[2]} orientation={"horizontal"} />
                </div>

                <div className="w-full flex justify-end gap-60">
                    <div className="self-center hidden lg:block">
                        <Typography variant={"bodyBoldUpper"} className="max-w-[20ch]">
                            Our portfolio reflects a dialogue between innovation and tradition, where every project responds to its environment with sensitivity and precision. We approach design as a process of discovery, seeking clarity in form and purpose in detail. Each space we create is guided by sustainable principles and shaped to foster connection, comfort, and community. From private residences to cultural landmarks, our work embodies an enduring vision of architecture that serves both people and place.
                        </Typography>
                    </div>
                    <ProjectCard project={projects[3]} orientation={"horizontal"} />
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-50 lg:justify-end">
                    {projects.slice(4, 6).map((project) => (
                        <ProjectCard key={project.id} project={project} orientation={"vertical"} />
                    ))}
                </div>
            </div>
        </SectionContainer >
    )
}