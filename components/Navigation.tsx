import { ArrowUpRight } from "lucide-react";
import SectionContainer from "./SectionContainer";
import Typography from "./Typography";
import { navigation } from "@/lib/data/navigation";
import Link from "next/link";

export default function Navigation() {
    return (
        <header className="w-full fixed h-[3rem] flex items-center border-b border-white mix-blend-difference z-[999999999999] text-white">
            <SectionContainer className="flex justify-between">
                <div>
                    <Typography variant={"bodyBoldUpper"}>
                        Forma Architects
                    </Typography>
                </div>

                <div>
                    <ul className="flex gap-8">
                        {navigation.map((nav) => (
                            <li key={nav.title}>
                                <Link href={nav.href}>
                                    <Typography variant={"body"}>
                                        {nav.title}
                                    </Typography>
                                </Link>
                            </li>
                        ))}

                        <li className="hidden lg:block">
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
                        </li>
                    </ul>
                </div>
            </SectionContainer>
        </header>
    )
}