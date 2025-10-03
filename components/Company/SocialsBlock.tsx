import { site } from "@/lib/data/site";
import Typography from "../Typography";

export default function SocialsBlock() {
    return (
        <div className="whitespace-nowrap">
            <Typography variant={"body"} className="whitespace-nowrap">
                {site.socials.instagram.name}
            </Typography>

            <Typography variant={"body"} className="whitespace-nowrap">
                {site.socials.linkedin.name}
            </Typography>

            <Typography variant={"body"} className="whitespace-nowrap">
                {site.socials.twitter.name}
            </Typography>
        </div>
    )
}