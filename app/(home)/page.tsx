import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import Services from "./components/Services";
import Philosophy from "./components/Philosophy";

export default function Home() {
    return (
        <div className="space-y-[200px]">
            <Hero />
            <About />
            <FeaturedProjects />
            <Services />
            <Philosophy />
        </div>
    )
}