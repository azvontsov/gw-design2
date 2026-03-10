'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import NewsletterSidebarWidget from '@/components/NewsletterSidebarWidget';

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

        {/* Two-Column Layout Container */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-12 xl:gap-16 items-start">
            
            {/* Left Main Content Column */}
            <div className="min-w-0 pb-24">
                
                {/* Hero Section */}
                <section className="mb-24 flex flex-col gap-12">
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
                    <div className="aspect-video w-full rounded-none overflow-hidden shadow-2xl border-[12px] border-white bg-slate-100 relative mb-8">
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/WrGYBq6pIIs" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                  </div>
                </section>

                {/* Features - Why Quality Matters */}
                <section className="py-12 mb-16 border-t border-slate-100">
                    <div className="text-left mb-10">
                        <h2 className="text-3xl md:text-4xl font-serif text-[var(--gw-primary)] mb-4">Why Quality Matters</h2>
                        <p className="text-slate-500 max-w-2xl">Not all supplements are created equal. We ensure yours are safe, effective, and reliable.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                </section>

                {/* Integration Section */}
                <section className="mb-24">
            <h2 className="text-3xl font-serif text-[var(--gw-primary)] mb-8">Integrated With Your Care</h2>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light mb-16">
                    <p>
                        Supplements are most effective when they are part of a coordinated care plan. Your GWCIM provider will monitor your supplement intake, ensuring there are no contraindications with your other treatments and adjusting doses based on regular lab work.
                    </p>
                </div>

                <div className="bg-white p-10 border border-slate-100 shadow-sm mt-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">Our Trusted Brand Partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                    <span className="text-xl font-bold font-serif text-[var(--gw-primary)]">THORNE</span>
                    <span className="text-xl font-bold font-serif text-[var(--gw-primary)]">METAGENICS</span>
                    <span className="text-xl font-bold font-serif text-[var(--gw-primary)]">PURE</span>
                    <span className="text-xl font-bold font-serif text-[var(--gw-primary)]">ORTHO MOLECULAR</span>
                </div>
                </div>
            </section>
                <div className="mt-16 bg-[var(--gw-primary)] p-10 relative overflow-hidden flex flex-col items-start gap-8 border-l-[6px] border-[var(--gw-accent)]">
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Ready to order?</h2>
                        <p className="text-white/80 text-base mb-0 font-light max-w-lg">
                            Our online dispensary with Fullscript allows you to order your practitioner-recommended supplements from the comfort of your home.
                        </p>
                    </div>
                    <div className="relative z-10 shrink-0">
                        <a 
                            href={fullscriptLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--gw-accent)] text-[var(--gw-primary)] px-8 py-4 rounded-none font-bold tracking-[0.2em] uppercase hover:bg-white transition-all shadow-xl inline-block"
                        >
                            Visit Our Store
                        </a>
                    </div>
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-32 h-full bg-white/5 skew-x-12 translate-x-12"></div>
                </div>

            </div> {/* End Main Content Left */}

            {/* Right Sidebar Column */}
            <aside className="hidden lg:block shrink-0 sticky top-28 space-y-6">
               
               {/* Contact/CTA Widget */}
               <div className="overflow-hidden shadow-lg border border-[var(--gw-primary)]/10">
                 {/* Top accent bar */}
                 <div className="h-1 w-full bg-[#B9C1B3]" /> 
                 
                 <div className="bg-[var(--gw-primary)] p-6 text-white">
                   <h3 className="text-[20px] font-medium leading-snug mb-3 font-serif">
                     Talk to our care team
                   </h3>
                   <p className="text-[13px] text-white/70 leading-relaxed mb-6">
                     Have questions about your recommended supplements or need help accessing the Fullscript store?
                   </p>
                   
                   <a href="tel:2028335055"
                     className="flex w-full items-center justify-center gap-2 border border-[var(--gw-gold)] text-[var(--gw-gold)] text-[12px] font-bold uppercase tracking-widest px-5 py-3.5 hover:bg-[var(--gw-gold)] hover:text-[var(--gw-primary)] transition-all duration-300"
                   >
                     Call 202-833-5055
                   </a>
                 </div>
               </div>

               {/* Resource Links Widget */}
               <div className="bg-white border border-gray-100 shadow-sm p-6">
                 <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4">Patient Links</p>
                 <ul className="space-y-3">
                     <li>
                         <a href="/charm-patient-portal" className="flex items-start gap-3 group">
                             <span className="shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center bg-slate-50 border border-slate-100 group-hover:border-[var(--gw-blue)] transition-colors">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3.5 h-3.5 text-[var(--gw-primary)]">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                 </svg>
                             </span>
                             <p className="text-[13px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug">
                                 ChARM Patient Portal
                             </p>
                         </a>
                     </li>
                 </ul>
               </div>

               <NewsletterSidebarWidget />

            </aside>
            
        </div> {/* End Two-Column Layout Container */}
      </main>

      <Footer />
    </div>
  );
}
