'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import TedTalk from "./TedTalk";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pb-40 pt-24 lg:pt-16 lg:pb-32">
      
       {/* Background Image with Parallax-like fixed attachment if desired, or absolute */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero1.png)' }}
      > */}
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden bg-[var(--gw-primary)]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/images/hero3.webp"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Sophisticated Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"></div>
        {/* Heaven Glow Effect - Radial Gradient from Top Center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,218,185,0.15)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none"></div>
      </div>

      {/* TedTalk component moved here */}
      {/* <TedTalk isMounted={isMounted} className="absolute hidden lg:block top-0 right-0 lg:right-24 2xl:right-48 z-30" /> */}
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col items-center">
        
        {/* Animated Entry */}
        <div className={`transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Eyebrow / Tagline */}
            <p className="text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 text-[var(--gw-secondary-light)] opacity-90">
                EST. 1998 • Washington DC
            </p>
            {/* <p className="text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 text-[var(--gw-secondary-light)] opacity-90">
                Root-Cause Care for Complex, Chronic Conditions
            </p> */}

            {/* Main Headline - Belleza */}
            <h1 className="font-[family-name:var(--font-belleza)] text-5xl md:text-7xl lg:text-8xl leading-tight uppercase mb-8 drop-shadow-lg">
            {/* <h1 className="font-[family-name:var(--font-belleza)] text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] uppercase mb-4 md:mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFFFFF_0%,#A7F3D0_35%,#7DD3FC_70%,#E0E7FF_100%)]"> */}
                   GW Center for <br className="hidden md:block" />
                Integrative Medicine
            </h1>
        
            {/* Main Headline - Serif (GT Super) */}
            {/* <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 drop-shadow-lg">
                GW Center for <br className="hidden md:block" />
                Integrative Medicine
            </h1> */}

            {/* Subheading */}
            <p className="text-base md:text-xl lg:text-2xl font-bold max-w-2xl mx-auto mb-8 md:mb-10 mt-4 md:mt-6 opacity-90 leading-relaxed shadow-black/50 drop-shadow-md">
                Through comprehensive evaluation and multidisciplinary care, we diagnose and treat the underlying drivers of illness—not just the symptoms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                    href="#" 
                    className="bg-[var(--gw-accent)] px-10 py-4 rounded-2xl font-bold tracking-widest hover:bg-[var(--gw-white)] text-[var(--gw-primary)] transition-all duration-300 shadow-lg min-w-[200px] uppercase"
                >
                    New Patient Inquiry Form
                </a>
                <Link 
                    href="/fees-and-insurance" 
                    className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold tracking-widest hover:bg-white hover:text-[var(--gw-primary)] transition-all duration-300 min-w-[200px] uppercase text-center flex items-center justify-center"
                >
                    FEES & INSURANCE
                </Link>
            </div>
        </div>
      </div>

      {/* Trust/Affiliations Bar at Bottom */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/40 backdrop-blur-md z-20 text-white">
          <div className="container mx-auto px-6 py-4">
              <p className="text-center text-xs font-bold tracking-[0.2em] text-white/70 mb-2 uppercase">List of Affiliated organizations</p>
              
              <style>{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 60s linear infinite;
                  display: flex;
                  width: max-content;
                }
                .animate-marquee:hover {
                  animation-play-state: paused;
                }
              `}</style>

              <div 
                className="relative flex overflow-hidden group w-full" 
                style={{ 
                  maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
                }}
              >
                  <div className="animate-marquee items-center gap-x-12 opacity-60 transition-opacity duration-500 group-hover:opacity-100 py-1">
                      {[
                        "GWU", "Four Direction Wellness", "AIM Health Institute", "OIMH (Office of Integrative Medicine and Health at GWU)", "ACIMH (Academic Consortium for Integrative Medicine & Health)", "Fullscript", "VitaminLab", "ThriveAgain PT", "Andrew Weil", "Smith Center", "1440 Health",
                        // Duplicate for infinite seamless loop at -50% translation
                        "GWU", "Four Direction Wellness", "AIM Health Institute", "OIMH (Office of Integrative Medicine and Health at GWU)", "ACIMH (Academic Consortium for Integrative Medicine & Health)", "Fullscript", "VitaminLab", "ThriveAgain PT", "Andrew Weil", "Smith Center", "1440 Health"
                      ].map((org, i) => (
                        <span key={i} className="text-lg md:text-xl font-serif tracking-wide hover:text-[var(--gw-accent)] transition-colors cursor-default shrink-0">
                           {org}
                        </span>
                      ))}
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}
