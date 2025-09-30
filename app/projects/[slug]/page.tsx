import { projects } from "@/lib/data/projects";
import Project from "./components/project";
import { notFound } from "next/navigation";

interface ProjectWrapperProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectWrapper({ params }: Readonly<ProjectWrapperProps>) {
    const { slug } = await params;

    const projectIndex = projects.findIndex((project) => project.slug === slug);

    if (projectIndex === -1) {
        return notFound();
    }

    const project = projects[projectIndex];
    const nextProject = projectIndex === projects.length - 1 ? projects[0] : projects[projectIndex + 1];

    return <Project project={project} nextProject={nextProject} />
}