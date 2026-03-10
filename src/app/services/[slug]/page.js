'use client';

import { useState, use, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

// ─── Mock service data (replace with CMS/API later) ──────────────────────────
const servicesDb = {
  'naturopathic-medicine': {
    title: 'Naturopathic Medicine',
    category: 'Consultations',
    categorySlug: 'Consultations',
    heroImage: '/images/naturopathic-medicine.jpg',
    heroFallbackColor: 'var(--sw-hazel)',
    tagline: 'A comprehensive approach to health and healing that combines modern scientific knowledge with traditional and natural forms of medicine.',
    icon: '/images/doodles/icon-2.png',
    what: `Naturopathic medicine is a comprehensive approach to health and healing that combines modern scientific knowledge with traditional and natural forms of medicine. Naturopathic Medicine is a distinct primary health care profession, emphasizing prevention, treatment and optimal health through the use of therapeutic methods and substances which encourage the person's inherent self-healing process, the vis medicatrix naturae.

Who are licensed Naturopathic Doctors (ND)?

Naturopathic doctors (NDs) address the mental, emotional and physical aspects of an individual, and aim to treat the root causes as well as the symptoms of illness. NDs are trained as primary care doctors at accredited four-year naturopathic medical schools. The training includes comprehensive study of the conventional medical sciences, as well as detailed study of a wide variety of natural therapies. NDs integrate standard medical diagnostics with a broad range of natural and non-invasive therapies, including clinical nutrition, herbs, homeopathy, lifestyle counseling, physical medicine and counseling. NDs may also prescribe medication if needed. Naturopathic therapies can be used to complement traditional medical treatments. The result is a patient-centered approach providing the most appropriate treatment for an individual.`,
    conditions: [
      'Chronic fatigue and low energy',
      'Digestive disorders (IBS, Crohn\'s, GERD)',
      'Hormonal imbalances and thyroid disorders',
      'Autoimmune conditions',
      'Anxiety, depression, and mood disorders',
      'Cardiovascular risk reduction',
      'Skin conditions (eczema, psoriasis, acne)',
      'Weight management and metabolic syndrome',
      'Allergies and environmental sensitivities',
    ],
    whyGwcim: `At GWCIM, our naturopathic doctors work as an integral part of a multidisciplinary team, collaborating closely with integrative physicians, acupuncturists, and mental health providers. This team-based approach ensures that every aspect of your health is considered — physical, emotional, and environmental.

We combine thorough diagnostic evaluation with evidence-based natural therapies, crafting individualized care plans that evolve with your health journey. Our clinic setting allows extended appointment times so your provider can truly listen and understand your full story.`,
    howWeDoIt: `Your care begins with a comprehensive 90-minute initial consultation covering your full health history, lifestyle factors, diet, stress levels, and environmental exposures. Your naturopathic doctor may order specialized labs — including functional medicine testing — to identify root causes that conventional screenings often miss.

Treatment plans are individualized and may include:
• Clinical nutrition and therapeutic diet
• Botanical medicine and herbal formulations
• Nutritional supplementation
• Lifestyle counseling
• Detoxification protocols
• Homeopathy
• Physical medicine`,
    principles: [
      {
        name: 'The Healing Power of Nature',
        description: 'Recognizes an inherent self-healing process in the person, which is ordered and intelligent. Naturopathic physicians act to identify and remove obstacles to healing and recovery, and to facilitate and augment this inherent self-healing process.',
      },
      {
        name: 'Identify and Treat the Causes',
        description: 'Seeks to identify and remove the underlying causes of illness, rather than merely suppress symptoms.',
      },
      {
        name: 'First Do No Harm',
        description: 'Utilizes methods and medicinal substances, which minimize the risk of harmful side effects by using the least force necessary to diagnose and treat.',
      },
      {
        name: 'Doctor as Teacher',
        description: 'Educates patients and encourages self-responsibility for health.',
      },
      {
        name: 'Treat the Whole Person',
        description: 'Accounts for individual physical, mental, emotional, genetic, environmental, social and other factors. Also encourages individuals to pursue their personal spiritual development.',
      },
      {
        name: 'Prevention',
        description: 'Works in partnership with patients to assess risk factors, heredity and susceptibility to disease to preserve health and prevent illness.',
      },
    ],
    providers: [
      { name: 'Deirdre Orceyre', credentials: 'ND, MSOM, L.Ac.', role: 'Naturopathic Doctor', specialty: 'Naturopathic & Chinese Medicine', image: '/images/providers/dierdre.jpg', slug: 'deirdre-orceyre-nd-lac' },
      { name: 'Marianna Ledenac', credentials: 'ND', role: 'Naturopathic Doctor', specialty: 'Naturopathic Medicine', image: '/images/providers/marianna.jpeg', slug: 'marianna-ledenac-nd' },
    ],
    moreAbout: `Naturopathic medicine has a rich tradition rooted in European and indigenous healing practices, formalized in North America in the early 1900s. Today, it is a regulated profession with rigorous postgraduate medical training. GWCIM naturopathic doctors hold doctorate-level degrees from accredited naturopathic medical schools and are licensed practitioners.

Research continues to validate many traditional naturopathic approaches — from herbal adaptogens for stress resilience to dietary interventions for chronic disease reversal.`,
    bottomImage: null,
    faqs: [
      {
        q: 'Is naturopathic medicine covered by insurance?',
        a: 'At GWCIM we accept select insurance plans and offer superbills for out-of-network reimbursement. Coverage varies by state and plan — our billing team can help you verify benefits before your first visit.',
      },
      {
        q: 'Can naturopathic medicine be combined with conventional treatments?',
        a: 'Absolutely. Integrative care is at the core of our approach. Our naturopathic doctors collaborate directly with your other healthcare providers to ensure all treatments are safe and complementary.',
      },
      {
        q: 'How many sessions will I need?',
        a: 'Most patients start with an initial 90-minute consultation, followed by shorter follow-up visits every 4–6 weeks. The total number of visits depends on the complexity of your health goals.',
      },
      {
        q: 'Do you see children and adolescents?',
        a: 'Yes — we provide naturopathic care tailored to pediatric and adolescent patients, with particular expertise in childhood allergies, ADHD, digestive issues, and developmental support.',
      },
    ],
    related: [
      { title: 'Functional Medicine', slug: 'functional-medicine', category: 'Consultations' },
      { title: 'Integrative Mental Health', slug: 'integrative-mental-health', category: 'Consultations' },
      { title: 'Nutritional Counseling', slug: 'nutritional-counseling', category: 'Consultations' },
      { title: 'Intravenous Therapy', slug: 'intravenous-therapy', category: 'Treatments' },
    ],
    resources: [
      { type: 'link', title: 'What is Naturopathic Medicine?', url: '#' },
      { type: 'book', title: 'The Nature Doctor', author: 'H.C.A. Vogel', url: '#' },
      { type: 'book', title: 'Textbook of Natural Medicine', author: 'Pizzorno & Murray', url: '#' },
      { type: 'link', title: 'American Association of Naturopathic Physicians', url: 'https://naturopathic.org' },
      { type: 'link', title: 'Institute for Natural Medicine', url: 'https://naturemed.org' },
    ],
    youtube: [
      {
        videoId: 'Z1OEoUca6S4',
        title: 'Integrative Medicine: Beyond Symptoms',
        description: 'Dr. Deirdre Orceyre explores the foundations of naturopathic and integrative medicine.',
      },
      {
        videoId: 'vKcNbELdGlg',
        title: 'What is Naturopathic Medicine?',
        description: 'A deep dive into naturopathic principles and how they support whole-person healing.',
      },
    ],
  },
  'long-covid-online-groups': {
    title: 'Long COVID Medical Group Meets',
    category: 'Ongoing Groups',
    categorySlug: 'Ongoing+Groups',
    heroImage: '/images/news/02.jpg',
    heroFallbackColor: '#6C7F9A', // --sw-searching
    tagline: 'A safe and affordable space where participants with Long COVID can receive evidence-based integrative medicine advice and up-to-date information.',
    icon: null,
    what: `GWCIM Long COVID groups are designed to provide a safe and affordable space where participants with Long COVID can receive evidence-based integrative medicine advice and up-to-date information. Importantly, it's a community of supportive peers to walk this journey together.

Long COVID Group meetings form the foundation of the award-winning Long COVID Program at GWCIM. These gatherings provide invaluable medical expertise, support, and resources for individuals navigating the challenges of Long COVID.`,
    conditions: [
      'Long COVID',
      'Neurocognitive Impairments',
      'Chronic Fatigue',
      'Autonomic Dysfunction'
    ],
    whyGwcim: `We believe that healing happens best in community. Our award-winning Long COVID Program integrates leading-edge medical expertise with the power of shared experience. These gatherings offer both invaluable medical insights from specialized practitioners and the indispensable support of peers who truly understand the journey.`,
    howWeDoIt: `Our groups are facilitated by leading integrative minds who specialize in Long COVID. We regularly feature guest speakers, including multidisciplinary health practitioners specializing in complex chronic illness care.

Cost:
$100 /month membership (cancel any time)

Registration:
Please call 202-833-5055 or email info@gwcim.com to register.`,
    providers: [
      { name: 'Ashley Drapeau', credentials: 'PA-C, MAC, LAc', role: 'Facilitator', specialty: 'Acupuncture & Integrative Medicine', slug: 'ashley-drapeau-pa-c-mac-lac', image: '/images/providers/ashley.jpeg' },
      { name: 'Mikhail Kogan', credentials: 'MD', role: 'Facilitator', specialty: 'Integrative Medicine', slug: 'mikhail-kogan-md', image: '/images/providers/misha.jpg' }
    ],
    moreAbout: `Learn more about the GWCIM Long COVID program. We are actively involved in ongoing research and comprehensive care protocols for post-viral syndromes.`,
    bottomImage: null,
    faqs: [
      { q: "Can I cancel my group membership at any time?", a: "Yes, the $100/month membership for the online group can be cancelled at any time." },
      { q: "Who are the guest speakers?", a: "We invite multidisciplinary health practitioners specializing in Long COVID care, including physical therapists, neurologists, functional medicine experts, and mindfulness instructors." }
    ],
    related: [
      { title: 'New Long COVID Support Group meets on Wednesdays', slug: 'long-covid-support-group-wednesdays', category: 'Hand help' },
      { title: 'What Can You Do About Long COVID?', slug: 'what-can-you-do-about-long-covid', category: 'Long covid help' },
      { title: 'Long COVID Study On Neuropsychiatric Impairment', slug: 'long-covid-neuro-study', category: 'Long Covid' },
    ],
    resources: [],
    youtube: [],
  },
  'recode-support-group': {
    title: 'ReCODE: Renewing Mind & Body Support Group',
    category: 'Ongoing Groups',
    categorySlug: 'Ongoing+Groups',
    heroImage: null,
    heroFallbackColor: '#6C7F9A', // --sw-searching
    tagline: 'A supportive community offering evidence-based integrative insights and resources for individuals in the early stages of Alzheimer’s and their caregivers.',
    icon: null,
    what: `The ReCODE program is based on the Dr. Bredesen protocol™ and the ReCODE Protocol™. Our group is open to anyone in the early stages of Alzheimer’s and their caregivers, regardless of whether you are enrolled in the ReCODE program at GWCIM. 
    
ReCODE explores genetic factors, lifestyle elements, toxin exposures, and nutritional and hormone deficiencies to reverse early Alzheimer’s disease and prevent cognitive decline. Our approach is personalized and comprehensive. In the support group, we offer the most up-to-date information, skills, and the support of a caring community.

Should you choose to become our patient, at GWCIM, we provide comprehensive whole-person assessments and work with each individual patient to create a personalized care plan. We look forward to supporting you and working together to achieve your health and wellness goals.`,
    conditions: [
      'Early Stage Alzheimer’s',
      'Cognitive Decline'
    ],
    whyGwcim: `A supportive community where you are not alone. You get access to the latest scientific discoveries and treatment insights from experts. We provide practical tools and tips to better cope with Alzheimer’s challenges through experiential activities.

Engaging discussions on treatments and personal experiences. Access to GWCIM providers and services for in-depth individual sessions.`,
    howWeDoIt: `Weekly online meetings. Group topics include: Integrative Treatment for Alzheimer’s Disease, Mindfulness, Nutrition, Improving Communication, and Community Resources.

Cost:
Membership Fee: $100 per month (cancel anytime)

Registration:
Please call 202-833-5055 or email info@gwcim.com to register.`,
    providers: [
      { name: 'Dr. Sally Novak', credentials: 'DOM, LAc, LICSW', role: 'Facilitator', specialty: 'Acupuncture & Counseling', slug: 'sally-novak', image: null },
    ],
    moreAbout: `Other GWCIM providers as periodic guests:
- Ajowa Ifateyo, Nutrition and Coaching
- Dr. Mikhail Kogan, ReCODE Medical Director
- Dr. Marianna Ledenac, Hormones
- Dr. Jonah Yakel, Mold Toxicity`,
    bottomImage: null,
    faqs: [
      { q: "Who is this group for?", a: "Individuals in the early stages of Alzheimer’s, whether or not you are enrolled in the ReCODE program at GWCIM, as well as caregivers and family members." }
    ],
    related: [
      { title: 'New Long COVID Support Group meets on Wednesdays', slug: 'long-covid-support-group-wednesdays', category: 'Hand help' },
      { title: 'ReCODE Open House Free Event November 15 2024', slug: 'recode-open-house-nov-2024', category: 'Open House: ReCODE program updates' },
      { title: 'Caregiver for cognitive impairment virtual support group', slug: 'caregiver-support-group', category: 'Supporting Those Who Support Others: A Monthly Care…' }
    ],
    resources: [],
    youtube: [],
  },
};

// ─── Slug → category map (mirrors services/page.js data) ─────────────────────
const slugCategoryMap = {
  // Consultations
  'integrative-geriatrics':               { category: 'Consultations', categorySlug: 'Consultations' },
  'naturopathic-medicine':                { category: 'Consultations', categorySlug: 'Consultations' },
  'functional-medicine':                  { category: 'Consultations', categorySlug: 'Consultations' },
  'integrative-mental-health':            { category: 'Consultations', categorySlug: 'Consultations' },
  'sarno-mind-body-method':               { category: 'Consultations', categorySlug: 'Consultations' },
  'pediatric-adolescent-integrative-medicine': { category: 'Consultations', categorySlug: 'Consultations' },
  'medical-cannabis':                     { category: 'Consultations', categorySlug: 'Consultations' },
  'nutritional-counseling':               { category: 'Consultations', categorySlug: 'Consultations' },
  // Treatments
  'intravenous-therapy':                  { category: 'Treatments', categorySlug: 'Treatments' },
  'mistletoe-injection-therapy':          { category: 'Treatments', categorySlug: 'Treatments' },
  'acupuncture-chinese-medicine':         { category: 'Treatments', categorySlug: 'Treatments' },
  'microneedling-facial-acupuncture':     { category: 'Treatments', categorySlug: 'Treatments' },
  'reiki':                                { category: 'Treatments', categorySlug: 'Treatments' },
  'somatic-experiencing':                 { category: 'Treatments', categorySlug: 'Treatments' },
  'kap-assisted-psychotherapy':           { category: 'Treatments', categorySlug: 'Treatments' },
  // Programs
  'concierge-integrative-medicine':       { category: 'Programs', categorySlug: 'Programs' },
  'reversal-cognitive-decline-recode':    { category: 'Programs', categorySlug: 'Programs' },
  'long-covid':                           { category: 'Programs', categorySlug: 'Programs' },
  'shoemaker-protocol-cirs-mold':         { category: 'Programs', categorySlug: 'Programs' },
  'mindfulness-based-stress-reduction':   { category: 'Programs', categorySlug: 'Programs' },
  'weight-body-composition':              { category: 'Programs', categorySlug: 'Programs' },
  'executive-coaching':                   { category: 'Programs', categorySlug: 'Programs' },
  // Ongoing Groups
  'long-covid-online-groups':             { category: 'Ongoing Groups', categorySlug: 'Ongoing+Groups' },
  'recode-support-group':                 { category: 'Ongoing Groups', categorySlug: 'Ongoing+Groups' },
};

// ─── Fallback for unknown slugs ───────────────────────────────────────────────
function buildFallback(slug) {
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const cat = slugCategoryMap[slug] ?? { category: 'Services', categorySlug: 'All' };
  return {
    title,
    category: cat.category,
    categorySlug: cat.categorySlug,
    heroFallbackColor: 'var(--sw-indigo)',
    tagline: 'Expert integrative care tailored to you.',
    icon: null,
    what: `${title} is offered at GWCIM as part of our comprehensive integrative medicine approach. Our providers bring deep expertise and a whole-person perspective to every patient encounter.`,
    conditions: ['Chronic illness', 'Preventive care', 'Wellness optimization'],
    whyGwcim: 'At GWCIM, every service is delivered within a collaborative, multidisciplinary framework — combining the best of conventional and complementary medicine.',
    howWeDoIt: 'Your care starts with a thorough intake consultation followed by an individualized treatment plan developed in close collaboration with your primary provider.',
    providers: [],
    moreAbout: '',
    bottomImage: null,
    faqs: [],
    related: [],
    resources: [],
  };
}

// ─── Category colors ──────────────────────────────────────────────────────────
const categoryColor = {
  'Consultations': { bg: 'bg-[var(--sw-hazel)]', text: 'text-[var(--sw-hazel)]', hex: '#B9C1B3' },
  'Treatments':    { bg: 'bg-[var(--sw-privilege)]', text: 'text-[var(--sw-privilege)]', hex: '#7A8775' },
  'Programs':      { bg: 'bg-[var(--sw-solitude)]', text: 'text-[var(--sw-solitude)]', hex: '#99A7B8' },
  'Ongoing Groups':{ bg: 'bg-[var(--sw-searching)]', text: 'text-[var(--sw-searching)]', hex: '#6C7F9A' },
  'Services':      { bg: 'bg-[var(--sw-indigo)]', text: 'text-[var(--sw-indigo)]', hex: '#3E5166' },
};

// ─── Sub-components ────────────────────────────────────────────────────────────

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

function ContentSection({ id, label, heading, children, accent }) {
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
          {/* Horizontal line (always visible) */}
          <span className="absolute w-full h-[2px] bg-current transition-transform duration-300" />
          {/* Vertical line (rotates away when open) */}
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

function WeekCalendar({ schedule }) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="bg-white p-6 md:p-8 border border-slate-200 overflow-x-auto shadow-sm my-6">
      <div className="min-w-[700px]">
        <div className="grid grid-cols-5 gap-4 mb-2">
          {days.map(day => (
            <div key={day} className="text-center font-bold text-xs text-slate-400 uppercase tracking-[0.2em] px-2 py-3 border-b border-slate-100 font-sans">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-4">
          {days.map(day => (
            <div key={day} className="min-h-[140px] bg-slate-50 border border-slate-100 p-3 flex flex-col gap-3">
              {schedule.filter(s => s.day === day).map((item, i) => (
                <div key={i} className={`p-4 border ${item.color || 'bg-white border-slate-200'} transition-all hover:-translate-y-0.5 shadow-sm`}>
                  <p className="font-bold text-[13px] mb-1.5 text-black">{item.group}</p>
                  <p className="text-[11px] font-semibold opacity-90 flex items-center gap-1.5 tracking-wide text-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-6">
          <p className="text-sm font-semibold text-slate-500">
              Cost: <span className="text-[var(--gw-primary)]">$100 /month membership</span> (cancel any time)
          </p>
          <a href="mailto:info@gwcim.com" className="bg-[var(--gw-primary)] hover:bg-[var(--gw-blue)] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors">
              Register via Email
          </a>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ServiceDetailPage({ params }) {
  const { slug } = use(params);
  const service = servicesDb[slug] ?? buildFallback(slug);
  const colors = categoryColor[service.category] ?? categoryColor['Services'];

  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [openVideoId, setOpenVideoId]   = useState(null);
  const [activeToc, setActiveToc] = useState('what');

  const tocItems = [
    { id: 'what', label: `Overview`, show: !!service.what },
    { id: 'conditions', label: 'Indications', show: service.conditions?.length > 0 },
    { id: 'why', label: `Our Advantage`, show: !!service.whyGwcim },
    { id: 'how', label: `Our Method`, show: !!service.howWeDoIt },
    { id: 'providers', label: 'Specialists', show: service.providers?.length > 0 },
    { id: 'more', label: `Background`, show: !!service.moreAbout },
    { id: 'faqs', label: 'Common Questions', show: service.faqs?.length > 0 },
    { id: 'related', label: 'Related Links', show: service.related?.length > 0 },
  ].filter(item => item.show);

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

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        {/* Fallback background color - always renders behind */}
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: service.heroFallbackColor ?? 'var(--sw-indigo)' }}
        />
        {/* Hero image - renders on top of color */}
        {service.heroImage && (
          <img
            src={service.heroImage}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover z-[1]"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        )}
        {/* Gradient overlay - lighter at top to show image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10 z-[2]" />


        {/* Content */}
        <div className="relative z-10 w-full container mx-auto px-6 lg:px-12 pb-16 pt-48">
          {/* Breadcrumb */}
          <div className="hidden lg:block">
            <Breadcrumbs 
              variant="white"
              items={[
                { label: 'Services', href: '/services' },
                ...(service.category && service.category !== 'Services' 
                  ? [{ label: service.category, href: `/services?category=${service.categorySlug}` }] 
                  : []),
                { label: service.title }
              ]} 
            />
          </div>

          {/* Category badge */}
          <span className={`inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm mb-4 text-white`}
            style={{ backgroundColor: `${colors.hex}cc` }}>
            {service.category}
          </span>

          <h1
            className="text-[40px] md:text-[56px] lg:text-[68px] font-medium text-white leading-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-gt-super)' }}
          >
            {service.title}
          </h1>
          <p className="mt-4 text-white/80 text-[18px] max-w-xl leading-relaxed">
            {service.tagline}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/schedule-an-appointment"
              className="inline-flex items-center gap-2 bg-[var(--gw-accent)] text-[var(--gw-primary)] text-[13px] font-bold uppercase tracking-widest px-7 py-4 rounded-2xl hover:bg-white hover:text-[var(--gw-primary)] transition-all duration-300 shadow-lg"
            >
              Make an Appointment
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-white text-white text-[13px] font-bold uppercase tracking-widest px-7 py-4 rounded-2xl hover:bg-white hover:text-[var(--gw-primary)] transition-all duration-300"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Body: Two-column layout ────────────────────────────────────── */}
      <main className="flex-1">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-start">

            {/* ── LEFT COLUMN ────────────────────────────────────────────── */}
            <div className="flex-1 min-w-0">

              {/* TOC (mobile only) */}
              <nav className="lg:hidden mb-10 p-5 bg-white shadow-sm border border-gray-200">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">On this page</p>
                <ul className="space-y-1">
                  {tocItems.map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollTo(item.id)}
                        className="text-[13px] text-[var(--gw-primary)] hover:text-[var(--gw-blue)] transition-colors text-left w-full py-1"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* What is */}
              <ContentSection id="what" label="Overview" heading={`What is ${service.title}?`}>
                <div className="space-y-5 text-[var(--gw-text-main)]">
                  {service.what.split('\n\n').map((para, i) => {
                    // Detect standalone sub-headings (short, ends in ?)
                    const isSubheading = para.trim().length < 80 && para.trim().endsWith('?');
                    if (isSubheading) {
                      return (
                        <h3 key={i}
                          className="text-[20px] font-semibold text-[var(--gw-primary)] pt-4 pb-1 border-t border-gray-200"
                          style={{ fontFamily: 'var(--font-gt-super)' }}
                        >
                          {para.trim()}
                        </h3>
                      );
                    }
                    return (
                      <p key={i} className="text-[16px] leading-relaxed text-[var(--gw-text-main)]">
                        {para}
                      </p>
                    );
                  })}
                </div>
                
                {/* Specific injection for Ongoing Groups schedules */}
                {(slug === 'long-covid-online-groups' || slug === 'recode-support-group') && (
                    <div className="mt-12" id="schedule">
                        <SectionHeading>Ongoing Groups Schedule</SectionHeading>
                        <p className="text-[16px] leading-relaxed text-[var(--gw-text-main)] mb-6">
                            Join our weekly group sessions hosted by our expert facilitators. Check the schedule below to find a time that works best for you.
                        </p>
                        <WeekCalendar schedule={
                            slug === 'long-covid-online-groups' 
                            ? [
                                { group: 'Group #2', day: 'Wednesday', time: '5:30pm - 6:30pm', color: 'bg-[#abcc76]/20 text-[#068466] border-[#abcc76]' },
                                { group: 'Group #3', day: 'Thursday', time: '12:00pm - 1:00pm', color: 'bg-[#99A7B8]/20 text-[#3E5166] border-[#99A7B8]' },
                                { group: 'Group #1', day: 'Thursday', time: '5:30pm - 6:30pm', color: 'bg-[#B9C1B3]/30 text-[#425c7b] border-[#B9C1B3]' }
                              ]
                            : [
                                { group: 'ReCODE Support', day: 'Tuesday', time: '5:30pm - 6:30pm', color: 'bg-[#DABF62]/20 text-[#AB8B22] border-[#DABF62]' }
                              ]
                        } />
                    </div>
                )}
              </ContentSection>

              {/* Conditions */}
              <ContentSection id="conditions" label="Indications" heading="What conditions does it treat?">
                <div className="flex flex-wrap w-full gap-[2px] bg-[var(--gw-secondary-light)]">
                  {service.conditions.map((cond, i) => (
                    <div
                      key={i}
                      className="group flex-grow flex items-center justify-center hover:bg-[var(--gw-blue)] px-6 h-[72px] font-semibold text-[14px] tracking-wide bg-[var(--sw-hazel)] transition-colors duration-300 text-center cursor-default"
                    >
                      <span className="text-[var(--gw-primary)] group-hover:text-white transition-colors duration-300">{cond}</span>
                    </div>
                  ))}
                </div>
              </ContentSection>

              {/* Why GWCIM */}
              <ContentSection id="why" label="Our Approach" heading={`Why ${service.title} at GWCIM?`}>
                <div className="space-y-4">
                  {service.whyGwcim.split('\n\n').map((para, i) => (
                    <p key={i} className="text-[16px] leading-relaxed text-[var(--gw-text-main)]">{para}</p>
                  ))}
                </div>

                {/* Pull quote */}
                <blockquote className="mt-8 pl-6 border-l-4 bg-white py-5 pr-6" style={{ borderLeftColor: colors.hex }}>
                  <p className="text-[17px] font-medium text-[var(--gw-primary)] leading-snug italic"
                    style={{ fontFamily: 'var(--font-gt-super)' }}
                  >
                    &ldquo;GWCIM integrates the best of conventional and complementary medicine to offer care that is truly personalized, evidence-informed, and compassionate.&rdquo;
                  </p>
                </blockquote>
              </ContentSection>

              {/* How we do it */}
              <ContentSection id="how" label="Our Method" heading={`How do we do ${service.title} at GWCIM?`}>
                <div className="space-y-1 mb-8">
                  {service.howWeDoIt.split('\n').map((line, i) => {
                    if (line.startsWith('•')) {
                      return (
                        <div key={i} className="flex items-center gap-3 py-2.5 px-4 bg-white border-l-2" style={{ borderLeftColor: colors.hex }}>
                          <span className="text-[15px] text-[var(--gw-text-main)]">{line.slice(1).trim()}</span>
                        </div>
                      );
                    }
                    return line.trim() ? (
                      <p key={i} className="text-[16px] leading-relaxed text-[var(--gw-text-main)] mb-4">{line}</p>
                    ) : null;
                  })}
                </div>

                {/* Principles */}
                {service.principles?.length > 0 && (
                  <>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4 mt-10">Principles of Naturopathic Medicine</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.principles.map((p, i) => (
                        <div key={i} className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all border-l-4" style={{ borderLeftColor: colors.hex }}>
                          <p className="text-[13px] font-bold text-[var(--gw-primary)] mb-1.5">{p.name}</p>
                          <p className="text-[13px] text-[var(--gw-text-muted)] leading-relaxed">{p.description}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </ContentSection>

              {/* Providers */}
              {service.providers.length > 0 && (
                <ContentSection id="providers" label="Our Team" heading={`GWCIM ${service.title} Providers`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {service.providers.map((provider, i) => (
                      <Link 
                        key={i} 
                        href={`/people/${provider.slug || '#'}`}
                        className="flex items-center gap-4 p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                      >
                        <div className="w-14 h-14 rounded-full shrink-0 overflow-hidden border border-gray-100">
                          {provider.image ? (
                            <img src={provider.image} alt={provider.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-white font-bold text-[18px]"
                              style={{ backgroundColor: colors.hex }}>
                              {provider.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors text-[15px]">
                            {provider.name}{provider.credentials ? `, ${provider.credentials}` : ''}
                          </p>
                          <p className="text-[13px] text-[var(--gw-text-muted)]">{provider.role}</p>
                          <p className="text-[12px] text-[var(--gw-blue)] mt-0.5">{provider.specialty}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </ContentSection>
              )}

              {/* More about */}
              {service.moreAbout && (
                <ContentSection id="more" label="Background" heading={`More About ${service.title}`}>
                  {/* Bottom image */}
                  {service.bottomImage && (
                    <div className="mb-8 rounded-2xl overflow-hidden h-[280px] bg-gray-100">
                      <img src={service.bottomImage} alt={service.title} className="w-full h-full object-cover" onError={(e) => { e.target.parentElement.style.display = 'none'; }} />
                    </div>
                  )}
                  <div className="space-y-4">
                    {service.moreAbout.split('\n\n').map((para, i) => (
                      <p key={i} className="text-[16px] leading-relaxed text-[var(--gw-text-main)]">{para}</p>
                    ))}
                  </div>
                </ContentSection>
              )}

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <ContentSection id="faqs" label="Common Questions" heading="Frequently Asked Questions">
                  <div className="divide-y divide-gray-200 border-t border-gray-200">
                    {service.faqs.map((faq, i) => (
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

              {/* Related Pages */}
              {service.related.length > 0 && (
                <section id="related" className="py-12 scroll-mt-24">
                  <SectionLabel>Explore More</SectionLabel>
                  <SectionHeading>Related Services</SectionHeading>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.related.map((rel, i) => {
                      const relColors = categoryColor[rel.category] ?? categoryColor['Services'];
                      return (
                        <Link
                          key={i}
                          href={`/services/${rel.slug}`}
                          className="group flex items-center justify-between p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-300 transition-all"
                        >
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest mb-1 block" style={{ color: relColors.hex }}>
                              {rel.category}
                            </span>
                            <span className="text-[15px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors">
                              {rel.title}
                            </span>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                            className="w-4 h-4 text-gray-400 group-hover:text-[var(--gw-blue)] group-hover:translate-x-1 transition-all shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* ── YOUTUBE SECTION ──────────────────────────────────────── */}
              {service.youtube && service.youtube.length > 0 && (
                <section id="videos" className="py-12 border-b border-gray-200 scroll-mt-24">
                  <SectionLabel>Watch &amp; Learn</SectionLabel>
                  <SectionHeading>Videos</SectionHeading>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {service.youtube.map((vid) => (
                      <button
                        key={vid.videoId}
                        onClick={() => setOpenVideoId(vid.videoId)}
                        className="group text-left relative overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
                      >
                        {/* Thumbnail */}
                        <div className="relative aspect-video bg-gray-900 overflow-hidden">
                          <img
                            src={`https://img.youtube.com/vi/${vid.videoId}/maxresdefault.jpg`}
                            alt={vid.title}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                            onError={(e) => { e.target.src = `https://img.youtube.com/vi/${vid.videoId}/hqdefault.jpg`; }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-[#FF0000] group-hover:border-[#FF0000] transition-all duration-300 shadow-xl">
                              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2 py-1 rounded">
                            <svg className="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                              <path fill="white" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            <span className="text-white text-[10px] font-bold tracking-wide">YouTube</span>
                          </div>
                        </div>
                        {/* Card body */}
                        <div className="p-4 bg-white">
                          <h4 className="text-[14px] font-semibold text-[var(--gw-primary)] leading-snug mb-1 group-hover:text-[var(--gw-blue)] transition-colors">{vid.title}</h4>
                          <p className="text-[12px] text-[var(--gw-text-muted)] leading-relaxed line-clamp-2">{vid.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>
              )}

            </div>

            {/* ── VIDEO LIGHTBOX ────────────────────────────────────────────── */}
            {openVideoId && (
              <div
                className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center p-4"
                onClick={() => setOpenVideoId(null)}
              >
                <div
                  className="relative w-full max-w-5xl aspect-video"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setOpenVideoId(null)}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${openVideoId}?autoplay=1`}
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* ── RIGHT SIDEBAR ─────────────────────────────────────────── */}

            <aside className="hidden lg:block lg:w-[320px] xl:w-[360px] shrink-0 lg:sticky lg:top-24 space-y-6">

              {/* TOC: desktop */}
              <div className="hidden lg:block bg-white border border-gray-100 p-8 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-6 font-sans">On this page</p>
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

              {/* ── HIGH-CONVERTING BOOKING CTA ── */}
              <div className="overflow-hidden shadow-lg border border-[var(--gw-primary)]/10">

                {/* Top accent bar */}
                <div className="h-1 w-full" style={{ backgroundColor: colors.hex }} />

                <div className="bg-[var(--gw-primary)] p-6 text-white">

                  {/* Trust badge */}
                  <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-[var(--gw-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    New patients accepted
                  </div>

                  {/* Headline */}
                  <h3 className="text-[24px] font-medium leading-snug mb-3" style={{ fontFamily: 'var(--font-gt-super)' }}>
                    Start your healing journey today
                  </h3>

                  {/* Supporting copy */}
                  <p className="text-[13px] text-white/70 leading-relaxed mb-6">
                    Book a {service.title} consultation with our expert team. Most patients see meaningful results within the first few visits.
                  </p>

                  {/* Primary CTA */}
                  <Link
                    href="/schedule-an-appointment"
                    className="flex w-full items-center justify-center gap-2 bg-[var(--gw-gold)] text-[var(--gw-primary)] text-[12px] font-bold uppercase tracking-widest px-5 py-4 hover:bg-white hover:text-[var(--gw-primary)] transition-all duration-300 shadow-md mb-3"
                  >
                    Make an Appointment
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>

                  {/* Secondary: call */}
                  <a href="tel:2028335055"
                    className="flex w-full items-center justify-center gap-2 border border-white/30 text-white/80 text-[12px] font-semibold uppercase tracking-widest px-5 py-3.5 hover:border-white hover:text-white transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                    </svg>
                    Call 202-833-5055
                  </a>
                </div>

                {/* Social proof footer */}
                <div className="bg-[var(--gw-primary-dark,#2C3A49)] px-6 py-4 flex items-center justify-between">
                  <div>
                    <div className="flex gap-0.5 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[var(--gw-gold)]">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[11px] text-white/50 leading-none">Rated 5.0 · 1000+ patients</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Hours</p>
                    <p className="text-[11px] text-white/70 font-medium">Mon–Fri 9am–5pm</p>
                  </div>
                </div>
              </div>


              {/* Social Links */}
              <div className="bg-white border border-gray-100 shadow-sm p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4">Share This Page</p>
                <div className="flex gap-3">
                  {[
                    {
                      label: 'Facebook',
                      href: '#',
                      svg: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
                    },
                    {
                      label: 'Instagram',
                      href: '#',
                      svg: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />,
                    },
                    {
                      label: 'LinkedIn',
                      href: '#',
                      svg: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
                    },
                    {
                      label: 'YouTube',
                      href: '#',
                      svg: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />,
                    },
                  ].map(social => (
                    <a key={social.label} href={social.href} aria-label={social.label}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[var(--gw-text-muted)] hover:border-[var(--gw-primary)] hover:text-[var(--gw-primary)] hover:bg-gray-50 transition-all">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                        {social.svg}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Resources */}
              {service.resources.length > 0 && (
                <div className="bg-white border border-gray-100 shadow-sm p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4">Resources & Reading</p>
                  <ul className="space-y-3">
                    {service.resources.map((res, i) => (
                      <li key={i}>
                        <a href={res.url} target="_blank" rel="noopener noreferrer"
                          className="flex items-start gap-3 group">
                          <span className="shrink-0 mt-0.5 w-7 h-7 flex items-center justify-center bg-gray-50 border border-gray-100 group-hover:border-[var(--gw-blue)] transition-colors">
                            {res.type === 'book' ? (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-[var(--gw-primary)]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-[var(--gw-primary)]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                              </svg>
                            )}
                          </span>
                          <div>
                            <p className="text-[13px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug">
                              {res.title}
                            </p>
                            {res.author && (
                              <p className="text-[11px] text-[var(--gw-text-muted)] mt-0.5">{res.author}</p>
                            )}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact card */}
              <div className="p-6 border border-[var(--gw-primary)]">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-primary)] mb-2">Need help deciding?</p>
                <h3 className="text-[18px] font-medium mb-3" style={{ fontFamily: 'var(--font-gt-super)' }}>
                  Talk to our care team
                </h3>
                <p className="text-[13px] text-[var(--gw-primary)] leading-relaxed mb-4">
                  Not sure if this service is right for you? Our care coordinators are happy to help guide you.
                </p>
                {/* <a href="tel:2028335055" className="flex items-center gap-2 text-[13px] font-semibold text-[var(--gw-primary)] hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                  </svg>
                  202-833-5055
                </a> */}
                <a href="mailto:info@gwcim.com" className="flex items-center gap-2 text-[13px] font-semibold text-[var(--gw-primary)] hover:underline mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  info@gwcim.com
                </a>
              </div>

            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
