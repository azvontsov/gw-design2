'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reviews from '@/components/Reviews';

export default function PatientReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />
      
      <main className="flex-1 w-full pt-40 pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-24">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: "Patient Reviews and Testimonials" }]} />
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--gw-primary)] mb-8 leading-tight">
            Patient Reviews and Testimonials
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
            Discover how GWCIM has helped patients find healing and wellness through our personalized integrative approach.
          </p>
        </section>

        {/* Main Content */}
        <div className="w-full">
            <Reviews />
        </div>

        {/* Video Testimonials Section (Placeholder) */}
        <section className="max-w-7xl mx-auto px-6 mb-24 py-24 border-t border-slate-200">
             <div className="text-center mb-16">
                 <h2 className="text-4xl font-serif text-[var(--gw-primary)] mb-6">Patient Stories</h2>
                 <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                     Hear directly from our patients about their experiences with our integrative medicine team and their paths to recovery.
                 </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 {/* Video Card 1 */}
                 <div className="group relative aspect-video bg-slate-900 overflow-hidden shadow-2xl rounded-none transform hover:scale-[1.01] transition-transform duration-300">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end p-8">
                         <div className="text-white">
                             <h4 className="text-xl font-bold mb-2">Overcoming Chronic Fatigue</h4>
                             <p className="text-sm opacity-80">A journey of healing with the GWCIM team.</p>
                         </div>
                     </div>
                     <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="w-16 h-16 rounded-full bg-[var(--gw-alert)] flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                          </div>
                      </div>
                      <img src="/images/office-snippet.jpg" alt="Patient Video" className="w-full h-full object-cover opacity-60" />
                 </div>

                 {/* Video Card 2 */}
                 <div className="group relative aspect-video bg-slate-900 overflow-hidden shadow-2xl rounded-none transform hover:scale-[1.01] transition-transform duration-300">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end p-8">
                         <div className="text-white">
                             <h4 className="text-xl font-bold mb-2">My Journey with Autoimmune Disease</h4>
                             <p className="text-sm opacity-80">Personalized care that addresses the whole person.</p>
                         </div>
                     </div>
                     <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="w-16 h-16 rounded-full bg-[var(--gw-alert)] flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                          </div>
                      </div>
                      <img src="/images/specialist-snippet.jpg" alt="Patient Video" className="w-full h-full object-cover opacity-60" />
                 </div>
             </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[var(--gw-primary)] py-24 text-center text-white px-6">
             <div className="container mx-auto max-w-3xl">
                 <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to write your own healing story?</h2>
                 <p className="text-xl opacity-80 font-light mb-12">
                     Contact us today to schedule your initial consultation and take the first step toward optimal health.
                 </p>
                 <div className="flex flex-wrap justify-center gap-6">
                     <a href="#" className="bg-[var(--gw-gold)] text-[var(--gw-primary)] px-10 py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-white transition-all shadow-xl shadow-black/20">Book a Consultation</a>
                     <a href="tel:2028335055" className="border-2 border-white/40 px-10 py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-white hover:text-[var(--gw-primary)] transition-all">Call us at 202-833-5055</a>
                 </div>
             </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
