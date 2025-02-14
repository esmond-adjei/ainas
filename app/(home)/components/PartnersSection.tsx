'use client';
import { useState } from "react";

const PARTNERS = [
    { 'name': 'SOFIA' },
    { 'name': 'AI4SD' },
    { 'name': 'EJP' },
    { 'name': 'MATE' },
    { 'name': 'CSIR' },

    { 'name': 'SOFIA' },
    { 'name': 'AI4SD' },
    { 'name': 'EJP' },
    { 'name': 'MATE' },
    { 'name': 'CSIR' },

    { 'name': 'SOFIA' },
    { 'name': 'AI4SD' },
    { 'name': 'EJP' },
    { 'name': 'MATE' },
    { 'name': 'CSIR' },
]

export default function PartnerSection() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <section className="section !px-0 bg-white">
            <div className="">
                <h2 className="font-serif text-5xl font-semibold text-center mb-8">Our Partners</h2>

                <div className="overflow-hidden">
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className={`flex gap-10 lg:gap-20 animate-marquee ${isHovered ? 'pause-animation' : ''}`}>
                            {PARTNERS.map((partner, index) => (
                                <div 
                                    key={index} 
                                    className="flex-shrink-0 opacity-20 hover:opacity-100 grayscale hover:grayscale-0 transition-all"
                                >
                                    <h1 
                                    className="inline cursor-pointer text-4xl lg:text-6xl font-bold text-black/40 hover:text-black transition-all duration-400">
                                        {partner.name}
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    animation: marquee 40s linear infinite;
                    width: fit-content;
                }

                .pause-animation {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}