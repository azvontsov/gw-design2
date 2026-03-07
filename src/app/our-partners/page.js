'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />
      
      <main className="flex-1 w-full pt-40 pb-24 text-center">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'Team', href: '/people' }, { label: "Our Partners" }]} />
        </div>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--gw-primary)] mb-8 leading-tight">
            Our Strategic Partners
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Collaboration is at the heart of what we do. We are currently finalizing our list of strategic partners and corporate alliances.
          </p>
          <div className="w-24 h-1 bg-[var(--gw-gold)] mt-10 mx-auto"></div>
        </section>

        {/* Placeholder Grid */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
            <div className="flex flex-col items-center justify-center py-40 border-2 border-dashed border-slate-200 rounded-none bg-white opacity-60">
                <svg className="w-16 h-16 text-slate-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                <h3 className="text-xl font-serif text-[var(--gw-primary)] mb-2 font-bold tracking-widest uppercase">Content Coming Soon</h3>
                <p className="text-slate-500">We are updating our partnership opportunities and corporate listings.</p>
            </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 text-center py-20 bg-[var(--gw-primary)] rounded-none relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-cover"></div>
            <div className="relative z-10">
                <h2 className="text-3xl font-serif text-white mb-6">Interested in Partnering?</h2>
                <p className="text-white/80 mb-10 max-w-xl mx-auto">
                    GW Center for Integrative Medicine is always looking for mission-aligned organizations. 
                </p>
                <Link 
                    href="/contact"
                    className="inline-flex items-center gap-3 border-2 border-[var(--gw-gold)] text-[var(--gw-gold)] px-10 py-4 rounded-2xl font-bold tracking-widest hover:bg-[var(--gw-gold)] hover:text-[var(--gw-primary)] transition-all duration-300 uppercase text-sm"
                >
                    Inquire About Collaboration
                </Link>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
