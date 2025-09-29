import clsx from "clsx";
import { CSSProperties, ReactNode, Ref, RefObject } from "react"

interface SectionContainerProps {
    className?: string;
    children: ReactNode;
    ref?: RefObject<HTMLElement | null>;
    style?: CSSProperties;
}

export default function SectionContainer({ className, children, style, ref }: Readonly<SectionContainerProps>) {
    return (
        <section ref={ref} className={clsx("w-full px-[24px] mx-auto", className)} style={style}>
            {children}
        </section>
    )
}