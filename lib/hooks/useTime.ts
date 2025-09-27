'use client';

import { useEffect, useState } from "react";

export function useTime() {
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((new Date()));
        }, 1000);

        return () => clearInterval(timer);
    }, [])

    return time;
}