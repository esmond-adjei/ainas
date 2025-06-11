'use client';

import InfoCard from "@/components/InfoCard";
import ContactForm from "@/components/ContactForm";
import { Users, Hand, Heart, Briefcase } from 'lucide-react';

const involvementOptions = [
    {
      icon: Users,
      title: "Become a Member",
      description:
        "Join our community of changemakers and contribute to impactful projects across Africa.",
    },
    {
      icon: Hand,
      title: "Volunteer",
      description:
        "Get hands-on experience by volunteering for various projects and initiatives.",
    },
    {
      icon: Heart,
      title: "Donate",
      description:
        "Your donations help us create lasting change by supporting our projects and initiatives.",
    },
    {
      icon: Briefcase,
      title: "Corporate Sponsorship",
      description:
        "Partner with us as a corporate sponsor to align your brand with sustainable development goals.",
    },
  ];


const ContactUs = () => {
  return (
    <section 
        id="contact-us" 
        className="section bg-gray-100 bg-cover bg-fixed flex flex-col-reverse gap-6 xl:flex-row items-start justify-center"
        style={{
            backgroundImage: `url(/pattern-randomized-light.svg)`,
        }}
    >        {/* Contact Info Block */}
        <div className="w-full xl:hcc xl:w-1/2">
            <div>
                <h2 className="heading-1 text-center">Contact Us</h2>
                <ContactForm />
            </div>
        </div>

        <div className="text-center xl:w-1/2 w-full">
            <h2 className="heading-1">Get Involved</h2>
            <p className="heading-3 text-center mb-8">
                Join us in creating a sustainable and prosperous future for Africa through nature-based solutions. Here's how you can contribute:
            </p>

            {/* Grid for the involvement options */}
            <div 
                style={{"--min-grid-item-width": "200px"} as React.CSSProperties} 
                className="grid-container gap-6"
            >
                {involvementOptions.map(({ icon, title, description }, index) => (
                <InfoCard
                    key={index}
                    icon={icon}
                    title={title}
                    iconSize="30"
                    className="bg-white shadow w-full p-4 hover:bg-secondary rounded-lg transition-colors duration-100"
                >
                    <p className="text-gray-700">{description}</p>
                </InfoCard>
                ))}
            </div>
        </div>

    </section>
  );
};

export default ContactUs;
