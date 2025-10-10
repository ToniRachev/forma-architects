'use client';

import PageStartSection from "@/components/PageStartSection";
import Typography from "@/components/Typography";
import { IMAGE_SLIDE, SPLIT_TEXT_MASK, TEXT_MASK } from "@/lib/gsap-defaults";
import usePageEntryAnimation from "@/lib/hooks/usePageEntryAnimation";
import Image from "next/image";
import { useRef } from "react";
import { gsap, SplitText } from "@/lib/gsap-plugins";

export default function StudioHero() {
    const heading = useRef<HTMLHeadingElement>(null);
    const description = useRef<HTMLParagraphElement>(null);
    const imageWrapper = useRef<HTMLDivElement>(null);

    usePageEntryAnimation({
        onSetup: (timeline) => {
            SplitText.create(heading.current, SPLIT_TEXT_MASK(timeline));

            timeline.from(description.current, TEXT_MASK, 0);
            timeline.from(imageWrapper.current, IMAGE_SLIDE, 0);
        }
    })

    return (
        <PageStartSection>
            <Typography ref={heading} variant={"hero"} className="max-w-[20ch]" mask>
                Shaping spaces with clarity, purpose, and timeless design.
            </Typography>

            <div className="flex flex-col lg:flex-row gap-4 justify-between lg:pt-48">
                <div className="pt-24 max-w-prose">
                    <Typography ref={description} variant={"bodyBoldUpper"} mask>
                        We approach every project with care and clarity, designing spaces that are functional, inspiring, and timeless. Each environment is shaped by light, material, and context to create architecture that connects people and place.
                    </Typography>
                </div>

                <div ref={imageWrapper} className="w-full lg:w-[55vw] h-full aspect-[1076/582] relative">
                    <Image
                        src={"/studio/hero.webp"}
                        alt="Mockup image"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </PageStartSection>
    )
}