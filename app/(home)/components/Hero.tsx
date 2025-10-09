'use client';

import { useRef } from "react";
import { gsap } from "@/lib/gsap-plugins";
import SectionContainer from "@/components/SectionContainer";
import Typography from "@/components/Typography";
import Image from "next/image";
import { MEDIA } from "@/lib/gsap-constants";
import usePageEntryAnimation from "@/lib/hooks/usePageEntryAnimation";
import { IMAGE_SLIDE, TEXT_MASK } from "@/lib/gsap-defaults";

export default function Hero() {
    const content = useRef<HTMLElement[]>([]);
    const imageWrapper = useRef<HTMLDivElement>(null);
    const image = useRef<HTMLImageElement>(null);

    usePageEntryAnimation({
        onSetup: (timeline) => {
            timeline.from(content.current, TEXT_MASK, 0)

            timeline.from(imageWrapper.current, IMAGE_SLIDE, 0)

            const mm = gsap.matchMedia();

            mm.add(MEDIA.desktop, () => {
                gsap.to(image.current, {
                    scrollTrigger: {
                        trigger: image.current,
                        start: 'top bottom',
                        end: 'top top',
                        scrub: true,
                    },
                    scale: 1.3,
                    ease: 'none',
                })
            })
        }
    })

    const setRef = (element: HTMLElement | null) => {
        if (element) {
            content.current.push(element);
        }
    }

    return (
        <SectionContainer className="w-full flex flex-col justify-center items-center pt-[20svh] text-center gap-12 lg:gap-24">
            <div className="space-y-8">
                <div className="">
                    <Typography variant="big" ref={(el) => setRef(el)} mask>
                        FORMA.
                    </Typography>

                    <Typography variant="big" ref={(el) => setRef(el)} mask>
                        ARCHITECTS.
                    </Typography>
                </div>

                <div className="flex justify-center">
                    <Typography variant="bodyBoldUpper" className="max-w-[50ch] text-center" ref={(el) => setRef(el)} mask>
                        We create architecture that merges form and function, shaping spaces where people live, gather, and thrive. From intimate homes to cultural landmarks, our work reflects clarity, sustainability, and a timeless design ethos
                    </Typography>
                </div>
            </div>

            <div ref={imageWrapper} className="w-full aspect-[1000/1700] lg:aspect-[1800/1200] relative overflow-hidden">
                <Image
                    ref={image}
                    src={'/home/hero.jpg'}
                    alt="Mockup image"
                    fill
                    className="object-cover"
                    quality={100}
                />
            </div>
        </SectionContainer>
    )
}