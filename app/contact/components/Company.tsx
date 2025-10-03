import AddressBlock from "@/components/Company/AddressBlock";
import ContactsBlock from "@/components/Company/ContactsBlock";
import SocialsBlock from "@/components/Company/SocialsBlock";

export default function Company() {
    return (
        <div className="space-y-12">
            <AddressBlock />
            <ContactsBlock />
            <SocialsBlock />
        </div>
    )
}