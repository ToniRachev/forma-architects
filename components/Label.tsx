'use client';

import useFloatingLabel from "@/lib/hooks/useFloatingLabel";
import clsx from "clsx";

interface LabelInterface extends React.LabelHTMLAttributes<HTMLLabelElement> {
    isFocused: boolean;
    isEmpty: boolean;
    error?: boolean;
    label: string;
    className?: string;
}

export default function Label({ isFocused, isEmpty, error = false, className, label, ...props }: Readonly<LabelInterface>) {
    const labelRef = useFloatingLabel(isFocused, isEmpty);

    return (
        <label
            {...props}
            ref={labelRef}
            className={clsx(
                "absolute top-1/2 -translate-y-1/2 left-0 select-none pointer-events-none",
                error && 'text-red-600',
                className
            )}
        >
            {label}
        </label>
    )
}