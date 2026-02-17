
'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Parallax-like fixed attachment if desired, or absolute */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/dc-panorama.png)' }}
      >
        {/* Sophisticated Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col items-center">
        
        {/* Animated Entry */}
        <div className={`transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Eyebrow / Tagline */}
            <p className="text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-6 text-[var(--gw-secondary-light)] opacity-90">
                EST. 1998 • Washington DC
            </p>

            {/* Main Headline - Serif */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
                GW Center for <br className="hidden md:block" />
                <span className="italic text-[var(--gw-secondary-light)]">Integrative</span> Medicine
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed">
                A holistic approach to healing, combining modern science <br className="hidden md:block" /> with wisdom traditions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                    href="#" 
                    className="bg-[var(--gw-primary)] text-white px-10 py-4 rounded-full font-bold tracking-widest hover:bg-[var(--gw-white)] hover:text-[var(--gw-primary)] transition-all duration-300 shadow-lg min-w-[200px]"
                >
                    NEW PATIENTS
                </a>
                <a 
                    href="#" 
                    className="border-2 border-white text-white px-10 py-4 rounded-full font-bold tracking-widest hover:bg-white hover:text-[var(--gw-primary)] transition-all duration-300 min-w-[200px]"
                >
                    OUR SERVICES
                </a>
            </div>
        </div>
      </div>

      {/* Trust/Affiliations Bar at Bottom */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/20 backdrop-blur-sm z-20">
          <div className="container mx-auto px-6 py-6">
              <p className="text-center text-xs font-bold tracking-widest text-white/60 mb-4 uppercase">Trusted By / Affiliated With</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  {/* Replace with actual logos */}
                  <span className="text-xl font-serif">George Washington University</span>
                  <span className="text-xl font-serif">Andrew Weil Center</span>
                  <span className="text-xl font-serif">ABIM</span>
                  <span className="text-xl font-serif">Mistletoe Therapy</span>
              </div>
          </div>
      </div>
    </section>
  );
}
