'use client';

import { useLenis } from "lenis/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export default function NavLink({ href, className, children }: Readonly<NavLinkProps>) {
    const lenis = useLenis();
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        lenis?.stop();
        router.push(href);
        lenis?.start();
    }

    return <a href={href} target="_top" className={className} onClick={handleClick}>{children}</a>
}