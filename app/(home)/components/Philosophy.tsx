import Typography from "@/components/Typography";
import Image from "next/image";

export default function Philosophy() {
    return (
        <div className="w-full h-[100svh] flex flex-col justify-between lg:grid lg:grid-cols-3 lg:py-12 lg:gap-50  bg-background">
            <div className="flex flex-col justify-between">
                <Typography variant={"hero"} className="max-w-[7ch]">
                    The Way we Think
                </Typography>

                <Typography variant={"bodyBoldUpper"} className="max-w-[26ch]">
                    We design every space with purpose and care. Our approach balances creativity, function, and context, ensuring architecture that inspires and endures.
                </Typography>

                <div className="w-[30vw] aspect-[576/333] relative hidden lg:block">
                    <Image
                        src={'/mockup-1.webp'}
                        alt="Mockup image"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="h-full flex items-center">
                <div className="w-full lg:w-[24vw] h-fit aspect-[465/258] relative">
                    <Image
                        src={'/mockup-1.webp'}
                        alt="Mockup image"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="space-y-12 lg:pt-24">
                <Typography variant={"bodyBoldUpper"} className="lg:max-w-[23ch]">
                    Our philosophy is built on clarity, context, and human experience. We observe each site carefully and understand the way people inhabit space. Design decisions are guided by proportion, light, and materiality to create environments that are both functional and inspiring. Collaboration with clients and attention to detail shape every stage of the process.
                    Every project is approached with sustainability and timelessness in mind. We craft spaces that connect people to place while allowing adaptability over time. Thoughtful planning and careful selection of materials ensure that each design endures. Our goal is to create architecture that is elegant, purposeful, and deeply human.
                </Typography>

                <Typography variant={"bodyBoldUpper"} className="max-w-[23ch] hidden lg:block">
                    Spaces should feel alive, fostering comfort, engagement, and a sense of belonging. We balance innovation with tradition to ensure each project resonates aesthetically and practically. By integrating environmental awareness with spatial storytelling, we deliver architecture that enriches daily life. Every intervention is considered, intentional, and designed to last.
                </Typography>
            </div>
        </div>
    )
}