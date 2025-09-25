import { ArrowUpRight } from "lucide-react";
import SectionContainer from "./SectionContainer";
import Typography from "./Typography";

export default function Navigation() {
    return (
        <header className="w-full">
            <SectionContainer className="flex justify-between border-b border-black py-4">
                <div>
                    <Typography variant={"bodyBoldUpper"}>
                        Format Architects
                    </Typography>
                </div>

                <div>
                    <ul className="flex gap-8">
                        <li>
                            <Typography variant={"body"}>
                                Menu
                            </Typography>
                        </li>

                        <li className="hidden lg:block">
                            <div className="flex items-center gap-1 relative">
                                <Typography variant={"body"}>
                                    Get in Touch
                                </Typography>

                                <div className="w-[1.2rem]">
                                    <div className="absolute -top-[0.15rem]">
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