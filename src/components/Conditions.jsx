"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Conditions() {
  const conditions = [
    { id: 1, title: "Chronic Illness", link: "#" },
    { id: 2, title: "Pain and Fatigue", link: "#" },
    { id: 3, title: "Mental Health", link: "#" },
    { id: 4, title: "CIRS and Mold Toxicity Illness", link: "#" },
    { id: 5, title: "Healthy Aging", link: "#" },
    { id: 6, title: "Postural Orthostatic Tachycardia Syndrome (POTS)", link: "#" },
    { id: 7, title: "Cancer", link: "#" },
    { id: 8, title: "EDS and HSD", link: "#" },
  ];

  const topics = [
    "Chronic Illness",
    "Pain and Fatigue",
    "Mental Health",
    "CIRS",
    "Healthy Aging",
    "POTS",
    "Cancer",
    "EDS and HSD"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger animation
      setIsAnimating(true);
      
      // After animation finishes (600ms), update the content and reset position
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % topics.length);
        setIsAnimating(false);
      }, 600);
    }, 3000);

    return () => clearInterval(interval);
  }, [topics.length]);

  return (
    <section className="py-4 bg-[var(--gw-secondary-light)] relative overflow-hidden">
      {/* Subtle decorative background elements */}
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">  
        {/* DynamicHero Animated Header inserted here */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 
            className="text-5xl md:text-6xl lg:text-[72px] text-[var(--gw-primary)] relative z-30"
            style={{ 
              fontFamily: 'var(--font-gt-super)', 
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            Conditions We Treat
          </h2>
          
          {/* Rotating Wheel Container - matched to line height with strict mask */}
          <div 
            className="relative h-[66px] md:h-[76px] lg:h-[86px] overflow-hidden mb-2 z-20"
            style={{ isolation: 'isolate', clipPath: 'inset(0)' }}
          >
            <div 
              className={`absolute inset-0 w-full h-full ${isAnimating ? 'transition-transform duration-600 ease-in-out' : ''}`}
              style={{ 
                transform: isAnimating ? 'translateY(100%)' : 'translateY(0)',
                willChange: 'transform'
              }}
            >
              {/* The NEXT item (positioned above, slides in) */}
              <div className="absolute top-[-100%] w-full h-full flex items-center justify-center">
                <h2 
                  className="text-5xl md:text-6xl lg:text-[72px] text-[var(--gw-secondary)] whitespace-nowrap"
                  style={{ 
                    fontFamily: 'var(--font-gt-super)', 
                    fontWeight: 700,
                    lineHeight: '1.2'
                  }}
                >
                  {topics[(currentIndex + 1) % topics.length]}
                </h2>
              </div>

              {/* The CURRENT item (at 0, slides out to bottom) */}
              <div className="absolute top-0 w-full h-full flex items-center justify-center">
                <h2 
                  className="text-5xl md:text-6xl lg:text-[72px] text-[var(--gw-secondary)] whitespace-nowrap"
                  style={{ 
                    fontFamily: 'var(--font-gt-super)', 
                    fontWeight: 700,
                    lineHeight: '1.2'
                  }}
                >
                  {topics[currentIndex]}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Puzzle-like Button Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {conditions.map((condition) => (
            <Link
              key={condition.id}
              href={condition.link}
              className="group flex-grow md:flex-grow-0 flex items-center justify-center hover:bg-[var(--gw-blue)] text-white px-6 py-3 rounded-2xl font-bold text-sm tracking-wide bg-[var(--sw-hazel)] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 text-center h-[48px]"
            >
              <span>{condition.title}</span>
            </Link>
          ))}
        </div>

        {/* CTA Link */}
        {/* <div className="text-center">
          <Link
            href="#services"
            className="inline-flex items-center pt-8 gap-2 text-lg font-bold text-[var(--gw-secondary)] hover:text-[var(--gw-primary)] transition-colors group"
          >
            See all conditions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
           </div> */}
      </div>
    </section>
  );
}
