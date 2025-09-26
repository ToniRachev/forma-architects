import SectionContainer from "@/components/SectionContainer";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";

export default function Home() {
    return (
        <SectionContainer className="lg:space-y-[12.5rem]">
            <Hero />
            <About />
            <FeaturedProjects />
        </SectionContainer>
    )
}