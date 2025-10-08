'use client';

import { Fragment, useCallback, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap-plugins";
import Typography from "@/components/Typography";
import { ServiceInterface, services } from "@/lib/data/services";
import Image from "next/image";
import { MEDIA } from "@/lib/gsap-constants";
import SectionContainer from "@/components/SectionContainer";
import NavLink from "@/components/NavLink";

interface ServiceProps {
    service: ServiceInterface;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    active: boolean;
}

const Service = ({ service, active, onMouseEnter, onMouseLeave }: Readonly<ServiceProps>) => {

    const line = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(line.current, {
            scaleY: active ? 1 : 0,
        })
    }, { dependencies: [active] })

    return (
        <li
            className="cursor-pointer lg:px-4 relative bg-background"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <NavLink href="/services">
                <div ref={line} className="absolute inset-0 w-full h-full bg-black scale-y-0 origin-bottom" />

                <Typography variant={"hero"} className="mix-blend-difference text-white">
                    {service.title}
                </Typography>
            </NavLink>
        </li>
    )
}

export default function Services() {
    const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);
    const activeIndex = useRef(services.length);
    const images = useRef<HTMLDivElement[]>([]);

    const setRef = useCallback((element: HTMLDivElement | null, index: number) => {
        if (element) {
            images.current[index] = element;
        }
    }, [])

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add(MEDIA.desktop, () => {
            if (activeHoverIndex === null) {
                images.current.forEach((element, index) => (
                    gsap.to(element, {
                        clipPath: 'inset(0 0 100% 0)'
                    })
                ))
            }

            if (activeHoverIndex !== null) {
                activeIndex.current += 1;

                gsap.set(images.current[activeHoverIndex], {
                    zIndex: activeIndex.current,
                })

                gsap.fromTo(images.current[activeHoverIndex],
                    {
                        clipPath: 'inset(0 0 100% 0)',
                    },
                    {
                        clipPath: 'inset(0 0 0% 0)',
                    })
            }
        })
    }, { dependencies: [activeHoverIndex] })

    return (
        <SectionContainer>

            <div className="py-24 lg:py-0">
                <div>
                    <Typography variant={"hero"} className="max-w-[10ch]">
                        Our Approach to Design
                    </Typography>

                    <Typography variant={"body"} className="max-w-prose pt-4">
                        We offer a multidisciplinary approach to architecture, covering residential, public, cultural, and interior projects. Each service is tailored with precision and guided by a commitment to sustainability and timeless design.
                    </Typography>
                </div>

                <ul className="w-full lg:h-[100svh] my-24 lg:my-36 flex flex-col gap-4 lg:gap-0 justify-center relative">
                    {services.map((service, index) => (
                        <Fragment key={service.id}>
                            <Service
                                service={service}
                                onMouseEnter={() => setActiveHoverIndex(index)}
                                onMouseLeave={() => setActiveHoverIndex(null)}
                                active={index === activeHoverIndex}
                            />

                            <div
                                ref={(element) => setRef(element, index)}
                                className="absolute w-[20vw] h-[20svh] bottom-0 right-0 origin-top hidden lg:block"
                            >
                                <Image
                                    src={service.image}
                                    alt={`Photo of service ${service.title}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Fragment>
                    ))}
                </ul>
            </div>
        </SectionContainer>
    )
}