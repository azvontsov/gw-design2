'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function WhatIsIntegrativeMedicinePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />
      
      <main className="flex-1 w-full pt-40 pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-24">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: "What is Integrative Medicine?" }]} />
        </div>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--gw-primary)] mb-8 leading-tight">
            What is Integrative Medicine?
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">
            A comprehensive, patient-centered approach to healthcare that addresses the physical, emotional, and social factors that influence health.
          </p>
        </section>

        {/* Content Section */}
        <section className="max-w-3xl mx-auto px-6 prose prose-slate prose-lg">
          <div className="space-y-12 text-[var(--gw-text-main)]">
            <div>
              <h2 className="text-2xl font-bold text-[var(--gw-primary)] mb-4">A Holistic Perspective</h2>
              <p className="leading-relaxed">
                Integrative medicine is more than just combining conventional and alternative therapies. It's a fundamental shift in how we approach health and healing. It prioritizes the therapeutic relationship between practitioner and patient and uses all appropriate therapies—both conventional and complementary—to facilitate the body's innate healing response.
              </p>
            </div>

            <div className="bg-slate-50 border-l-4 border-[var(--gw-accent)] p-8 my-10">
              <h3 className="text-xl font-bold text-[var(--gw-primary)] mb-4">Core Principles of Integrative Medicine:</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gw-accent)] font-bold text-xl">•</span>
                  <span><strong>Patient and practitioner are partners</strong> in the healing process.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gw-accent)] font-bold text-xl">•</span>
                  <span><strong>Addressing all factors</strong> that influence health: body, mind, spirit, and community.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gw-accent)] font-bold text-xl">•</span>
                  <span><strong>Emphasizing prevention</strong> and personalized lifestyle interventions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gw-accent)] font-bold text-xl">•</span>
                  <span><strong>Integrating evidence-based therapies</strong> from conventional and complementary traditions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gw-accent)] font-bold text-xl">•</span>
                  <span><strong>Identifying and treating root causes</strong> rather than merely suppressing symptoms.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--gw-primary)] mb-4">Why it Matters</h2>
              <p className="leading-relaxed">
                In an increasingly complex medical landscape, integrative medicine offers a path toward more effective and sustainable health outcomes. By considering the whole person and their unique biology and life circumstances, we can create more personalized and powerful healing strategies.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
