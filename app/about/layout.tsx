import { NavbarV2 } from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (   
    <>
      <NavbarV2 />
        <main>{children}</main>
      <Footer/>
    </> 
  );
}
