'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export default function AboutOverviewPage() {
  const sections = [
    { 
        title: "Mission Statement and Director's Message", 
        href: "/about/mission-statement", 
        description: "Explore our core mission and a message from our Medical Director, Mikhail Kogan, MD." 
    },
    { 
        title: "What is Integrative Medicine?", 
        href: "/about/what-is-integrative-medicine", 
        description: "Learn about our holistic, patient-centered approach to healthcare and chronic illness." 
    },
    { 
        title: "Our Story", 
        href: "/about/our-story-gw-integrative-medicine-center", 
        description: "Discover the history of GWCIM, established in 1998 as a pioneer in integrative care." 
    },
    { 
        title: "Patient Reviews and Testimonials", 
        href: "/about/patient-reviews", 
        description: "Read real stories and experiences from patients who have found healing at our center." 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />
      
      <main className="flex-1 w-full pt-40 pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-24">
          <Breadcrumbs items={[{ label: 'About' }]} />
        </div>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--gw-primary)] mb-8 leading-tight">
            About the GW Center for Integrative Medicine
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">
            A premier provider of personalized healthcare in Washington DC, integrating conventional and complementary therapies to solve complex health problems.
          </p>
        </section>

        {/* Categories Grid */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, idx) => (
              <Link 
                key={idx} 
                href={section.href}
                className="group flex flex-col p-8 bg-white border border-slate-200 hover:border-[var(--gw-blue)] hover:shadow-2xl transition-all duration-300 rounded-none relative overflow-hidden"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100 group-hover:bg-[var(--gw-blue)] transition-colors"></div>
                
                <h3 className="text-2xl font-serif text-[var(--gw-primary)] mb-4 group-hover:text-[var(--gw-blue)] transition-colors">
                    {section.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {section.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[var(--gw-blue)] uppercase">
                    Explore Now
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Supporting image section */}
        <section className="max-w-4xl mx-auto px-6 mb-12 text-center">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--gw-primary)] mb-6 opacity-60">
                Our Center
            </h2>
            <div className="aspect-[21/9] overflow-hidden shadow-2xl mb-12 border border-slate-200">
                <img src="/images/providers/about/foye.jpg" alt="Our Center" className="w-full h-full object-cover" />
            </div>
            <p className="text-slate-500 font-serif italic text-lg max-w-2xl mx-auto">
                "We provide a healing environment designed to address the whole person—body, mind, and spirit."
            </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
