import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { Logo } from './CustomIcon';
import React from 'react';
import { CONTACTS } from '@/content/location';



const quickLinks = [
  {
    label: 'home',
    href: '/'
  },
  {
    label: 'about',
    href: '/about'
  },
  {
    label: 'team',
    href: '/team'
  },
  {
    label: 'contact',
    href: '/contact'
  },
  {
    label: 'gallery',
    href: '/gallery'
  }
];

const socials = [
  {
    icon: Facebook,
    href: 'https://facebook.com',
  },
  {
    icon: Instagram,
    href: 'https://instagram.com',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com',
  },
  {
    icon: Youtube,
    href: 'https://youtube.com',
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-16">
      <div className="container mx-auto px-4 space-y-8">


        {/* Flex Layout for Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Brief Description */}
          <div className="flex flex-col mb-4">
            <Link href="/" className="mb-2 w-max">
              <Logo theme='secondary'/>
            </Link>
  
            <p className="heading-3 !text-base text-gray-300 max-w-full lg:max-w-xs">
              Empowering communities with sustainable, nature-based solutions for a greener tomorrow.
            </p>

            {/* Social Media Icons */}
          <div className='mt-4'>
            {/* <h3 className="heading-2mb-2">Follow Us</h3> */}
            <div className="flex space-x-4">
              {
                socials.map((social, index) => (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-primaryBright transition">
                    <social.icon size={24} />
                  </a>
                ))
              }
            </div>
          </div>

          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="heading-2 mb-2">Contact</h3>
            <div className="flex flex-wrap [&>*]:w-1/2 gap-y-4 md:flex-col md:gap-4 md:[&>*]:w-full">
            {CONTACTS.map((contact, index) => (
              <div key={index} className="flex">
              <contact.icon className="text-primary mr-4" size={20} />
                <div>
                  <h4 className="font-semibold">{contact.title}</h4>
                  <p className="font-sans text-xs text-white/60">
                    {contact.multiline ? (
                      contact.content.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}<br />
                        </React.Fragment>
                      ))
                    ) : (
                      <a href={contact.href} className="hover:text-primaryBright">{contact.content}</a>
                    )}
                  </p>
                </div>
              </div>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="heading-2 mb-4">Quick Links</h3>
            <div className="flex gap-2 md:flex-col">
              {
                quickLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="block text-sm hover:text-primaryBright w-max group">
                  <ArrowRight className='inline opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200' size={16}/>  {link.label}
                  </Link>
                ))
              }
            </div>
          </div>

        </div>

        {/* Copyright */}
        <p className="font-sans text-center text-gray-400 text-xs mt-8 border-t border-gray-400 border-opacity-50 py-4">
          &copy; {new Date().getFullYear()} AINAS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
