'use client';

import { ReactNode, useState } from "react";
import Label from "@/components/Label";
import Typography from "@/components/Typography";


interface BaseFieldProps {
    label: string;
    error?: string;
    watchValue?: string;
    name?: string;
    labelStyle?: string;
    children: (props: {
        isFocused: boolean;
        inputProps: {
            onFocus: () => void;
            onBlur: () => void;
        };
    }) => ReactNode;
}

export default function BaseField({ label, error, watchValue, name, labelStyle, children }: Readonly<BaseFieldProps>) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="flex flex-col">
            <div className="relative">
                <Label
                    isFocused={isFocused}
                    isEmpty={watchValue ? watchValue?.trim() === "" : true}
                    label={label}
                    htmlFor={name}
                    className={labelStyle}
                />

                {children({
                    isFocused,
                    inputProps: {
                        onFocus: () => setIsFocused(true),
                        onBlur: () => setIsFocused(false)
                    }
                })}
            </div>

            <div className="h-[3vh]">
                <Typography variant={"label"} className="w-fit text-red-600">
                    {error}
                </Typography>
            </div>
        </div>
    )
}