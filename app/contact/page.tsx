'use client';

import SectionContainer from "@/components/SectionContainer";
import Typography from "@/components/Typography";
import Form from "./components/Form";
import Company from "./components/Company";
import { useRef, useState } from "react";
import ThankYou from "./components/ThankYou";
import { gsap, useGSAP } from "@/lib/gsap-plugins";
import usePageEntryAnimation from "@/lib/hooks/usePageEntryAnimation";

export default function Contact() {
    const [formSuccess, setFormSuccess] = useState(false);

    const contact = useRef<HTMLDivElement>(null);
    const thankYou = useRef<HTMLDivElement>(null);
    const transition = useRef<HTMLDivElement>(null);

    const content = useRef<HTMLDivElement>(null);

    usePageEntryAnimation({
        onSetup: (timeline) => {
            timeline.from(contact.current, { y: 50, opacity: 0 }, 0)
        }
    })

    useGSAP(() => {
        gsap.set(thankYou.current, {
            autoAlpha: 0,
        })

        if (formSuccess) {
            gsap.timeline()
                .to(contact.current, {
                    autoAlpha: 0,
                    y: -50,
                    duration: 0.5,
                })
                .to(transition.current,
                    {
                        scaleY: 1,
                    }, '<+=0.1')
                .to(transition.current, {
                    scaleY: 0,
                    transformOrigin: 'top'
                }, '>-=0.1')
                .fromTo(thankYou.current,
                    {
                        y: 100,
                    },
                    {
                        autoAlpha: 1,
                        y: 0,
                    }, '<+=0.1')
        }
    }, [formSuccess])

    return (
        <SectionContainer className="py-24">
            <ThankYou ref={thankYou} />
            <div ref={contact} className="flex flex-col gap-12 lg:gap-0 lg:flex-row justify-between lg:items-center">
                <div>
                    <div ref={content} className="space-y-4">
                        <Typography variant={"hero"}>
                            Get in Touch
                        </Typography>

                        <Typography variant={"body"} className="max-w-[30ch]">
                            Whether you have a project in mind, a question, or just want to say hello, we’d love to hear from you.
                        </Typography>
                    </div>

                    <div className="pt-24">
                        <Form onFormSuccess={() => setFormSuccess(true)} />
                    </div>
                </div>

                <Company />
            </div>

            <div ref={transition} className="absolute inset-0 w-full h-full bg-black origin-bottom scale-y-0 pointer-events-none select-none" />
        </SectionContainer>
    )
}