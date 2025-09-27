import { ReactNode } from "react";

export default function PageWrapper({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="space-y-[200px]">
            {children}
        </div>
    )
}