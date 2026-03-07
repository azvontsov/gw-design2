'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function OurStoryPage() {
  const timelineData = [
    {
      year: "1997",
      title: "Founding GWCIM",
      content: "Dr. John Pan, MD, a 1970 graduate of George Washington University Medical School, founded the GW Center for Integrative Medicine (GWCIM). With over 25 years of experience as a Clinical Professor in Obstetrics and Gynecology, Dr. Pan recognized the value of integrating various medical treatments into healthcare. In 1997, he established GWCIM, making it one of the first centers of its kind at an academic institution."
    },
    {
      year: "1998",
      title: "GWCIM Opens Its Doors",
      content: "In the Fall of 1997, with Integrative Medicine field still in its infancy, Dr. Pan, assembled a team of like-minded complementary and alternative medicine (CAM) practitioners, some of whom continue to support the center today. GWCIM officially opened in the Spring of 1998 with support of GWU Medical Center. With no established model of Integrative Medicine practice, the early years were spent developing and refining a model that remains in continuous improvement.",
      image: "/images/providers/about/birth-of-CIM-article-Mar-20-1998.jpg",
      imageCaption: "GWCIM history, Article in health Care March, 1998"
    },
    {
      year: "2001",
      title: "GWCIM Becomes a Separate Medical Center",
      content: "In 2001, GWCIM became an independent entity from the GWU Medical Center and moved to its current location at 908 New Hampshire Ave. It was the first of its kind in the DC area, successfully developing a sustainable business model while maintaining the highest medical practice standards.",
      image: "/images/providers/about/foye.jpg"
    },
    {
      year: "2003",
      title: "Joining the Academic Consortium",
      content: "In 2003, GWCIM joined the Academic Consortium for Integrative Medicine and Health, a national organization of Integrative Medicine Centers within academic institutions. The consortium includes prestigious members like Harvard, Duke, Yale, Stanford, and UCLA."
    },
    {
      year: "2011",
      title: "Dr. Mikhail Kogan Becomes Medical Director",
      content: "In 2011, Dr. Mikhail Kogan, Assistant Professor at the GW Department of Medicine, Division of Geriatrics and Palliative Medicine, became a co-owner and Medical Director. Dr. Kogan brought new energy and expertise to GWCIM, driving its growth and improvement. GWCIM plays a central role in providing educational programs in Integrative Medicine, including a track program at the GWU Medical School and electives for medical and other students."
    },
    {
      year: "2023",
      title: "25 Years of Healing",
      content: "Today, GWCIM is recognized as one of 29 leading Integrative Medicine Centers in the nation, as reported by The Bravewell Collaborative’s “Integrative Medicine in America.” Our success is rooted in our passion for healing and our commitment to the well-being of our patients. We continue to thrive, fostering long-term relationships with our patients and community. GWCIM remains dedicated to being the healthcare home you can count on."
    },
    {
      year: "2025",
      title: "New Leadership Transition",
      content: "Ashley Drapeau, a successful leader and practitioner of functional medicine at GWCIM, a Long Covid program director, and faculty member at GW University medical school, has assumed the role of Medical Director at GWCIM. Dr. Mikhail Kogan has transitioned to the Chief Medical Officer position."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />
      
      <main className="flex-1 w-full pt-40 pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-24">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: "Our Story" }]} />
        </div>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 mb-16 text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--gw-accent)] uppercase mb-4 block">
                Our Legacy
            </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--gw-primary)] mb-8 leading-tight">
            The Story of GW Center for Integrative Medicine
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto italic">
            "Together We Heal, Care, Educate"
          </p>
        </section>

        {/* Timeline Section */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
            <div className="relative border-l-2 border-slate-100 ml-6 lg:ml-8 pb-12">
                {timelineData.map((item, index) => (
                    <div key={index} className="mb-20 ml-10 lg:ml-16 relative">
                        {/* Dot */}
                        <div className="absolute -left-[51px] lg:-left-[75px] top-1 w-5 h-5 rounded-full bg-[var(--gw-accent)]"></div>
                        
                        {/* Content */}
                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="flex-1">
                                <span className="text-[var(--gw-blue)] font-bold text-lg mb-2 block">{item.year}</span>
                                <h3 className="text-2xl md:text-3xl font-serif text-[var(--gw-primary)] mb-6">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-lg font-light">
                                    {item.content}
                                </p>
                            </div>
                            
                            {item.image && (
                                <div className="flex-1 max-w-md">
                                    <div className="rounded-none overflow-hidden shadow-xl mb-3">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-full h-auto object-cover"
                                            onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                                        />
                                    </div>
                                    {item.imageCaption && (
                                        <p className="text-xs text-slate-400 italic text-center font-medium">
                                            {item.imageCaption}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto px-6 mb-12">
            <div className="bg-[var(--gw-primary)] rounded-none p-10 md:p-16 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-none -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">Building the future of medicine</h2>
                    <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto">
                        GWCIM remains dedicated to being the healthcare home you can count on. Join us on our journey toward a more holistic future of healing.
                    </p>
                    <div className="flex justify-center">
                        <a href="/people" className="bg-[var(--gw-gold)] text-[var(--gw-primary)] px-10 py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-white transition-all shadow-xl">
                            Meet Our Team
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
