import { clsx } from "clsx";
import { cva } from "class-variance-authority";
import { ReactNode } from "react";


interface TypographyProps {
    variant: "big" | "hero" | "section" | "tagline" | "bodyLarge" | "bodyBoldUpper" | "body" | "caption" | "label";
    className?: string;
    children: ReactNode;
    color?: "black" | "white";
}

const variantToElement: Record<TypographyProps["variant"], keyof HTMLElementTagNameMap> = {
    big: "h1",
    hero: "h1",
    section: "h2",
    tagline: "h3",
    bodyLarge: "p",
    bodyBoldUpper: "p",
    body: "p",
    caption: "span",
    label: "span",
};

const typography = cva("", {
    variants: {
        variant: {
            big: "font-heading font-black text-[clamp(3rem,10vw,12.5rem)] uppercase",        // 48px → 200px
            hero: "font-heading font-black text-[clamp(2.25rem,6vw,6rem)] uppercase",      // 36px → 96px
            section: "font-heading font-bold text-[clamp(1.5rem,4vw,3rem)]",                // 24px → 48px
            tagline: "font-heading font-semibold text-[clamp(1.125rem,3vw,2rem)] uppercase", // 18px → 32px
            bodyLarge: "font-body font-regular text-[clamp(1rem,2.5vw,1.375rem)]",          // 16px → 22px
            bodyBoldUpper: "font-body font-bold text-[clamp(0.875rem,2vw,1rem)] uppercase", // 14px → 16px
            body: "font-body font-regular text-[clamp(0.875rem,2vw,1rem)]",                 // 14px → 16px
            caption: "font-body font-light text-[clamp(0.75rem,1.5vw,0.875rem)]",           // 12px → 14px
            label: "font-body font-regular text-[clamp(0.625rem,1.2vw,0.75rem)]",           // 10px → 12px
        },
        color: {
            black: "text-black",
            white: "text-white",
        }
    },
    defaultVariants: {
        variant: "body",
        color: "black"
    },
});

export default function Typography({ variant, className, color = "black", children, }: Readonly<TypographyProps>) {
    const Component = variantToElement[variant];

    return (
        <Component className={clsx(typography({ variant, color }), className)}>{children}</Component>
    )
}