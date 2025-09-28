import PageWrapper from "@/components/PageWrapper";
import StudioHero from "./components/StudioHero";
import StudioAbout from "./components/StudioAbout";
import StudioTeam from "./components/StudioTeam";

export default function Studio() {
    return (
        <PageWrapper>
            <StudioHero />
            <StudioAbout />
            <StudioTeam />
        </PageWrapper>
    )
}