import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import Services from "./components/Services";
import Philosophy from "./components/Philosophy";
import PageWrapper from "@/components/PageWrapper";
import StatementBlock from "./components/StatementBlock";

export default function Home() {
    return (
        <PageWrapper>
            <Hero />
            <About />
            <FeaturedProjects />
            <Services />
            <StatementBlock />
            <Philosophy />
        </PageWrapper>
    )
}