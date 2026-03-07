'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function MissionStatementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />
      
      <main className="flex-1 w-full pt-40 pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: "Mission Statement" }]} />
        </div>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--gw-primary)] mb-8 leading-tight">
            GW Center for Integrative Medicine: Mission Statement and Director's Message
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">
            Providing high-quality integrative healthcare through clinical care, education, and research.
          </p>
        </section>

    
        <section className="max-w-3xl mx-auto px-6 prose prose-slate prose-lg">
          <div className="space-y-12 text-[var(--gw-text-main)]">
            <div>
              <h2 className="text-2xl font-bold text-[var(--gw-primary)] mb-4">Our Mission</h2>
              <p className="leading-relaxed">
                The GWCIM is a premier integrative medicine clinic dedicated to patient-centered, personalized care. We aim to transform healthcare by integrating conventional medicine with evidence-based complementary therapies to address the root causes of illness and optimize well-being.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--gw-primary)] mb-4">Director's Message</h2>
              <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 border border-[var(--gw-primary)]/50">
                   <img src="/images/providers/misha.jpg" alt="Dr. Mikhail Kogan" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="italic text-lg mb-4">
                    "Healing is not just about the absence of disease, but the restoration of wholeness. At GWCIM, we walk alongside our patients on their journey toward health, utilizing every tool from our diverse toolkit—ranging from advanced diagnostics to ancient wisdom."
                  </p>
                  <p className="font-bold text-[var(--gw-primary)]">— Mikhail Kogan, MD, Medical Director</p>
                </div>
              </div>
              <p className="leading-relaxed">
                Since our founding in 1998, GWCIM has remained at the forefront of the integrative medicine field. We serve as a clinical base for the George Washington University Medical Center's Integrative Medicine programs, ensuring that our clinical practice is grounded in the latest research and teaching the next generation of healthcare leaders.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
