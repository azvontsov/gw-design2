"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TedTalk from './TedTalk';

export default function AboutSnippet() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row w-full items-stretch bg-white">
      
      {/* Left: Image Side - Natural Aspect Ratio */}
      <div className="w-full lg:w-1/2 relative flex items-center bg-[var(--gw-secondary-light)] lg:bg-transparent">
         <img 
            src="/images/team.JPG" 
            alt="GW Center Team" 
            className="w-full h-auto object-contain block"
         />
      </div>

      {/* Right: Content Side - Centered */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12 lg:p-24 bg-white relative">
        <TedTalk isMounted={isMounted} className="relative w-[calc(100%+4rem)] -ml-8 -mr-8 -mt-12 mb-8 lg:absolute lg:-top-[1px] lg:right-12 lg:w-32 lg:m-0 z-10" />
        
        <div className="max-w-xl mx-auto lg:mx-0">
            <span className="text-xs font-bold tracking-[0.2em] text-[var(--gw-accent)] uppercase mb-6 block">
                Our Philosophy
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif text-[var(--gw-primary)] mb-8 leading-tight">
                Why Integrative Medicine?
            </h2>
            <ul className="text-lg text-[var(--gw-text-muted)] mb-10 leading-relaxed opacity-90 space-y-3">
                <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gw-accent)] flex-shrink-0"></span>
                    <span>An up-to-date evidence-based blend of traditional and contemporary methods</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gw-accent)] flex-shrink-0"></span>
                    <span>Strong Functional Medicine team</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gw-accent)] flex-shrink-0"></span>
                    <span>Collaboration of all specialists and the patients</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gw-accent)] flex-shrink-0"></span>
                    <span>Focus on the whole person and personalized medicine</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gw-accent)] flex-shrink-0"></span>
                    <span>Medical home model, in-person and telemedicine</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gw-accent)] flex-shrink-0"></span>
                    <span>20+ expert Integrative Medicine specialists under one roof</span>
                </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-start items-center">
                <Link 
                    href="/about" 
                    className="inline-block border border-[var(--gw-primary)] text-[var(--gw-primary)] px-8 py-3 rounded-2xl text-sm font-bold tracking-widest hover:bg-[var(--gw-green)] transition-all uppercase"
                >
                    Learn About Our Approach
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
