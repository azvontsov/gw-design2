"use client";

import Link from 'next/link';

const resources = [
  { title: "Patient Portal", href: "#" },
  { title: "Pay a Bill", href: "#" },
  { title: "New Patient Forms", href: "#" },
  { title: "Supplements Store", href: "#" },
  { title: "Insurance Info", href: "#" },
  { title: "Mistletoe Therapy", href: "#" },
  { title: "FAQs", href: "#" },
  
];

export default function ResourcesQuickLinks() {
  return (
    <section className="py-24 bg-[var(--gw-secondary-light)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12">
          
          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-serif text-[var(--gw-primary)] mb-6">
              Resources and quick links
            </h2>
            <p className="text-lg text-[var(--gw-text-muted)] leading-relaxed opacity-90">
              From MyChart access to billing to classes, events, and community opportunities, find the pieces of GW Center you need.
            </p>
          </div>

          {/* Links Grid/Flex - Simple Pills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 max-w-3xl">
            {resources.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group flex items-center hover:bg-[var(--gw-blue)] text-white px-6 py-3 rounded-2xl font-bold text-sm tracking-wide bg-[var(--sw-hazel)] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                <span>{item.title}</span>
                <svg 
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
