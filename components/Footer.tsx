'use client';

import { useRef } from "react";
import { site } from "@/lib/data/site";
import Typography from "./Typography";
import SectionContainer from "./SectionContainer";
import { usePathname } from "next/navigation";
import ContactsBlock from "./Company/ContactsBlock";
import AddressBlock from "./Company/AddressBlock";
import SocialsBlock from "./Company/SocialsBlock";

const excludeFooterPaths = ['/projects/', '/contact'];

const excludeFooter = (pathname: string) => excludeFooterPaths.some((path) => pathname.startsWith(path));

export default function Footer() {
    const pathname = usePathname();

    const footer = useRef<HTMLDivElement>(null);

    if (excludeFooter(pathname)) return null;

    return (
        <div ref={footer} className="h-[100vh] relative w-full overflow-hidden"
            style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
            }}
        >
            <div className="w-full h-[100svh] fixed top-0 left-0 bg-black py-[120px] text-white">
                <SectionContainer className="h-full flex flex-col justify-between">
                    <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between lg:items-center">
                        <Typography variant={"bodyBoldUpper"}>
                            Designs that breaths
                        </Typography>
                    </div>

                    <div className="w-full flex flex-col xl:flex-row gap-12 xl:gap-0 justify-between xl:items-end">
                        <Typography variant={"big"}>
                            {site.name}
                        </Typography>

                        <div className="flex flex-col space-y-4 gap-12">
                            <ContactsBlock />

                            <div className="flex gap-24">
                                <AddressBlock />
                                <SocialsBlock />

                            </div>
                        </div>

                    </div>
                </SectionContainer>
            </div>
        </div>
    )
}