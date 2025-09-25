import clsx from "clsx";
import { ReactNode } from "react"

interface SectionContainerProps {
    className?: string;
    children: ReactNode;
}

export default function SectionContainer({ className, children }: Readonly<SectionContainerProps>) {
    return (
        <section className={clsx("w-[112rem] mx-auto", className)}>
            {children}
        </section>
    )
}