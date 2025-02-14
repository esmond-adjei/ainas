import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero } from "@/app/(home)/components/HeroSection";


export default function ListPageLayout({
  title,
  subtitle,
  bannerImage = '/images/visual-impact.webp',
  children,
  otherChildren
}: Readonly<{
    title: string;
    subtitle: string;
    bannerImage?: string;
    children: React.ReactNode;
    otherChildren?: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <PageHero 
        title={title}
        description={subtitle}
        backgroundImage={bannerImage}
      />
        <main className="py-10">
              <section className="grid-container px-4 md:px-0">
                {children}
              </section>

              {
                otherChildren 
              }
        </main>
      <Footer/>
    </> 
  );
}
