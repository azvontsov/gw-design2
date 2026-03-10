'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

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

export default function FeesAndInsurancePage() {
  const tocItems = [
    { id: 'insurance-and-billing', label: 'Insurance & Billing' },
    { id: 'policies', label: 'Office Policies' },
    { id: 'fee-schedule', label: 'Fee Schedule 2025' },
    { id: 'consultations', label: 'Consultations' },
    { id: 'treatments', label: 'Treatments' },
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
                { label: 'Fees & Insurance' }
              ]} 
            />
          </div>

          <h1
            className="text-[40px] md:text-[56px] lg:text-[68px] font-medium text-[var(--gw-primary)] leading-tight max-w-4xl"
            style={{ fontFamily: 'var(--font-gt-super)' }}
          >
            Fees & <span className="text-[var(--gw-accent)]">Insurance</span>
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

              <ContentSection id="consultations" label="Services" heading="Consultations">
                 <div className="space-y-10">
                   
                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Integrative Medicine Consultation (MD)</h3>
                     
                     <div className="space-y-6">
                       <div>
                         <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Dr. Mikhail Kogan, MD</h4>
                         <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                           <li>90 min initial – $1,500</li>
                           <li>60 min initial – $1000</li>
                           <li>30 min initial – $600</li>
                           <li>60 min follow-up – $600</li>
                           <li>30 min follow-up – $350</li>
                           <li>Online Records or Case Review Fee Based on Time</li>
                           <li>ReCODE ™ Program fees are discussed individually</li>
                         </ul>
                       </div>

                       <div>
                         <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Dr. Sharon DeMocker, MD</h4>
                         <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                           <li>90 Min Initial – $750.00</li>
                           <li>60 Min follow-up – $550.00</li>
                           <li>30 Min Follow-up – $300.00</li>
                           <li>Online Records or Case Review Fee Based on Time</li>
                         </ul>
                       </div>

                       <div>
                         <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Dr. Robert Pendergrast, MD</h4>
                         <p className="text-sm text-slate-500 mb-2 italic">pediatric and adolescent consultations, virtual only</p>
                         <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                           <li>60-90 min Initial Visit – $550-825</li>
                           <li>30 min Follow-up – $300</li>
                           <li>Hypnotherapy Visit – $400</li>
                         </ul>
                       </div>

                       <div>
                         <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Dr. Andrea Leonard-Segal, MD</h4>
                         <p className="text-sm text-slate-500 mb-2 italic">Mind-Body Medicine, Dr. Sarno approach</p>
                         <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                           <li>90 min Initial Visit (in-person) – $1500</li>
                           <li>60 min follow-up (in-person or virtual) – $1000</li>
                         </ul>
                       </div>
                     </div>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Integrative Psychiatry</h3>
                     <div>
                       <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Dr. Misty Embrey, MD</h4>
                       <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                         <li>90 Minute Initial Adult – $600</li>
                         <li>120 Minute Initial Child/Adolescent – $800</li>
                         <li>60 Minute Follow-Up – $400</li>
                         <li>30 Minute Follow-up – $200</li>
                         <li>Online Records or Case Review Fee Based on Time</li>
                       </ul>
                     </div>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Integrative Medicine (PA)</h3>
                     <div>
                       <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Ashley Drapeau, PA-C, LAc</h4>
                       <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                         <li>90 minute initial – $450</li>
                         <li>60 minute follow-up – $250</li>
                         <li>30 minute follow-up – $200</li>
                         <li>Online Records or Case Review Fee Based on Time</li>
                       </ul>
                     </div>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Naturopathic Medicine</h3>
                     <div>
                       <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Dr. Orceyre, Dr. Ledenac, Dr. Sadrolsadot, ND</h4>
                       <p className="text-sm text-slate-500 mb-3 italic">For most patients, initial and follow-up visits will need to be in person. DC residents are eligible for telemedicine visits.</p>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div>
                           <p className="font-medium text-gray-800 mb-1">Initial visits:</p>
                           <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                             <li>120 min – $960</li>
                             <li>105 min – $840</li>
                             <li>90 min – $720</li>
                             <li>75 min – $600</li>
                           </ul>
                         </div>
                         <div>
                           <p className="font-medium text-gray-800 mb-1">Follow-up visits:</p>
                           <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                             <li>90 min – $625</li>
                             <li>75 min – $520</li>
                             <li>60 min – $435</li>
                             <li>45 min – $345</li>
                           </ul>
                         </div>
                       </div>
                       <p className="mt-3 text-gray-600 font-light">Medical records review – fee is based on time</p>
                     </div>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Psychotherapy</h3>
                     <div>
                       <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Dr. Sally Novak</h4>
                       <p className="text-sm text-slate-500 mb-2 italic">virtual only</p>
                       <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                         <li>90 minute Virtual Initial – $325</li>
                         <li>60 minute Virtual follow-up – $250</li>
                         <li className="line-through text-gray-400">90 minute in person initial – $450</li>
                         <li className="line-through text-gray-400">60 minute in person follow-up – $350</li>
                       </ul>
                     </div>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Environmental/Mold/CIRS</h3>
                     <div>
                       <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Dr. Jonah Yakel, DC</h4>
                       <p className="text-sm text-slate-500 mb-2 italic">virtual only</p>
                       <p className="text-gray-600 font-light">
                         Contact Dr. Yakel at <a href="https://www.drjonahyakel.com" className="text-[var(--gw-blue)] underline" target="_blank" rel="noopener noreferrer">www.drjonahyakel.com</a> for information.
                       </p>
                       <div className="mt-3 bg-red-50 p-4 rounded text-sm text-gray-700">
                         <strong>*** Mold testing (inspection visits in DMV):</strong> Contact Affiliated Provider Dr. Mikhail Sogonov, PhD, at InSitu Testing
                       </div>
                     </div>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Medical Cannabis Consultations</h3>
                     <div className="space-y-4">
                       <div>
                         <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Dr. Kogan, MD</h4>
                         <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                           <li>Initial/Follow Up 30/60 minutes – $350 / $600</li>
                         </ul>
                       </div>
                       <div>
                         <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Dr. Abraham Benavides, MD</h4>
                         <p className="text-sm text-slate-500 mb-2 italic">virtual only</p>
                         <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                           <li>60 min Initial and follow-up – $250</li>
                           <li>30 min follow-up – $150</li>
                           <li>Medical Cannabis Cards new and renewal – $100 additional fee</li>
                         </ul>
                       </div>
                       <div>
                         <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Medical Cannabis Coaching dengan Joelle Rabion</h4>
                         <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                           <li>60 min Initial and Follow-up – $100</li>
                           <li>30 min follow-up – $60</li>
                         </ul>
                       </div>
                     </div>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Other Coaching & Consultations</h3>
                     <div className="space-y-4">
                       <div>
                         <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Health and Spiritual Coaching with Mara Benner</h4>
                         <p className="text-gray-600 font-light">Contact Affiliated provider Mara Benner, Four Direction Wellness Center</p>
                       </div>
                       <div>
                         <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Therapeutic Yoga Individual Consultations with Yael Flusberg</h4>
                         <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                           <li>Initial visit 90 minutes – $180</li>
                           <li>Follow-up 60 minutes – $120</li>
                           <li>Follow-up 30 minutes – $60</li>
                         </ul>
                       </div>
                     </div>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Administrative</h3>
                     <div>
                       <h4 className="font-semibold text-[var(--gw-blue)] mb-2">Sleep Study Referrals</h4>
                       <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                         <li>Administrative fee – $100.00</li>
                       </ul>
                     </div>
                   </div>

                 </div>
              </ContentSection>

              <ContentSection id="treatments" label="Services" heading="Treatments">
                 <div className="space-y-10">
                   
                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">IV and Infusion Therapy</h3>
                     <p className="text-sm text-gray-600 italic mb-4">Due to a significant increase in the cost of medical supplies from our vendors, we will adjust our infusion Base fees (set-up fees) starting June 1st. Infusion medication prices will remain the same at this time.</p>
                     <ul className="list-disc pl-5 text-gray-600 font-light space-y-2">
                       <li>Base fee for IV – $190</li>
                       <li>Base fee for IV with ports – $215</li>
                       <li>Mistletoe training – $150</li>
                       <li>Lab Administrative fee (processing and ordering of all kits) – $100</li>
                       <li><strong>Infusion medications cost vary. Call 202-833-5055 for cost information.</strong></li>
                     </ul>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Acupuncture</h3>
                     <p className="text-sm text-slate-500 italic mb-2">Dr. Tiffany Hoyt, Dr. Deirdre Orceyre, Dr. Angela Gabriel, Dr. Ashley Drapeau. <br/>60 min on schedule means up to 50 min of treatment time.</p>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                           <p className="font-medium text-gray-800 mb-1">Initial:</p>
                           <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                             <li>90 min – $250</li>
                           </ul>
                        </div>
                        <div>
                           <p className="font-medium text-gray-800 mb-1">Follow-up sessions:</p>
                           <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                             <li>90 min – $225</li>
                             <li>60 min – $150</li>
                             <li>30 min Pediatric or Pregnancy – $75</li>
                           </ul>
                        </div>
                     </div>
                     <p className="mt-3 text-[var(--gw-accent)] font-medium">5 follow-up sessions packages: 10% off</p>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Chinese Medicine Herbal Consultations</h3>
                     <p className="text-sm text-slate-500 italic mb-2">with Dr. Tiffany Hoyt</p>
                     <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                       <li>Initial 60 min – $150</li>
                       <li>Follow-up 30 min – $100</li>
                     </ul>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Somatic Experiencing</h3>
                     <p className="text-sm text-slate-500 italic mb-2">with Dr. Angela Gabriel, SEP, L.Ac.<br/> (with or without acupuncture co-treatment during SE sessions)</p>
                     <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                       <li>Initial 60 min – $100 (administrative fee only)</li>
                       <li>Follow-up 60 min – $200</li>
                     </ul>
                     <p className="mt-3 text-[var(--gw-accent)] font-medium">5 follow-up 60 min sessions packages: 10% off</p>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Ketamine Assisted Psychotherapy (KAP)</h3>
                     <p className="text-sm text-slate-500 italic mb-2">Dr. Kogan and various qualified support providers: Yael Flusberg, Angela Gabriel, Sally Novak</p>
                     <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                       <li>One session with one follow-up call (up to 3 hours total time) – $600</li>
                     </ul>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">ReCODE Program</h3>
                     <p className="text-gray-600 font-light">
                       Please visit our <Link href="/services/reversal-cognitive-decline-recode" className="text-[var(--gw-blue)] underline">ReCODE program page</Link> for all information.
                     </p>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Mindfulness, EFT, MBSR coaching</h3>
                     <p className="text-sm text-slate-500 italic mb-2">with Nina Paul (virtual)</p>
                     <ul className="list-disc pl-5 text-gray-600 font-light space-y-1">
                       <li>60 min – $150</li>
                       </ul>
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-[var(--gw-primary)] border-b border-gray-200 pb-2 mb-4">Reiki and Biofeedback</h3>
                     <p className="text-sm text-slate-500 italic mb-2">Yael Flusberg, Mara Benner, Catherine Miller</p>
                     <ul className="list-disc pl-5 text-gray-600 font-light space-y-2">
                       <li>Initial Reiki/biofeedback with Yael Flusberg – $250 (in-person)</li>
                       <li>Follow-up Reiki/biofeedback with Yael Flusberg – $160 (in-person)</li>
                       <li><strong>For virtual and home Reiki visits and Reiki training with Mara Benner and Catherine Miller:</strong> contact Affiliated Provider Four Direction Wellness Center</li>
                     </ul>
                   </div>

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

            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
