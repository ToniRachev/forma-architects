import PageWrapper from "@/components/PageWrapper";
import StudioHero from "./components/StudioHero";
import StudioAbout from "./components/StudioAbout";
import StudioTeam from "./components/StudioTeam";
import StudioVision from "./components/StudioVision";
import StudioHonors from "./components/StudioHonors";

export default function Studio() {
    return (
        <PageWrapper>
            <StudioHero />
            <StudioAbout />
            <StudioTeam />
            <StudioVision />
            <StudioHonors />
        </PageWrapper>
    )
}