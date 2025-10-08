'use client';

import SectionContainer from "@/components/SectionContainer";
import Typography from "@/components/Typography";
import { MEDIA } from "@/lib/gsap-constants";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import usePageEntryAnimation from "@/lib/hooks/usePageEntryAnimation";
import Image from "next/image";
import { useRef } from "react";
import { SplitText } from "@/lib/gsap-plugins";
import { SPLIT_TEXT_MASK } from "@/lib/gsap-defaults";

export default function ServicesHeading() {
    const isDesktop = useMediaQuery(MEDIA.desktop);

    const heading = useRef<HTMLHeadingElement>(null);
    const description = useRef<HTMLParagraphElement>(null);
    const bigImage = useRef<HTMLDivElement>(null);
    const smallImage = useRef<HTMLDivElement>(null);

    usePageEntryAnimation({
        onSetup: (timeline) => {
            SplitText.create(heading.current, SPLIT_TEXT_MASK(timeline))
            timeline.from(description.current, { opacity: 0 }, 0);
            timeline.from(bigImage.current, { clipPath: 'inset(100% 0 0 0)' }, 0);
            timeline.from(smallImage.current, {
                clipPath: 'inset(0 0 100% 0)',
            }, 0)
        }
    })

    return (
        <SectionContainer className="py-18">
            <div className="w-full flex justify-between">
                <div className="w-fit">
                    <Typography ref={heading} variant={"hero"} className="max-w-[18ch]">
                        Shaping spaces that breathe, tailored to people and place
                    </Typography>
                </div>

                <div className="h-full" ref={smallImage}>
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
            </div>

            <div className="space-y-4 pt-12">
                <div ref={bigImage} className="w-full aspect-[200/150] lg:w-[12vw] lg:aspect-[251/346] relative">
                    <Image
                        src={"/mockup-1.webp"}
                        alt="Mockup image"
                        fill
                        className="object-cover"
                    />
                </div>

                <Typography ref={description} variant={"bodyBoldUpper"} className="max-w-[55ch]" mask>
                    We offer a range of architectural services designed to balance creativity, functionality, and context. Each project is approached thoughtfully, ensuring spaces are human-centered, sustainable, and carefully tailored to the needs of people and place.
                </Typography>
            </div>
        </SectionContainer>
    )
}