import ContactUs from "./components/ContactUsSection";
import GetInvolved from "./components/GetInvolvedSection";
import HeroSection from "./components/HeroSection";
import Impact from "./components/ImpactSection";
import Mission from "./components/MissionSection";
import OurTeam from "./components/OurTeamSection";
import WhatWeDoSection from "./components/WhatWeDoSection";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Mission/>
    <Impact/>
    <WhatWeDoSection/>
    <OurTeam/>
    <GetInvolved/>
    <ContactUs/>
    </>
  );
}
