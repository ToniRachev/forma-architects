import SectionContainer from "@/components/SectionContainer";
import Typography from "@/components/Typography";
import TextMask from "@/components/TextMask";
import ParallaxImage from "@/components/ParallaxImage";
import Button from "@/components/Button";
import NavLink from "@/components/NavLink";

export default function About() {

    return (
        <SectionContainer>
            <div className="flex flex-col gap-12 lg:gap-36">
                <TextMask variant="section">
                    Forma Architects believes in thoughtful, human-centered design. We create architecture that connects emotion with utility. Forma Architects believes in thoughtful, human-centered design. We create architecture that connects emotion with utility.
                </TextMask>

                <div className="flex justify-center items-end gap-12">
                    <ParallaxImage
                        src="/home/about.webp"
                        alt="Mockup image"
                        className="w-full lg:w-[34svw] aspect-[673/779]"
                    />

                    <div className="hidden lg:block pb-12 space-y-8">
                        <Typography variant="bodyLarge" className="max-w-[40ch]">
                            Our work spans residential, cultural, and interior projects.   Each design is rooted in context, shaped by detail, and guided by a belief in timeless simplicity. We create spaces that inspire, connect, and serve daily life. Through simplicity and innovation, we craft architecture that feels timeless, sustainable, and human-centered.
                        </Typography>

                        <div className="w-fit">
                            <NavLink href={'/studio'}>
                                <Button kind="link">
                                    Who We Are
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

// export default function About() {
//     return (
//         <SectionContainer>
//             <div className="flex flex-col lg:flex-row lg:h-[100svh] gap-6 relative">
//                 <div className="w-full flex flex-col justify-between gap-24 lg:gap-0 py-24">
//                     <div>
//                         <Typography className="max-w-[23ch]" variant={"bodyBoldUpper"}>
//                             Forma Architects approaches every project with clarity and intention. We design spaces that merge beauty with lasting purpose.
//                         </Typography>
//                     </div>

//                     <div className="w-full flex flex-col items-center">
//                         <div className="lg:w-[22vw]">
//                             <Typography className="max-w-[25ch]" variant={"bodyBoldUpper"}>
//                                 Our work spans residential, cultural, and interior projects.
//                             </Typography>

//                             <div className="flex w-full justify-end">
//                                 <Typography className="max-w-[25ch] text-right" variant={"bodyBoldUpper"}>
//                                     Each design is rooted in context, shaped by detail, and guided by a belief in timeless simplicity. We create spaces that inspire, connect, and serve daily life.
//                                 </Typography>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="w-full flex justify-end">
//                         <Typography className="max-w-[23ch] text-right" variant={"bodyBoldUpper"}>
//                             Through simplicity and innovation, we craft architecture that feels timeless, sustainable, and human-centered.
//                         </Typography>
//                     </div>
//                 </div>

//                 <div className="relative w-full aspect-[6/8]">
//                     <Image
//                         src={"/mockup-2.webp"}
//                         alt="Mockup"
//                         fill
//                         className="object-cover"
//                     />
//                 </div>

//                 <div className="absolute lg:bottom-0 left-0 lg:left-12 ">
//                     <div className="lg:origin-left lg:-rotate-90 block">
//                         <Typography variant={"hero"}>
//                             About
//                         </Typography>
//                     </div>
//                 </div>
//             </div>
//         </SectionContainer>
//     )
// }