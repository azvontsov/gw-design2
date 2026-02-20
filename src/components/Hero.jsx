'use client';

import { useEffect, useState } from 'react';
import TedTalk from "./TedTalk";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pb-40 pt-32 lg:pt-0 lg:pb-0">
      
      {/* Background Image with Parallax-like fixed attachment if desired, or absolute */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/dc-panorama5.png)' }}
      >
        {/* Sophisticated Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        {/* Heaven Glow Effect - Radial Gradient from Top Center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,218,185,0.15)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col items-center">
        
        {/* Animated Entry */}
        <div className={`transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Eyebrow / Tagline */}
            <p className="text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-6 text-[var(--gw-secondary-light)] opacity-90">
                EST. 1998 • Washington DC
            </p>

            {/* Main Headline - Sans Serif (Ginto) */}
            <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 drop-shadow-lg">
                GW Center for <br className="hidden md:block" />
                Integrative Medicine
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed">
                A holistic approach to healing, combining modern science <br className="hidden md:block" /> with wisdom traditions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                    href="#" 
                    className="bg-[var(--gw-accent)] text-white px-10 py-4 rounded-2xl font-bold tracking-widest hover:bg-[var(--gw-white)] hover:text-[var(--gw-primary)] transition-all duration-300 shadow-lg min-w-[200px] uppercase"
                >
                    New Patient Inquiry Form
                </a>
                <a 
                    href="#" 
                    className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold tracking-widest hover:bg-white hover:text-[var(--gw-primary)] transition-all duration-300 min-w-[200px] uppercase"
                >
                    OUR SERVICES
                </a>
            </div>
        </div>
      </div>

      {/* Trust/Affiliations Bar at Bottom */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/40 backdrop-blur-md z-20 text-white">
          <div className="container mx-auto px-6 py-4">
              <p className="text-center text-xs font-bold tracking-[0.2em] text-white/70 mb-2 uppercase">Trusted By / Affiliated With</p>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 md:gap-x-12 opacity-50">
                  {/* Replace with actual logos */}
                  <span className="text-lg md:text-xl font-serif tracking-wide hover:text-[var(--gw-accent)] transition-colors cursor-default">George Washington University</span>
                  <span className="text-lg md:text-xl font-serif tracking-wide hover:text-[var(--gw-accent)] transition-colors cursor-default">Andrew Weil Center</span>
                  <span className="text-lg md:text-xl font-serif tracking-wide hover:text-[var(--gw-accent)] transition-colors cursor-default">ABIM</span>
                  <span className="text-lg md:text-xl font-serif tracking-wide hover:text-[var(--gw-accent)] transition-colors cursor-default">TAV Remodeling</span>
                  <span className="text-lg md:text-xl font-serif tracking-wide hover:text-[var(--gw-accent)] transition-colors cursor-default">Mistletoe Therapy</span>
              </div>
          </div>
      </div>
    </section>
  );
}
