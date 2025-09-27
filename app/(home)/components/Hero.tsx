import SectionContainer from "@/components/SectionContainer";
import Typography from "@/components/Typography";
import Image from "next/image";

export default function Hero() {
    return (
        <SectionContainer>

            <div className="w-full h-[calc(100svh-3rem)] flex flex-col justify-center text-center lg:text-left">
                <div className="">
                    <div>
                        <Typography variant={"big"}>
                            Forma
                        </Typography>
                    </div>

                    <div className="flex flex-col lg:flex-row py-6 lg:py-4 gap-4 lg:gap-0 w-full lg:justify-end items-center">
                        <div className="max-w-[55ch] mr-12 shrink-1 hidden lg:block">
                            <Typography variant={"bodyBoldUpper"}>
                                We create architecture that merges form and function, shaping spaces where people live, gather, and thrive. From intimate homes to cultural landmarks, our work reflects clarity, sustainability, and a timeless design ethos
                            </Typography>
                        </div>

                        <div className="relative w-full lg:max-w-[50vw] aspect-[16/8] lg:aspect-[16/7]">
                            <Image
                                src={"/mockup-1.webp"}
                                alt="Mockup"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between lg:items-end">
                    <div className="order-2 lg:order-1">
                        <Typography variant={"bodyBoldUpper"}>
                            Designing spaces that breathe
                        </Typography>
                    </div>

                    <div className="order-1 lg:order-2">
                        <Typography variant={"big"}>
                            Architects
                        </Typography>

                        <div className="w-full flex lg:hidden justify-center mr-12 shrink-1   pt-4">
                            <Typography className="max-w-[55ch]" variant={"bodyBoldUpper"}>
                                We create architecture that merges form and function, shaping spaces where people live, gather, and thrive. From intimate homes to cultural landmarks, our work reflects clarity, sustainability, and a timeless design ethos
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}