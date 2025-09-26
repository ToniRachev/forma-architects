import Typography from "@/components/Typography";
import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col lg:flex-row lg:h-[100svh] gap-6 relative">
            <div className="w-full flex flex-col justify-between gap-24 lg:gap-0 lg:py-24">
                <div>
                    <Typography className="max-w-[23ch]" variant={"bodyBoldUpper"}>
                        Forma Architects approaches every project with clarity and intention. We design spaces that merge beauty with lasting purpose.
                    </Typography>
                </div>

                <div className="w-full flex flex-col items-center">
                    <div className="lg:w-[22vw]">
                        <Typography className="max-w-[25ch]" variant={"bodyBoldUpper"}>
                            Our work spans residential, cultural, and interior projects.
                        </Typography>

                        <div className="flex w-full justify-end">
                            <Typography className="max-w-[25ch] text-right" variant={"bodyBoldUpper"}>
                                Each design is rooted in context, shaped by detail, and guided by a belief in timeless simplicity. We create spaces that inspire, connect, and serve daily life.
                            </Typography>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-end">
                    <Typography className="max-w-[23ch] text-right" variant={"bodyBoldUpper"}>
                        Through simplicity and innovation, we craft architecture that feels timeless, sustainable, and human-centered.
                    </Typography>
                </div>
            </div>

            <div className="relative hidden lg:block w-full">
                <Image
                    src={"/mockup-2.webp"}
                    alt="Mockup"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="absolute left-0 lg:left-12 bottom-0">
                <div className="origin-left -rotate-90 block">
                    <Typography variant={"hero"}>
                        About
                    </Typography>
                </div>
            </div>
        </div>
    )
}