import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeGallery from "@/components/YouTubeGallery";
import Breadcrumbs from "@/components/Breadcrumbs";
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  if (slug === 'ashley-drapeau-pa-c-l-ac-mpas-mac') {
    return {
      title: 'Ashley Drapeau, PA-C, L.Ac., MPAS, MAC | GW Center for Integrative Medicine',
      description: 'Ashley Drapeau is the Medical Director and Director of the Long COVID program at GWCIM.',
    };
  }

  
  


  if (slug === 'mikhail-kogan-md') {
    return {
      title: 'Dr. Mikhail Kogan, MD | Top Doctor in Washington, D.C. | GWCIM',
      description: 'Dr. Kogan, MD, is the heart and driving force behind the GW Center for Integrative Medicine, specializing in complex health challenges.',
    };
  }

  if (slug === 'deirdre-orceyre-nd-lac') {
    return {
      title: 'Dr. Deirdre Orceyre, ND, MSOM, L.Ac. | Naturopathic Medicine',
      description: 'Dr. Deirdre Orceyre is a board certified licensed naturopathic physician and licensed acupuncturist.',
    };
  }
  
  
  if (slug === 'marianna-ledenac-nd') {
    return {
      title: 'Dr. Marianna Ledenac, ND | GWCIM',
      description: 'Dr. Marianna Ledenac, ND, is a naturopathic medicine physician with over 25 years of clinical experience specializing in general health.',
    };
  }

  
  if (slug === 'monica-arias') {
    return {
      title: 'Monica Arias | Clinic Manager | GWCIM',
      description: 'Monica Arias has been the dedicated Clinic Manager of GWCIM for over 12 years, overseeing all administrative clinical operations.',
    };
  }

  
  if (slug === 'angela-n-gabriel-acupuncture-se') {
    return {
      title: 'Angela Gabriel, MSOM, LAc, SEP | Acupuncture & Somatic Experiencing | GWCIM',
      description: 'Angela Gabriel is a Licensed Acupuncturist and certified Somatic Experiencing Practitioner specializing in chronic illness, trauma, and nervous system regulation.',
    };
  }

  return { title: 'GW Center for Integrative Medicine' };
}

