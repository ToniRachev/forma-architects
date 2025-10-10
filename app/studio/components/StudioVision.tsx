'use client';

import SectionContainer from "@/components/SectionContainer";
import Typography from "@/components/Typography";
import { MEDIA } from "@/lib/gsap-constants";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import Image from "next/image";

export default function StudioVision() {
    const isDesktop = useMediaQuery(MEDIA.desktop);

    return (
        <SectionContainer className="py-24 flex flex-col lg:flex-row gap-8 lg:gap-0">
            <div className="flex flex-col lg:flex-row lg:w-1/2">
                <div className="" style={{ writingMode: isDesktop ? 'sideways-lr' : undefined, textOrientation: 'mixed' }}>
                    <Typography variant={"big"}>Vision</Typography>
                </div>

                <div className="w-full flex lg:justify-end lg:pr-24 lg:pt-18">
                    <div className="lg:max-w-[32ch] space-y-4">
                        <Typography variant={"bodyBoldUpper"} className="indent-0">
                            At Forma Architects, we see architecture as a dialogue between people, place, and purpose. Each project is guided by context, light, and materiality, creating spaces that inspire daily life. Our designs balance aesthetics and function while fostering connection, comfort, and engagement. Collaboration, research, and attention to detail shape every stage, resulting in architecture that is thoughtful, timeless, and human-centered. We strive to integrate sustainability, proportion, and clarity into all interventions. Each space we create responds to its environment, culture, and the needs of its users. From private residences to public landmarks, our work embodies precision, creativity, and careful planning.
                        </Typography>

                        <Typography variant={"bodyBoldUpper"}>
                            We aim to design spaces that endure, adapt, and enhance the human experience. Every project is intentional, balancing innovation with timeless principles. By integrating environmental awareness, material consciousness, and spatial storytelling, we deliver architecture that is meaningful, functional, and inspiring. Our approach ensures each environment resonates aesthetically and practically, creating a lasting impact on people and place.
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
                <div className="w-full  lg:w-fit grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
                    <div className="w-full aspect-[300/500] lg:w-[10vw] lg:aspect-[197/385] relative">
                        <Image
                            src={"/studio/vision-1.webp"}
                            alt="Mockup image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="w-full aspect-[300/500] lg:w-[10vw] lg:aspect-[197/385] relative">
                        <Image
                            src={"/studio/vision-2.webp"}
                            alt="Mockup image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {isDesktop && (
                        <div className="w-full aspect-[300/500] lg:w-[10vw] lg:aspect-[197/385] relative">
                            <Image
                                src={"/studio/vision-3.webp"}
                                alt="Mockup image"
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>

                <div className="w-full flex lg:justify-end lg:pr-36 lg:pt-8">
                    <div className="max-w-prose space-y-4">
                        <Typography variant={"body"} className="indent-12">
                            At Forma Architects, we believe architecture shapes experience and connection. Every project is guided by context, light, and material, resulting in spaces that inspire, function, and endure. Collaboration, research, and attention to detail define our process. We design with clarity and purpose, ensuring that each environment balances aesthetics, comfort, and practicality. From residential homes to public cultural projects, our work embodies timeless principles, sustainability, and human-centered design. Every intervention is thoughtful, precise, and intentionally crafted to respond to both people and place. Our designs strive to enhance daily life, foster engagement, and create meaningful spatial experiences.
                        </Typography>

                        <Typography variant={"body"}>
                            We approach each project as a dialogue between environment, program, and user. Spaces are designed to adapt, inspire, and endure. Innovation is balanced with tradition, material choice, and context awareness. Every detail is considered carefully, ensuring functionality and beauty coexist. By integrating sustainability, proportion, and spatial storytelling, we deliver architecture that resonates over time. Each environment reflects our commitment to quality, clarity, and the human experience, leaving a lasting impact on those who inhabit or visit it.
                        </Typography>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}