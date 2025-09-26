import { ArrowUpRight } from "lucide-react";
import SectionContainer from "./SectionContainer";
import Typography from "./Typography";

export default function Navigation() {
    return (
        <header className="w-full fixed h-[3rem] flex items-center  border-b border-black">
            <SectionContainer className="flex justify-between">
                <div>
                    <Typography variant={"bodyBoldUpper"}>
                        Forma Architects
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