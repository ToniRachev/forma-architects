import PageWrapper from "@/components/PageWrapper";
import StudioHero from "./components/StudioHero";
import StudioAbout from "./components/StudioAbout";

export default function Studio() {
    return (
        <PageWrapper>
            <StudioHero />
            <StudioAbout />
        </PageWrapper>
    )
}