import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import CustomIcon from './CustomIcon';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-16 mt-20">
      <div className="container mx-auto px-4 space-y-8">


        {/* Flex Layout for Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Brief Description */}
          <div className="flex flex-col mb-8">

            <Link href="/" className="text-2xl w-max font-heading font-bold text-primary">
              <CustomIcon className="h-16 w-16 mx-auto" style={{fill: 'var(--primary-color)'}}/>
              AINAS
            </Link>
  
            <p className="text-sm text-gray-300 max-w-xs">
              Empowering communities with sustainable, nature-based solutions for a greener tomorrow.
            </p>

            {/* Social Media Icons */}
          <div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-5">
              <div className="flex">
                <Mail className="text-primary mr-4" size={20} />
                <div>
                  <h4 className="text-sm font-semibold">Email</h4>
                  <p className="text-gray-300 text-xs">info@ainas-ngo.org</p>
                </div>
              </div>

              <div className="flex">
                <Phone className="text-primary mr-4" size={20} />
                <div>
                  <h4 className="text-sm font-semibold">Phone</h4>
                  <p className="text-gray-300 text-xs">+233 24 000 0000</p>
                </div>
              </div>

              <div className="flex">
                <MapPin className="text-primary mr-4" size={20} />
                <div>
                  <h4 className="text-sm font-semibold">Our Address</h4>
                  <p className="text-gray-300 text-xs leading-5">
                    House No. 15, <br/>
                    Anyaa-Atlas Junction, <br/> 
                    GC-112-3633, <br/> 
                    Accra, Ghana <br/>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-4">
              <Link href="/" className="block text-sm hover:text-primary transition">Home</Link>
              <Link href="/about" className="block text-sm hover:text-primary transition">About</Link>
              <Link href="/impact" className="block text-sm hover:text-primary transition">Impact</Link>
              <Link href="/contact" className="block text-sm hover:text-primary transition">Contact</Link>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <p className="text-center text-gray-400 text-xs mt-8 border-t border-gray-400 border-opacity-50 py-4">
          &copy; {new Date().getFullYear()} AINAS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
