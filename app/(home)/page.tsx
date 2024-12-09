import ContactUs from "./components/ContactUsSection";
import HeroSection from "./components/HeroSection";
import Impact from "./components/ImpactSection";
import Mission from "./components/MissionSection";
import OurTeam from "./components/OurTeamSection";
import PartnerSection from "./components/PartnersSection";
import WhatWeDoSection from "./components/WhatWeDoSection";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Mission/>
    <PartnerSection/>
    <Impact/>
    <WhatWeDoSection/>
    <OurTeam/>
    <ContactUs/>
    </>
  );
}
