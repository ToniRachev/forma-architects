import { site } from "@/lib/data/site";
import Typography from "../Typography";

export default function ContactsBlock() {
    return (
        <div className="whitespace-nowrap space-y-4">
            <Typography variant={"body"} className="">
                General Inquiries
                <br />
                {site.contacts.inquiries}
            </Typography>

            <Typography variant={"body"} className="">
                New Projects
                <br />
                {site.contacts.projects}
            </Typography>

            <Typography variant={"body"} className="">
                Press & Media
                <br />
                {site.contacts.press}
            </Typography>


            <Typography variant={"body"} className="">
                Phone
                <br />
                {site.contacts.phone}
            </Typography>
        </div>
    )
}