'use client';

import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const matchMedia = window.matchMedia(query);

        setMatches(matchMedia.matches);

        const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

        matchMedia.addEventListener('change', handler);

        return () => matchMedia.removeEventListener('change', handler);
    }, [])

    return matches;
}