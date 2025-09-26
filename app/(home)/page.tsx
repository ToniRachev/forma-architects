import SectionContainer from "@/components/SectionContainer";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
    return (
        <SectionContainer className="lg:space-y-[12.5rem]">
            <Hero />
            <About />
        </SectionContainer>
    )
}