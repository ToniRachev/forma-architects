import SectionContainer from "@/components/SectionContainer";
import Typography from "@/components/Typography";
import Image from "next/image";

export default function StatementBlock() {
    return (
        <SectionContainer>
            <div className="w-full flex justify-between">
                <div className="max-w-[35ch] hidden lg:block">
                    <Typography variant={"body"}>
                        We approach every project with precision, ensuring clarity in design, context in planning, and thoughtful craftsmanship. Every decision is guided by care, balancing aesthetics, function, and human experience to create architecture that endures.
                    </Typography>
                </div>

                <div className="w-full lg:w-[40svw]">
                    <div className="w-full lg:w-[40svw] aspect-[749/448] relative">
                        <Image
                            src={"/mockup-1.webp"}
                            alt="Mockup image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="pt-4">
                        <Typography variant={"bodyBoldUpper"}>
                            Our work reflects a dedication to context, materiality, and spatial harmony. Each environment is crafted with meticulous attention, combining creativity, sustainability, and care to produce spaces that inspire, connect people, and stand the test of time.
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <Typography variant={"hero"}>
                    Craft.
                </Typography>

                <Typography variant={"hero"}>
                    Clarity.
                </Typography>

                <Typography variant={"hero"}>
                    Context.
                </Typography>
            </div>
        </SectionContainer>
    )
}