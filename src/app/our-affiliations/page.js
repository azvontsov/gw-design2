'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Fragment } from 'react';

const affiliations = [
  {
    id: 'oimh',
    title: "Office of Integrative Medicine and Health",
    subtitle: "GWU School of Medicine and Health Sciences",
    description: "Housed within the GWU School of Medicine and Health Sciences (SMHS), Department of Clinical Research and Leadership (CRL), the Office of Integrative Medicine (OIMH) creates a collaborative space for SMHS faculty, staff, and clinician affiliates to focus on educational and scholarly activities in Integrative Medicine, engages and supports GW medical and academic faculty in Integrative Medicine practice, and connects with the broader community of CAM practitioners who form the foundation of the field.",
    accent: "bg-[var(--gw-blue)]"
  },
  {
    id: 'fdw',
    title: "Four Directions Wellness Center",
    subtitle: "True North Executive Coaching",
    description: "The Four Directions Wellness Center is an integrative healing provider, based in Alexandria, VA, focused on connecting body, mind, emotions, and spirit. GWCIM and FDW collaborate with individuals to explore all aspects of their lives for healthier and more complete living. FDW provides individual sessions, classes, health coaching, and consulting. Whether your health is impacted by stress, depression, lack of sleep, chronic illness, or a resolution for wellness, we are your partner.",
    accent: "bg-[var(--gw-gold)]"
  },
  {
    id: 'insitu',
    title: "InSitu Eco Testing",
    subtitle: "Indoor Environment Mycology & Construction 전문가",
    description: "“InSitu EcoTesting” is a unique, small consulting firm that inspects indoor environments for biological agents that can harm human health. While mold is the primary focus of its in situ investigations, the team can also test for sewage contamination and pet or pest allergens. Led by Mikhail Sogonov, PhD, the company brings together two essential skills for resolving building mold problems: expertise in mycology and knowledge of construction practices. GWCIM has partnered with InSitu for 15 years.",
    website: "https://insitu-et.com/bio.html",
    accent: "bg-[var(--gw-terracotta)]"
  },
  {
    id: 'aim',
    title: "AIM Health Institute",
    subtitle: "Washington, D.C. Area Nonprofit",
    description: "AIM Health Institute is a Washington, D.C.–area nonprofit dedicated to providing integrative medicine services to low-income and terminally ill patients, regardless of ability to pay.",
    cta: { text: "Donate to AIM", href: "#" },
    accent: "bg-[var(--gw-teal)]"
  },
  {
    id: 'shanti',
    title: "Shanti Integrative Health Care",
    subtitle: "Dr. Jennifer Rioux, PhD",
    description: "Dr. Jennifer Rioux, PhD offers a full range of Ayurvedic Medicine consultations, an Ayurvedic personalized evidence-based Weight Loss and Maintenance Program, herbal consultations, yoga therapy, Planetary Health assessments, Medicine-by-Minute, and other services.",
    accent: "bg-[var(--gw-blue)]"
  },
  {
    id: 'pilates',
    title: "Therapeutic Pilates: Linda Taylor",
    subtitle: "Chronic Pain & hEDS Specialist",
    description: "Linda Taylor in Alexandria, VA, offers Therapeutic Pilates to treat a host of issues, including: hEDS, chronic pain, degenerative diseases of the spine, such as herniation, scoliosis, labral tears, hip replacements, and hip flexor pain. Ask your GWCIM provider about Linda Taylor and her program.",
    website: "https://www.cinkcenter.com/about",
    accent: "bg-[var(--gw-gold)]"
  }
];

export default function AffiliationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />
      
      <main className="flex-1 w-full pt-40 pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'Team', href: '/people' }, { label: "Our Affiliations" }]} />
        </div>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--gw-primary)] mb-8 leading-tight">
            Providers Affiliated with GWCIM
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
            We are formally affiliated with the following providers and practices, creating a network of clinical excellence and community support.
          </p>
          <div className="w-24 h-1 bg-[var(--gw-accent)] mt-10"></div>
        </section>

        {/* Affiliations List */}
        <section className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {affiliations.map((item, idx) => (
              <div 
                key={item.id} 
                className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Content */}
                <div className="bg-white p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 border-l-[6px] rounded-none h-full flex flex-col" style={{ borderLeftColor: `var(--gw-${item.accent.split('-')[2].replace(')]','')})` }}>
                    <div className="mb-6">
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-text-muted)] mb-3 opacity-70">
                            {item.subtitle}
                        </h3>
                        <h2 className="text-2xl md:text-3xl font-serif text-[var(--gw-primary)] leading-tight">
                            {item.title}
                        </h2>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed mb-8 flex-grow font-light">
                        {item.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-auto pt-8 border-t border-slate-50">
                        {item.website && (
                            <a 
                                href={item.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[var(--gw-primary)] text-white text-[12px] font-bold uppercase tracking-widest px-8 py-4 rounded-2xl hover:bg-[var(--gw-blue)] transition-all duration-300 shadow-md group/btn"
                            >
                                Visit Website
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </a>
                        )}
                        {item.cta && (
                            <Link 
                                href={item.cta.href}
                                className="inline-flex items-center gap-3 bg-[var(--gw-gold)] text-[var(--gw-primary)] text-[12px] font-bold uppercase tracking-widest px-8 py-4 rounded-2xl hover:bg-[var(--gw-primary)] hover:text-white transition-all duration-300 shadow-md transform hover:-translate-y-1"
                            >
                                {item.cta.text}
                            </Link>
                        )}
                        {!item.website && !item.cta && (
                            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--gw-text-muted)] opacity-60">
                                <span className="w-6 h-px bg-slate-300"></span>
                                Affiliate Partner
                            </div>
                        )}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Contact CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-32 text-center py-20 bg-[var(--gw-primary)] rounded-none relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-cover"></div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Want to learn more?</h2>
                <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                    Our affiliations are a core part of our commitment to integrative health. Ask your GWCIM provider for further details about any of our partners.
                </p>
                <Link 
                    href="/contact"
                    className="inline-flex items-center gap-3 border-2 border-[var(--gw-gold)] text-[var(--gw-gold)] px-10 py-4 rounded-2xl font-bold tracking-widest hover:bg-[var(--gw-gold)] hover:text-[var(--gw-primary)] transition-all duration-300 uppercase text-sm"
                >
                    Contact Us
                </Link>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
