import type { Metadata } from "next";
import { Crimson_Pro, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
 
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AINAS",
  description: "African Initiative for Nature-based Solutions",
  metadataBase: new URL('https://www.ainas.org'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${inter.variable} antialiased`}>
      <body> 
        <Analytics/>
        <Navbar/>
          <main>{children}</main>
        <Footer/>     
      </body>
    </html>
  );
}
