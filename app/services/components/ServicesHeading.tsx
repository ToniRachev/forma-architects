'use client';

import SectionContainer from "@/components/SectionContainer";
import Typography from "@/components/Typography";
import { MEDIA } from "@/lib/gsap-constants";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import Image from "next/image";

export default function ServicesHeading() {
    const isDesktop = useMediaQuery(MEDIA.desktop);

    return (
        <SectionContainer className="py-18">
            <div className="w-full flex justify-between">
                <div className="w-fit">
                    <Typography variant={"hero"} className="max-w-[18ch]">
                        Shaping spaces that breathe, tailored to people and place
                    </Typography>
                </div>

                {isDesktop && (
                    <div className="w-[7vw] h-fit aspect-[136/191] relative">
                        <Image
                            src={"/mockup-1.webp"}
                            alt="Mockup image"
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
            </div>

            <div className="space-y-4 pt-12">
                <div className="w-full aspect-[200/150] lg:w-[12vw] lg:aspect-[251/346] relative">
                    <Image
                        src={"/mockup-1.webp"}
                        alt="Mockup image"
                        fill
                        className="object-cover"
                    />
                </div>

                <Typography variant={"bodyBoldUpper"} className="max-w-[55ch]">
                    We offer a range of architectural services designed to balance creativity, functionality, and context. Each project is approached thoughtfully, ensuring spaces are human-centered, sustainable, and carefully tailored to the needs of people and place.
                </Typography>
            </div>
        </SectionContainer>
    )
}