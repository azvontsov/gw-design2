"use client";

import Link from 'next/link';

const resources = [
  { title: "Patient Portal", href: "/patient-portal"},
  { title: "Pay a Bill", href: "https://phr.charmtracker.com/main.do", target: "_blank" },
  { title: "New Patient Forms", href: "/schedule-an-appointment" },
  { title: "Full Script Supplements Store", href: "/supplements" },
  { title: "Insurance Info", href: "/fees-and-insurance" },
  { title: "FAQs", href: "/#faq" },
];

export default function ResourcesQuickLinks() {
  return (
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12">
          
          {/* Text Content */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-serif text-[var(--gw-primary)] mb-4 leading-tight">
              Resources and quick links
            </h2>
            <p className="text-base text-[var(--gw-text-muted)] leading-relaxed opacity-90">
              From MyChart access to billing and community opportunities, find the pieces of GWCIM you need.
            </p>
          </div>

          {/* Links Area - Structured Grid/Flex */}
          <div className="w-full lg:w-auto flex-1 lg:max-w-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-end gap-3">
              {resources.map((item, idx) => (
                <Link
                  key={idx}
                  {...item}
                  className="group flex items-center justify-center bg-[#586b86ff] text-white px-4 py-2.5 rounded-xl font-bold text-[11px] tracking-widest uppercase hover:bg-[var(--gw-terracotta)] transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <span>{item.title}</span>
                  <svg 
                    className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
