'use client';

import { useState, use, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

// ─── Mock conditions data (replace with CMS/API later) ──────────────────────────
const conditionsDb = {
  'chronic-illness': {
    title: 'Chronic Illness',
    tagline: 'Comprehensive management for complex, long-term health challenges.',
    heroImage: '/images/news/01.png',
    heroFallbackColor: 'var(--sw-indigo)',
    overview: `Chronic illnesses are long-term health conditions that often require ongoing medical attention and limit activities of daily living. At GWCIM, we specialize in multi-system chronic illnesses that Haven't responded well to conventional treatments alone.

Our approach shifts the focus from merely managing symptoms to identifying and addressing the underlying imbalances — whether they are immunological, hormonal, nutritional, or environmental. We believe that even with a chronic diagnosis, significant improvement in quality of life and functionality is possible.`,
    whyGwcim: `GWCIM was founded on the principle of helping those with the most complex health journeys. Our providers are experts in "medical detective work," looking at the intersections of different body systems that are often treated in isolation by specialists.

We offer longer appointment times, a collaborative team environment, and access to advanced functional testing that helps us see the full picture of your health.`,
    treatments: [
      'Functional Medicine Consultations',
      'Nutritional Counseling',
      'Intravenous (IV) Therapy',
      'Acupuncture & TCM',
      'Mind-Body Medicine & Sarno Method',
      'Herbal Medicine'
    ],
    howWeManage: `Management of chronic illness at GWCIM is a partnership. We begin with a deep dive into your history — often going back to childhood — to understand the triggers and mediators of your condition.

Your plan may include:
• System-wide inflammation reduction
• Gut microbiome restoration
• Mitochondrial support for energy production
• Stress resilience and nervous system regulation
• Personalized detoxification support`,
    faqs: [
      {
        q: 'How long does it take to see results with chronic illness?',
        a: 'While every patient is unique, chronic conditions often develop over years and require time to reverse. Many patients report improvements in energy and symptom intensity within 3-6 months of following their personalized protocol.'
      },
      {
        q: 'Do you work with my current specialists?',
        a: 'Yes. We frequently collaborate with rheumatologists, neurologists, and other specialists to ensure your integrative plan is safe and coordinated with your conventional care.'
      }
    ],
    relatedConditions: [
      { title: 'Autoimmune Diseases', slug: 'autoimmune-diseases' },
      { title: 'Pain and Fatigue', slug: 'pain-and-fatigue' },
      { title: 'Digestive Disorders', slug: 'digestive-disorders' }
    ],
    providers: [
      { name: 'Dr. Mikhail Kogan, MD', role: 'Medical Director', specialty: 'Integrative Geriatrics & Internal Medicine' },
      { name: 'Ashley Drapeau, PA-C, LAc', role: 'Clinical Director', specialty: 'Integrative Medicine & Acupuncture' }
    ]
  },
  'cirs-and-mold-toxicity': {
    title: 'CIRS & Mold Toxicity',
    tagline: 'Specialized Shoemaker protocol for biotoxin illness and environmental sensitivities.',
    heroImage: '/images/news/03.png',
    heroFallbackColor: 'var(--sw-searching)',
    overview: `Chronic Inflammatory Response Syndrome (CIRS) is a multi-system, multi-symptom illness caused by exposure to biotoxins, most commonly found in water-damaged buildings. Because the symptoms are so diverse — ranging from brain fog and fatigue to joint pain and respiratory issues — it is often misdiagnosed as fibromyalgia or chronic fatigue syndrome.

At GWCIM, we use evidence-based protocols to identify genetic susceptibility and physiological markers of biotoxin illness, providing a clear path to recovery.`,
    whyGwcim: `We are one of the few centers in the region with extensive experience in the Shoemaker Protocol. Our team understands the complexities of environmental medicine and the critical importance of a clean environment during the healing process.`,
    treatments: [
      'Shoemaker Protocol implementation',
      'VCS (Visual Contrast Sensitivity) Testing',
      'Specialized labs (MSH, VIP, C4a, TGF-beta1)',
      'Detoxification support',
      'VIP Nasal Spray protocols'
    ],
    howWeManage: `Our CIRS management follows a rigorous, step-by-step approach:
• Removal from exposure (Step 1 is always the environment)
• Use of binders to remove circulating toxins
• Correction of hormonal and inflammatory markers
• MarCoNS treatment if present
• Final restoration using VIP protocols when appropriate`,
    faqs: [
      {
        q: 'What is a VCS test?',
        a: 'The Visual Contrast Sensitivity (VCS) test is a non-invasive screening tool that measures your ability to see patterns. Biotoxins often affect neurological function in a way that reduces contrast sensitivity before other symptoms appear.'
      }
    ],
    relatedConditions: [
      { title: 'Tick-Borne Diseases', slug: 'tick-borne-diseases' },
      { title: 'Long COVID', slug: 'long-covid' }
    ],
    providers: [
      { name: 'Dr. Mikhail Kogan, MD', role: 'Medical Director', specialty: 'Shoemaker Protocol Expert' }
    ]
  }
};

// ─── Fallback for unknown slugs ───────────────────────────────────────────────
function buildFallback(slug) {
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title,
    tagline: 'Expert integrative care for complex health conditions.',
    heroFallbackColor: 'var(--sw-indigo)',
    overview: `${title} is one of the many conditions we treat at GWCIM. We apply a whole-person perspective to understand the root causes of your symptoms and develop a personalized path to wellness.`,
    whyGwcim: 'At GWCIM, we combine the best of conventional diagnostics with functional medicine insights to provide care that is truly integrative.',
    treatments: ['Integrative Consultations', 'Functional Medicine', 'Nutritional Support'],
    howWeManage: 'Your journey begins with a comprehensive evaluation followed by a collaborative treatment plan involving our multidisciplinary team.',
    providers: [],
    faqs: [],
    relatedConditions: []
  };
}

