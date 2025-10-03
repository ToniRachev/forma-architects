'use client';

import SectionContainer from "./SectionContainer";
import Typography from "./Typography";
import { navigation } from "@/lib/data/navigation";
import Link from "next/link";
import TextHoverSlideReveal from "./TextHoverSlideReveal";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

export default function Navigation() {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        lenis?.scrollTo(0, { immediate: true });
    }, [pathname]);

    return (
        <header className="w-full fixed h-[3rem] flex items-center border-b border-white mix-blend-difference z-[999999999999] text-white">
            <SectionContainer className="flex justify-between items-center">
                <div>
                    <Link href={'/'}>
                        <Typography variant={"bodyBoldUpper"}>
                            Forma Architects
                        </Typography>
                    </Link>
                </div>

                <div>
                    <ul className="hidden lg:flex gap-8">
                        {navigation.map((nav) => (
                            <li key={nav.title}>
                                <Link href={nav.href}>
                                    <TextHoverSlideReveal variant={'body'}>
                                        {nav.title}
                                    </TextHoverSlideReveal>
                                </Link>
                            </li>
                        ))}

                        {/* <li className="hidden lg:block">
                            <div className="flex items-center gap-1 relative">
                                <Typography variant={"body"}>
                                    Get in Touch
                                </Typography>

                                <div className="w-[1.2rem]">
                                    <div className="absolute -top-[0.25rem]">
                                        <ArrowUpRight className="w-full" />
                                    </div>
                                </div>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </SectionContainer>
        </header>
    )
}