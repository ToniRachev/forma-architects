'use client';

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-plugins";
import Typography from "@/components/Typography";
import { services } from "@/lib/data/services";
import Image from "next/image";
import { useCallback, useRef } from "react";

export default function ServicesCard() {
    const container = useRef<HTMLUListElement>(null);
    const cards = useRef<HTMLLIElement[]>([]);

    const setRef = useCallback((element: HTMLLIElement | null, index: number) => {
        if (element) {
            cards.current[index] = element;
        }
    }, [])

    useGSAP(() => {
        const cardsList = cards.current;

        cardsList.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top top',
                end: 'bottom bottom',
                endTrigger: cardsList[cardsList.length - 1],
                pin: true,
                pinSpacing: false,
                anticipatePin: 0.2,
            })

            if (index < cardsList.length - 1) {
                ScrollTrigger.create({
                    trigger: cardsList[index + 1],
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const opacity = 1 - progress;
                        const scale = 1 - progress * 0.25;
                        const isEven = index % 2 === 0;

                        gsap.set(
                            card,
                            {
                                opacity,
                                scale,
                                rotate: isEven ? progress : -progress,
                                ease: 'none',
                            });
                    }
                })
            }
        })
    }, { scope: container });

    return (
        <div className="bg-black">
            <ul ref={container} className="w-full h-full">
                {services.map((service, index) => (
                    <li
                        key={service.id}
                        ref={(element) => setRef(element, index)}
                        className="w-full h-[100svh] flex flex-col xl:flex-row justify-evenly xl:justify-center xl:items-center bg-background px-6 relative"
                    >

                        <div className="space-y-6 xl:flex-1/5 overflow-hidden">
                            <div className="xl:absolute xl:top-24 xl:left-6">
                                <Typography variant={"section"}>
                                    ({String(index + 1).padStart(2, "0")}.)
                                </Typography>
                            </div>

                            <Typography variant={"tagline"} className="max-w-[20ch]">
                                {service.title}
                            </Typography>

                            <div>
                                <Typography variant={"body"}>
                                    Areas of operation
                                </Typography>
                                <ul>
                                    {service.areas.map((area, index) => (
                                        <li key={area}>
                                            <Typography variant={"label"}>
                                                {area}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="xl:flex-3/5 flex justify-center items-center">
                            <div className="w-full xl:w-[55vw] aspect-[1046/498] md:aspect-[1300/498] xl:aspect-[1046/600] relative">
                                <Image
                                    src={service.image}
                                    alt="Service mockup image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="xl:flex-1/5 space-y-4 flex flex-col justify-end xl:items-end">
                            <div className="xl:max-w-[30ch]">
                                <Typography variant={"body"}>
                                    {service.description}
                                </Typography>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}