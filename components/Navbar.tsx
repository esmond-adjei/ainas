'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import CustomIcon from './CustomIcon';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-sm text-dark' : 'bg-transparent text-light'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.nav
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full flex items-center justify-between p-4 lg:px-10"
      >
        {/* Logo */}
        <div>
          <Link
            href="/"
            className={`text-2xl font-heading font-bold ${
              isScrolled ? 'text-primary' : 'text-light'
            }`}
          >
            <CustomIcon
              className="size-12  inline-block"
              style={{
                fill: isScrolled ? 'var(--primary-color)' : 'white',
              }}
            />
            AINAS
          </Link>
        </div>

        <div className='relative flex gap-4 flex-row-reverse md:flex-row'>
          <NavMenu isScrolled={isScrolled}/>
          
          {/* Donate Button */}
          <Link
            href="/donate"
            className="bg-primary text-light px-4 py-2 rounded-full hover:bg-secondary hover:text-dark transition"
          >
            Donate
          </Link>
        </div>
      </motion.nav>
    </motion.header>
  );
}


const NavMenu: React.FC<{isScrolled: boolean}> = ({isScrolled}) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <>
        {/* MEUNU ITEMS FOR SMALL SCREENS */}
        <button
          className={`block md:hidden ${
            isScrolled ? 'text-dark' : 'text-light'
          } 
          ${
            mobileMenuOpen ? 'absolute z-40 text-black' : ''
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
  
        {/* MENU ITEMS FOR LARGE SCREENS */}
        <div
          ref={menuRef}
          className={`${
              mobileMenuOpen ?
               'hcc flex-col w-max text-dark bg-slate-200 p-8 rounded-md shadow-lg absolute top-0'
               : 'hidden'
            } md:flex items-center gap-6`}
          >
            <Link href="/" className="menu-item">
              Home
            </Link>

            <DropDownMenuItem
              open={aboutOpen}
              setOpen={setAboutOpen}
              menuName='About Us'>
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
              menuName='Explore'
              open={exploreOpen}
              setOpen={setExploreOpen}
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

            {/* Get Involved */}
            <Link href="/get-involved" className="menu-item">
              Get Involved
            </Link>
        </div>
    </>
)
}

type DropDownMenuItemProps = {
  open: boolean,
  setOpen: any,
  menuName: string,
  children: React.ReactNode,
}

const DropDownMenuItem: React.FC<DropDownMenuItemProps> = ({
  menuName, open, setOpen, children
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center menu-item"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {menuName} 
        { open ?
          <ChevronUp className="ml-1" size={16} />:
          <ChevronDown className="ml-1" size={16} />
        }
      </button>
        {open && (
          <>
          <span className='size-4 top-8 bg-gray-50 rotate-45 translate-x-[50%] shadow-lg absolute z-40'></span>
          <div
            className="absolute z-40 top-10 -translate-x-[25%] w-40 p-2 text-sm rounded-lg text-dark shadow-lg bg-gray-50"
            role="menu"
          >
            {children}
          </div>
          </>
        )}
  </div>
  )
}