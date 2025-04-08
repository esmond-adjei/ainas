'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { ExpandableSection } from './ExpandableSection';
import { ROUTES } from '@/lib';
import { usePathname } from 'next/navigation';
import { Logo } from './CustomIcon';
import { cn } from '@/lib/utils';

interface DropDownMenuItemProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
  menuName: string;
  children: React.ReactNode;
}

interface NavItem {
  name: string;
  path: string;
  disabled?: boolean;
}

interface DropdownItem extends NavItem {
  items: NavItem[];
}

const NAV_ITEMS: (NavItem | DropdownItem)[] = [
  { name: 'Home', path: ROUTES.home },
  { name: 'About', path: ROUTES.about },
  { name: 'Team', path: ROUTES.team },
  { name: 'Contact', path: ROUTES.contact },
  { name: 'Gallery', path: ROUTES.gallery },
  {
    name: 'Explore',
    path: '',
    items: [
      { name: 'Our Impact', path: ROUTES.impact, disabled: true },
      { name: 'Blog', path: ROUTES.blog, disabled: false },
      { name: 'Reports', path: ROUTES.report, disabled: false },
    ],
  },
];

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
          <span className="size-4 top-0 right-10 bg-white rotate-45 -translate-x-1/2 absolute z-[41] border-t border-l border-borderColor"></span>
          <div
            className="bg-white absolute z-40 top-2 -translate-x-[25%] w-40 p-2 pt-3 text-sm rounded-lg text-dark shadow-lg border border-borderColor"
            role="menu"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileNavMenu: React.FC<{ isScrolled: boolean, isActive: (route: string) => {} }> = ({ isScrolled,isActive }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
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
          className="drawer [&>*]:block space-y-2 flex flex-col px-10 py-4 pt-8 text-dark bg-white backdrop-blur-lg rounded-b-3xl shadow-lg"
          aria-expanded={mobileMenuOpen}
          style={{
            ['--drawer-height-final' as any]: '100%',
            ['--animation-duration' as any]: '0.8s',
          }}
        >
          {NAV_ITEMS.map((item, index) => (
          'items' in item ? (
            <ExpandableSection 
            key={index}
            title="Explore" 
            variant="dropdown" 
            className="menu-item m-0 !border-none"
            >
              {item.items.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  href={subItem.disabled ? '#' : subItem.path}
                  aria-disabled={subItem.disabled}
                  className={cn("block px-4 py-2",
                     subItem.disabled ? "text-zinc-400 cursor-not-allowed" : "hover:bg-gray-200"
                  )}
                  role="menuitem"
                >
                  {subItem.name}
                </Link>
              ))}
            </ExpandableSection>
          ) : (
            <Link
              key={index}
              href={item.disabled ? '#' : item.path}
              aria-disabled={item.disabled}
              className={cn("block px-4 py-2",
                item.disabled ? "text-zinc-400 cursor-not-allowed" : "hover:bg-gray-200",
                isActive(item.path) ? `menu-item active`: `menu-item`
             )}
            >
              {item.name}
            </Link>
          )
        ))}
        </div>
      </div>
    </>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openExplore, setOpenExplore] = useState(false);
  const pathname = usePathname();
  const isActive = (route: string) => pathname === route;

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
        <Link href="/">
          <Logo theme={isScrolled ? 'primary' : 'white'} />
        </Link>
      </div>

      <div className="gap-4 hidden md:flex items-center">
        {NAV_ITEMS.map((item) => (
          'items' in item ? (
            <DropDownMenuItem
              key={item.name}
              menuName={item.name}
              className={navTheme}
              open={openExplore}
              setOpen={setOpenExplore}
            >
              {item.items.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.disabled ? '#' : subItem.path}
                  aria-disabled={subItem.disabled}
                  className={cn("block px-4 py-2",
                    subItem.disabled ? "text-zinc-400 cursor-not-allowed" : "hover:bg-gray-200"
                  )}
                  role="menuitem"
                >
                  {subItem.name}
                </Link>
              ))}
            </DropDownMenuItem>
          ) : (
            <Link
              key={item.path}
              href={item.disabled ? '#' : item.path}
              aria-disabled={item.disabled}
              className={cn(
                item.disabled ? 'text-zinc-400 cursor-not-allowed' : navTheme,
                isActive(item.path) ? 'active' : ''
              )}
              role="menuitem"
            >
              {item.name}
            </Link>
          )
        ))}

        <Link
          href="/#contact-us"
          className="menu-item !rounded-full shadow-md bg-primaryDark !text-primaryBright hover:!text-primaryDark"
        >
          Get Involved
        </Link>
      </div>

      <MobileNavMenu isScrolled={isScrolled} isActive={isActive} />
    </motion.header>
  );
}