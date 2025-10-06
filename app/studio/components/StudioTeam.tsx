'use client';

import SectionContainer from "@/components/SectionContainer";
import TextSlideReveal from "@/components/TextSlideReveal";
import Typography from "@/components/Typography";
import { team, TeamMemberInterface } from "@/lib/data/team";
import { MEDIA } from "@/lib/gsap-constants";
import { useGSAP, gsap } from "@/lib/gsap-plugins";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import Image from "next/image";
import { useRef, useState } from "react";

interface MemberNameProps {
    member: TeamMemberInterface;
    setActiveMember: (index: number | null) => void;
    index: number;
}

interface MemberProps {
    member: TeamMemberInterface;
    isActive: boolean;
}

const MemberName = ({ member, setActiveMember, index }: Readonly<MemberNameProps>) => {

    const handleChange = (hovered: boolean) => {
        setActiveMember(hovered ? index : null)
    }

    return (
        <li className="">
            <TextSlideReveal variant={"hero"} onChange={handleChange} className="text-left">
                {member.name}
            </TextSlideReveal>
        </li>
    )
}

const MemberDetails = ({ member, isActive }: Readonly<MemberProps>) => {
    const memberRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(memberRef.current, {
            autoAlpha: isActive ? 1 : 0,
        })
    }, { dependencies: [isActive] })

    return (
        <div ref={memberRef}>
            <div className="absolute top-0 left-0 w-full h-full">
                <Image
                    src={member.image}
                    alt="Mockup image"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="absolute bottom-12 left-12 w-full mix-blend-difference text-white max-w-prose space-y-4">
                <Typography variant={"bodyBoldUpper"}>
                    {member.role}
                </Typography>

                <Typography variant={"bodyBoldUpper"}>
                    {member.description}
                </Typography>
            </div>
        </div>
    )
}

export default function StudioTeam() {
    const [hoveredMemberIndex, setHoveredMemberIndex] = useState<number | null>(null);
    const isDesktop = useMediaQuery(MEDIA.desktop);


    if (!isDesktop) {
        return (
            <SectionContainer>
                <div className="space-y-4 pb-12">
                    <Typography variant={"big"}>
                        Team
                    </Typography>

                    <Typography variant={"bodyLarge"}>
                        A collective of visionaries shaping stories through craft, collaboration, and detail.
                    </Typography>
                </div>

                <ul>
                    {team.map((member) => (
                        <li key={member.id} className="border-b flex justify-between py-8">
                            <div className="space-y-2">
                                <Typography variant={"section"}>
                                    {member.name}
                                </Typography>

                                <Typography variant={"body"}>
                                    {member.role}
                                </Typography>
                            </div>

                            <div className="w-[30vw] aspect-[200/200] relative">
                                <Image
                                    src={member.image}
                                    alt={`Picture of ${member.name}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </SectionContainer>
        )
    }

    return (
        <div className="w-full h-[100svh] flex gap-2">
            <div className="w-3/4 flex justify-center items-center relative h-full bg-background">
                {team.map((member, index) => (
                    <MemberDetails
                        key={member.id}
                        member={member}
                        isActive={hoveredMemberIndex === index}
                    />
                ))}

                <Typography variant={"big"} className="mix-blend-difference text-white">
                    Team
                </Typography>
            </div>

            <div className="w-full h-full flex items-center">
                <ul className="">
                    {team.map((member, index) => (
                        <MemberName
                            key={member.id}
                            member={member}
                            setActiveMember={(index: number | null) => setHoveredMemberIndex(index)}
                            index={index}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}