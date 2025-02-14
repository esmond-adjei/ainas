'use client';
import { Leaf, Users, Lightbulb } from 'lucide-react';

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
        <section className="section bg-gray-100 flex flex-col-reverse xl:flex-row gap-10" >
        {/* COMPLEMENTARY VIDEO */}
        <div className='xl:w-1/2 hcc'>
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
                <h2 className="heading-1">About Us</h2>
                <p className="font-serif text-xl text-dark mb-8">
                At AINAS, our mission is to empower both rural and urban African communities by implementing sustainable, nature-based solutions that improve livelihoods, restore ecosystems, and enhance resilience to climate change. We are driven by a vision of a prosperous, inclusive, and sustainable Africa where every community can thrive.
                </p>

                <div className='space-y-4'>
                {values.map(({ icon: Icon, title, description }, index) => (
                    <div
                     className='text-left max-w-lg w-full flex gap-4' 
                     key={index}
                    >
                    <div>
                        <Icon className="text-primary" size="30"/>
                    </div>
                    <div>
                        <h3 className="heading-2">{title}</h3>
                        <p className="text-gray-600">{description}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}
