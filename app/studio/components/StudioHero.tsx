import PageStartSection from "@/components/PageStartSection";
import Typography from "@/components/Typography";
import Image from "next/image";

export default function StudioHero() {
    return (
        <PageStartSection>
            <Typography variant={"hero"} className="max-w-[20ch]">
                Shaping spaces with clarity, purpose, and timeless design.
            </Typography>

            <div className="flex flex-col lg:flex-row gap-4 justify-between lg:pt-48">
                <div className="pt-24 max-w-prose">
                    <Typography variant={"bodyBoldUpper"}>
                        We approach every project with care and clarity, designing spaces that are functional, inspiring, and timeless. Each environment is shaped by light, material, and context to create architecture that connects people and place.
                    </Typography>
                </div>

                <div className="w-full lg:w-[55vw] h-full aspect-[1076/582] relative">
                    <Image
                        src={"/mockup-1.webp"}
                        alt="Mockup image"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </PageStartSection>
    )
}