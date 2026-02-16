
'use client';

import { useState } from 'react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative bg-[var(--gw-cream)] pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/dc-panorama.png)' }}>
      {/* Dark overlay for background */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-12 items-center">
            {/* Left Content */}
          <div className="max-w-xl xl:max-w-2xl px-4 sm:px-6 lg:px-8 xl:pl-32 py-12 lg:py-0">
            <h1 className="text-5xl font-medium tracking-normal text-[var(--gw-white)] sm:text-[72px] mb-6 leading-[1.1]">
              GW Center for Integrative Medicine
            </h1>
            <p className="mt-6 text-xl text-[var(--gw-white)] leading-relaxed max-w-lg">
              26 years of Integrative Medicine <br /> in Washington DC. 
            </p>
            
            {/* CTA Button */}
            <div className="mt-10">
              <button className="bg-[var(--gw-gold)] hover:bg-[var(--gw-secondary)] text-[var(--gw-primary)] hover:text-[var(--gw-white)] px-8 py-4 font-bold text-lg transition-colors shadow-lg">
                New Patient Inquiry Form
              </button>
            </div>
          </div>
          
          {/* Right - TED Talk Video Showcase */}
          <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden">
            {/* Video Thumbnail Container */}
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="relative w-full h-full group cursor-pointer"
            >
              {/* TED Talk thumbnail image */}
              <img 
                src="/images/TED.png" 
                alt="TEDx Talk" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 lg:w-12 lg:h-12 text-[var(--gw-primary)] ml-1">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* TED Badge */}
              <div className="absolute top-4 left-4 bg-[#FF2B06] text-white px-4 py-2 font-bold text-sm shadow-lg">
                TEDx
              </div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-semibold text-lg">Watch Our TEDx Talk</p>
                <p className="text-white/80 text-sm mt-1">Integrative Medicine Approach</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[var(--gw-secondary-light)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video Player */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Z1OEoUca6S4?autoplay=1"
              title="TED Talk Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
}
