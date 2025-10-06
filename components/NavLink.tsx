'use client';

import { ReactNode, } from "react";
import { useTransition } from "@/lib/context/TransitionContext";

interface NavLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export default function NavLink({ href, className, children }: Readonly<NavLinkProps>) {
    const { startTransition } = useTransition();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        startTransition(href);
    }

    return <a href={href} target="_top" className={className} onClick={handleClick}>{children}</a>
}