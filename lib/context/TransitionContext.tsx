'use client';

import { createContext, ReactNode, useContext, useMemo } from "react";
import { gsap, useGSAP } from "@/lib/gsap-plugins";
import { usePathname, useRouter } from "next/navigation";
import { useLenis } from "lenis/react";

interface TransitionContextState {
    startTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextState | null>(null);

export default function TransitionProvider({ children }: Readonly<{ children: ReactNode }>) {
    const pathname = usePathname();
    const router = useRouter();
    const lenis = useLenis();

    const { contextSafe } = useGSAP(() => {
        const mainContent = document.querySelector('#main-content');

        gsap.to(mainContent, {
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
                lenis?.start();
            }
        })
    }, [pathname]);

    const startTransition = contextSafe((href: string) => {
        const mainContent = document.querySelector('#main-content');

        gsap.killTweensOf(mainContent);
        lenis?.stop();

        gsap.to(mainContent, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                router.push(href);
            }
        })
    })

    const contextValue = useMemo(() => ({
        startTransition,
    }), [startTransition]);

    return (
        <TransitionContext value={contextValue}>
            {children}
        </TransitionContext>
    )
}

export function useTransition() {
    const ctx = useContext(TransitionContext);

    if (!ctx) {
        throw new Error("useTransition must be used inside a Transition Provider");
    }

    return ctx;
}