import { ReactNode } from "react";
import SectionContainer from "./SectionContainer";

export default function PageStartSection({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <SectionContainer>
            <section className="pt-36">
                {children}
            </section>
        </SectionContainer>
    )
}