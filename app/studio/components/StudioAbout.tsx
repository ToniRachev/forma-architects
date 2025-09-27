import SectionContainer from "@/components/SectionContainer";
import Typography from "@/components/Typography";
import Image from "next/image";

export default function StudioAbout() {
    return (
        <SectionContainer>
            <div className="w-full hidden xl:flex justify-end pb-12">
                <Typography variant={"bodyBoldUpper"} className="max-w-[45ch] text-right">
                    We design each project with care, balancing function, beauty, and context to create architecture that inspires and connects people.
                </Typography>
            </div>

            <div className="flex flex-col xl:flex-row justify-between xl:items-end relative">
                <div className="xl:absolute pb-4 xl:pb-0 xl:top-0 xl:left-0 xl:z-50">
                    <Typography variant={"big"}>
                        Architects
                    </Typography>
                </div>

                <div className="max-w-[85ch] space-y-8 pb-4 xl:pb-12">
                    <Typography variant={"bodyBoldUpper"} className=" indent-36">
                        Forma Architects approaches each project with observation, research, and careful planning. We explore context, light, and material to create spaces that are functional, beautiful, and human-centered. Collaboration and attention to detail guide every stage, ensuring designs are both innovative and timeless. From private residences to cultural institutions, our architecture responds to environment, culture, and lifestyle. Sustainability, proportion, and spatial clarity are integrated into every solution.
                    </Typography>

                    <Typography variant={"bodyBoldUpper"}>
                        We craft interiors, landscapes, and masterplans with the same philosophy: architecture should connect, inspire, and endure. Each project is realized with precision, creativity, and sensitivity to its surroundings. Our work aims to enhance daily life, foster engagement, and respect natural and built context. Every intervention is considered, intentional, and guided by principles of harmony, sustainability, and human experience. We strive for spaces that are meaningful, adaptable, and resonate over time.
                    </Typography>
                </div>

                <div className="w-full xl:w-[40vw] h-full aspect-[760/765] relative">
                    <Image
                        src="/mockup-3.webp"
                        alt="Mockup image"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </SectionContainer>
    )
}