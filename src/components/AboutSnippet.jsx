"use client";

import Link from 'next/link';

export default function AboutSnippet() {

  const reasons = [
    {
      title: "Clinical / Research-Driven",
      description: "A comprehensive, data-informed approach to diagnosing and treating complex conditions by addressing root causes—not just symptoms."
    },
    {
      title: "Patient-Centered",
      description: "We don't just mask symptoms. Our Functional Medicine team works with you to uncover and resolve the underlying causes of complex health issues."
    },
    {
      title: "Differentiation-Focused",
      description: "Personalized care for complex health challenges—designed around your biology, your goals, and your whole system."
    },
    {
      title: "Outcomes-Focused",
      description: "Identify what others missed and restore function through methodical, root-cause treatment of complex conditions."
    },
    {
       title: "Trust-Building",
       description: "Evidence-based integrative care that combines advanced testing, medical treatment, and lifestyle interventions to solve complex health problems."
    },
    {
       title: "Pioneering Legacy",
       description: "Established in 1998, we are one of the longest-running and most respected holistic integrative medicine centers in the nation."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-300">
      
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-5/6 h-full bg-[var(--sw-white)] pointer-events-none transform -skew-x-12 translate-x-48 origin-top-right"></div>
      
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
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-light max-w-lg mb-10">
                    Discover a higher standard of healthcare. We provide unparalleled, personalized integrative medicine that goes beyond conventional treatments to optimize your entire well-being.
                </p>
                
                <div className="flex flex-wrap gap-4 items-center">
                    <Link 
                        href="/about" 
                        className="inline-flex items-center justify-center hover:bg-[var(--gw-primary)] bg-[var(--gw-blue)] text-white px-8 py-4 rounded-2xl text-sm font-bold tracking-widest transition-all uppercase shadow-lg shadow-[var(--gw-primary)]/20"
                    >
                        Learn About Our Approach
                    </Link>
                </div>
            </div>

            {/* Right Grid Block */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14">
                {reasons.map((reason, idx) => (
                    <div key={idx} className="relative group">
                        <div className="absolute -left-4 top-0 w-1 h-0 bg-[var(--gw-accent)] group-hover:h-full transition-all duration-300 rounded-full"></div>
                        <h4 className="text-lg font-bold text-[var(--gw-primary)] mb-3 group-hover:text-[var(--gw-blue)] transition-colors">
                            {reason.title}
                        </h4>
                        <p className="text-[15px] text-slate-600 leading-relaxed opacity-90">
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
