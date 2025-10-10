'use client';

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-plugins";
import SectionContainer from "@/components/SectionContainer";
import Typography from "@/components/Typography";
import Image from "next/image";
import { MEDIA } from "@/lib/gsap-constants";

export default function ServicesProcess() {
    const container = useRef<HTMLElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!container.current || !wrapper.current) return;

        const containerStyle = getComputedStyle(container.current);
        const paddingLeft = parseFloat(containerStyle.paddingLeft);
        const paddingRight = parseFloat(containerStyle.paddingRight);

        const viewportWidth = window.innerWidth - (paddingLeft + paddingRight);
        const totalScroll = wrapper.current.scrollWidth - viewportWidth;

        const mm = gsap.matchMedia();

        mm.add(MEDIA.desktop, () => {
            gsap.to(wrapper.current, {
                x: -totalScroll,
                ease: 'none',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top top',
                    end: `+=${totalScroll}`,
                    scrub: 0.2,
                    pin: true,
                    anticipatePin: 0.2,
                    invalidateOnRefresh: true,
                    pinSpacing: true,
                }
            })
        })
    }, { scope: container })

    return (
        <SectionContainer ref={container} className="h-full lg:h-[100svh] py-12">
            <div ref={wrapper} className="flex flex-col lg:flex-row gap-12 lg:gap-[25svh] flex-nowrap w-full h-full">
                <div className="flex flex-col h-full justify-between w-full lg:max-w-[60%] shrink-0">
                    <div className="h-full flex flex-col justify-end pb-12 border-t pt-12 lg:pt-0 lg:border-t-0 lg:border-b border-black space-y-4 order-2 lg:order-1">
                        <Typography variant={"body"} className="indent-24">
                            Architecture begins as a conversation between vision and place. Every project starts with fragments of memory, culture, and aspiration, woven together into a narrative that guides design. Light, movement, and atmosphere become the raw materials, shaping not only the structure itself but the emotions it evokes. In this way, the work extends beyond utility into something poetic — a lived experience that breathes with its environment and adapts to the rhythm of life.
                        </Typography>

                        <Typography variant={"body"}>
                            To bring this vision into reality, we balance imagination with knowledge. Technical study anchors inspiration, while careful observation reveals how people truly inhabit space. Through this process, ideas gain clarity and resilience, evolving from sketches into forms that can endure. The result is not just a building, but a story crafted in stone, timber, and glass — a place where memory and future meet.
                        </Typography>
                    </div>

                    <div className="pt-12 order-1 lg:order-2 pb-12 lg:pb-0">
                        <Typography variant={"big"} className="max-w-[5ch]">
                            Our Process
                        </Typography>
                    </div>
                </div>

                <div className="shrink-0 flex flex-col lg:flex-row lg:justify-center lg:items-center gap-4 lg:gap-24">
                    <div className="lg:w-[46svw] h-fit aspect-[877/542] relative">
                        <Image
                            src={"/services-page/process-1.webp"}
                            alt="Mockup image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="lg:pt-36">
                        <Typography variant={"body"} className="lg:max-w-[30ch]">
                            Every project is a journey of discovery. It begins with listening, uncovering the hidden aspirations of a client and the subtle qualities of a site. From these fragments, the first ideas emerge — delicate, uncertain, yet filled with potential.
                        </Typography>
                    </div>
                </div>

                <div className="shrink-0 flex flex-col lg:flex-row gap-4 lg:gap-24">
                    <div className="h-full flex items-end justify-end">
                        <div className="hidden lg:block w-[20svw] aspect-[373/227] relative">
                            <Image
                                src={"/services-page/process-2.webp"}
                                alt="Mockup image"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="h-full flex flex-col justify-between gap-4 lg:gap-0">
                        <div className="w-full lg:w-[49svw] h-fit aspect-[877/450] relative mt-12">
                            <Image
                                src={"/services-page/process-3.webp"}
                                alt="Mockup image"
                                fill
                                className="object-cover object-[50%_90%]"
                            />
                        </div>

                        <div className="max-w-[100ch] pb-8">
                            <Typography variant={"body"}>
                                As the work develops, research begins to transform intuition into structure. History and context inform the language of design, while the qualities of light, proportion, and material bring subtlety to each decision. Every drawing is both a test and a refinement, seeking harmony between vision and feasibility. This stage is where discipline meets creativity — where the poetry of space is carefully balanced with the technical demands that make it possible. Through iteration and dialogue, the design gains depth, coherence, and resilience, preparing to stand as more than an idea: as a tangible, enduring form.
                            </Typography>
                        </div>
                    </div>
                </div>

                <div className="shrink-0 flex justify-center items-center">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <Typography variant={"body"} className="lg:max-w-[50ch]">
                            When the project is realized, it no longer belongs only to us. It becomes part of daily life, evolving with those who inhabit it. In this way, architecture continues to tell its story — not as an object, but as a living companion to experience.
                        </Typography>

                        <div className="w-full lg:w-[47svw] h-fit aspect-[877/542] relative">
                            <Image
                                src={"/services-page/process-4.webp"}
                                alt="Mockup image"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}