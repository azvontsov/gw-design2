'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
export default function ContactPage() {

  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />
      
      <main className="flex-1 w-full pt-40 pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--gw-primary)] mb-6 leading-tight">
            Contact <span className="text-[var(--gw-accent)]">Us</span>
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
            We are here to help you on your journey to optimal health. Reach out to us via the form below or through our direct contact information.
          </p>
        </section>

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-6">
          
          {/* Contact Information & Map */}
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            
            {/* Direct Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)]">Location</h3>
                <p className="text-[15px] leading-relaxed text-slate-600 font-light">
                  908 New Hampshire Ave NW #200<br/>
                  Washington, DC 20037
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] font-bold uppercase tracking-wider text-[var(--gw-primary)] border-b border-[var(--gw-primary)] pb-1 pt-2 hover:text-[var(--gw-blue)] hover:border-[var(--gw-blue)] transition-all"
                >
                  Get Directions
                </a>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)]">Hours</h3>
                <p className="text-[15px] leading-relaxed text-slate-600 font-light">
                  Monday – Friday<br/>
                  9:00am – 5:00pm
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)]">Phone</h3>
                <a href="tel:2028335055" className="block text-xl font-serif text-[var(--gw-primary)] hover:text-[var(--gw-blue)] transition-colors">
                  202-833-5055
                </a>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)]">Email</h3>
                <a href="mailto:info@gwcim.com" className="block text-lg font-light text-slate-600 hover:text-[var(--gw-primary)] transition-colors underline underline-offset-4 decoration-slate-200">
                  info@gwcim.com
                </a>
              </div>
            </div>

            {/* Parking Info */}
            <div className="bg-slate-50 p-8 border border-slate-100">
              <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--gw-primary)] mb-4">Parking & Accessibility</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Secure underground parking is available in the building. Our clinic is fully accessible via elevators. Street parking is available but limited on New Hampshire Avenue and surrounding streets.
              </p>
            </div>

            {/* Interactive Google Map */}
            <div className="aspect-video bg-slate-100 border border-slate-200 relative overflow-hidden grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-sm">
              <iframe 
                src="https://maps.google.com/maps?q=GW+Center+for+Integrative+Medicine,+Washington,+DC&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="GW Center for Integrative Medicine Location"
              />
            </div>

          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
