import Button from "@/components/Button";
import Typography from "@/components/Typography";
import Link from "next/link";
import { Ref } from "react";

export default function ThankYou({ ref }: Readonly<{ ref: Ref<HTMLDivElement> }>) {
    return (
        <div ref={ref} className="text-center opacity-0 flex flex-col items-center absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 space-y-12">
            <Typography variant={"big"} className="whitespace-nowrap">
                Thank You
            </Typography>

            <Typography variant={"section"}>
                We’ll be in touch soon.
            </Typography>

            <div className="w-fit">
                <Link href={"/"}>
                    <Button kind={"link"}>
                        Back to home
                    </Button>
                </Link>
            </div>
        </div>
    )
}