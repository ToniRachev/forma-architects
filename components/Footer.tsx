'use client';

import { ReactNode } from "react";
import { site } from "@/lib/data/site";
import Typography from "./Typography";
import { navigation } from "@/lib/data/navigation";
import { useTime } from "@/lib/hooks/useTime";

interface ContactWrapperProps {
    title: string;
    children: ReactNode;
}

const ContactWrapper = ({ title, children }: Readonly<ContactWrapperProps>) => {
    return (
        <div>
            <Typography variant={"body"} className="pb-4">
                {title}
            </Typography>

            {children}
        </div>
    )
}

const ContactTypography = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <Typography variant="body">
            {children}
        </Typography>
    )
}

const TimeWrapper = ({ location, time }: Readonly<{ location: string, time: string }>) => {
    return (
        <div className="flex gap-2">
            <Typography variant={"body"} className="tabular-nums w-[8ch] text-right font-mono">
                {time}
            </Typography>

            <Typography variant={"body"} className="font-mono">
                {location}
            </Typography>
        </div>
    )
}


export default function Footer() {
    const time = useTime();

    return (
        <div className="w-full h-full bg-black py-24 px-6 space-y-24 lg:space-y-36 text-white">
            <div className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between">
                <Typography variant={"bodyBoldUpper"}>
                    Designing spaces that breathe
                </Typography>

                <ul className="flex gap-4">
                    {navigation.map((nav) => (
                        <li key={nav.title}>
                            <Typography variant={"body"}>
                                {nav.title}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-[15vw] items-center">
                <div className="">
                    <Typography variant={"big"} className="order-2 lg:order-1">
                        {site.name}
                    </Typography>
                </div>

                <div className="w-full space-y-6 order-1 lg:order-2">
                    <ContactWrapper title={"Address"}>
                        <div className="space-y-1">
                            <ContactTypography>
                                {site.address.company}
                            </ContactTypography>

                            <ContactTypography >
                                {site.address.street}
                            </ContactTypography>

                            <ContactTypography >
                                {site.address.city}, {site.address.postalCode}
                            </ContactTypography>
                        </div>
                    </ContactWrapper>

                    <ContactWrapper title={"Contacts"}>
                        <div className="space-y-4">
                            <ContactTypography>
                                General Inquiries
                                <br />
                                {site.contacts.inquiries}
                            </ContactTypography>

                            <ContactTypography>
                                New Projects
                                <br />
                                {site.contacts.projects}
                            </ContactTypography>

                            <ContactTypography>
                                Press & Media
                                <br />
                                {site.contacts.press}
                            </ContactTypography>

                            <ContactTypography>
                                Phone
                                <br />
                                {site.contacts.phone}
                            </ContactTypography>
                        </div>
                    </ContactWrapper>

                    <ContactWrapper title={"Socials"}>
                        <div className="space-y-1">
                            <ContactTypography>
                                {site.socials.instagram.name}
                            </ContactTypography>

                            <ContactTypography>
                                {site.socials.linkedin.name}
                            </ContactTypography>

                            <ContactTypography>
                                {site.socials.twitter.name}
                            </ContactTypography>

                        </div>
                    </ContactWrapper>
                </div>
            </div>

            {time && (
                <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
                    <TimeWrapper
                        location="Sofia, Bulgaria"
                        time={time.toLocaleTimeString()}
                    />

                    <TimeWrapper
                        location="New York, US"
                        time={time.toLocaleTimeString("en-US", { timeZone: "America/New_York", hour12: false })}
                    />
                </div>
            )}
        </div>
    )
}