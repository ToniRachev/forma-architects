import PageWrapper from "@/components/PageWrapper";
import ServicesHeading from "./components/ServicesHeading";
import StatementBlock from "./components/StatementBlock";
import ServicesCard from "./components/ServicesCards";
import ServicesProcess from "./components/ServicesProcess";

export default function Services() {
    return (
        <PageWrapper>
            <ServicesHeading />
            <StatementBlock />
            <ServicesCard />
            <ServicesProcess />
        </PageWrapper>
    )
}