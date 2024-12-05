'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import CustomIcon from './CustomIcon';
import { ExpandableSection } from './ExpandableSection';
import { ROUTES } from '@/lib';

interface DropDownMenuItemProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
  menuName: string;
  children: React.ReactNode;
}

const DropDownMenuItem: React.FC<DropDownMenuItemProps> = ({
  menuName, 
  open, 
  setOpen, 
  className = '', 
  children
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setOpen]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center menu-item ${className}`}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {menuName} 
        {open ? (
          <ChevronUp className="ml-1" size={16} />
        ) : (
          <ChevronDown className="ml-1" size={16} />
        )}
      </button>

      {open && (
        <div className="relative">
          <span className="size-4 top-0 right-10 bg-gray-50 rotate-45 -translate-x-1/2 shadow-lg absolute z-40"></span>
          <div
            className="bg-gray-50 absolute z-40 top-2 -translate-x-[25%] w-40 p-2 text-sm rounded-lg text-dark shadow-lg"
            role="menu"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const NavMenu: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <button
        className={`block md:hidden ${isScrolled ? 'text-dark' : 'text-light'}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`${
          mobileMenuOpen
            ? 'absolute -top-4 left-0 h-screen bg-gradient-to-b from-black to-transparent transition-all duration-300'
            : 'hidden'
        } w-full`}
      >
        <div
          ref={menuRef}
          className="drawer [&>*]:block space-y-6 flex flex-col px-10 py-4 pt-8 text-dark bg-white backdrop-blur-lg rounded-b-3xl shadow-lg"
          aria-expanded={mobileMenuOpen}
          style={{
            ['--drawer-height-final' as any]: '100%',
            ['--animation-duration' as any]: '0.8s',
          }}
        >
          <Link href={ROUTES.home} className="menu-item">
            Home
          </Link>

          <ExpandableSection 
            title="About Us" 
            variant="dropdown" 
            className="menu-item !m-0 !border-none"
          >
            <Link
              href="/about"
              className="block px-4 py-2 hover:bg-gray-200"
              role="menuitem"
            >
              About Us
            </Link>
            <Link
              href="/team"
              className="block px-4 py-2 hover:bg-gray-200"
              role="menuitem"
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 hover:bg-gray-200"
              role="menuitem"
            >
              Contact Us
            </Link>
          </ExpandableSection>

          <ExpandableSection 
            title="Explore" 
            variant="dropdown" 
            className="menu-item !m-0 !border-none"
          >
            <Link
              href="/what-we-do"
              className="block px-4 py-2 hover:bg-gray-200"
              role="menuitem"
            >
              What We Do
            </Link>
            <Link
              href="/impact"
              className="block px-4 py-2 hover:bg-gray-200"
              role="menuitem"
            >
              Our Impact
            </Link>
          </ExpandableSection>

          <Link 
            href="#contact-us" 
            className="menu-item bg-primaryDark !text-primaryBright hover:!text-primaryDark"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openExplore, setOpenExplore] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTheme = `menu-item hover:!text-dark ${
    isScrolled ? '!text-dark' : '!text-light'
  }`;

  return (
    <motion.header
      className={`fixed hcb flex-wrap top-0 z-40 w-full p-4 lg:px-10 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-sm text-dark' : 'bg-transparent text-light'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <Link
          href="/"
          className={`text-2xl font-heading font-bold ${
            isScrolled ? 'text-primary' : 'text-light'
          }`}
        >
          <CustomIcon
            className="size-12 inline-block"
            style={{
              fill: isScrolled ? 'var(--primary-color)' : 'white',
            }}
          />
          AINAS
        </Link>
      </div>

      <div className="gap-4 hidden md:flex items-center">
        <Link href={ROUTES.home} className={navTheme}>
          Home
        </Link>

        <DropDownMenuItem
          menuName="About Us"
          className={navTheme}
          open={openAbout}
          setOpen={setOpenAbout}
        >
          <Link
            href="/about"
            className="block px-4 py-2 hover:bg-gray-200"
            role="menuitem"
          >
            About Us
          </Link>
          <Link
            href="/team"
            className="block px-4 py-2 hover:bg-gray-200"
            role="menuitem"
          >
            Our Team
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 hover:bg-gray-200"
            role="menuitem"
          >
            Contact Us
          </Link>
        </DropDownMenuItem>

        <DropDownMenuItem
          menuName="Explore"
          className={navTheme}
          open={openExplore}
          setOpen={setOpenExplore}
        >
          <Link
            href="/what-we-do"
            className="block px-4 py-2 hover:bg-gray-200"
            role="menuitem"
          >
            What We Do
          </Link>
          <Link
            href="/impact"
            className="block px-4 py-2 hover:bg-gray-200"
            role="menuitem"
          >
            Our Impact
          </Link>
        </DropDownMenuItem>

        <Link
          href="#contact-us"
          className="menu-item shadow-md bg-primaryDark !text-primaryBright hover:!text-primaryDark"
        >
          Get Involved
        </Link>
      </div>

      <NavMenu isScrolled={isScrolled} />
    </motion.header>
  );
}