// ─── Sub-components (consistent with services/page.js) ──────────────────────────

function SectionLabel({ children }) {
  return (
    <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
      {children}
    </p>
  );
}

function SectionHeading({ children }) {
  return (
    <h2
      className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6"
      style={{ fontFamily: 'var(--font-gt-super)' }}
    >
      {children}
    </h2>
  );
}

function ContentSection({ id, label, heading, children }) {
  return (
    <section id={id} className="py-12 border-b border-gray-200 scroll-mt-24">
      <SectionLabel>{label}</SectionLabel>
      <SectionHeading>{heading}</SectionHeading>
      {children}
    </section>
  );
}

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="group">
      <button
        onClick={onToggle}
        className="w-full py-8 flex items-center justify-between text-left hover:text-[var(--gw-blue)] transition-colors focus:outline-none"
      >
        <span
          className="text-[20px] md:text-[22px] font-medium text-[var(--gw-primary)] pr-8 group-hover:text-[var(--gw-blue)] transition-colors leading-tight"
          style={{ fontFamily: 'var(--font-gt-super)' }}
        >
          {q}
        </span>
        <div className="flex-shrink-0 w-6 h-6 relative flex items-center justify-center text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors">
          <span className="absolute w-full h-[2px] bg-current transition-transform duration-300" />
          <span
            className={`absolute w-[2px] h-full bg-current transition-all duration-300 ${
              isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[17px] text-gray-600 leading-relaxed pr-12">{a}</p>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ConditionDetailPage({ params }) {
  const { slug } = use(params);
  const condition = conditionsDb[slug] ?? buildFallback(slug);

  const tocItems = [
    { id: 'overview', label: `Overview`, show: !!condition.overview },
    { id: 'why', label: `Our Advantage`, show: !!condition.whyGwcim },
    { id: 'how', label: `Our Approach`, show: !!condition.howWeManage },
    { id: 'treatments', label: `Modalities Used`, show: condition.treatments?.length > 0 },
    { id: 'providers', label: `Specialists`, show: condition.providers?.length > 0 },
    { id: 'faqs', label: 'Common Questions', show: condition.faqs?.length > 0 },
  ].filter(item => item.show);

  const [activeToc, setActiveToc] = useState('overview');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveToc(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const scrollTo = (id) => {
    setActiveToc(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-secondary-light)]">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: condition.heroFallbackColor }}
        />
        {condition.heroImage && (
          <img
            src={condition.heroImage}
            alt={condition.title}
            className="absolute inset-0 w-full h-full object-cover z-[1]"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-[2]" />

        <div className="relative z-10 w-full container mx-auto px-6 lg:px-12 pb-16 pt-48">
          <div className="hidden lg:block">
            <Breadcrumbs 
              variant="white"
              items={[
                { label: 'Conditions', href: '/conditions' },
                { label: condition.title }
              ]} 
            />
          </div>

          <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm mb-4 bg-[var(--gw-accent)] text-[var(--gw-primary)]">
            Condition Treated
          </span>

          <h1
            className="text-[40px] md:text-[56px] lg:text-[68px] font-medium text-white leading-tight max-w-4xl"
            style={{ fontFamily: 'var(--font-gt-super)' }}
          >
            {condition.title}
          </h1>
          <p className="mt-4 text-white/80 text-[18px] max-w-2xl leading-relaxed">
            {condition.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/schedule-an-appointment"
              className="inline-flex items-center gap-2 bg-[var(--gw-accent)] text-[var(--gw-primary)] text-[13px] font-bold uppercase tracking-widest px-8 py-4 rounded-2xl hover:bg-white transition-all shadow-lg"
            >
              Request a Consult
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <main className="flex-1">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">

            {/* LEFT COLUMN */}
            <div className="flex-1 min-w-0">
              <ContentSection id="overview" label="The Condition" heading={`Understanding ${condition.title}`}>
                <div className="space-y-6 text-gray-600 leading-relaxed font-light">
                    {condition.overview.split('\n\n').map((para, i) => (
                        <p key={i} className="text-[17px]">{para}</p>
                    ))}
                </div>
              </ContentSection>

              <ContentSection id="why" label="Expertise" heading={`Integrative Edge for ${condition.title}`}>
                <div className="space-y-6 text-gray-600 leading-relaxed font-light">
                    {condition.whyGwcim.split('\n\n').map((para, i) => (
                        <p key={i} className="text-[17px]">{para}</p>
                    ))}
                </div>
              </ContentSection>

              <ContentSection id="how" label="Management" heading="Integrated Care Strategy">
                <div className="space-y-4 mb-8">
                  {condition.howWeManage.split('\n').map((line, i) => {
                    if (line.trim().startsWith('•')) {
                      return (
                        <div key={i} className="flex items-center gap-4 py-3 px-5 bg-white border-l-2 border-[var(--gw-accent)]">
                          <span className="text-[16px] text-gray-700 font-medium">{line.slice(1).trim()}</span>
                        </div>
                      );
                    }
                    return line.trim() ? (
                      <p key={i} className="text-[17px] text-gray-600 leading-relaxed font-light mb-4">{line}</p>
                    ) : null;
                  })}
                </div>
              </ContentSection>

              <ContentSection id="treatments" label="Modalities" heading="Therapies We Utilize">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100 overflow-hidden">
                    {condition.treatments.map((t, i) => (
                        <div key={i} className="bg-white p-6 hover:bg-slate-50 transition-colors">
                            <h3 className="text-sm font-bold text-[var(--gw-primary)] uppercase tracking-widest">{t}</h3>
                        </div>
                    ))}
                </div>
              </ContentSection>

              {condition.providers.length > 0 && (
                <ContentSection id="providers" label="Team" heading="Clinical Leads">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {condition.providers.map((provider, i) => (
                      <div key={i} className="flex items-center gap-5 p-6 bg-white border border-gray-100 shadow-sm">
                        <div className="w-14 h-14 rounded-full bg-[var(--gw-primary)] text-white flex items-center justify-center font-bold text-xl uppercase tracking-tighter">
                          {provider.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-[var(--gw-primary)]">{provider.name}</p>
                          <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">{provider.role}</p>
                          <p className="text-xs text-[var(--gw-blue)] mt-1">{provider.specialty}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ContentSection>
              )}

              {condition.faqs.length > 0 && (
                <ContentSection id="faqs" label="Knowledge" heading="Common Questions">
                   <div className="divide-y divide-gray-200">
                    {condition.faqs.map((faq, i) => (
                      <FAQItem
                        key={i}
                        q={faq.q}
                        a={faq.a}
                        isOpen={openFaqIndex === i}
                        onToggle={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                      />
                    ))}
                  </div>
                </ContentSection>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="lg:w-[320px] xl:w-[380px] shrink-0 lg:sticky lg:top-24 space-y-8">
              
              {/* Desktop TOC */}
              <div className="hidden lg:block bg-white border border-gray-100 p-8 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-6">On this page</p>
                <ul className="space-y-2">
                  {tocItems.map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollTo(item.id)}
                        className={`text-[12px] text-left w-full py-2 px-4 transition-all uppercase tracking-widest font-bold ${activeToc === item.id
                          ? 'text-[var(--gw-primary)] bg-slate-50 border-l-4 border-[var(--gw-accent)]'
                          : 'text-slate-400 hover:text-[var(--gw-primary)] border-l-4 border-transparent'}`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar CTA */}
              <div className="bg-[var(--gw-primary)] p-8 text-white relative overflow-hidden group">
                <div className="relative z-10">
                    <h3 className="text-2xl font-serif mb-4 leading-tight">Ready for a different approach?</h3>
                    <p className="text-white/60 text-sm mb-8 font-light leading-relaxed">
                        Our integrative team is currently accepting new patients with complex chronic conditions. 
                    </p>
                    <Link 
                        href="/schedule-an-appointment"
                        className="flex w-full items-center justify-center gap-2 bg-[var(--gw-accent)] text-[var(--gw-primary)] text-[12px] font-bold uppercase tracking-widest px-6 py-4 rounded-2xl group-hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl"
                    >
                        Request Appointment
                    </Link>
                </div>
              </div>

              {/* Related Conditions */}
              {condition.relatedConditions.length > 0 && (
                <div className="bg-white border border-gray-100 p-8 shadow-sm">
                   <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-6">Related Concerns</p>
                   <div className="space-y-3">
                    {condition.relatedConditions.map((rel, i) => (
                        <Link 
                            key={i} 
                            href={`/conditions/${rel.slug}`}
                            className="flex items-center justify-between group py-3 border-b border-gray-50 last:border-0"
                        >
                            <span className="text-[14px] font-medium text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors">{rel.title}</span>
                            <svg className="w-4 h-4 text-gray-300 group-hover:text-[var(--gw-blue)] transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                        </Link>
                    ))}
                   </div>
                </div>
              )}

            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
