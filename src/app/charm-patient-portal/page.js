'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export default function PatientPortalPage() {
  const portalUrl = "https://accounts.charmtracker.com/signin?hide_signup-true&hide_secure=true&hide_gsignup-true&servicename-charmhealth&serviceurl=https://phr.charmtracker.com/main.do";
  const reviewUrl = "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID_HERE"; // Placeholder for actual Google review link

  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />
      
      <main className="flex-1 w-full pt-40 pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'Resources', href: '#' }, { label: "Patient Portal" }]} />
        </div>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif text-[var(--gw-primary)] mb-8 leading-tight">
            Patient Portal
          </h1>
          <div className="w-20 h-1 bg-[var(--gw-accent)] mb-10"></div>
          
          <div className="prose prose-slate prose-lg max-w-none text-[var(--gw-text-main)]">
            <p className="text-xl font-light leading-relaxed mb-8">
              Dear patients,
            </p>
            <p className="leading-relaxed mb-6">
              GWCIM uses <strong>ChARM Patient Portal</strong>. ChARM EHR is a HIPAA compliant Electronic Medical Records System. All messages between GWCIM and existing patients will occur securely via the secure ChARM portal.
            </p>
            <p className="leading-relaxed mb-8">
              GWCIM does not schedule any appointments via ChARM. To make an appointment please call us at <a href="tel:2028335055" className="text-[var(--gw-primary)] font-bold decoration-[var(--gw-accent)] underline-offset-4 underline">202-833-5055</a> or send a message in the Portal.
            </p>
          </div>
        </section>

        {/* Action Sections */}
        <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* New Patients Card */}
          <div className="bg-white p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-none flex flex-col items-start border-t-4 border-t-[var(--gw-blue)]">
            <h2 className="text-2xl font-serif text-[var(--gw-primary)] mb-6">For New Patients</h2>
            <p className="text-slate-600 mb-10 leading-relaxed flex-grow">
              Please fill out our short New Patient Inquiry Form. After we review it, we will send you an invitation to ChARM where you will create your patient account. If you have not received this invitation, please contact us ASAP.
            </p>
            <Link 
              href="/schedule-an-appointment" 
              className="w-full text-center bg-[var(--gw-blue)] text-white text-[13px] font-bold tracking-widest px-8 py-5 rounded-2xl hover:bg-[var(--gw-primary)] transition-all duration-300 shadow-md uppercase"
            >
              New Patient Inquiry Form
            </Link>
          </div>

          {/* Existing Patients Card */}
          <div className="bg-white p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-none flex flex-col items-start border-t-4 border-t-[var(--gw-accent)]">
            <h2 className="text-2xl font-serif text-[var(--gw-primary)] mb-6">Existing Patients</h2>
            <p className="text-slate-600 mb-10 leading-relaxed flex-grow">
              Access your medical records, message your providers, and view lab results securely through the ChARM portal.
            </p>
            <a 
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[var(--gw-accent)] text-[var(--gw-primary)] text-[13px] font-bold tracking-widest px-8 py-5 rounded-2xl hover:bg-[var(--gw-primary)] hover:text-white transition-all duration-300 shadow-md uppercase"
            >
              ChARM Patient Portal Login
            </a>
          </div>

        </section>

        {/* Feedback Section */}
        <section className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 rounded-none text-center">
             <h3 className="text-2xl font-serif text-[var(--gw-primary)] mb-6">We care about your experience!</h3>
             <p className="text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
               Please take a moment to leave us a review on Google. Your feedback helps us improve and helps others find the right care they need. Thank you!
             </p>
             <a 
               href={reviewUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 border-2 border-[var(--gw-primary)] text-[var(--gw-primary)] px-10 py-4 rounded-2xl font-bold tracking-widest hover:bg-[var(--gw-primary)] hover:text-white transition-all duration-300 uppercase text-sm"
             >
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.32-2.12 4.44-1.28 1.2-3.08 2.16-6.12 2.16-4.84 0-8.72-3.88-8.72-8.72s3.88-8.72 8.72-8.72c2.6 0 4.56.96 5.96 2.32l2.32-2.32C18.24 1.12 15.48 0 12.48 0 5.84 0 0 5.84 0 12.48s5.84 12.48 12.48 12.48c3.56 0 6.28-1.16 8.36-3.28 2.12-2.08 2.8-5.04 2.8-7.44 0-.72-.04-1.44-.12-2.12H12.48z"/>
               </svg>
               Leave us a review on Google
             </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
