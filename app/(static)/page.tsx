import ContactUs from "../../components/landing-page/ContactUsSection";
import HeroSection from "../../components/landing-page/HeroSection";
import Impact from "../../components/landing-page/ImpactSection";
import AboutUs from "../../components/landing-page/AboutUsSection";
import OurTeam from "../../components/landing-page/OurTeamSection";
// import PartnerSection from "./components/PartnersSection";
import WhatWeDoSection from "../../components/landing-page/WhatWeDoSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AINAS | African Initiative for Nature-Based Solutions',
  description:
    'AINAS is dedicated to empowering African communities with innovative nature-based solutions to combat climate change, restore ecosystems, build resilient communities, and create sustainable livelihoods. Join us in shaping a prosperous Africa.',
  keywords: [
    'AINAS',
    'African Initiative for Nature-based Solutions',
    'nature-based solutions',
    'Africa',
    'community empowerment',
    'climate change',
    'ecosystem restoration',
    'sustainable livelihoods',
    'environmental sustainability',
    'innovation',
    'inclusivity',
    'resilient communities',
    'sustainable Africa',
  ],
  openGraph: {
    title: 'AINAS | African Initiative for Nature-Based Solutions',
    description:
      'Empowering African communities with nature-based solutions for climate resilience, ecosystem restoration, and sustainable livelihoods. Discover AINAS.',
    url: 'https://www.ainas.org',
    siteName: 'AINAS',
    images: [
      {
        url: '/images/hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'African Initiative for Nature-based Solutions (AINAS) Homepage',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AINAS | African Initiative for Nature-Based Solutions',
    description:
      'AINAS: Driving sustainable change in Africa through nature-based solutions. Learn how we empower communities and restore ecosystems.',
    images: ['/images/hero-bg.webp'],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutUs/>
      {/* <PartnerSection/> */}
      <Impact/>
      <WhatWeDoSection/>
      <OurTeam/>
      <ContactUs/>
    </>
  );
}
