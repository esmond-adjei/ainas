import ContactUs from "../../components/landing-page/ContactUsSection";
import HeroSection from "../../components/landing-page/HeroSection";
import Impact from "../../components/landing-page/ImpactSection";
import AboutUs from "../../components/landing-page/AboutUsSection";
import OurTeam from "../../components/landing-page/OurTeamSection";
// import PartnerSection from "./components/PartnersSection";
import WhatWeDoSection from "../../components/landing-page/WhatWeDoSection";


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
