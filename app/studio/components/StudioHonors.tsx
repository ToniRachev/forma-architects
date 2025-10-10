'use client';

import SectionContainer from "@/components/SectionContainer";
import Typography from "@/components/Typography";
import { honors, HonorType } from "@/lib/data/honors";
import { MEDIA } from "@/lib/gsap-constants";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import Image from "next/image";

const Honor = ({ honor }: Readonly<{ honor: HonorType }>) => {
    return (
        <li className="pb-12 last:pb-0 lg:max-w-prose">
            <div className="w-[145px] h-[25px] bg-black" />

            <div className="flex gap-6 pt-4">
                <Typography variant={"body"}>
                    {honor.year}
                </Typography>

                <Typography variant={"body"}>
                    {honor.description}
                </Typography>
            </div>
        </li>
    )
}

export default function StudioHonors() {
    const isDesktop = useMediaQuery(MEDIA.desktop);

    return (
        <SectionContainer className="py-24">
            <div className="pb-24">
                <Typography variant={"big"}>
                    Honors
                </Typography>
            </div>

            <div className="w-full flex lg:justify-between lg:gap-12 2xl:px-24">
                <ul>
                    {honors.map((honor) => (
                        <Honor key={honor.id} honor={honor} />
                    ))}
                </ul>

                {isDesktop && (
                    <div className="w-[40vw] aspect-[582/600] relative">
                        <Image
                            src={"/studio/honors.webp"}
                            alt="Mockup image"
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
            </div>
        </SectionContainer>
    )
}