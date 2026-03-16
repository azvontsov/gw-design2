'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterSidebarWidget from '@/components/NewsletterSidebarWidget';

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

function ProviderAvatar({ name, credentials, image, slug, subtitle }) {
  return (
    <Link 
      href={`/people/${slug || '#'}`}
      className="flex items-center gap-5 p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--gw-accent)] transition-all group min-h-[110px]"
    >
      <div className="w-16 h-16 rounded-full shrink-0 overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center shadow-sm">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-[var(--gw-primary)] flex items-center justify-center text-white font-bold text-lg uppercase">
             {name.split(' ').pop().charAt(0)}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1.5 min-w-0">
        <h4 className="font-bold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors text-[15px] leading-[1.3] break-words">
          {name}{credentials ? `, ${credentials}` : ''}
        </h4>
        {subtitle && (
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gw-accent)] opacity-90 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  );
}

function SharedFeesTable({ fees, note }) {
  return (
    <div className="bg-white border border-gray-200 p-6 md:p-8 shadow-sm flex-grow rounded-sm">
      <ul className="space-y-1">
        {fees.map((f, i) => (
          <li key={i} className="text-[14px] text-gray-600 font-light flex justify-between items-center px-2 py-2.5 border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors">
            <span className="tracking-tight pr-4">{f.label}</span>
            <span className="font-bold text-[var(--gw-primary)] shrink-0">{f.price}</span>
          </li>
        ))}
      </ul>
      {note && (
        <div className="mt-6 pt-6 border-t border-slate-100">
           <div className="text-[11px] text-slate-500 italic leading-relaxed">{note}</div>
        </div>
      )}
    </div>
  );
}

function ProviderFeeCard({ name, credentials, image, slug, fees, note, subtitle }) {
  return (
    <Link 
      href={`/people/${slug || '#'}`}
      className="flex flex-col h-full p-6 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[var(--gw-accent)] transition-all group rounded-none"
    >
      <div className="flex items-center gap-4 w-full border-b border-gray-50 pb-5 mb-5 min-h-[80px]">
        <div className="w-16 h-16 rounded-full shrink-0 overflow-hidden border border-gray-100 shadow-sm bg-gray-50 flex items-center justify-center">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-[var(--gw-primary)] flex items-center justify-center text-white font-bold text-xl uppercase">
               {name.split(' ').pop().charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors text-[16px] leading-tight mb-1">
            {name}{credentials ? `, ${credentials}` : ''}
          </h4>
          {subtitle && <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gw-accent)] opacity-80">{subtitle}</p>}
          {note && <p className="text-[11px] text-slate-500 mt-1 italic leading-tight">{note}</p>}
        </div>
      </div>
      
      <div className="w-full flex-grow">
        <ul className="space-y-2">
           {fees.map((f, i) => (
             <li key={i} className="text-[13px] text-gray-600 font-light flex justify-between items-center px-2 py-1.5 rounded-sm group-hover:bg-slate-50 transition-colors">
               <span className="tracking-tight">{f.label}</span>
               <span className="font-bold text-[var(--gw-primary)] shrink-0 ml-3">{f.price}</span>
             </li>
           ))}
        </ul>
      </div>
    </Link>
  );
}

