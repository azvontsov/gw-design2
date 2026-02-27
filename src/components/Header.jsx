"use client";

import Link from 'next/link';
import { useState, useEffect, Fragment } from 'react';

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
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // Detect scroll for sticky logo
  useEffect(() => {
    const handleScroll = () => {
      // Top row is h-24 -> 96px, so we show the logo when scroll passes it
      setIsScrolled(window.scrollY > 96);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Row: Logo Centered, Contact Right */}
      <div className="w-full bg-[var(--gw-secondary-light)] relative z-50">
        <div className="container mx-auto px-4 lg:px-8 h-24 flex items-center justify-between relative">
            
            {/* Left: Social Icons */}
            <div className="hidden lg:flex w-1/3 items-center gap-4 text-[var(--gw-text-muted)]">
               {/* Facebook */}
               <a href="#" className="hover:opacity-100 transition-opacity">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
               </a>
               {/* Instagram */}
               <a href="#" className="hover:opacity-100 transition-opacity">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
               {/* LinkedIn */}
                <a href="#" className="hover:opacity-100 transition-opacity">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
               {/* YouTube */}
               <a href="#" className="hover:opacity-100 transition-opacity">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
               </a>
            </div>

            {/* Center: Logo */}
            <div className="flex-1 flex justify-center">
                <Link href="/" className="relative h-16 w-auto block">
                    {/* Placeholder for Logo - In a real scenario use the Image component */}
                    <img src="/icons/logo.svg" alt="GW Center" className="h-full w-auto object-contain" />
                </Link>
            </div>

            {/* Right: Contact & Portal (Desktop) */}
            <div className="hidden lg:block w-1/3 text-right">
                <Link href="#" className="hover:text-[var(--gw-primary)] font-medium text-[var(--gw-text-muted)] text-lg transition-colors block leading-tight">Mon – Fri 9:00am – 5:00pm</Link>
                <Link href="#" className="hover:text-[var(--gw-primary)] font-medium text-[var(--gw-text-muted)] text-lg transition-colors block leading-tight">202-833-5055</Link>
                <Link href="#" className="hover:text-[var(--gw-primary)] font-medium text-[var(--gw-text-muted)] text-lg transition-colors block leading-tight">info@gwcim.com</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className="lg:hidden p-2 text-[var(--gw-primary)]"
                onClick={() => setIsMenuOpen(true)}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
        </div>
      </div>

      {/* Bottom Row: Navigation (Desktop) - Sticky */}
      <div className="sticky top-0 z-40 w-full bg-[var(--gw-secondary-light)] border-t border-b border-[rgba(0,0,0,0.05)] hidden lg:flex shadow-sm">
            <div className="container mx-auto px-8 h-16 flex items-center justify-between">
                
                {/* Nav Links */}
                <nav className="flex-1 flex items-center justify-center gap-4 xl:gap-8 h-full">
                    {menuItems.map((item, idx) => (
                        <Fragment key={idx}>
                            {idx === 3 && (
                                <div 
                                    className={`flex justify-center transition-all duration-500 ease-in-out overflow-hidden ${
                                        isScrolled ? 'max-w-[350px] opacity-100 mx-2' : 'max-w-0 opacity-0 -mx-4'
                                    }`}
                                >
                                    <Link href="/" className="flex items-center hover:opacity-80 shrink-0 list-none">
                                        <img src="/icons/logo.svg" alt="GW Center" className="h-8 xl:h-10 w-auto object-contain" />
                                    </Link>
                                </div>
                            )}
                            <div className="relative group h-full flex items-center">
                            <Link 
                                href={item.href} 
                                className="text-[13px] font-bold uppercase tracking-[0.15em] text-[var(--gw-primary)] hover:text-[var(--gw-accent)] transition-colors h-full flex items-center px-2"
                            >
                                {item.title}
                            </Link>

                            {/* Dropdown */}
                            {item.submenu && (
                                <div 
                                    className="absolute top-[calc(100%+1px)] left-1/2 -translate-x-1/2 min-w-[240px] pointer-events-none group-hover:pointer-events-auto"
                                    style={{ clipPath: 'inset(0px -50px -50px -50px)', WebkitClipPath: 'inset(0px -50px -50px -50px)' }}
                                >
                                    <div className="bg-[var(--sw-navbar)] flex flex-col items-stretch transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 group-hover:opacity-100 drop-shadow-2xl">
                                        {item.submenu.map((sub, sIdx) => (
                                            <Link 
                                                key={sIdx} 
                                                href={sub.href} 
                                                className="block px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white border-b border-[rgba(255,255,255,0.2)] last:border-0 hover:text-[var(--gw-accent)] hover:bg-[rgba(0,0,0,0.2)] transition-colors text-center whitespace-nowrap"
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                )}
                            </div>
                        </Fragment>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className={`flex-shrink-0 ml-8 ${isScrolled ? 'hidden xl:block' : ''}`}>
                    <Link  
                        href="#" 
                        className="hover:bg-[var(--gw-accent)] text-white text-[13px] font-bold tracking-widest px-6 py-3 rounded-2xl bg-[var(--gw-primary-dark)] transition-all shadow-md transform hover:-translate-y-0.5 uppercase"
                    >
                        Patient Portal
                    </Link>
                </div>
            </div>
      </div>

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
                    <Link href="#" className="bg-[var(--gw-accent)] text-white text-center py-4 rounded-2xl font-bold tracking-widest mt-4 uppercase">
                        Patient Portal
                    </Link>
                </nav>
            </div>
        </div>
      )}
    </>
  );
}
