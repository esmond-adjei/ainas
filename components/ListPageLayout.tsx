import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero } from "@/app/(home)/components/HeroSection";
import Section from "./SectionLayout";


export default function ListPageLayout({
  title,
  subtitle,
  bannerImage = '/images/visual-impact.jpg',
  children,
}: Readonly<{
    title: string;
    subtitle: string;
    bannerImage?: string;
    children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <PageHero 
        title={title}
        backgroundImage={bannerImage}
      />
        <main className="py-10">
            <Section >
                <h2 className='heading-1 mb-4'>{title}</h2>
                <p className='text-lg leading-relaxed mb-4'>{subtitle}</p>
            </Section>

              <section className="grid-container">
                {children}
              </section>
        </main>
      <Footer/>
    </> 
  );
}
