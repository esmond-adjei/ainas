'use client';
import { ROUTES } from '@/lib';
import Link from 'next/link';
import { Leaf, Users, Lightbulb, ChevronRight } from 'lucide-react';

const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description:
        'We promote long-term solutions that ensure the health of both the environment and the communities we serve.',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description:
        'We embrace diversity and work towards equal opportunities, ensuring no community is left behind.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Leveraging technology and local knowledge, we design tailored solutions that tackle Africa’s unique challenges.',
    },
  ];

export default function AboutUs() {
    return (
        <section className='section bg-gray-100 space-y-10'>
            {/* COMPLEMENTARY VIDEO */}
            <div className="flex flex-col-reverse xl:flex-row gap-4 md:gap-10" >
                <div className='xl:w-1/2 flex items-start'>
                    <iframe
                    width="624"
                    height="351"
                    src="https://www.youtube.com/embed/13vFEtcv-8A?si=P1MCyR--r5NcJ0I4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="max-w-4xl mx-auto rounded-lg"
                    ></iframe>
                </div>
                    {/* Mission */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="heading-1 !mb-2">About Us</h2>
                    <Link
                        href={ROUTES.about}
                        className='text-sm mb-4 w-max hcc gap-0 hover:gap-2 px-2.5 py-1.5 rounded-full bg-green-200 text-primary transition-all duration-200'
                        >
                        Learn more <ChevronRight size={24}/>
                    </Link>
                    <p className="font-serif text-xl text-dark mb-8">
                    AINAS seeks to empower African communities with nature-based 
                    solutions to combat climate change, restore ecosystems, 
                    build resilient communities and create sustainable livelihoods. <br/> <br/>
                    We will merge innovation, traditional knowledge and 
                    partnerships to create lasting impact by transforming 
                    challenges into opportunities for a resilient and prosperous Africa. 
                    Join us in shaping a future where nature and communities thrive together.
                    </p>

                </div>
            </div>

            <div className='flex gap-4 flex-col md:flex-row'>
                {values.map(({ icon: Icon, title, description }, index) => (
                    <div
                        className='text-left max-w-lg w-full flex gap-4' 
                        key={index}
                    >
                    <div className="shrink-0 hcc size-12 rounded-full bg-green-200">
                        <Icon className="text-primary" size="30"/>
                    </div>
                    <div>
                        <h3 className="heading-2">{title}</h3>
                        <p className="text-gray-600">{description}</p>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
