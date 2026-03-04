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
    { id: 9, title: "Autoimmune Diseases", link: "#" },
    { id: 10, title: "Digestive Disorders", link: "#" },
    { id: 11, title: "Hormonal Imbalances", link: "#" },
    { id: 12, title: "Allergies & Asthma", link: "#" },
    { id: 13, title: "Cardiometabolic Health", link: "#" },
    { id: 14, title: "Long COVID & Post-Viral Syndromes", link: "#" },
    { id: 15, title: "Women's Health", link: "#" },
    { id: 16, title: "Sleep Disorders", link: "#" },
    { id: 17, title: "Neurological Conditions", link: "#" },
    { id: 18, title: "Tick-Borne Diseases", link: "#" },
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
    <section className="pt-12 bg-white relative overflow-hidden">
      {/* Subtle decorative background elements */}
      
      <div className="w-full relative z-10">  
        {/* DynamicHero Animated Header inserted here */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 
            className="text-5xl md:text-6xl lg:text-[72px] text-[var(--gw-primary)] relative z-30 uppercase"
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

        {/* Puzzle-like Button Grid - Edge to Edge */}
        <div className="flex flex-wrap w-full gap-[2px] bg-[var(--gw-secondary-light)] p-[2px] overflow-hidden max-h-[248px] md:max-h-[330px] lg:max-h-[412px] xl:max-h-none">
          {conditions.map((condition) => (
            <Link
              key={condition.id}
              href={condition.link}
              className="group flex-grow flex items-center justify-center hover:bg-[var(--gw-blue)] text-white px-6 h-[80px] font-bold text-sm md:text-base tracking-wide bg-[var(--sw-hazel)] transition-colors duration-300 text-center"
            >
              <span>{condition.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
