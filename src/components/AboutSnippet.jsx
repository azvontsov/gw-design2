"use client";

import Link from 'next/link';

export default function AboutSnippet() {

  const reasons = [
    {
      title: "Unmatched Expertise",
      description: "With over 20 expert Integrative Medicine specialists under one roof, we offer the most comprehensive collaborative care in the DC area."
    },
    {
      title: "Root-Cause Resolution",
      description: "We don't just mask symptoms. Our Functional Medicine team works with you to uncover and resolve the underlying causes of complex health issues."
    },
    {
      title: "Time Dedicated to You",
      description: "Experience healthcare as it should be. Our concierge model ensures longer appointments, deeper listening, and direct access to your care team."
    },
    {
      title: "Evidence-Based Innovation",
      description: "We integrate the highest standards of modern science with time-tested wisdom traditions, continually updating our protocols."
    },
    {
       title: "True Collaborative Care",
       description: "Your healing journey is supported by a united team of specialists who actively collaborate on your personalized treatment plan."
    },
    {
       title: "Pioneering Legacy",
       description: "Established in 1998, we are one of the longest-running and most respected holistic integrative medicine centers in the nation."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-[var(--gw-border-light)]">
      
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--sw-white)] pointer-events-none transform skew-x-12 translate-x-32 origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
             {/* Left Text Block */}
            <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-bold tracking-[0.2em] text-[var(--gw-accent)] uppercase block">
                        Our Advantage
                    </span>
                    <div className="h-px bg-[var(--gw-accent)] w-12"></div>
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif text-[var(--gw-primary)] mb-6 leading-tight">
                    Why Choose GWCIM?
                </h2>
                <p className="text-lg lg:text-xl text-[var(--gw-text-muted)] leading-relaxed opacity-90 font-light max-w-lg mb-8">
                    Discover a higher standard of healthcare. We provide unparalleled, personalized integrative medicine that goes beyond conventional treatments to optimize your entire well-being.
                </p>
                
                <div className="flex flex-wrap gap-4 items-center">
                    <Link 
                        href="/about" 
                        className="inline-flex items-center justify-center bg-[var(--gw-primary)] text-white px-8 py-4 rounded-2xl text-sm font-bold tracking-widest hover:bg-[var(--gw-blue)] transition-all uppercase shadow-lg shadow-[var(--gw-primary)]/20"
                    >
                        Learn About Our Approach
                    </Link>
                </div>
            </div>

            {/* Right Grid Block */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {reasons.map((reason, idx) => (
                    <div key={idx} className="relative group">
                        <div className="absolute -left-4 top-0 w-1 h-0 bg-[var(--gw-accent)] group-hover:h-full transition-all duration-300 rounded-full"></div>
                        <h4 className="text-lg font-bold text-[var(--gw-primary)] mb-2 group-hover:text-[var(--gw-blue)] transition-colors">
                            {reason.title}
                        </h4>
                        <p className="text-sm text-[var(--gw-text-muted)] leading-relaxed opacity-90">
                            {reason.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
