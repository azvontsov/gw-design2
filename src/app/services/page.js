'use client';

import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const servicesData = {
    "Consultations": [
      { id: 1, icon: "/images/doodles/icon-1.png", title: "Integrative Geriatrics", description: "Comprehensive health span care and age management." },
      { id: 2, icon: "/images/doodles/icon-2.png", title: "Naturopathic Medicine", description: "Whole-person naturopathic therapies and natural remedies." },
      { id: 3, icon: "/images/doodles/icon-3.png", title: "Functional Medicine", description: "Root-cause approach to chronic illness and optimal health." },
      { id: 4, icon: "/images/doodles/icon-4.png", title: "Integrative Mental Health", description: "Holistic strategies for mental and emotional wellbeing." },
      { id: 5, icon: "/images/doodles/icon-5.png", title: "Sarno/Mind-Body Method", description: "Treatment of chronic pain through mind-body connection." },
      { id: 6, icon: "/images/doodles/icon-6.png", title: "Pediatric and Adolescent Integrative Medicine", description: "Specialized, gentle care for children and teens." },
      { id: 7, icon: "/images/doodles/icon-7.png", title: "Medical Cannabis", description: "Expert guidance on medical cannabis therapies." },
      { id: 8, icon: "/images/doodles/icon-8.png", title: "Nutritional Counseling", description: "Personalized diet and nutrition plans for healing." }
    ],
    "Treatments": [
      { id: 11, icon: "/images/doodles/icon-11.png", title: "Intravenous Therapy", description: "Direct delivery of essential nutrients and hydration." },
      { id: 12, icon: "/images/doodles/icon-12.png", title: "Mistletoe Injection Therapy for Cancer", description: "Supportive integrative oncology therapies." },
      { id: 13, icon: "/images/doodles/icon-13.png", title: "Acupuncture and Chinese medicine", description: "Traditional practices to balance the body's energy." },
      { id: 14, icon: "/images/doodles/icon-14.png", title: "Microneedling and Facial Acupuncture", description: "Natural rejuvenation and facial aesthetics." },
      { id: 15, icon: "/images/doodles/icon-15.png", title: "Reiki", description: "Energy healing to promote relaxation and stress reduction." },
      { id: 16, icon: "/images/doodles/icon-16.png", title: "Somatic Experiencing", description: "Body-oriented approach to healing trauma and stress." },
      { id: 17, icon: "/images/doodles/icon-17.png", title: "KAP Assisted Psychotherapy", description: "Ketamine-assisted therapeutic sessions." }
    ],
    "Programs": [
      { id: 21, icon: "/images/doodles/icon-21.png", title: "Concierge Integrative Medicine Care", description: "Premium, highly personalized access to our practitioners." },
      { id: 22, icon: "/images/doodles/icon-22.png", title: "Reversal of Cognitive Decline ReCODE (TM)", description: "Protocol for preventing and reversing cognitive decline." },
      { id: 23, icon: "/images/doodles/icon-23.png", title: "Long Covid", description: "Comprehensive management and recovery from Long Covid." },
      { id: 24, icon: "/images/doodles/icon-24.png", title: "Shoemaker Protocol for CIRS and Mold Toxicity", description: "Targeted treatment for chronic inflammatory response." },
      { id: 25, icon: "/images/doodles/icon-25.png", title: "Mindfulness Based Stress Reduction MBSR", description: "Evidence-based program for stress management." },
      { id: 26, icon: "/images/doodles/icon-26.png", title: "Weight/Body Composition", description: "Holistic strategies for healthy weight management." },
      { id: 27, icon: "/images/doodles/icon-27.png", title: "Executive Coaching", description: "Performance and wellness coaching for professionals." }
    ],
    "Ongoing Groups": [
      { id: 31, icon: "/images/doodles/icon-31.png", title: "Long COVID Medical online Groups", description: "Supportive community and medical guidance for Long Covid." },
      { id: 32, icon: "/images/doodles/icon-32.png", title: "ReCODE Support Group", description: "Community support for the ReCODE cognitive protocol." }
    ]
  };

  const categories = ["All", ...Object.keys(servicesData)];

  // Flatten the array to map easily and attach category string so it's filterable
  const allServices = Object.entries(servicesData).flatMap(([category, services]) =>
    services.map(service => ({ ...service, category }))
  );

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const [bgIcons, setBgIcons] = useState([]);

  useEffect(() => {
    // Randomly select and place 16 icons on client mount to avoid hydration errors
    const shuffled = [...allServices].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 16).map((service) => ({
      ...service,
      // Keep them somewhat away from the very edges
      top: `${Math.floor(Math.random() * 80 + 10)}%`,
      left: `${Math.floor(Math.random() * 80 + 10)}%`,
      rotation: `${Math.floor(Math.random() * 360)}deg`,
      scale: 1 + Math.random(), // scale between 1 and 2
    }));
    setBgIcons(selected);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-secondary-light)]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[var(--gw-primary)] text-white pt-32 lg:pt-40 pb-20 px-6 lg:px-12 relative overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
          
          {/* Icon Puzzle Background */}
          <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none overflow-hidden">
             {bgIcons.map((service) => (
                 <img
                   key={`bg-icon-${service.id}`}
                   src={service.icon}
                   alt="background pattern"
                   className="absolute object-contain grayscale invert drop-shadow-md transition-all duration-[3000ms] ease-in-out"
                   style={{
                     width: '60px',
                     height: '60px',
                     top: service.top,
                     left: service.left,
                     transform: `rotate(${service.rotation}) scale(${service.scale})`,
                   }}
                 />
             ))}
          </div>

          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--sw-solitude)] mix-blend-overlay opacity-10 blur-3xl"></div>
          
          <div className="max-w-[1400px] mx-auto relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 uppercase" style={{ fontFamily: 'var(--font-gt-super)' }}>
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
              Explore our comprehensive range of holistic treatments, expert consultations, and dedicated healing programs.
            </p>
          </div>
        </section>

        {/* Filter and Content Section */}
        <section className="py-16 px-6 lg:px-12 max-w-[1600px] mx-auto bg-[var(--gw-secondary-light)] -mt-10 relative z-20">
          
          <div className="min-h-[60vh]">
            
            {/* Intro Text Section */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20 pt-8 text-[var(--gw-text-main)] w-full">
              {/* Left Column (Main Intro) */}
              <div className="flex-1 lg:max-w-[65%]">
                <h2 className="text-[28px] md:text-[32px] font-medium mb-6 text-[var(--gw-primary)]" style={{ fontFamily: 'var(--font-ginto), Helvetica, sans-serif' }}>
                  Personalized integrative health care at GWCIM
                </h2>
                <p className="text-[16px] leading-relaxed mb-6 text-[var(--gw-text-primary)]">
                  Our integrative medicine services provide a unique approach to healthcare. We combine conventional medicine with evidence-based complementary and alternative therapies. We divided our services into four categories: <strong className="font-medium text-[var(--gw-text-main)]">Consultations, Treatments, Programs</strong>, and <strong className="font-medium text-[var(--gw-text-main)]">Ongoing Groups</strong>. Please review all categories and all services listed below.
                </p>
                <p className="text-[16px] leading-relaxed text-[var(--gw-text-primary)]">
                  At GWCIM, the patients work with a main provider who may recommend additional treatments and specialists within or outside our clinic. To facilitate the healing process, the main provider will organize and coordinate the team of providers.
                </p>
              </div>

              {/* Right Column (Secondary Heading) */}
              <div className="flex-1 lg:max-w-[35%] flex flex-col justify-start pt-2 lg:pt-0">
                <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[var(--gw-primary)] leading-snug" style={{ fontFamily: 'var(--font-ginto), Helvetica, sans-serif' }}>
                  We Offer: Consultations, Treatments, Programs, Ongoing Groups
                </h2>
                {/* Optional subtle decorative line */}
                <div className="w-24 h-1 bg-[var(--gw-blue)] mt-6 rounded-square opacity-50"></div>
              </div>
            </div>

            {/* Search and Filter Controls */}
            <div className="flex flex-col lg:flex-row gap-8 mb-16 items-start lg:items-center justify-between border-b border-gray-200 pb-10">
              
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 lg:gap-3 w-full lg:w-auto overflow-x-auto pb-2 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm whitespace-nowrap border rounded-2xl ${
                      selectedCategory === cat
                        ? "bg-[var(--gw-primary)] text-white border-[var(--gw-primary)]"
                        : "bg-white text-[var(--gw-text-main)] border-transparent hover:border-[var(--gw-blue)] hover:text-[var(--gw-blue)] hover:bg-gray-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="w-full lg:w-[350px] relative group shrink-0">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--gw-blue)] transition-colors pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search a service or program..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-transparent focus:bg-white focus:border-[var(--gw-blue)] py-3.5 pl-12 pr-12 text-sm font-medium text-[var(--gw-primary)] outline-none transition-all duration-300 shadow-sm placeholder:text-gray-400/80 rounded-2xl"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
                    aria-label="Clear search"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

            </div>

            {/* Grid display */}
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-t border-l border-gray-300">
                {filteredServices.map((service) => (
                  <div 
                    key={`${service.category}-${service.id}`}
                    className="group flex flex-col items-start bg-transparent hover:bg-white border-r border-b border-gray-300 p-8 lg:p-10 transition-all duration-300 cursor-pointer relative hover:z-20 hover:ring-1 hover:ring-[var(--gw-primary)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                  >
                    {/* Category Tag */}
                    <div className="absolute top-6 right-6">
                       <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--gw-blue)]/60 bg-[var(--gw-blue)]/5 px-2.5 py-1.5">
                         {service.category}
                       </span>
                    </div>

                    <div className="mb-6 w-12 h-12 flex items-center justify-start mt-4">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 origin-left"
                      />
                    </div>
                    
                    <h4
                      className="text-[20px] font-semibold text-[var(--gw-primary)] group-hover:text-[var(--gw-blue)] transition-colors leading-snug break-words"
                      style={{ fontFamily: 'var(--font-ginto), Helvetica, sans-serif' }}
                    >
                      {service.title}
                    </h4>

                    <p className="mt-4 text-[15px] text-[var(--gw-text-muted)] leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Faux Read More Link for UX */}
                    <div className="mt-auto pt-8 flex items-center text-[var(--gw-blue)] font-bold text-xs uppercase tracking-widest opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                       View Details
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1.5">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                       </svg>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="flex flex-col items-center justify-center py-20 text-center opacity-70">
                <h3 className="text-2xl font-normal text-black mb-3" style={{ fontFamily: 'var(--font-gt-super)' }}>No services found</h3>
                <p className="text-[15px] font-light text-black max-w-sm leading-relaxed">
                  We couldn't find anything matching "{searchTerm}" in {selectedCategory === "All" ? "any category" : `the ${selectedCategory} category`}. Try adjusting your search terms.
                </p>
                <button 
                  onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                  className="mt-8 px-6 py-2 text-black hover:text-[var(--gw-alert)] font-semibold transition-colors text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
