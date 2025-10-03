import Typography from "../Typography"
import { site } from "@/lib/data/site"


export default function AddressBlock() {
    return (
        <div>
            <Typography variant={"body"} className="whitespace-nowrap">
                {site.address.company}
                <br />
                {site.address.street}
                <br />
                {site.address.city}, {site.address.postalCode}
            </Typography>
        </div>
    )
}