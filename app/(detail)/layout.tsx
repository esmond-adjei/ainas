import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PageHero } from "../(home)/components/HeroSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <PageHero
        title=""
        backgroundImage="/animated-shapes.svg"
       />
      <main className="min-h-screen">
      {children}
      </main>
      <Footer />
    </>
  );
}