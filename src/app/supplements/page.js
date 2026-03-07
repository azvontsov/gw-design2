'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export default function SupplementsPage() {
  const fullscriptLink = "https://us.fullscript.com/welcome/gwcim"; // Standard-ish URL, can be updated later

  const supplementFeatures = [
    {
      title: "Physician-Grade Quality",
      description: "We only recommend supplements that meet rigorous third-party testing for purity, potency, and bioavailability.",
      icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.744c0 5.052 3.12 9.374 7.5 11.25a11.913 11.913 0 007.5-11.25c0-1.303-.21-2.558-.598-3.744A11.959 11.959 0 0112 2.714z"
    },
    {
      title: "Evidence-Based Selection",
      description: "Every supplement in our protocol is backed by clinical research and integrated into your personalized healing plan.",
      icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18"
    },
    {
      title: "Secure Delivery",
      description: "Conveniently order through our secure online partner, ensuring proper storage and temperature control during shipping.",
      icon: "M8.25 18.75a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zm9 0a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zM18.75 16.5V11.25L18 9.75H5.25L4.5 11.25V16.5m14.25 0h-1.5v2.25m-14.25-2.25H3v2.25m3.75-2.25h9.75a1.5 1.5 0 001.5-1.5V11.25m-12.75 3.75h1.5v2.25"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />
      
      <main className="flex-1 w-full pt-40 pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'Resources', href: '#' }, { label: "Supplements" }]} />
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--gw-primary)] mb-8 leading-tight">
              High-Quality <br/>
              <span className="text-[var(--gw-accent)]">Healing Supplements</span>
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-xl">
              At GWCIM, we believe that pure, physician-grade supplements are essential to your healing journey. We've curated the most trusted brands to support your personalized health protocol.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={fullscriptLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--gw-primary)] text-white px-10 py-5 rounded-2xl font-bold tracking-widest uppercase hover:bg-[var(--gw-blue)] transition-all shadow-xl text-sm"
              >
                Go to Fullscript Store
              </a>
              <Link 
                href="/schedule-an-appointment"
                className="border-2 border-[var(--gw-primary)] text-[var(--gw-primary)] px-10 py-5 rounded-2xl font-bold tracking-widest uppercase hover:bg-[var(--gw-primary)] hover:text-white transition-all text-sm"
              >
                Get a Personalized Plan
              </Link>
            </div>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="aspect-square bg-[var(--gw-blue)]/5 rounded-full absolute -top-10 -right-10 w-full h-full -z-10"></div>
            <div className="rounded-none overflow-hidden shadow-2xl border-[12px] border-white">
                <img 
                    src="/images/providers/about/foye.jpg" 
                    alt="Supplements and Wellness" 
                    className="w-full h-full object-cover"
                />
            </div>
          </div>
        </section>

        {/* Features - Why Quality Matters */}
        <section className="bg-slate-50 py-24 mb-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-[var(--gw-primary)] mb-4">Why Quality Matters</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Not all supplements are created equal. We ensure yours are safe, effective, and reliable.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {supplementFeatures.map((feature, idx) => (
                        <div key={idx} className="bg-white p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
                            <div className="w-16 h-16 bg-[var(--gw-accent)]/10 text-[var(--gw-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[var(--gw-primary)] mb-4">{feature.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Integration Section */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-24">
            <h2 className="text-3xl font-serif text-[var(--gw-primary)] mb-8">Integrated With Your Care</h2>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light mb-16">
                <p>
                    Supplements are most effective when they are part of a coordinated care plan. Your GWCIM provider will monitor your supplement intake, ensuring there are no contraindications with your other treatments and adjusting doses based on regular lab work.
                </p>
            </div>

            <div className="bg-white p-12 border border-slate-100 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">Our Trusted Brand Partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                    <span className="text-xl font-bold font-serif text-[var(--gw-primary)]">THORNE</span>
                    <span className="text-xl font-bold font-serif text-[var(--gw-primary)]">METAGENICS</span>
                    <span className="text-xl font-bold font-serif text-[var(--gw-primary)]">PURE</span>
                    <span className="text-xl font-bold font-serif text-[var(--gw-primary)]">ORTHO MOLECULAR</span>
                </div>
            </div>
            
            <div className="flex justify-center gap-12 mt-16 py-10 border-y border-slate-100">
                <div>
                    <span className="block text-4xl font-serif text-[var(--gw-accent)] mb-1">50+</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Trusted Brands</span>
                </div>
                <div>
                    <span className="block text-4xl font-serif text-[var(--gw-accent)] mb-1">100%</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Pure Formulations</span>
                </div>
                <div>
                    <span className="block text-4xl font-serif text-[var(--gw-accent)] mb-1">24/7</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Online Access</span>
                </div>
            </div>
        </section>

        {/* Fullscript CTA */}
        <section className="max-w-6xl mx-auto px-6">
            <div className="bg-[var(--gw-primary)] p-12 md:p-20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="relative z-10 max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to order?</h2>
                    <p className="text-white/70 text-lg mb-0 font-light">
                        Our online dispensary with Fullscript allows you to order your practitioner-recommended supplements from the comfort of your home.
                    </p>
                </div>
                <div className="relative z-10 shrink-0">
                    <a 
                        href={fullscriptLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[var(--gw-accent)] text-[var(--gw-primary)] px-12 py-5 rounded-2xl font-bold tracking-[0.2em] uppercase hover:bg-white transition-all shadow-2xl block text-center"
                    >
                        Visit Dispensary
                    </a>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-full bg-white/5 skew-x-12 translate-x-32"></div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