export default async function ProviderProfilePage({ params }) {
  const { slug } = await params;

  // We only have Ashley's data for now
  
  
  if (slug === 'deirdre-orceyre-nd-lac') {
    return (
      <div className="flex min-h-screen flex-col bg-[var(--gw-background)] font-sans antialiased">
        <Header />
        <main className="flex-1 w-full pt-40 pb-24">
        
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'Our Team', href: '/people' }, { label: 'Deirdre Orceyre' }]} />
        </div>
        
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-16 mt-8">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start relative">
            
            {/* Avatar side */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden flex items-center justify-center relative z-10">
                <img src="/images/providers/dierdre.jpg" alt="Dr. Deirdre Orceyre" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Main info side */}
            <div className="flex-grow z-10 relative text-center md:text-left pt-2 md:pt-4">
              <h1 className="text-4xl lg:text-[54px] font-serif text-[var(--gw-primary)] mb-4 leading-tight">Deirdre Orceyre</h1>
              <h2 className="text-xl lg:text-[22px] text-[var(--gw-secondary)] font-bold mb-4">ND, MSOM, L.Ac.</h2>
              
              <p className="text-[13px] md:text-[14px] text-[var(--gw-primary)] font-bold mb-6 tracking-wide uppercase">
                  Naturopathic Medical Director<br/>
                  <span className="text-slate-500 font-medium normal-case tracking-normal block mt-1">Naturopathic Medicine | Traditional Chinese Medicine</span>
              </p>

              <div className="text-[15px] md:text-[16px] text-[#42526D] leading-relaxed font-normal space-y-4 max-w-3xl">
                <p>
                  Dr. Deirdre Orceyre, ND, MSOM, L.Ac., is a graduate of the National University of Natural Medicine, a leading institution in natural health education in the U.S with over 20 years of experience in Integrative Medicine. In 2004, she graduated cum laude with a Doctorate in Naturopathic Medicine and a Masters of Science in Oriental Medicine. 
                </p>
                <p>
                  Following her medical training, Dr. Orceyre participated for two years in a full-time residency program focusing on internal naturopathic medicine, with special rotations in women’s health, endocrinology and integrative cancer care. Dr. Orceyre has undergone extensive national examinations and is a board certified licensed naturopathic physician and licensed acupuncturist in the District of Columbia.
                </p>
              </div>
            </div>
            
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column */}
          <div className="lg:col-span-2 pr-0 lg:pr-10">
            
            <div className="py-10 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Overview
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Patient Care Approach
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Dr. Orceyre currently sees patients via telemedicine and in-person at GWCIM. In addition, twice a month she works at the GW Breast Center and teaches Integrative Medicine at Georgetown University. 
                </p>
                <p>
                  At GWCIM she offers both naturopathic office visits and acupuncture for her patients. She welcomes patients with all conditions, with the goal to work with the patients to determine the causes of their imbalance. 
                </p>
                <p>
                  Dr. Orceyre sees herself as a guide and a coach, with the patient being the true healer. She uses many treatment modalities, such as nutrition and lifestyle modifications, nutritional supplementation, Western and Chinese herbal medicines, acupuncture, flower essences, homeopathy, qigong healing and craniosacral therapies.
                </p>
              </div>
            </div>

            <div className="py-12 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 What To Expect
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 During a visit with Dr. O
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  You may expect a complete intake lasting 75-120m. The history and intake will review the current concern and then take a deeper look into the terrain of the individual. After the history, we will determine next steps – discussion of labwork needed, diet, supplements, medications, lifestyle, handouts, referrals may occur. A follow-up schedule will be discussed. Questions will be answered.
                </p>
                <p>
                  All recommendations will be available after the visit through our portal, as well as handouts, lab orders and referrals ready to be printed. Dr. O sends supplement recommendations via an online dispensary with links to exact recommendations with dosages from very high quality supplements and trustworthy brands.
                </p>
              </div>
            </div>

            <div className="py-12 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Patient Stories
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Testimonials
               </h2>
               <div className="space-y-8 mt-2">
                  <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                     <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                       “A fellow friend with cancer recommended I make an appointment with Dr. Orceyre to discuss Mistletoe therapy treatment. Even though DC is at least an hour and a half drive, I made the appointment desperately wanting someone to give me something healthy for my body. ... Not only did Dr. Orceyre prescribe the Mistletoe Therapy ... but she also looked at all my blood work and chemo cocktails and developed a custom plan for supplements and diet that would help my body to cope with all the things going on. ... I am happy to say that I made it through 3 months of chemo during the winter months, surrounded by the flu, colds and strep throat and I never got sick once. ... Even though my initial relationship has started because of cancer, I see such a value in how I have been feeling that I will continue to have follow up appointments with Dr. Orceyre for my general well being.”
                     </p>
                     <footer className="text-sm font-bold text-[var(--gw-primary)]">— a patient</footer>
                  </blockquote>
                  
                  <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                     <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                       “… My last appointment was Dr. Orceyre, and as always, the appointment was awesome! I have not felt as cared about by my physician as I do by Dr. O since my pediatrician.”
                     </p>
                     <footer className="text-sm font-bold text-[var(--gw-primary)]">— J. Y.</footer>
                  </blockquote>
                  
                  <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                     <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                       “... Yesterday I went to you and you did much of the same thing, but you found a bunch of different things that all seemed to be working together. Plus you diagnosed the rib right away. And you listened to all the pieces of the story to figure out what remedies I needed. And now, I’ve avoided antibiotics. This is the reason [my husband] and I value your care so highly and the reason we tell everyone to try integrative medicine. It makes such a big difference and keeps us so much healthier overall.”
                     </p>
                     <footer className="text-sm font-bold text-[var(--gw-primary)]">— K.D.</footer>
                  </blockquote>

                  <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                     <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                       “I was diagnosed with cancer in August 2016 ... Dr. Deirdre Orceyre, acupuncturist and naturopath, recommended several supplements as well as acupuncture treatments. My pain subsided noticeably after I began the supplements and acupuncture and I was able to complete my chemo treatments with fairly minimal side effects. ... I am now five months post-chemo and my neuropathy is almost completely gone. I credit much of my improvement to Dr. Orceyre’s treatments. I also have found her to be a knowledgeable, patient and compassionate caregiver throughout the time I have seen her.”
                     </p>
                     <footer className="text-sm font-bold text-[var(--gw-primary)]">— E.M.</footer>
                  </blockquote>
               </div>
            </div>

          </div>

          {/* Right Column (Sidebar details) */}
          <div className="space-y-6">

            {/* ── HIGH-CONVERTING BOOKING CTA ── */}
            <div className="overflow-hidden shadow-lg border border-[var(--gw-primary)]/10 bg-white">
              <div className="h-1 w-full bg-[var(--gw-blue)]" />
              <div className="bg-[var(--gw-primary)] p-6 text-white">
                <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-[var(--gw-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Accepting new patients
                </div>
                <h3 className="text-[24px] font-medium leading-snug mb-3" style={{ fontFamily: 'var(--font-gt-super)' }}>
                  Start your healing journey
                </h3>
                <p className="text-[13px] text-white/70 leading-relaxed mb-6">
                  Book a consultation with Dr. Deirdre Orceyre.
                </p>
                <Link
                  href="#"
                  className="flex w-full items-center justify-center gap-2 bg-[var(--gw-gold)] text-[var(--gw-primary)] text-[12px] font-bold uppercase tracking-widest px-5 py-4 hover:bg-white hover:text-[var(--gw-primary)] transition-all duration-300 shadow-md mb-3"
                >
                  Make an Appointment
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a href="tel:2028335055"
                  className="flex w-full items-center justify-center gap-2 border border-white/30 text-white/80 text-[12px] font-semibold uppercase tracking-widest px-5 py-3.5 hover:border-white hover:text-white transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                  </svg>
                  Call 202-833-5055
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm p-6">
               <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gw-accent)]"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
                 Education & Credentials
               </p>
               <ul className="text-[13px] text-slate-700 space-y-3 list-inside list-disc">
                 <li>Doctorate in Naturopathic Medicine, National University of Natural Medicine (cum laude, 2004)</li>
                 <li>Masters of Science in Oriental Medicine, NUNM</li>
                 <li>Two-year residency emphasizing internal medicine, women's health, integrative cancer care</li>
                 <li>Board Certified Licensed Naturopathic Physician</li>
                 <li>Licensed Acupuncturist (District of Columbia)</li>
               </ul>
            </div>

            {/* Related Content */}
            <div className="bg-white border border-gray-100 shadow-sm p-6">
               <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gw-accent)]">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                 </svg>
                 Related Content
               </p>
               <div className="space-y-4">
                 <Link href="#" className="block group">
                   <h4 className="text-[14px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug">Integrative Oncology: What We Do at GWCIM</h4>
                 </Link>
                 <div className="w-full h-px bg-gray-100" />
                 <Link href="#" className="block group">
                   <h4 className="text-[14px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug">Acupuncture | Chinese Medicine</h4>
                 </Link>
                 <div className="w-full h-px bg-gray-100" />
                 <Link href="#" className="block group">
                   <h4 className="text-[14px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug">Post-Infectious Syndromes</h4>
                 </Link>
                 <div className="w-full h-px bg-gray-100" />
                 <Link href="#" className="block group">
                   <h4 className="text-[14px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug">GWCIM Free Virtual Open House: Mental Health and Trauma</h4>
                 </Link>
               </div>
            </div>

          </div>

        </section>

      </main>
      <Footer />
      </div>
    );
  }


  if (slug === 'mikhail-kogan-md') {
    return (
      <div className="flex min-h-screen flex-col bg-[var(--gw-background)] font-sans antialiased">
        <Header />
        <main className="flex-1 w-full pt-40 pb-24">
        
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'Our Team', href: '/people' }, { label: 'Mikhail Kogan' }]} />
        </div>
        
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-16 mt-8">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start relative">
            
            {/* Avatar side */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden flex items-center justify-center relative z-10">
                <img src="/images/providers/misha.jpg" alt="Dr. Mikhail Kogan" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Main info side */}
            <div className="flex-grow z-10 relative text-center md:text-left pt-2 md:pt-4">
              <h1 className="text-4xl lg:text-[54px] font-serif text-[var(--gw-primary)] mb-4 leading-tight">Mikhail Kogan</h1>
              <h2 className="text-xl lg:text-[22px] text-[var(--gw-secondary)] font-bold mb-4">MD, ABIOM, RCSTmisha</h2>
              
              <p className="text-[13px] md:text-[14px] text-[var(--gw-primary)] font-bold mb-6 tracking-wide uppercase">
                  Chief Medical Officer<br/>
                  <span className="text-slate-500 font-medium normal-case tracking-normal block mt-1">Integrative Medicine | Integrative Geriatrics | Functional Medicine</span>
              </p>

              <div className="text-[15px] md:text-[16px] text-[#42526D] leading-relaxed font-normal space-y-4 max-w-3xl">
                <p>
                  Dr. Kogan, MD, is the heart and driving force behind the GW Center for Integrative Medicine (GWCIM). His vision for the medical center is inspired by the legacy of GWCIM founder Dr. John Pan and shaped by his own life experiences. He is committed to creating a medical home for both providers from diverse medical traditions and the patients and families they serve.
                </p>
              </div>
            </div>
            
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column */}
          <div className="lg:col-span-2 pr-0 lg:pr-10">
            
            <div className="py-10 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Overview
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Meet Dr. Mikhail (Misha) Kogan
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Dr. Kogan has extensive training and expertise in internal medicine, geriatrics, palliative care, social and primary care medicine, integrative medicine, herbal medicine, and craniosacral therapy. He specializes in diagnosing and developing treatment plans for the most complex health challenges, offering hope to even the most desperate patients.
                </p>
                <p>
                  Dr. Kogan leads a world-class team of integrative medicine providers, each bringing unique expertise across multiple disciplines. Together, they demonstrate what patient-centered teamwork looks like—an inspired crew working side by side to meet each patient’s needs.
                </p>
              </div>
            </div>

            <div className="py-12 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Academic & Clinical Roles
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 At GWCIM and GWU MFA
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Dr. Kogan is the leading Integrative and Functional medicine physician at GWCIM and a physician at the Department of Geriatrics and Palliative Care at GWU Medical Faculty Associates. He is an Associate Professor at the George Washington University School of Medicine.
                </p>
                <p>
                  Dr. Kogan currently serves as CMO of the GWCIM and Associate Director of the Geriatrics Fellowship Program at GWU. Also, he is a part-time faculty member of the George Washington Institute for Spirituality and Health and the GW Center for Aging, Health and Humanities.
                </p>
              </div>
            </div>

            <div className="py-12 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Specialty
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Integrative Geriatric Medicine
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Dr. Mikhail Kogan is a leader in the newly established field of Integrative Geriatrics. He is the chief editor of the first definitive textbook of the field entitled “Integrative Geriatric Medicine”, published by Oxford University Press as part of the Andrew Weil Integrative Medicine Library series. He is a frequent speaker at a variety of international conferences on the topics of Integrative Medicine and Geriatrics, longevity, healthy aging, and the neurodegenerative diseases.
                </p>
                <p>
                  He provides geriatric primary care to GWU MFA patients and specialty care at GWCIM.
                </p>
                <p>
                  Dr. Kogan is especially dedicated to assisting patients with Alzheimer’s disease. By identifying and addressing underlying metabolic drivers, drawing extensively on Dr. Dale Bredesen’s research and the newly developed ReCODE program, he successfully treated many hundreds of patients.
                </p>
              </div>
            </div>

            <div className="py-12 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Focus Area
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Medical Cannabis
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Dr. Kogan is the author of a highly acclaimed book, “Medical Marijuana: Dr. Kogan’s Evidence-Based Guide to the Health Benefits of Cannabis and CBD,” published by Random House in 2021. Together with Dr. Abraham Benavides, MD, and Joelle Rabion, Dr. Kogan provides rigorous, evidence-based medical cannabis care for GWCIM patients. His specific area of interest is utilizing cannabis as a solution to reduce polypharmacy in the geriatric patient population. He is a renowned international speaker in the field of medical cannabis.
                </p>
              </div>
            </div>

            <div className="py-12 border-b border-gray-200">
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Other Medical Interests
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Dr. Kogan offers Integrative and Functional Medicine consultations for patients of all ages. His other areas of expertise include neurodegenerative diseases, chronic illness, chronic pain, cancer, autoimmune diseases, mold toxicity illness, genetic consultation, and more.
                </p>
              </div>
            </div>

            <div className="py-12 border-b border-gray-200">
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Leadership and Advocacy in Integrative Medicine
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Dr. Kogan actively serves on several national boards and organizations, including the American Board of Integrative Medicine under the American Board of Physician Specialties (ABPS), PlantMed, and others. Additionally, he is the founder and chair of the board for AIM Health Institute, a 501(c)(3) non-profit organization in the Washington, D.C., metropolitan area. AIM Health Institute is dedicated to providing integrative medicine services to low-income and terminally ill patients.
                </p>
              </div>
            </div>

            <div className="py-12 border-b border-gray-200">
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Personal Journey
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Dr. Mikhail Kogan’s journey in medicine, much like his life, has been a rich voyage spanning diverse cultures and experiences, each contributing to his unique perspective and expertise. Born in Moscow, in the former Soviet Union, Dr. Kogan emigrated with his family during his teenage years, first to Israel and later to the United States. His professional and personal endeavors have shaped him into a compassionate, inquisitive, and open-minded practitioner in the field of Integrative Medicine.
                </p>
                <p>
                  Beyond his formal training in conventional Western medicine, Dr. Kogan has pursued numerous complementary healing modalities that have enriched his approach to patient care. He is a graduate of a two-year training program in Biodynamic Cranio-Sacral Therapy. This osteopathic practice is effective for conditions such as headaches, back pain, and fatigue. Additionally, he completed a four-year program at the Suluk Academy, a teaching center rooted in the principles of Sufism. These trainings helped him integrate meditation, mindfulness, and spiritual practices into his life and medical practice.
                </p>
                <p>
                  These diverse experiences defined his commitment to all aspects – physical, emotional, and spiritual -of his patients’ well-being.
                </p>
              </div>
            </div>

            <div className="py-12">
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Beyond Clinic and University
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Outside of the clinic, Dr. Kogan and his wife, Angela Gabriel, a practitioner at GWCIM, are staying busy raising teenage sons Peter and Sebastian. True to his calling as an integrative practitioner, his leisure time is replete with healthy lifestyle activities that nourish both body and spirit: he enjoys vigorous exercise, long-distance cross-country skiing, downhill skiing, frequent nature walks with his family and dogs, mind body practices such as weekly meditation, yoga, QiGong, and mindfulness classes, beekeeping, and gardening. His favorite board games are chess and Wingspan. Dr. Kogan traveled to many countries including Columbia, Peru, Uganda, Ephiopia, China, Europe, and there are more on his bucket list.
                </p>
              </div>
            </div>

            <YouTubeGallery 
              title="Dr. Misha Kogan’s YouTube Channel" 
              subtitle="Watch & Learn"
              videos={[
                {
                  videoId: "A0lJ-r__K5E",
                  title: "Educational presentations and discussions",
                  description: "Features a variety of educational presentations, interviews, discussions, and announcements related to Integrative and Functional Medicine."
                }
              ]} 
            />

          </div>

          {/* Right Column (Sidebar details) */}
          <div className="space-y-6">

            {/* ── HIGH-CONVERTING BOOKING CTA ── */}
            <div className="overflow-hidden shadow-lg border border-[var(--gw-primary)]/10 bg-white">
              <div className="h-1 w-full bg-[var(--gw-blue)]" />
              <div className="bg-[var(--gw-primary)] p-6 text-white">
                <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-[var(--gw-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Accepting new patients
                </div>
                <h3 className="text-[24px] font-medium leading-snug mb-3" style={{ fontFamily: 'var(--font-gt-super)' }}>
                  Start your healing journey
                </h3>
                <p className="text-[13px] text-white/70 leading-relaxed mb-6">
                  Book a consultation with Dr. Mikhail Kogan.
                </p>
                <Link
                  href="#"
                  className="flex w-full items-center justify-center gap-2 bg-[var(--gw-gold)] text-[var(--gw-primary)] text-[12px] font-bold uppercase tracking-widest px-5 py-4 hover:bg-white hover:text-[var(--gw-primary)] transition-all duration-300 shadow-md mb-3"
                >
                  Make an Appointment
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a href="tel:2028335055"
                  className="flex w-full items-center justify-center gap-2 border border-white/30 text-white/80 text-[12px] font-semibold uppercase tracking-widest px-5 py-3.5 hover:border-white hover:text-white transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                  </svg>
                  Call 202-833-5055
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm p-6">
               <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gw-accent)]"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
                 Education
               </p>
               <ul className="text-[13px] text-slate-700 space-y-3 list-inside list-disc">
                 <li>Technion, Israel Institute of Technology, Biology Major, Haifa, Israel. 1992–1995</li>
                 <li>BS in Biochemistry, Temple University, Philadelphia, PA, 1997</li>
                 <li>MD, Drexel University College of Medicine, Philadelphia, PA. 2004</li>
                 <li>Internal Medicine Resident, Social and Primary Care Program, Montefiore Medical Center, Bronx, NY. 2004–2007</li>
                 <li>Geriatric Fellow, George Washington University, Washington, DC. 2007–2008</li>
               </ul>
            </div>

            {/* Related Content */}
            <div className="bg-white border border-gray-100 shadow-sm p-6">
               <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gw-accent)]">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                 </svg>
                 Related Content
               </p>
               <div className="space-y-4">
                 <Link href="#" className="block group">
                   <h4 className="text-[14px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug">Dr. Mikhail Kogan, Top Doctor in Washington, D.C.</h4>
                 </Link>
                 <div className="w-full h-px bg-gray-100" />
                 <Link href="#" className="block group">
                   <h4 className="text-[14px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug">Medical Marijuana Book - Soft Cover Edition</h4>
                 </Link>
                 <div className="w-full h-px bg-gray-100" />
                 <Link href="#" className="block group">
                   <h4 className="text-[14px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug">GWCIM announces new Medical Director: Ashley Drapeau</h4>
                 </Link>
                 <div className="w-full h-px bg-gray-100" />
                 <Link href="#" className="block group">
                   <h4 className="text-[14px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug">What Are Anti-Depressants? Dr. Kogan’s Interview On OTC Meds</h4>
                 </Link>
               </div>
            </div>

          </div>

        </section>

      </main>
      <Footer />
      </div>
    );
  }


  
  if (slug === 'marianna-ledenac-nd') {
    return (
      <div className="flex min-h-screen flex-col bg-[var(--gw-background)] font-sans antialiased">
        <Header />
        <main className="flex-1 w-full pt-40 pb-24">
        
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'Our Team', href: '/people' }, { label: 'Marianna Ledenac' }]} />
        </div>
        
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-16 mt-8">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start relative">
            
            {/* Avatar side */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden flex items-center justify-center relative z-10">
                <img src="/images/providers/marianna.jpeg" alt="Dr. Marianna Ledenac" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Main info side */}
            <div className="flex-grow z-10 relative text-center md:text-left pt-2 md:pt-4">
              <h1 className="text-4xl lg:text-[54px] font-serif text-[var(--gw-primary)] mb-4 leading-tight">Marianna Ledenac</h1>
              <h2 className="text-xl lg:text-[22px] text-[var(--gw-secondary)] font-bold mb-4">ND</h2>
              
              <p className="text-[13px] md:text-[14px] text-[var(--gw-primary)] font-bold mb-6 tracking-wide uppercase">
                  Naturopathic Medicine | Hormonal Health | FirstLine Therapy<br/>
                  <span className="text-slate-500 font-medium normal-case tracking-normal block mt-1">Endocrine Imbalances | Fatigue, Stress and Anxiety | Women’s Health</span>
              </p>

              <div className="text-[15px] md:text-[16px] text-[#42526D] leading-relaxed font-normal space-y-4 max-w-3xl">
                <p>
                  Dr. Marianna Ledenac, ND, is a naturopathic medicine physician with over 25 years of clinical experience specializing in general health with a focus on endocrine imbalances, fatigue, stress, anxiety management, sleep disorders, weight management, digestive issues, autoimmune conditions, chronic pain, detoxification, women's health (HRT and beyond), pediatric care (5+), and adjunctive cancer care.
                </p>
                <p>
                  Dr. Ledenac ensures comprehensive, personalized healthcare focusing on identifying and addressing the root causes of illness rather than simply managing symptoms for both adults and children 5+.
                </p>
              </div>
            </div>
            
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column */}
          <div className="lg:col-span-2 pr-0 lg:pr-10">
            
            <div className="py-10 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Overview
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Patient Care Approach
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Throughout her extensive practice, Dr. Ledenac integrates natural medicines with conventional science to deliver comprehensive healthcare. She employs both standard diagnostic tools and advanced nutritional and functional laboratory testing to identify underlying causes of illness and guide treatment decisions.
                </p>
                <p>
                  Her therapeutic approaches include clinical nutrition, dietary supplements, botanical medicine, lifestyle counseling, and homeopathy. Through years of practice and continuing education, she has developed particular expertise in botanical and herbal medicines for disease treatment and prevention.
                </p>
                <p>
                  Dr. Ledenac treats each patient as a whole person, guiding them toward optimal wellness by addressing physical, mental, and emotional dimensions of health.
                </p>
              </div>
            </div>
            
            <div className="py-12 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Affiliation
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 At GWCIM
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Dr. Marianna Ledenac has been an essential part of the GWCIM team for over 15 years and considers GWCIM her professional home. She values its truly integrative and collaborative environment as an innovative academic medical center.
                </p>
              </div>
            </div>

            <div className="py-12 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Patient Stories
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Testimonials
               </h2>
               <div className="space-y-8 mt-2">
                  <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                     <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                       “I meet for the first time Doctor Ledenac, she is very patient, kind, and very good! I will see her again!”
                     </p>
                     <footer className="text-sm font-bold text-[var(--gw-primary)]">— Marie-Claire Wilson, 2025</footer>
                  </blockquote>
                  
                  <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                     <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                       “Working with Dr. Kogan and Dr. Ledenac has been nothing short of life-changing. I am so appreciative of the time and attention they pay to assisting me on my health journey. It is definitely paying off!”
                     </p>
                     <footer className="text-sm font-bold text-[var(--gw-primary)]">— Vicky Tailor, 2024</footer>
                  </blockquote>

                  <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                     <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                       “Hi Dr Ledenac, I just want to let you know how much I appreciated your extra help yesterday regarding my supplements. I was pretty uncomfortable about stopping some of my supplements. You kindly spent extra time with me and carefully suggested what was truly needed. Not everyone would have done that, but you took the time to take extra care in helping your patient. That’s what makes you such an exceptional doctor and individual. So, I want to make sure that you know how grateful I am to have you as my doctor.”
                     </p>
                     <footer className="text-sm font-bold text-[var(--gw-primary)]">— J.E., August 2023</footer>
                  </blockquote>
                  
                  <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                     <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                       “Hi Dr. Ledenac, I saw you in the Spring of 2019 for chronic IBS/low energy... It’s been a year since I finished SIBO treatment, along with consistent supplementation, and can happily and confidently say my symptoms have not re-occurred whatsoever since beyond the occasional stress flare. You helped me to get my life back... I appreciate that more than anything.”
                     </p>
                     <footer className="text-sm font-bold text-[var(--gw-primary)]">— Isabelle K., July 2020</footer>
                  </blockquote>
                  
                  <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                     <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                       “Dear Dr. Ledenac, Thank you for the incredible difference you continue to make in my life; your loving kindness, your exceptional wisdom and your talented medicine are just to name a few of your extraordinary traits that I am most grateful for.”
                     </p>
                     <footer className="text-sm font-bold text-[var(--gw-primary)]">— L.J., Jan 2018</footer>
                  </blockquote>

                  <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                     <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                       “With the help of Dr. Marianna Ledenac, I have cleaned up my diet, lost 10 pounds, have more energy in the morning and got rid of my morning brain fog! So happy and I feel like a new and younger person! Thanks so much!!!”
                     </p>
                     <footer className="text-sm font-bold text-[var(--gw-primary)]">— C.R., October 2016</footer>
                  </blockquote>
               </div>
            </div>

          </div>

          {/* Right Column (Sidebar details) */}
          <div className="space-y-6">

            {/* ── HIGH-CONVERTING BOOKING CTA ── */}
            <div className="overflow-hidden shadow-lg border border-[var(--gw-primary)]/10 bg-white">
              <div className="h-1 w-full bg-[var(--gw-blue)]" />
              <div className="bg-[var(--gw-primary)] p-6 text-white">
                <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-[var(--gw-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Accepting new patients
                </div>
                <h3 className="text-[24px] font-medium leading-snug mb-3" style={{ fontFamily: 'var(--font-gt-super)' }}>
                  Start your healing journey
                </h3>
                <p className="text-[13px] text-white/70 leading-relaxed mb-6">
                  Book a consultation with Dr. Marianna Ledenac.
                </p>
                <Link
                  href="#"
                  className="flex w-full items-center justify-center gap-2 bg-[var(--gw-gold)] text-[var(--gw-primary)] text-[12px] font-bold uppercase tracking-widest px-5 py-4 hover:bg-white hover:text-[var(--gw-primary)] transition-all duration-300 shadow-md mb-3"
                >
                  Make an Appointment
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a href="tel:2028335055"
                  className="flex w-full items-center justify-center gap-2 border border-white/30 text-white/80 text-[12px] font-semibold uppercase tracking-widest px-5 py-3.5 hover:border-white hover:text-white transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                  </svg>
                  Call 202-833-5055
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm p-6">
               <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gw-accent)]"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
                 Education & Credentials
               </p>
               <ul className="text-[13px] text-slate-700 space-y-3 list-inside list-disc">
                 <li>Doctorate in Naturopathic Medicine, Canadian College of Naturopathic Medicine (Toronto, ON), 2000</li>
                 <li>Honors Bachelor of Applied Science, University of Windsor (Windsor, ON), 1995</li>
                 <li>Board-certified licensed naturopathic physician, Washington, DC</li>
                 <li>A certified FirstLine Therapy practitioner</li>
                 <li>Professional memberships with the DCANP, AANP, OAND, and CAND.</li>
               </ul>
            </div>

            {/* Related Content */}
            <div className="bg-white border border-gray-100 shadow-sm p-6">
               <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gw-accent)]">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                 </svg>
                 Related Content
               </p>
               <div className="space-y-4">
                 <Link href="#" className="block group">
                   <h4 className="text-[14px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug">Post-Infectious Syndromes</h4>
                 </Link>
                 <div className="w-full h-px bg-gray-100" />
                 <Link href="#" className="block group">
                   <h4 className="text-[14px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug">Pediatric and Adolescent Integrative Medicine Consultations</h4>
                 </Link>
                 <div className="w-full h-px bg-gray-100" />
                 <Link href="#" className="block group">
                   <h4 className="text-[14px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug">MENTAL HEALTH TODAY, BRAIN HEALTH TOMORROW</h4>
                 </Link>
                 <div className="w-full h-px bg-gray-100" />
                 <Link href="#" className="block group">
                   <h4 className="text-[14px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug">Functional Medicine</h4>
                 </Link>
               </div>
            </div>

          </div>

        </section>

      </main>
      <Footer />
      </div>
    );
  }


  
  if (slug === 'monica-arias') {
    return (
      <div className="flex min-h-screen flex-col bg-[var(--gw-background)] font-sans antialiased">
        <Header />
        <main className="flex-1 w-full pt-40 pb-24">
        
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'Our Team', href: '/people' }, { label: 'Monica Arias' }]} />
        </div>
        
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-16 mt-8">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start relative">
            
            {/* Avatar side */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden flex items-center justify-center relative z-10">
                <img src="/images/providers/monica.jpeg" alt="Monica Arias" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Main info side */}
            <div className="flex-grow z-10 relative text-center md:text-left pt-2 md:pt-4">
              <h1 className="text-4xl lg:text-[54px] font-serif text-[var(--gw-primary)] mb-4 leading-tight">Monica Arias</h1>
              <h2 className="text-xl lg:text-[22px] text-[var(--gw-secondary)] font-bold mb-4">Clinic Manager</h2>
              
              <p className="text-[13px] md:text-[14px] text-[var(--gw-primary)] font-bold mb-6 tracking-wide uppercase">
                  Operations &amp; Administration<br/>
                  <span className="text-slate-500 font-medium normal-case tracking-normal block mt-1">Billing · Scheduling · Patient Support · Clinical Operations</span>
              </p>

              <div className="text-[15px] md:text-[16px] text-[#42526D] leading-relaxed font-normal space-y-4 max-w-3xl">
                <p>
                  Monica has been a dedicated Clinic Manager of GWCIM for over 12 years, overseeing all administrative clinical operations. Every day, she ensures that GWCIM runs smoothly, meticulously managing personnel, supplies, and documentation.
                </p>
              </div>
            </div>
            
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column */}
          <div className="lg:col-span-2 pr-0 lg:pr-10">
            
            <div className="py-10 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Overview
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 The Heart of GWCIM Operations
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Renowned for her excellent problem-solving skills, Monica is the go-to person for any inquiries related to billing, scheduling, provider and service information, and all kinds of questions from both patients and providers.
                </p>
                <p>
                  Her friendly nature, outstanding social skills, and deep understanding of all clinic functions make her a true star of our clinic team and a wonderful support person to the patients.
                </p>
              </div>
            </div>

            <div className="py-12 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Passion &amp; Purpose
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Committed to Mental Health
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Monica's passion for the work at GWCIM, particularly in mental health, has been a profound inspiration. Aspiring to advance her career in psychology, she is dedicated to deepening her understanding of mental health issues and making meaningful contributions to the well-being of others.
                </p>
              </div>
            </div>

            <div className="py-12">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Beyond the Clinic
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Personal Interests
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Outside of the clinic, Monica loves to cook, grow and take care of plants, spend time with family and her big dog Logan, and travel.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar details) */}
          <div className="space-y-6">

            <div className="overflow-hidden shadow-sm border border-[var(--gw-primary)]/10 bg-white">
              <div className="h-1 w-full bg-[var(--gw-blue)]" />
              <div className="bg-[var(--gw-primary)] p-6 text-white">
                <h3 className="text-[22px] font-medium leading-snug mb-3" style={{ fontFamily: 'var(--font-gt-super)' }}>
                  Have a question?
                </h3>
                <p className="text-[13px] text-white/70 leading-relaxed mb-6">
                  Monica is your first point of contact for billing, scheduling, and all clinic inquiries.
                </p>
                <a href="tel:2028335055"
                  className="flex w-full items-center justify-center gap-2 bg-[var(--gw-gold)] text-[var(--gw-primary)] text-[12px] font-bold uppercase tracking-widest px-5 py-4 hover:bg-white transition-all duration-300 shadow-md mb-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                  </svg>
                  Call 202-833-5055
                </a>
                <Link
                  href="#"
                  className="flex w-full items-center justify-center gap-2 border border-white/30 text-white/80 text-[12px] font-semibold uppercase tracking-widest px-5 py-3.5 hover:border-white hover:text-white transition-all duration-300"
                >
                  Make an Appointment
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm p-6">
               <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gw-accent)]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
                 Areas of Expertise
               </p>
               <ul className="text-[13px] text-slate-700 space-y-3 list-inside list-disc">
                 <li>Billing &amp; Insurance coordination</li>
                 <li>Scheduling &amp; patient flow management</li>
                 <li>Personnel &amp; supply management</li>
                 <li>Provider &amp; service information</li>
                 <li>Clinical documentation &amp; compliance</li>
               </ul>
            </div>

          </div>

        </section>

      </main>
      <Footer />
      </div>
    );
  }


  
  if (slug === 'angela-n-gabriel-acupuncture-se') {
    return (
      <div className="flex min-h-screen flex-col bg-[var(--gw-background)] font-sans antialiased">
        <Header />
        <main className="flex-1 w-full pt-40 pb-24">
        
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'Our Team', href: '/people' }, { label: 'Angela Gabriel' }]} />
        </div>
        
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-16 mt-8">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start relative">
            
            {/* Avatar side */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden flex items-center justify-center relative z-10">
                <img src="/images/providers/angela.png" alt="Angela Gabriel" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Main info side */}
            <div className="flex-grow z-10 relative text-center md:text-left pt-2 md:pt-4">
              <h1 className="text-4xl lg:text-[54px] font-serif text-[var(--gw-primary)] mb-4 leading-tight">Angela Gabriel</h1>
              <h2 className="text-xl lg:text-[22px] text-[var(--gw-secondary)] font-bold mb-4">MSOM, LAc, SEP</h2>
              
              <p className="text-[13px] md:text-[14px] text-[var(--gw-primary)] font-bold mb-6 tracking-wide uppercase">
                  Licensed Acupuncturist · Somatic Experiencing Practitioner<br/>
                  <span className="text-slate-500 font-medium normal-case tracking-normal block mt-1">Chinese Medicine | Japanese Style Acupuncture | Somatic Experiencing</span>
              </p>

              <div className="text-[15px] md:text-[16px] text-[#42526D] leading-relaxed font-normal space-y-4 max-w-3xl">
                <p>
                  Dr. Angela Gabriel is a Licensed Acupuncturist and certified Somatic Experiencing Practitioner. Her practice specializes in treating chronic illnesses using Chinese Medicine and addresses the mind-body origins of disease through the Somatic Experiencing® Approach, which focuses on improving nervous system regulation.
                </p>
              </div>
            </div>
            
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column */}
          <div className="lg:col-span-2 pr-0 lg:pr-10">
            
            <div className="py-10 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Overview
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 At the GWCIM
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Angela joined the GW Center for Integrative Medicine team in 2010, bringing with her a background in both Western biomedicine and Eastern medicine. Angela's path to Chinese medicine began as a young biology scientist when she personally experienced the benefits of acupuncture and Qigong, sparking a lifelong interest in Eastern philosophy and healing.
                </p>
                <p>
                  Today, with dual Master's degrees in Biology and Oriental Medicine, she is integrating both paradigms into her practice, step by step.
                </p>
              </div>
            </div>

            <div className="py-12 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Professional Style
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 A Gentle, Holistic Approach
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Angela's acupuncture approach is rooted in Japanese-style acupuncture and Nagano-Matsumoto style, with an emphasis on gentle, nearly painless needling techniques suitable for most sensitive people. She uses acupuncture and/or Somatic Experiencing® (SE) to help patients work through trauma-related symptoms, using a "body-centered, bottom-up" approach to heal both physical and emotional imbalances.
                </p>
                <p>
                  Her expertise is especially beneficial for patients with anxiety, insomnia, chronic pain, fibromyalgia, stress disorders, and GI and metabolic conditions, particularly when these are exacerbated by long-term stress. Angela believes in adapting each session to her patient's needs.
                </p>
              </div>
            </div>

            <div className="py-12 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Treatments Available
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Session Types
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                 <div className="bg-white rounded-xl p-5 border border-gray-100">
                   <p className="font-semibold text-[var(--gw-primary)] mb-1">Acupuncture</p>
                   <p className="text-[14px] text-slate-600">Initial 90 min · Follow-ups 55 min</p>
                 </div>
                 <div className="bg-white rounded-xl p-5 border border-gray-100">
                   <p className="font-semibold text-[var(--gw-primary)] mb-1">Somatic Experiencing® (with or without acupuncture)</p>
                   <p className="text-[14px] text-slate-600">Introduction 60 min · Follow-ups 60 or 90 min</p>
                 </div>
                 <p className="text-[14px] text-slate-500 italic">Discounted packages are available for both types of treatments.</p>
               </div>
            </div>

            <div className="py-12 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 More About SE
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Somatic Experiencing® Explained
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Somatic Experiencing® (SE) is a therapeutic approach created by Dr. Peter Levine to address the physical and emotional effects of stress and trauma. Combined with bodywork, it looks at how your nervous system responds to stress — using both verbal tracking and hands-on work to help your system find more regulation.
                </p>
                <p>
                  The touch is different from massage: it is more about listening to what your body is holding and supporting it in releasing or reorganizing. Angela's bodywork background helps her understand physical patterns, and SE provides a framework for working with them in a trauma-informed way.
                </p>
              </div>
            </div>

            <div className="py-12 border-b border-gray-200">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Patient Stories
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Testimonials
               </h2>
               <div className="space-y-8 mt-2">
                  <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                     <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                       "Angela Gabriel is truly remarkable. I came to acupuncture skeptically after exhausting other options, and she's been a life-changing gift. She doesn't just focus on the issue but looks at me as a whole person, offering solutions that go beyond the surface. Her caring nature, technical skill, and holistic approach make all the difference."
                     </p>
                     <footer className="text-sm font-bold text-[var(--gw-primary)]">— Shelly Davis, Washington, D.C.</footer>
                  </blockquote>
                  
                  <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                     <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                       "Angela Gabriel is a skillful and compassionate practitioner of Chinese Traditional Medicine including acupuncture. My particular issues are treated and my entire being benefits from each session. This is an excellent practice offering many treatment modalities and practitioners."
                     </p>
                     <footer className="text-sm font-bold text-[var(--gw-primary)]">— Anne S. Li, Washington, D.C.</footer>
                  </blockquote>

                  <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                     <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                       "I've had wonderful experiences with multiple providers at GW Center for Integrative Medicine, and I've worked regularly with Angela Gabriel. I love how Angela integrates somatic experiencing with acupuncture. She is a creative and compassionate healer. My strongest recommendation."
                     </p>
                     <footer className="text-sm font-bold text-[var(--gw-primary)]">— Beth Goodbye, Washington, D.C.</footer>
                  </blockquote>
               </div>
            </div>

            <div className="py-12">
               <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
                 Beyond the Clinic
               </p>
               <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
                 Personal Interests
               </h2>
               <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
                <p>
                  Outside of GWCIM, Angela is a long-time student of the Diamond Approach and appreciates the Sufi poetry of Rumi and Hafiz. She balances her professional life with a busy family, including two teenage sons, her husband Dr. Misha Kogan, and two dogs (Noodlz and Shabu).
                </p>
                <p>
                  Angela's love of dance, cooking, hiking, kayaking, and nature fuels her creativity. She finds inspiration in artists like Andy Goldsworthy, is an advanced student of Spanish, and is inspired to travel to Spanish-speaking countries and other parts of the world. Her passion for self-expression through movement and art mirrors the holistic care she provides to her patients.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-6">

            <div className="overflow-hidden shadow-sm border border-[var(--gw-primary)]/10 bg-white">
              <div className="h-1 w-full bg-[var(--gw-blue)]" />
              <div className="bg-[var(--gw-primary)] p-6 text-white">
                <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-[var(--gw-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Accepting new patients
                </div>
                <h3 className="text-[24px] font-medium leading-snug mb-3" style={{ fontFamily: 'var(--font-gt-super)' }}>
                  Start your healing journey
                </h3>
                <p className="text-[13px] text-white/70 leading-relaxed mb-6">
                  Book a session with Angela Gabriel.
                </p>
                <Link
                  href="#"
                  className="flex w-full items-center justify-center gap-2 bg-[var(--gw-gold)] text-[var(--gw-primary)] text-[12px] font-bold uppercase tracking-widest px-5 py-4 hover:bg-white hover:text-[var(--gw-primary)] transition-all duration-300 shadow-md mb-3"
                >
                  Make an Appointment
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a href="tel:2028335055"
                  className="flex w-full items-center justify-center gap-2 border border-white/30 text-white/80 text-[12px] font-semibold uppercase tracking-widest px-5 py-3.5 hover:border-white hover:text-white transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                  </svg>
                  Call 202-833-5055
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm p-6">
               <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gw-accent)]"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
                 Education & Training
               </p>
               <ul className="text-[13px] text-slate-700 space-y-3 list-inside list-disc">
                 <li>Masters in Biochemistry, Moscow State University (1995)</li>
                 <li>Masters in Oriental Medicine, New York College for Health Professions (2005)</li>
                 <li>NCCAOM Board Certification in Oriental Medicine</li>
                 <li>Certifications in Chinese Herbal Medicine and Aromatherapy</li>
                 <li>Somatic Experiencing Practitioner (SEP), 2022</li>
                 <li>BASE (Relational Bodywork and Somatic Education) certification, 2025</li>
                 <li>Extensive training with Jeffrey Yuen, Kiiko Matsumoto, Shudo Denmei, and others</li>
                 <li>Member, DC Acupuncture Society</li>
               </ul>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm p-6">
               <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gw-accent)]">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                 </svg>
                 Professional Experience
               </p>
               <ul className="text-[13px] text-slate-700 space-y-3 list-inside list-disc">
                 <li>Acupuncture research, Columbia University, New York</li>
                 <li>Private practices in New York City and Washington, D.C.</li>
                 <li>GW Center for Integrative Medicine, since 2010</li>
                 <li>Integrative Medicine program at "Bread for the City," Washington, D.C.</li>
                 <li>Teaching mindfulness and bodywork, including to GWU medical students</li>
                 <li>GWCIM website and social media content editor</li>
               </ul>
            </div>

          </div>

        </section>

      </main>
      <Footer />
      </div>
    );
  }


  if (slug !== 'ashley-drapeau-pa-c-l-ac-mpas-mac' && slug !== 'mikhail-kogan-md' && slug !== 'deirdre-orceyre-nd-lac' && slug !== 'marianna-ledenac-nd' && slug !== 'monica-arias' && slug !== 'angela-n-gabriel-acupuncture-se') {
     return (
       <div className="flex min-h-screen flex-col bg-[var(--gw-background)] font-sans antialiased">
         <Header />
         <main className="bg-[#f4f6f8] flex-1 w-full py-40">
           <div className="text-center text-2xl text-[var(--gw-primary)]">Provider Profile Coming Soon...</div>
         </main>
         <Footer />
       </div>
     );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--gw-background)] font-sans antialiased">
      <Header />
      <main className="flex-1 w-full pt-40 pb-24">
      
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
        <Breadcrumbs items={[{ label: 'Our Team', href: '/people' }, { label: 'Ashley Drapeau' }]} />
      </div>
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start relative">
          
          {/* Avatar side */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden flex items-center justify-center relative z-10">
              <img src="/images/providers/ashley.jpeg" alt="Ashley Drapeau" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Main info side */}
          <div className="flex-grow z-10 relative text-center md:text-left pt-2 md:pt-4">
            <h1 className="text-4xl lg:text-[54px] font-serif text-[var(--gw-primary)] mb-4 leading-tight">Ashley Drapeau</h1>
            <h2 className="text-xl lg:text-[22px] text-[var(--gw-secondary)] font-bold mb-4">PA-C, L.Ac., MPAS, MAC</h2>
            
            <p className="text-[13px] md:text-[14px] text-[var(--gw-primary)] font-bold mb-6 tracking-wide uppercase">
                Medical Director, Long-Covid Program Director<br/>
                <span className="text-slate-500 font-medium normal-case tracking-normal block mt-1">Functional Medicine | Integrative Medicine | Chinese Medicine</span>
            </p>

            <div className="text-[15px] md:text-[16px] text-[#42526D] leading-relaxed font-normal space-y-4 max-w-3xl">
              <p>
                Ashley Drapeau is the Medical Director and Director of the Long COVID program at GWCIM, with over 14 years of experience as a Physician Assistant (PA-C). After serving six years in the USAF, Ashley shifted their focus to integrative and functional medicine, specializing in complex conditions like Long COVID, Ehlers-Danlos Syndrome (EDS), Mast Cell Activation Syndrome (MCAS), and Postural Orthostatic Tachycardia Syndrome (POTS).
              </p>
            </div>
          </div>
          

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column (What she does, Testimonials) */}
        <div className="lg:col-span-2 pr-0 lg:pr-10">
          
          <div className="py-10 border-b border-gray-200">
             <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
               <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
               Overview
             </p>
             <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
               What she does
             </h2>
             <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
              <p>
                Ashley uses functional medicine approaches in combination with Eastern-Asian (Chinese) medicine to offer patient-centered care. She holds a Master’s degree in Acupuncture, further enhancing her ability to integrate diverse treatments. Currently, Ashley works at GWCIM to guide patients in their recovery, focusing on those facing complex chronic illnesses.
              </p>
              <p className="font-semibold text-[var(--gw-primary)] pt-2 md:pt-4">Ashley provides several types of services:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Functional Medicine consultations</li>
                <li>Acupuncture and Chinese medicine</li>
                <li>Facial Acupuncture</li>
                <li>Microneedling (for hair loss and skin disorders)</li>
                <li>LongCovid consultations (Functional and Integrative Medicine)</li>
                <li>LongCovid Medical Groups</li>
              </ul>
            </div>
          </div>

          <div className="py-12 border-b border-gray-200">
             <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
               <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
               Patient Stories
             </p>
             <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
               Testimonials
             </h2>
             <div className="space-y-8 mt-2">
                <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                   <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                     “I have visited both Dr. Drapeau and Dr. Novak and both have changed my life. After being sick for about a year, Dr. Drapeau performed every test under the sun and gave me simple solutions to feel better. I have now not been sick for nearly a year.”
                   </p>
                   <footer className="text-sm font-bold text-[var(--gw-primary)]">— Josie Zox, January 2025 on Google</footer>
                </blockquote>
                <blockquote className="relative p-6 lg:p-8 bg-white rounded-2xl border-l-[6px] border-[var(--gw-accent)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
                   <p className="italic text-[var(--gw-text-main)] text-[16px] md:text-lg mb-4 leading-relaxed">
                     ”Ashley, and their colleagues are among the few practitioners with a deep knowledge of long Covid. The program should be scaled up, with funding from the federal government and donations to serve a much larger number of patients suffering from long Covid and the chronic illnesses triggered by viral and bacterial infections such as Covid and Lyme. As these diseases — especially Covid with its latest variant and summer surge — continue to infect large numbers of the population, the need for the work of the center and similar ones around the country will grow and grow.”
                   </p>
                   <footer className="text-sm font-bold text-[var(--gw-primary)]">— Charles Thomas, 2024, on Google</footer>
                </blockquote>
             </div>
          </div>

          <div className="py-12">
             <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
               <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
               Background
             </p>
             <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
               Personal Detail
             </h2>
             <div className="text-[16px] text-[var(--gw-text-main)] leading-relaxed space-y-4">
              <p>
                As a survivor of Long COVID, Ashley’s life journey shapes her compassionate approach to patient care, advocating for long-term recovery. Beyond their clinical work, Ashley enjoys outdoor activities and meditation, finding balance through mindfulness and community support. She also volunteers for the Tragedy Assistance Program for Survivors (TAPS).
              </p>
             </div>
          </div>

          <YouTubeGallery 
            title="Video Library" 
            subtitle="Watch & Learn"
            videos={[
              {
                videoId: "9c_A-R-R0G8",
                title: "Understanding Long COVID with Ashley Drapeau",
                description: "Ashley breaks down common misconceptions and shares functional medicine approaches to managing complex chronic illnesses."
              }
            ]} 
          />

        </div>

        {/* Right Column (Sidebar details) */}
        <div className="space-y-6">

          {/* ── HIGH-CONVERTING BOOKING CTA ── */}
          <div className="overflow-hidden shadow-lg border border-[var(--gw-primary)]/10 bg-white">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-[var(--gw-blue)]" />

            <div className="bg-[var(--gw-primary)] p-6 text-white">

              {/* Trust badge */}
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-[var(--gw-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Accepting new patients
              </div>

              {/* Headline */}
              <h3 className="text-[24px] font-medium leading-snug mb-3" style={{ fontFamily: 'var(--font-gt-super)' }}>
                Start your healing journey
              </h3>

              {/* Supporting copy */}
              <p className="text-[13px] text-white/70 leading-relaxed mb-6">
                Book a consultation with Ashley Drapeau. Most patients see meaningful results within the first few visits.
              </p>

              {/* Primary CTA */}
              <Link
                href="#"
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

          <div className="bg-white border border-gray-100 shadow-sm p-6">
             <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4 flex items-center gap-2">
               {/* Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gw-accent)]"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
               Accomplishments & Awards
             </p>
             <ul className="text-[13px] text-slate-700 space-y-3 list-inside list-disc">
               <li>Director of Long COVID program at GWCIM</li>
               <li>Medical Director at GWCIM</li>
               <li>NCCPA Ambassador</li>
               <li>Featured as a subject matter expert in the media for Long COVID advocacy</li>
               <li>A recipient of 2024 Health.com Award for Long COVID program and advocacy</li>
             </ul>
          </div>

          <div className="bg-white border border-gray-100 shadow-sm p-6">
             <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4 flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gw-accent)]"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
               Education
             </p>
             <ul className="text-[13px] text-slate-700 space-y-3 list-inside list-disc">
               <li>Master’s degree and board certification in PA studies</li>
               <li>Master’s degree and board certification in Acupuncture</li>
             </ul>
          </div>

          <div className="bg-white border border-gray-100 shadow-sm p-6">
             <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-4 flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gw-accent)]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
               Experience
             </p>
             <ul className="text-[13px] text-slate-700 space-y-3 list-inside list-disc">
               <li>Six years as a PA in the United States Air Force</li>
               <li>Adjunct professor at George Washington University’s Integrative Medicine Department</li>
               <li>PA for GWU Resiliency & Well-Being Center</li>
               <li>Board member for Long COVID research at Dartmouth</li>
               <li>Member of the working group with HHS to define Long COVID</li>
               <li>Appointed on expert panel for Long COVID Education, Engagement, and Care Management; funded by Centers for Disease Control and Prevention (CDC)</li>
             </ul>
          </div>

          <Link href="#" className="flex flex-col border border-[var(--gw-primary)] group shadow-sm transition-all hover:bg-[var(--gw-primary)]">
            <div className="bg-[var(--gw-primary)] p-4 text-white">
               <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-1 text-[var(--gw-gold)]">Publication</p>
               <h4 className="text-[16px] font-serif leading-snug">“Unlock the Secrets to Preventing Long COVID”</h4>
            </div>
            <div className="bg-white p-4 group-hover:bg-[var(--gw-primary)] transition-colors">
               <p className="text-[12px] font-semibold text-[var(--gw-primary)] group-hover:text-white transition-colors flex items-center justify-between">
                 Read Insights from a Board Certified PA
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                 </svg>
               </p>
            </div>
          </Link>

        </div>

      </section>

    </main>
    <Footer />
    </div>
  );
}
