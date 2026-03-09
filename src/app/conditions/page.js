'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export default function ConditionsPage() {
  const conditions = [
    { title: "Chronic Illness", description: "Comprehensive management for long-term health challenges including autoimmune and persistent infections." },
    { title: "Pain and Fatigue", description: "Integrative strategies for recovering vitality and managing chronic pain conditions." },
    { title: "Mental Health", description: "Holistic mental health support focusing on the gut-brain axis and nutritional psychiatry." },
    { title: "CIRS and Mold Toxicity", description: "Specialized Shoemaker protocol for biotoxin illness and environmental sensitivities." },
    { title: "Healthy Aging", description: "Strategies for longevity, cognitive health, and maintaining function throughout life." },
    { title: "POTS", description: "Multimodal management of Postural Orthostatic Tachycardia Syndrome and dysautonomia." },
    { title: "Cancer Support", description: "Integrative oncology support to enhance quality of life and treatment efficacy." },
    { title: "EDS and HSD", description: "Support for hypermobility spectrum disorders through physical and holistic management." },
    { title: "Autoimmune Diseases", description: "Addressing the root causes of immune dysregulation through diet, lifestyle, and targeted therapies." },
    { title: "Digestive Disorders", description: "Restoring gut health and microbiome balance for optimal nutrient absorption." },
    { title: "Hormonal Imbalances", description: "Natural and bio-identical support for thyroid, adrenal, and reproductive health." },
    { title: "Long COVID", description: "Post-viral recovery protocols focused on inflammation and mitochondrial health." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />
      
      <main className="flex-1 w-full pt-40 pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'Conditions We Treat' }]} />
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[var(--gw-primary)] mb-8 leading-tight">
            Conditions <br/><span className="text-[var(--gw-accent)]">We Treat</span>
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
            We specialize in complex, chronic, and multisystem conditions that often require a more comprehensive, personalized approach than conventional medicine alone can provide.
          </p>
        </section>

        {/* Conditions Grid */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((item, idx) => (
              <div 
                key={idx}
                className="group p-8 bg-white border border-slate-100 hover:border-[var(--gw-accent)] transition-all duration-500 flex flex-col items-start"
              >
                <div className="w-10 h-1 bg-[var(--gw-accent)] mb-6 transition-all duration-500 group-hover:w-20"></div>
                <h2 className="text-2xl font-serif text-[var(--gw-primary)] mb-4">
                    {item.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-light">
                    {item.description}
                </p>
                <Link 
                    href={`/conditions/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-primary)] flex items-center gap-2 group-hover:text-[var(--gw-blue)] transition-colors"
                >
                    Learn More 
                    <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Approach Note */}
        <section className="bg-slate-50 py-24">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h3 className="text-3xl font-serif text-[var(--gw-primary)] mb-6">Our Integrative Approach</h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                    By combining conventional diagnostic tools with functional testing and nutritional analysis, we look beyond symptoms to identify the root causes of disease. Every patient receives a personalized road map for healing, tailored to their unique genetic and environmental landscape.
                </p>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
