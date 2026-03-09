"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Conditions() {
  const conditions = [
    { id: 1, title: "Chronic Illness", link: "/conditions/chronic-illness" },
    { id: 2, title: "Pain and Fatigue", link: "/conditions/pain-and-fatigue" },
    { id: 3, title: "Mental Health", link: "/conditions/mental-health" },
    { id: 4, title: "CIRS and Mold Toxicity Illness", link: "/conditions/cirs-and-mold-toxicity" },
    { id: 5, title: "Healthy Aging", link: "/conditions/healthy-aging" },
    { id: 6, title: "POTS", link: "/conditions/pots" },
    { id: 7, title: "Cancer", link: "/conditions/cancer-support" },
    { id: 8, title: "EDS and HSD", link: "/conditions/eds-and-hsd" },
    { id: 9, title: "Autoimmune Diseases", link: "/conditions/autoimmune-diseases" },
    { id: 10, title: "Digestive Disorders", link: "/conditions/digestive-disorders" },
    { id: 11, title: "Hormonal Imbalances", link: "/conditions/hormonal-imbalances" },
    { id: 12, title: "Allergies & Asthma", link: "/conditions/allergies-&-asthma" },
    { id: 13, title: "Cardiometabolic Health", link: "/conditions/cardiometabolic-health" },
    { id: 14, title: "Long COVID & Post-Viral Syndromes", link: "/conditions/long-covid" },
    { id: 15, title: "Women's Health", link: "/conditions/women's-health" },
    { id: 16, title: "Sleep Disorders", link: "/conditions/sleep-disorders" },
    { id: 17, title: "Neurological Conditions", link: "/conditions/neurological-conditions" },
    { id: 18, title: "Tick-Borne Diseases", link: "/conditions/tick-borne-diseases" },
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
              className="group flex-grow flex items-center justify-center hover:bg-[var(--gw-blue)] hover:text-white text-[var(--gw-primary)] px-6 h-[80px] font-bold text-sm md:text-base tracking-wide bg-[var(--sw-hazel)] transition-colors duration-300 text-center"
            >
              <span>{condition.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
