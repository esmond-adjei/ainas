'use client';

import InfoCard from "@/components/InfoCard";
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
    <section id="contact-us" className="section bg-gray-100 flex flex-col-reverse gap-6 xl:flex-row items-start justify-center">
        {/* Contact Info Block */}
        <div className="xl:w-1/2 w-full hcc">
            <div>
            
                <h2 className="heading-1 text-center">Contact Us</h2>
                <p className="text-lg text-center mb-8">Send Us a Message</p>

                {/* Contact Form */}     
                <form action="#" method="POST" className="form-container w-[500px]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
                    <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="input"
                        placeholder="Your Full Name"
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input"
                        placeholder="Your Email"
                    />
                    </div>
                </div>
                
                <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 text-sm">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="input"
                        placeholder="Subject of Your Message"
                    />
                </div>
                
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-sm">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="input"
                        rows={4}
                        placeholder="Your Message"
                    />
                </div>
                
                <button type="submit" className="submit-btn w-full">Send Message</button>
                </form>
            </div>
        </div>

        <div className="text-center xl:w-1/2 w-full">
            <h2 className="text-3xl font-semibold mb-6">Get Involved</h2>
            <p className="text-lg text-center mb-8">
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
                    className="bg-white w-full p-4 hover:bg-secondary rounded-lg transition-colors duration-100"
                >
                    <p className="text-gray-700 text-sm">{description}</p>
                </InfoCard>
                ))}
            </div>
        </div>

    </section>
  );
};

export default ContactUs;
