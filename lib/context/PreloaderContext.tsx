'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface PreloaderContextState {
    isLoading: boolean;
    finishPreloader: () => void;
}

const PreloaderContext = createContext<PreloaderContextState | null>(null);

export default function PreloaderProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [isLoading, setIsLoading] = useState(true);
    const finishPreloader = () => setIsLoading(false);

    const valueContext = useMemo(() => ({
        isLoading,
        finishPreloader,
    }), [isLoading]);

    return (
        <PreloaderContext value={valueContext}>
            {children}
        </PreloaderContext>
    )
}

export function usePreloader() {
    const ctx = useContext(PreloaderContext);

    if (!ctx) {
        throw new Error('usePreloader must be used inside a PreloaderProvider');
    }

    return ctx;
}