import ContactUs from "./components/ContactUsSection";
import GetInvolved from "./components/GetInvolvedSection";
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
    
    {/* <div className="bg-black flex gap-6 flex-col lg:flex-row"> */}
      {/* <GetInvolved/> */}
      <ContactUs/>
    {/* </div> */}
    </>
  );
}
