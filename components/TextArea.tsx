'use client';

import { useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap-plugins";
import clsx from "clsx";
import Typography from "./Typography";
import useFloatingLabel from "@/lib/hooks/useFloatingLabel";
import Label from "./Label";
import BaseField from "./Input/BaseField";

interface InputInterface extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
    watchValue: string;
}

export default function TextArea({ label, error, watchValue, ...props }: Readonly<InputInterface>) {
    return (
        <BaseField
            label={label}
            error={error}
            watchValue={watchValue}
            name={props.name}
            labelStyle={"!top-0"}
        >
            {({ inputProps }) => (
                <textarea
                    {...props}
                    {...inputProps}
                    className={clsx(
                        "border-b border-black/50 resize-none  h-auto w-full focus:outline-0 focus:border-black/100 active:outline-0 tranition-all duration-300 ease-in-out",
                        error && 'border-red-600'
                    )}
                />
            )}
        </BaseField>
    )
}