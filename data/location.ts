import { Mail, MapPin, Phone } from "lucide-react";

export const CONTACTS = [
  {
    icon: Mail,
    title: "Email",
    content: "support@ainas.org",
    href: "mailto:support@ainas.org",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+233 24 000 0000",
    href: "https://wa.me/+233240000000",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "No. 19 Yaa Bema Avenue,\nWestland Blvd,\nAccra, Ghana",
    multiline: true,
  },
];