function ExpandableServiceCard({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`border bg-white shadow-sm transition-all duration-300 ease-out flex flex-col mb-4 overflow-hidden ${isExpanded ? 'shadow-lg border-[var(--gw-accent)]' : 'border-gray-200 hover:shadow-md hover:border-gray-300'}`}
    >
      <div 
        className="group p-6 md:p-8 flex items-center justify-between cursor-pointer bg-white relative z-10 w-full text-left" 
        role="button" 
        aria-expanded={isExpanded} 
        tabIndex={0}
        onClick={() => setIsExpanded(!isExpanded)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }
        }}
      >
        <h3 className={`text-lg md:text-xl font-medium transition-colors ${isExpanded ? 'text-[var(--gw-blue)]' : 'text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)]'}`} style={{ fontFamily: 'var(--font-gt-super)' }}>
          {title}
        </h3>
        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ml-4 ${isExpanded ? 'bg-[var(--gw-accent)] text-white border-[var(--gw-accent)]' : 'border-gray-200 text-gray-400 group-hover:bg-[var(--gw-accent)] group-hover:text-white group-hover:border-[var(--gw-accent)]'}`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
           </svg>
        </div>
      </div>
      <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden min-h-0">
          <div className="p-6 md:p-8 pt-6 border-t border-gray-100 bg-gray-50/50">
             {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeesAndInsurancePage() {
  const tocItems = [
    { id: 'insurance-and-billing', label: 'Insurance & Billing' },
    { id: 'policies', label: 'Office Policies' },
    { id: 'fee-schedule', label: 'Fee Schedule 2025' },
    { id: 'services', label: 'Services' },
    { id: 'groups-courses', label: 'Groups & Courses' },
  ];

  const [activeToc, setActiveToc] = useState('insurance-and-billing');

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
  }, []);

  const scrollTo = (id) => {
    setActiveToc(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-secondary-light)]">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden pt-40 pb-16 bg-[var(--gw-background)]">
        <div className="relative z-10 w-full container mx-auto px-6 lg:px-12">
          <div className="mb-4">
            <Breadcrumbs 
              items={[
                { label: 'Resources', href: '#' },
                { label: 'Fees & Policies' }
              ]} 
            />
          </div>

          <h1
            className="text-[40px] md:text-[56px] lg:text-[68px] font-medium text-[var(--gw-primary)] leading-tight max-w-4xl"
            style={{ fontFamily: 'var(--font-gt-super)' }}
          >
            Fees & <span className="text-[var(--gw-accent)]">Policies</span>
          </h1>
          <p className="mt-4 text-slate-600 text-[18px] max-w-2xl leading-relaxed font-light">
            Detailed information regarding our billing policies, out-of-network insurance reimbursement, and comprehensive fee schedule for 2025.
          </p>
        </div>
      </section>

      {/* Body */}
      <main className="flex-1 bg-white">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">

            {/* LEFT COLUMN */}
            <div className="flex-1 min-w-0">
              
              <ContentSection id="insurance-and-billing" label="Patient Information" heading="Insurance & Billing">
                 <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                   <p><strong>GWCIM is a team of independent out‑of‑network providers and does not accept any insurance plans, including Medicare.</strong></p>
                   <ul className="list-disc pl-5 space-y-2">
                     <li><strong>Medicare Policy:</strong> Dr. Kogan will not provide Medicare billable CPT codes.</li>
                     <li>All services are fee-for-service due to limited coverage for our comprehensive treatments. Actual charges depend on the visit length.</li>
                     <li>FSA/HSA are accepted for all services, including medically recommended vitamins and supplements.</li>
                     <li>We recommend that you verify with your insurer the reimbursement details, including integrative medicine coverage and any out-of-network benefits, prior to starting services at GWCIM.</li>
                     <li>We can provide documentation for you to submit a reimbursement claim; however, we can not guarantee reimbursements.</li>
                   </ul>
                 </div>
              </ContentSection>

              <ContentSection id="policies" label="Guidelines" heading="Office Policies">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium text-[var(--gw-primary)] mb-3">Cancellation Policy</h3>
                    <div className="text-gray-600 font-light space-y-2 leading-relaxed">
                      <p>Cancel or reschedule 48 business hours in advance to avoid a late fee. We’re closed Saturdays.</p>
                      <p>Late cancellations (under two business days) and no‑shows are charged 100% of the provider’s fee.</p>
                      <p><em>Example: to change a Monday appointment, you must contact us no later than the prior Thursday.</em></p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[var(--gw-primary)] mb-3">Late Payment Policy</h3>
                    <div className="text-gray-600 font-light space-y-2 leading-relaxed">
                      <p>Payment is due upon receipt of the invoice.</p>
                      <ul className="list-disc pl-5">
                       <li>A $50 late fee will be applied to any invoice not paid within 7 days of the invoice date.</li>
                       <li>An additional $100 late fee will be applied if the invoice remains unpaid after 14 days.</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[var(--gw-primary)] mb-3">Prescription Medications Policy</h3>
                    <div className="text-gray-600 font-light space-y-2 leading-relaxed">
                      <p>Patients receiving medical prescriptions must see their GWCIM prescribing provider annually to maintain their prescription account, per DC regulations.</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[var(--gw-primary)] mb-3">Communication Policy</h3>
                    <div className="text-gray-600 font-light space-y-2 leading-relaxed">
                      <p>All communication between patients, providers and administrators occurs via the secure Charm EHR Patient Portal for HIPAA compliance and record‑keeping. We do not respond to clinical or administrative emails. Use the portal for all GWCIM communications.</p>
                    </div>
                  </div>
                </div>
              </ContentSection>

              <ContentSection id="fee-schedule" label="Pricing" heading="Fee Schedule 2025">
                 <div className="bg-slate-50 p-6 border-l-4 border-[var(--gw-accent)]">
                    <p className="text-gray-700 font-light leading-relaxed">
                       Fees below are time-based; actual charges depend on the visit length. Additional charges may apply for follow-up and administrative times, including messaging and letters for insurance.
                    </p>
                 </div>
              </ContentSection>

                              <ContentSection id="services" label="Services" heading="Services">
                  <div className="space-y-4">
                    
                    {/* MD Section */}
                    <ExpandableServiceCard title="Integrative Medicine (MD)">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProviderFeeCard 
                          name="Dr. Mikhail Kogan"
                          credentials="MD"
                          image="/images/providers/misha.jpg"
                          slug="mikhail-kogan-md"
                          subtitle="Medical Director"
                          fees={[
                            { label: "90 min initial", price: "$1,500" },
                            { label: "60 min initial", price: "$1,000" },
                            { label: "30 min initial", price: "$600" },
                            { label: "60 min follow-up", price: "$600" },
                            { label: "30 min follow-up", price: "$350" }
                          ]}
                          note="Online Records or Case Review Fee Based on Time"
                        />
                        <ProviderFeeCard 
                          name="Dr. Sharon DeMocker"
                          credentials="MD"
                          image="/images/providers/provider2.png"
                          slug="#"
                          subtitle="Integrative Physician"
                          fees={[
                            { label: "90 Min Initial", price: "$750" },
                            { label: "60 Min follow-up", price: "$550" },
                            { label: "30 Min Follow-up", price: "$300" }
                          ]}
                          note="Online Records or Case Review Fee Based on Time"
                        />
                        <ProviderFeeCard 
                          name="Dr. Robert Pendergrast"
                          credentials="MD"
                          image="/images/providers/provider3.png"
                          slug="#"
                          subtitle="Pediatric Specialist"
                          fees={[
                            { label: "60-90 min Initial Visit", price: "$550-825" },
                            { label: "30 min Follow-up", price: "$300" },
                            { label: "Hypnotherapy Visit", price: "$400" }
                          ]}
                          note="Pediatric and adolescent consultations, virtual only"
                        />
                        <ProviderFeeCard 
                          name="Dr. Andrea Leonard-Segal"
                          credentials="MD"
                          image={null}
                          slug="dr-andrea-leonard-segal-md"
                          subtitle="Mind-Body Medicine"
                          fees={[
                            { label: "90 min Initial (in-person)", price: "$1500" },
                            { label: "60 min follow-up", price: "$1000" }
                          ]}
                          note="Dr. Sarno approach"
                        />
                      </div>
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="Integrative Psychiatry">
                        <ProviderFeeCard 
                          name="Dr. Misty Embrey"
                          credentials="MD"
                          image={null}
                          slug="#"
                          subtitle="Psychiatrist"
                          fees={[
                            { label: "90 Min Initial Adult", price: "$600" },
                            { label: "120 Min Initial Child/Adol.", price: "$800" },
                            { label: "60 Min Follow-Up", price: "$400" },
                            { label: "30 Min Follow-up", price: "$200" }
                          ]}
                        />
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="Integrative Medicine (PA)">
                        <ProviderFeeCard 
                          name="Ashley Drapeau"
                          credentials="PA-C, LAc"
                          image="/images/providers/ashley.jpeg"
                          slug="ashley-drapeau-pa-c-l-ac-mpas-mac"
                          subtitle="Physician Assistant"
                          fees={[
                            { label: "90 minute initial", price: "$450" },
                            { label: "60 minute follow-up", price: "$250" },
                            { label: "30 minute follow-up", price: "$200" }
                          ]}
                        />
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="Naturopathic Medicine">
                      <div className="flex flex-col lg:flex-row gap-10">
                        <div className="lg:w-[45%] xl:w-[40%] grid grid-cols-1 lg:grid-cols-1 gap-4 h-fit">
                          <ProviderAvatar 
                            name="Dr. Deirdre Orceyre"
                            credentials="ND, MSOM, L.Ac."
                            image="/images/providers/dierdre.jpg"
                            slug="deirdre-orceyre-nd-lac"
                            subtitle="Naturopathic Medical Director"
                          />
                          <ProviderAvatar 
                            name="Dr. Marianna Ledenac"
                            credentials="ND"
                            image="/images/providers/marianna.jpeg"
                            slug="marianna-ledenac-nd"
                            subtitle="Naturopathic Physician"
                          />
                          <ProviderAvatar 
                            name="Paymon Sadrolsadot"
                            credentials="ND"
                            image={null}
                            slug="#"
                            subtitle="Naturopathic Physician"
                          />
                        </div>
                        <div className="lg:w-[55%] xl:w-[60%] flex flex-col">
                           <SharedFeesTable 
                             fees={[
                               { label: "Initial (90-120 min)", price: "$720-960" },
                               { label: "Initial (75 min)", price: "$600" },
                               { label: "Follow-up (90 min)", price: "$625" },
                               { label: "Follow-up (60 min)", price: "$435" },
                               { label: "Follow-up (45 min)", price: "$345" }
                             ]}
                             note="Initial and follow-up visits preferred in person. DC residents are eligible for telemedicine."
                           />
                        </div>
                      </div>
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="Acupuncture Medicine">
                      <div className="flex flex-col lg:flex-row gap-10">
                        <div className="lg:w-[45%] xl:w-[40%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 h-fit">
                          <ProviderAvatar 
                            name="Dr. Tiffany Hoyt"
                            credentials="DAc, LAc, Dipl Ac"
                            image={null}
                            slug="#"
                            subtitle="Licensed Acupuncturist"
                          />
                          <ProviderAvatar 
                            name="Dr. Deirdre Orceyre"
                            credentials="ND, MSOM, L.Ac."
                            image="/images/providers/dierdre.jpg"
                            slug="deirdre-orceyre-nd-lac"
                            subtitle="Naturopathic Doctor & Acupuncturist"
                          />
                          <ProviderAvatar 
                            name="Dr. Angela Gabriel"
                            credentials="MSOM, LAc, SEP"
                            image="/images/providers/angela.png"
                            slug="angela-n-gabriel-acupuncture-se"
                            subtitle="Licensed Acupuncturist & SEP"
                          />
                          <ProviderAvatar 
                            name="Dr. Ashley Drapeau"
                            credentials="PA-C, MAC, LAc"
                            image="/images/providers/ashley.jpeg"
                            slug="/ashley-drapeau-pa-c-l-ac-mpas-mac"
                            subtitle="Physician Assistant & Acupuncturist"
                          />
                        </div>
                        <div className="lg:w-[55%] xl:w-[60%] flex flex-col">
                           <SharedFeesTable 
                             fees={[
                               { label: "Initial (90 min)", price: "$250" },
                               { label: "Follow-up (90 min)", price: "$225" },
                               { label: "Follow-up (60 min)", price: "$150" },
                               { label: "Pediatric or Pregnancy (30 min)", price: "$75" }
                             ]}
                             note={
                               <>
                                 <p className="mb-2 text-slate-700 italic">60 min on schedule means up to 50 min of treatment time.</p>
                                 <p className="text-[var(--gw-accent)] font-medium">✨ 5 follow-up sessions packages: 10% off</p>
                               </>
                             }
                           />
                        </div>
                      </div>
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="Psychotherapy">
                        <ProviderFeeCard 
                          name="Dr. Sally Novak"
                          credentials="LICSW"
                          image={null}
                          slug="sally-novak"
                          subtitle="Virtual Only"
                          fees={[
                            { label: "90 min Virtual Initial", price: "$325" },
                            { label: "60 min Virtual follow-up", price: "$250" }
                          ]}
                        />
                    </ExpandableServiceCard>
                    
                    <ExpandableServiceCard title="Environmental/Mold/CIRS">
                        <ProviderFeeCard 
                          name="Dr. Jonah Yakel"
                          credentials="DC"
                          image={null}
                          slug="#"
                          subtitle="Virtual Only"
                          fees={[
                            { label: "Consultation Info", price: "Visit Website" }
                          ]}
                          note="Contact at www.drjonahyakel.com"
                        />
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="Medical Cannabis Consultations">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProviderFeeCard 
                          name="Dr. Mikhail Kogan"
                          credentials="MD"
                          image="/images/providers/misha.jpg"
                          slug="mikhail-kogan-md"
                          subtitle="Initial/Follow-up"
                          fees={[
                            { label: "30 min / 60 min", price: "$350 / $600" }
                          ]}
                        />
                        <ProviderFeeCard 
                          name="Dr. Abraham Benavides"
                          credentials="MD"
                          image={null}
                          slug="#"
                          subtitle="Virtual Only"
                          fees={[
                            { label: "60 min Visit", price: "$250" },
                            { label: "30 min Follow-up", price: "$150" },
                            { label: "Cards New/Renewal", price: "$100 fee" }
                          ]}
                        />
                        <ProviderFeeCard 
                          name="Joelle Rabion"
                          credentials="Cannabis Coach"
                          image={null}
                          slug="#"
                          fees={[
                            { label: "60 min", price: "$100" },
                            { label: "30 min", price: "$60" }
                          ]}
                        />
                      </div>
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="Other Coaching & Consultations">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProviderFeeCard 
                          name="Mara Benner"
                          credentials="Reiki Master"
                          image={null}
                          slug="#"
                          subtitle="Health & Spiritual Coaching"
                          fees={[
                            { label: "Consultation Info", price: "Contact Partner" }
                          ]}
                          note="Contact Four Direction Wellness Center"
                        />
                        <ProviderFeeCard 
                          name="Yael Flusberg"
                          credentials="C-IAYT"
                          image={null}
                          slug="#"
                          subtitle="Therapeutic Yoga"
                          fees={[
                            { label: "Initial (90 min)", price: "$180" },
                            { label: "Follow-up (60 min)", price: "$120" },
                            { label: "Follow-up (30 min)", price: "$60" }
                          ]}
                        />
                      </div>
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="Administrative">
                      <div className="flex justify-between items-center bg-white p-4 shadow-sm rounded-sm">
                        <span className="font-medium text-slate-700">Sleep Study Referrals Administrative Fee</span>
                        <span className="font-bold text-[var(--gw-primary)]">$100.00</span>
                      </div>
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="IV and Infusion Therapy">
                     <div>
                       <p className="text-sm text-gray-600 italic mb-4">Due to a significant increase in the cost of medical supplies from our vendors, we will adjust our infusion Base fees (set-up fees) starting June 1st. Infusion medication prices will remain the same at this time.</p>
                       <ul className="list-disc pl-5 text-gray-600 font-light space-y-2">
                         <li>Base fee for IV – $190</li>
                         <li>Base fee for IV with ports – $215</li>
                         <li>Mistletoe training – $150</li>
                         <li>Lab Administrative fee (processing and ordering of all kits) – $100</li>
                         <li><strong>Infusion medications cost vary. Call 202-833-5055 for cost information.</strong></li>
                       </ul>
                     </div>
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="Chinese Medicine Herbal Consultations">
                      <div>
                       <p className="text-sm text-slate-500 italic mb-2">with Dr. Tiffany Hoyt</p>
                       <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                         <li>Initial 60 min – $150</li>
                         <li>Follow-up 30 min – $100</li>
                       </ul>
                      </div>
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="Somatic Experiencing">
                     <div>
                       <p className="text-sm text-slate-500 italic mb-2">with Dr. Angela Gabriel, SEP, L.Ac.<br/> (with or without acupuncture co-treatment during SE sessions)</p>
                       <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                         <li>Initial 60 min – $100 (administrative fee only)</li>
                         <li>Follow-up 60 min – $200</li>
                       </ul>
                       <p className="mt-3 text-[var(--gw-accent)] font-medium">5 follow-up 60 min sessions packages: 10% off</p>
                     </div>
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="Ketamine Assisted Psychotherapy (KAP)">
                     <div>
                       <p className="text-sm text-slate-500 italic mb-2">Dr. Kogan and various qualified support providers: Yael Flusberg, Angela Gabriel, Sally Novak</p>
                       <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                         <li>One session with one follow-up call (up to 3 hours total time) – $600</li>
                       </ul>
                     </div>
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="ReCODE Program">
                     <div>
                       <p className="text-gray-600 font-light">
                         Please visit our <Link href="/services/reversal-cognitive-decline-recode" className="text-[var(--gw-blue)] underline">ReCODE program page</Link> for all information.
                       </p>
                     </div>
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="Mindfulness, EFT, MBSR coaching">
                     <div>
                       <p className="text-sm text-slate-500 italic mb-2">with Nina Paul (virtual)</p>
                       <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                         <li>60 min – $150</li>
                         </ul>
                     </div>
                    </ExpandableServiceCard>

                    <ExpandableServiceCard title="Reiki and Biofeedback">
                     <div>
                       <p className="text-sm text-slate-500 italic mb-2">Yael Flusberg, Mara Benner, Catherine Miller</p>
                       <ul className="list-disc pl-5 text-gray-600 font-light space-y-2">
                         <li>Initial Reiki/biofeedback with Yael Flusberg – $250 (in-person)</li>
                         <li>Follow-up Reiki/biofeedback with Yael Flusberg – $160 (in-person)</li>
                         <li><strong>For virtual and home Reiki visits and Reiki training with Mara Benner and Catherine Miller:</strong> contact Affiliated Provider Four Direction Wellness Center</li>
                       </ul>
                     </div>
                    </ExpandableServiceCard>

                  </div>
               </ContentSection>

              <ContentSection id="groups-courses" label="Community" heading="Groups, Classes & Courses">
                 <div className="space-y-6 text-gray-600 font-light">
                    <ul className="list-disc pl-5 space-y-4">
                      <li><strong>Long COVID Groups:</strong> ongoing weekly virtual with Dr. Kogan and Ashly Drapeau - $100/month</li>
                      <li><strong>ReCODE: Renewing Mind & Body Support Group</strong> with Sally Novak and others: ongoing weekly virtual – $100/month</li>
                      <li><strong>Reiki Training:</strong> contact our Affiliated Provider Four Direction Wellness Center</li>
                      <li><strong>Mindfulness-Based Stress Reduction (MBSR) 8-week course:</strong> TBA</li>
                      <li><strong>Mindfulness mini-retreats</strong> with Cynthia Powell and Nina Paul: TBA</li>
                    </ul>
                    
                    <div className="mt-8">
                       <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Supplements Prepared at GWCIM</h3>
                       <p className="mb-2 italic">individual formulations</p>
                       <ul className="list-disc pl-5 space-y-1">
                          <li>Tinctures $.50 per mL</li>
                          <li>Homeopathic Remedy: 15mL $23.00, 30mL $36.00, 60mL $55.00</li>
                       </ul>
                    </div>
                 </div>
              </ContentSection>

              <div className="mt-16 bg-[#1A365D] text-white p-6 rounded text-center">
                 <p className="text-lg font-medium tracking-wide">
                   Current GWU students and GWU staff receive <span className="text-[var(--gw-accent)]">20% discount</span> for all services (ID is required).
                 </p>
              </div>

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
                        Make an Appointment
                    </Link>
                </div>
              </div>

              <NewsletterSidebarWidget />

            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
