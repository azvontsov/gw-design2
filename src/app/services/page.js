'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

function ServicesContent() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  const servicesData = {
    "Consultations": [
      { id: 1, icon: "/images/doodles/icon-1.png", title: "Integrative Geriatrics", slug: "integrative-geriatrics", description: "Comprehensive health span care and age management." },
      { id: 2, icon: "/images/doodles/icon-2.png", title: "Naturopathic Medicine", slug: "naturopathic-medicine", description: "Whole-person naturopathic therapies and natural remedies." },
      { id: 3, icon: "/images/doodles/icon-3.png", title: "Functional Medicine", slug: "functional-medicine", description: "Root-cause approach to chronic illness and optimal health." },
      { id: 4, icon: "/images/doodles/icon-4.png", title: "Integrative Mental Health", slug: "integrative-mental-health", description: "Holistic strategies for mental and emotional wellbeing." },
      { id: 5, icon: "/images/doodles/icon-5.png", title: "Sarno/Mind-Body Method", slug: "sarno-mind-body-method", description: "Treatment of chronic pain through mind-body connection." },
      { id: 6, icon: "/images/doodles/icon-6.png", title: "Pediatric and Adolescent Integrative Medicine", slug: "pediatric-adolescent-integrative-medicine", description: "Specialized, gentle care for children and teens." },
      { id: 7, icon: "/images/doodles/icon-7.png", title: "Medical Cannabis", slug: "medical-cannabis", description: "Expert guidance on medical cannabis therapies." },
      { id: 8, icon: "/images/doodles/icon-8.png", title: "Nutritional Counseling", slug: "nutritional-counseling", description: "Personalized diet and nutrition plans for healing." }
    ],
    "Treatments": [
      { id: 11, icon: "/images/doodles/icon-11.png", title: "Intravenous Therapy", slug: "intravenous-therapy", description: "Direct delivery of essential nutrients and hydration." },
      { id: 12, icon: "/images/doodles/icon-12.png", title: "Mistletoe Injection Therapy for Cancer", slug: "mistletoe-injection-therapy", description: "Supportive integrative oncology therapies." },
      { id: 13, icon: "/images/doodles/icon-13.png", title: "Acupuncture and Chinese Medicine", slug: "acupuncture-chinese-medicine", description: "Traditional practices to balance the body's energy." },
      { id: 14, icon: "/images/doodles/icon-14.png", title: "Microneedling and Facial Acupuncture", slug: "microneedling-facial-acupuncture", description: "Natural rejuvenation and facial aesthetics." },
      { id: 15, icon: "/images/doodles/icon-15.png", title: "Reiki", slug: "reiki", description: "Energy healing to promote relaxation and stress reduction." },
      { id: 16, icon: "/images/doodles/icon-16.png", title: "Somatic Experiencing", slug: "somatic-experiencing", description: "Body-oriented approach to healing trauma and stress." },
      { id: 17, icon: "/images/doodles/icon-17.png", title: "KAP Assisted Psychotherapy", slug: "kap-assisted-psychotherapy", description: "Ketamine-assisted therapeutic sessions." }
    ],
    "Programs": [
      { id: 21, icon: "/images/doodles/icon-21.png", title: "Concierge Integrative Medicine Care", slug: "concierge-integrative-medicine", description: "Premium, highly personalized access to our practitioners." },
      { id: 22, icon: "/images/doodles/icon-22.png", title: "Reversal of Cognitive Decline ReCODE", slug: "reversal-cognitive-decline-recode", description: "Protocol for preventing and reversing cognitive decline." },
      { id: 23, icon: "/images/doodles/icon-23.png", title: "Long Covid", slug: "long-covid", description: "Comprehensive management and recovery from Long Covid." },
      { id: 24, icon: "/images/doodles/icon-24.png", title: "Shoemaker Protocol for CIRS and Mold Toxicity", slug: "shoemaker-protocol-cirs-mold", description: "Targeted treatment for chronic inflammatory response." },
      { id: 25, icon: "/images/doodles/icon-25.png", title: "Mindfulness Based Stress Reduction MBSR", slug: "mindfulness-based-stress-reduction", description: "Evidence-based program for stress management." },
      { id: 26, icon: "/images/doodles/icon-26.png", title: "Weight/Body Composition", slug: "weight-body-composition", description: "Holistic strategies for healthy weight management." },
      { id: 27, icon: "/images/doodles/icon-27.png", title: "Executive Coaching", slug: "executive-coaching", description: "Performance and wellness coaching for professionals." }
    ],
    "Ongoing Groups": [
      { id: 31, icon: "/images/doodles/icon-31.png", title: "Long COVID Medical Online Groups", slug: "long-covid-online-groups", description: "Supportive community and medical guidance for Long Covid." },
      { id: 32, icon: "/images/doodles/icon-32.png", title: "ReCODE Support Group", slug: "recode-support-group", description: "Community support for the ReCODE cognitive protocol." }
    ]
  };

  const categories = ["All", ...Object.keys(servicesData)];

  // Per-category color palette matching the OurServices colored blocks
  const categoryColors = {
    "All":           { active: "bg-[var(--gw-primary)] text-white border-[var(--gw-primary)]" },
    "Consultations": { active: "bg-[#B9C1B3] text-[var(--gw-primary)] border-[#B9C1B3]" },
    "Treatments":    { active: "bg-[#7A8775] text-white border-[#7A8775]" },
    "Programs":      { active: "bg-[#99A7B8] text-white border-[#99A7B8]" },
    "Ongoing Groups":{ active: "bg-[#6C7F9A] text-white border-[#6C7F9A]" },
  };

  const pageBgColor = {
    "All":           "var(--gw-secondary-light)",
    "Consultations": "rgba(185, 193, 179, 0.25)",
    "Treatments":    "rgba(122, 135, 117, 0.20)",
    "Programs":      "rgba(153, 167, 184, 0.35)",
    "Ongoing Groups":"rgba(108, 127, 154, 0.30)",
  };

  // Flatten the array to map easily and attach category string so it's filterable
  const allServices = Object.entries(servicesData).flatMap(([category, services]) =>
    services.map(service => ({ ...service, category }))
  );

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const paginatedServices = filteredServices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, itemsPerPage]);

  // Read ?category= query param on mount and set the filter
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && categories.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 16 : 8);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const [bgIcons, setBgIcons] = useState([]);

  useEffect(() => {
    // Grid-cell placement: divide hero into cols × rows cells, one icon per cell
    // This guarantees no overlaps while still feeling organic via per-cell jitter
    const cols = 8;
    const rows = 2;
    const cellW = 100 / cols; // % width per cell
    const cellH = 100 / rows; // % height per cell
    const jitterX = cellW * 0.3;  // max ±jitter within cell
    const jitterY = cellH * 0.3;

    const shuffled = [...allServices].sort(() => 0.5 - Math.random());
    const cells = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        cells.push({ r, c });
      }
    }
    // Shuffle cells for random icon assignment
    cells.sort(() => 0.5 - Math.random());

    const selected = cells.slice(0, shuffled.length).map((cell, i) => {
      const service = shuffled[i % shuffled.length];
      // Center of this cell + random jitter
      const basLeft = cell.c * cellW + cellW / 2;
      const baseTop = cell.r * cellH + cellH / 2;
      const left = basLeft + (Math.random() * jitterX * 2 - jitterX);
      const top  = baseTop + (Math.random() * jitterY * 2 - jitterY);
      return {
        ...service,
        top: `${Math.min(Math.max(top, 5), 90)}%`,
        left: `${Math.min(Math.max(left, 3), 97)}%`,
        rotation: `${Math.floor(Math.random() * 360)}deg`,
        scale: 0.9 + Math.random() * 0.6,
      };
    });
    setBgIcons(selected);
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: pageBgColor[selectedCategory] ?? pageBgColor["All"], transition: 'background-color 0.5s ease' }}
    >
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[var(--gw-primary)] text-white pt-32 lg:pt-40 pb-20 px-6 lg:px-12 relative overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
          
          {/* Icon Puzzle Background */}
          <div className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none overflow-hidden">
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
            <div className="inline-block mb-4">
              <Breadcrumbs 
                 variant="white"
                 items={[{ label: 'Services' }]} 
              />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 uppercase" style={{ fontFamily: 'var(--font-gt-super)' }}>
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-[var(--gw-gold)] max-w-2xl mx-auto font-light">
              Explore our comprehensive range of holistic treatments, expert consultations, and dedicated healing programs.
            </p>
          </div>
        </section>

        {/* Filter and Content Section */}
        <section className="py-16 px-6 lg:px-12 max-w-[1600px] mx-auto relative z-20">
          
          <div className="min-h-[60vh]">
            
            {/* Intro Text Section */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20 mb-20 pt-8 text-[var(--gw-text-main)] w-full">
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

              {/* Right Column — Contact CTA */}
              <div className="flex-1 lg:max-w-[30%] flex flex-col justify-center gap-5">
                {/* Contact links */}
                <div className="flex flex-col gap-2 pt-1">
                  <p className="text-xl font-bold uppercase tracking-[0.2em] text-[var(--gw-text-primary)] mb-1">Contact Us Now!</p>
                  <a href="tel:2028335055" className="inline-flex items-center gap-2 text-[var(--gw-primary)] font-semibold hover:text-[var(--gw-blue)] transition-colors text-[15px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gw-blue)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                    </svg>
                    202-833-5055
                  </a>
                  <a href="mailto:info@gwcim.com" target="_blank" rel="noopener noreferrer"  className="inline-flex items-center gap-2 text-[var(--gw-primary)] font-semibold hover:text-[var(--gw-blue)] transition-colors text-[15px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gw-blue)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    info@gwcim.com
                  </a>
                </div>

                {/* Buttons */}
                <div className="w-fit flex flex-col gap-3">
                <a
                  href="#"
                  className="w-full inline-flex items-center gap-3 hover:bg-[var(--gw-primary)] text-white text-[12px] font-bold uppercase tracking-widest px-6 py-4 bg-[var(--gw-blue)] transition-all duration-300 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                  New Patient Inquiry Form
                </a>
                <a
                  href="#"
                  className="w-full inline-flex items-center gap-3 border border-[var(--gw-primary)] text-[var(--gw-primary)] text-[12px] font-bold uppercase tracking-widest px-6 py-4 hover:bg-[var(--gw-primary)] hover:text-white transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Sign Up For Our Newsletter
                </a>
                </div>
              </div>

            </div>

            {/* Search and Filter Controls */}
            <div className="flex flex-col lg:flex-row gap-8 mb-16 items-start lg:items-center justify-between border-b border-gray-400 pb-10">
              
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 lg:gap-3 w-full lg:w-auto overflow-x-auto pb-2 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm whitespace-nowrap border rounded-2xl ${
                      selectedCategory === cat
                        ? (categoryColors[cat]?.active ?? "bg-[var(--gw-primary)] text-white border-[var(--gw-primary)]")
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
              <div className="flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-t border-l border-gray-400">
                  {paginatedServices.map((service) => (
                    <Link
                      key={`${service.category}-${service.id}`}
                      href={`/services/${service.slug}`}
                      className="group flex flex-col items-start bg-transparent hover:bg-white border-r border-b border-gray-400 p-8 lg:p-10 transition-all duration-300 cursor-pointer relative hover:z-20 hover:ring-2 hover:ring-[var(--gw-primary)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:border-transparent"
                    >
                    {/* Category Tag */}
                    <div className="absolute top-6 right-6">
                       <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--gw-primary)] bg-white/80 border-[var(--gw-primary)]/40 border px-2.5 py-1.5 rounded-sm shadow-sm">
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

                    <p className="mt-4 text-[15px] text-[var(--gw-text-primary)] leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* View Details */}
                    <div className="mt-auto pt-8 flex items-center text-[var(--gw-blue)] font-bold text-xs uppercase tracking-widest opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                       View Details
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1.5">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                       </svg>
                    </div>

                  </Link>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center mt-12 gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-[var(--gw-blue)] hover:text-[var(--gw-blue)] disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-500 transition-colors"
                      aria-label="Previous page"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                    
                    <div className="flex items-center gap-1 mx-4">
                      {Array.from({ length: totalPages }).map((_, idx) => {
                        const pageNum = idx + 1;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                              currentPage === pageNum
                                ? "bg-[var(--gw-primary)] text-white"
                                : "text-gray-500 hover:bg-gray-100"
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-[var(--gw-blue)] hover:text-[var(--gw-blue)] disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-500 transition-colors"
                      aria-label="Next page"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </div>
                )}
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

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--gw-secondary-light)]" />}>
      <ServicesContent />
    </Suspense>
  );
}
