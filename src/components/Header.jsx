"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const menuItems = [
  {
    title: "Services",
    href: "#",
    submenu: [
      { title: "All Services", href: "#" },
      { title: "Consultations", href: "#" },
      { title: "Treatments", href: "#" },
      { title: "Programs", href: "#" },
      { title: "Ongoing Groups", href: "#" }
    ]
  },
  {
    title: "Conditions",
    href: "#",
    submenu: [
      { title: "Chronic Illness", href: "#" },
      { title: "Mental Health", href: "#" },
      { title: "Healthy Aging", href: "#" },
    ]
  },
  {
    title: "Team",
    href: "#",
    submenu: [
      { title: "Providers", href: "#" },
      { title: "Partners", href: "#" },
    ]
  },
  {
    title: "Resources",
    href: "#",
    submenu: [
      { title: "Patient Portal", href: "#" },
      { title: "Supplements", href: "#" },
      { title: "News & Events", href: "#" },
    ]
  },
  {
      title: "About",
      href: "#",
  },
  {
      title: "Contact",
      href: "#"
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      <header className="w-full bg-[var(--gw-secondary-light)] border-b border-[rgba(0,0,0,0.05)] relative z-50">
        
        {/* Top Row: Logo Centered, Contact Right */}
        <div className="container mx-auto px-4 lg:px-8 h-24 flex items-center justify-between relative">
            
            {/* Left Spacer (Hidden on mobile used for centering) */}
            <div className="hidden lg:block w-1/3"></div>

            {/* Logo Center */}
            <div className="flex-1 flex justify-center">
                <Link href="/" className="relative h-16 w-auto block">
                    {/* Placeholder for Logo - In a real scenario use the Image component */}
                    <img src="/icons/logo.svg" alt="GW Center" className="h-full w-auto object-contain" />
                </Link>
            </div>

            {/* Right: Contact & Portal (Desktop) */}
            <div className="hidden lg:flex w-1/3 justify-end items-center gap-6 text-[13px] tracking-wide font-medium text-[var(--gw-text-muted)]">
                <a href="tel:202-833-5055" className="hover:text-[var(--gw-primary)] transition-colors">202-833-5055</a>
                <Link href="#" className="hover:text-[var(--gw-primary)] transition-colors">PATIENT PORTAL</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className="lg:hidden p-2 text-[var(--gw-primary)]"
                onClick={() => setIsMenuOpen(true)}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
        </div>

        {/* Bottom Row: Navigation (Desktop) */}
        <div className="hidden lg:flex border-t border-[rgba(0,0,0,0.03)]">
            <div className="container mx-auto px-8 h-16 flex items-center justify-between">
                
                {/* Nav Links */}
                <nav className="flex-1 flex justify-center gap-8">
                    {menuItems.map((item, idx) => (
                        <div key={idx} className="relative group">
                            <Link 
                                href={item.href} 
                                className="text-[13px] font-bold uppercase tracking-[0.15em] text-[var(--gw-primary)] hover:text-[var(--gw-accent)] transition-colors py-6 block"
                            >
                                {item.title}
                            </Link>

                            {/* Dropdown */}
                            {item.submenu && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-[var(--gw-primary)] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="flex flex-col">
                                        {item.submenu.map((sub, sIdx) => (
                                            <Link 
                                                key={sIdx} 
                                                href={sub.href} 
                                                className="block px-6 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-white border-b border-white/20 last:border-0 hover:text-[var(--gw-accent)] hover:bg-black/10 transition-colors text-center"
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="flex-shrink-0 ml-8">
                    <Link 
                        href="#" 
                        className="bg-[var(--gw-primary)] text-white text-[13px] font-bold tracking-widest px-6 py-3 rounded-full hover:bg-[var(--gw-primary-dark)] transition-all shadow-md transform hover:-translate-y-0.5"
                    >
                        NEW PATIENTS
                    </Link>
                </div>
            </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white text-[var(--gw-primary)] overflow-y-auto">
            <div className="p-6">
                <div className="flex justify-between items-center mb-12">
                     <Link href="/" onClick={() => setIsMenuOpen(false)}>
                        <img src="/icons/logo.svg" alt="Logo" className="h-10 w-auto" />
                     </Link>
                     <button onClick={() => setIsMenuOpen(false)}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                     </button>
                </div>
                
                <nav className="flex flex-col gap-6">
                    {menuItems.map((item, idx) => (
                        <div key={idx} className="border-b border-gray-100 pb-4">
                            <Link 
                                href={item.href} 
                                onClick={() => setIsMenuOpen(false)}
                                className="text-2xl font-serif block mb-2"
                            >
                                {item.title}
                            </Link>
                            {item.submenu && (
                                <div className="pl-4 flex flex-col gap-2">
                                    {item.submenu.map((sub, sIdx) => (
                                        <Link 
                                            key={sIdx}
                                            href={sub.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-base text-[var(--gw-text-muted)]"
                                        >
                                            {sub.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link href="#" className="bg-[var(--gw-primary)] text-white text-center py-4 rounded-full font-bold tracking-widest mt-4">
                        NEW PATIENTS
                    </Link>
                </nav>
            </div>
        </div>
      )}
    </>
  );
}
