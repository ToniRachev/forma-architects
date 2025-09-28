import PageWrapper from "@/components/PageWrapper";
import StudioHero from "./components/StudioHero";
import StudioAbout from "./components/StudioAbout";
import StudioTeam from "./components/StudioTeam";
import StudioVision from "./components/StudioVision";

export default function Studio() {
    return (
        <PageWrapper>
            <StudioHero />
            <StudioAbout />
            <StudioTeam />
            <StudioVision />
        </PageWrapper>
    )
}