'use client';

import { ReactNode, useRef } from "react";
import { site } from "@/lib/data/site";
import Typography from "./Typography";
import { navigation } from "@/lib/data/navigation";
import { useTime } from "@/lib/hooks/useTime";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "@/lib/gsap-plugins";
import SectionContainer from "./SectionContainer";

interface ContactWrapperProps {
    title: string;
    children: ReactNode;
}




export default function Footer() {
    const footer = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: footer.current,
            pin: true,
            start: "bottom bottom",
            end: "+=100%"
        })
    }, [])

    return (
        <div ref={footer} className="w-full h-[100svh] bg-black py-[120px] text-white relative mt-[-100svh] -z-1">
            <SectionContainer className="h-full flex flex-col justify-between">
                <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between lg:items-center">
                    <Typography variant={"bodyBoldUpper"}>
                        Designs that breaths
                    </Typography>

                    <ul className="flex gap-4 items-center">
                        {navigation.map((nav) => (
                            <li key={nav.title}>
                                <Typography variant={"body"}>
                                    {nav.title}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full flex flex-col xl:flex-row gap-12 xl:gap-0 justify-between xl:items-end">
                    <Typography variant={"big"}>
                        {site.name}
                    </Typography>

                    <div className="flex flex-col space-y-4 gap-12">
                        <div className="whitespace-nowrap space-y-4">
                            <Typography variant={"body"} className="">
                                General Inquiries
                                <br />
                                {site.contacts.inquiries}
                            </Typography>

                            <Typography variant={"body"} className="">
                                New Projects
                                <br />
                                {site.contacts.projects}
                            </Typography>

                            <Typography variant={"body"} className="">
                                Press & Media
                                <br />
                                {site.contacts.press}
                            </Typography>


                            <Typography variant={"body"} className="">
                                Phone
                                <br />
                                {site.contacts.phone}
                            </Typography>
                        </div>

                        <div className="flex gap-24">
                            <div>
                                <Typography variant={"body"} className="whitespace-nowrap">
                                    {site.address.company}
                                    <br />
                                    {site.address.street}
                                    <br />
                                    {site.address.city}, {site.address.postalCode}
                                </Typography>
                            </div>

                            <div className="whitespace-nowrap">
                                <Typography variant={"body"} className="whitespace-nowrap">
                                    {site.socials.instagram.name}
                                </Typography>

                                <Typography variant={"body"} className="whitespace-nowrap">
                                    {site.socials.linkedin.name}
                                </Typography>

                                <Typography variant={"body"} className="whitespace-nowrap">
                                    {site.socials.twitter.name}
                                </Typography>
                            </div>
                        </div>
                    </div>

                </div>
            </SectionContainer>
        </div>
    )
}