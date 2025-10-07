'use client';

import { ReactNode, } from "react";
import { useTransition } from "@/lib/context/TransitionContext";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export default function NavLink({ href, className, children }: Readonly<NavLinkProps>) {
    const pathname = usePathname();
    const { startTransition } = useTransition();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (pathname === href) return;
        startTransition(href);
    }

    return <a href={href} target="_top" className={className} onClick={handleClick}>{children}</a>
}