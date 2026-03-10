"use client";

import Link from 'next/link';
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const mockProviders = [
  {
    id: 1,
    name: "Ashley Drapeau",
    credentials: "PA-C, L.Ac., MPAS, MAC",
    image: "/images/providers/ashley.jpeg",
    slug: "ashley-drapeau-pa-c-l-ac-mpas-mac",
    ages: ["adults"],
    conditions: ["Anxiety and Depression", "Chronic Pain", "Stress and trauma-related illness", "Mental Health"],
    services: ["Acupuncture", "Integrative Mental Health", "Functional Medicine"]
  },
  {
    id: 2,
    name: "Deirdre Orceyre",
    credentials: "ND, MSOM, L.Ac.",
    image: "/images/providers/dierdre.jpg",
    slug: "deirdre-orceyre-nd-lac",
    ages: ["adults", "seniors"],
    conditions: ["Autoimmunity", "Digestive Disorders", "SIBO / Gut Dysbiosis", "Hormonal Imbalances"],
    services: ["Naturopathic Medicine", "Acupuncture", "Traditional Chinese Medicine"]
  },
  {
    id: 3,
    name: "Mikhail Kogan",
    credentials: "MD",
    image: "/images/providers/misha.jpg",
    slug: "mikhail-kogan-md",
    ages: ["adults", "seniors"],
    conditions: ["Alzheimer’s and dementia", "Healthy aging", "Chronic Fatigue Syndrome", "Cancer Support", "POTS", "Long COVID"],
    services: ["Integrative Geriatrics", "Functional Medicine", "Medical Cannabis"]
  },
  {
    id: 4,
    name: "Marianna Ledenac",
    credentials: "ND",
    image: "/images/providers/marianna.jpeg",
    slug: "marianna-ledenac-nd",
    ages: ["adults", "pediatrics", "seniors"],
    conditions: ["Hormonal Imbalances", "Metabolic Syndrome", "Hypertension", "Digestive Disorders"],
    services: ["Naturopathic Medicine", "Clinical Nutrition", "Herbal Medicine"]
  },
  {
    id: 5,
    name: "Monica Arias",
    credentials: "Clinic Manager",
    image: "/images/providers/monica.jpeg",
    slug: "monica-arias",
    ages: [], // Administration
    conditions: [],
    services: ["Administrative Support", "Billing & Insurance"]
  },
  {
    id: 6,
    name: "Andrea Leonard-Segal",
    credentials: "MD",
    image: null,
    slug: "dr-andrea-leonard-segal-md",
    ages: ["adults", "seniors"],
    conditions: ["Chronic Illness", "Digestive Disorders", "Hormonal Imbalances"],
    services: ["Naturopathic Medicine", "Functional Medicine"]
  },
  {
    id: 7,
    name: "Angela Gabriel",
    credentials: "MSOM, LAc, SEP",
    image: "/images/providers/angela.png",
    slug: "angela-n-gabriel-acupuncture-se",
    ages: ["adults", "pediatrics", "seniors"],
    conditions: ["Stress and trauma-related illness", "Chronic Pain", "Dysautonomias", "EDS and HSD"],
    services: ["Acupuncture", "Somatic Experiencing", "Nervous System Regulation"]
  }
];

const officialConditions = [
    "Chronic Fatigue Syndrome",
    "Chronic Pain",
    "Fibromyalgia",
    "Autoimmunity",
    "Digestive Disorders",
    "Anxiety and Depression",
    "Sleep Disorders",
    "Hormonal Imbalances",
    "Metabolic Syndrome",
    "Hypertension",
    "Mold Illness / CIRS",
    "Long COVID",
    "Post-Viral Syndromes",
    "SIBO / Gut Dysbiosis",
    "Dysautonomias",
    "EDS and HSD",
    "Mental Health",
    "Cancer Support",
    "POTS",
    "Stress and trauma-related illness",
    "Healthy aging",
    "Alzheimer’s and dementia"
];

// Extract unique services from data, use official list for conditions
const allConditions = officialConditions;
const allServices = Array.from(new Set(mockProviders.flatMap(p => p.services || []))).sort();

export default function ProvidersAndStaffPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [conditionFilter, setConditionFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [isToolExpanded, setIsToolExpanded] = useState(false);

  const filteredProviders = mockProviders.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAge = ageFilter === "" || (p.ages && p.ages.includes(ageFilter));
    const matchesCondition = conditionFilter === "" || (p.conditions && p.conditions.includes(conditionFilter));
    const matchesService = serviceFilter === "" || (p.services && p.services.includes(serviceFilter));
    return matchesSearch && matchesAge && matchesCondition && matchesService;
  });

  const filteredDoctors = filteredProviders.filter(p => p.credentials !== "Clinic Manager");
  const filteredStaff = filteredProviders.filter(p => p.credentials === "Clinic Manager");


  const resetFilters = () => {
    setSearchQuery("");
    setAgeFilter("");
    setConditionFilter("");
    setServiceFilter("");
  };

  const hasActiveFilters = searchQuery !== "" || ageFilter !== "" || conditionFilter !== "" || serviceFilter !== "";

  return (
    <div className="flex min-h-screen flex-col bg-[var(--gw-background)] font-sans antialiased">
      <Header />
      <main className="bg-white flex-1 w-full pt-40 pb-24">
      
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
        <Breadcrumbs items={[{ label: 'Our Team' }]} />
      </div>

      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-[62px] font-serif text-[var(--gw-primary)] mb-8 leading-[1.1]">
          Meet your providers
        </h1>

        {!isToolExpanded ? (
          <div className="flex flex-col items-center animate-in fade-in duration-500">
            <p className="text-[18px] text-[var(--gw-text-muted)] leading-relaxed max-w-2xl mx-auto font-light mb-8">
              Our multidisciplinary team of integrative physicians, naturopathic doctors, and specialized practitioners work collaboratively to provide you with comprehensive, personalized care.
            </p>
            <button 
              onClick={() => setIsToolExpanded(true)}
              className="inline-flex items-center gap-3 bg-[var(--gw-primary)] text-white text-[13px] font-bold uppercase tracking-widest px-8 py-5 rounded-2xl hover:bg-[var(--gw-blue)] transition-all duration-300 shadow-md group"
            >
              Provider Selection Tool
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-y-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-top-4 duration-500 relative pt-8">
            <p className="text-[13px] font-bold tracking-widest text-[var(--gw-primary)] uppercase mb-4">
              Provider Selection Tool
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--gw-primary)] mb-8 leading-[1.1]">
              Get matched with the doctor(s) that best meet your needs.
            </h2>
            <p className="text-[18px] text-[var(--gw-text-muted)] leading-relaxed max-w-4xl mx-auto font-light">
              Are you a new patient and not sure which provider may be the best fit
              for you? Try the provider selection tool below by selecting your age,
              chief complaint, and other service that you may be interested in. The
              results will update automatically to match you with a provider that
              best meets your needs.
            </p>
          </div>
        )}
      </section>

      {/* Filter / Search Bar */}
      {isToolExpanded && (
      <section className="max-w-6xl mx-auto px-6 mb-20 animate-in fade-in duration-500">
        <div className="flex flex-col gap-6">
            
          {/* Top Row: Search */}
          <div className="relative w-full max-w-3xl mx-auto">
            <input 
                type="text" 
                placeholder="Search for a provider by name..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f4f6f8] text-slate-700 py-4 pl-12 pr-12 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gw-primary)] transition-all placeholder:text-slate-400 shadow-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            
            {(searchQuery || hasActiveFilters) && (
              <button 
                onClick={resetFilters}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-[var(--gw-primary)] transition-colors p-1"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Bottom Row: Tool Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Age Filter */}
            <div className="relative group">
                <select 
                    value={ageFilter}
                    onChange={(e) => setAgeFilter(e.target.value)}
                    className="appearance-none w-full bg-[#f4f6f8] border border-transparent text-[13px] font-bold text-[var(--gw-primary)] pl-6 pr-12 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--gw-primary)] transition-all cursor-pointer shadow-sm group-hover:shadow-md"
                >
                    <option value="">Patient Age</option>
                    <option value="adults">Adults</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="seniors">Seniors</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
            </div>

            {/* Condition Filter */}
            <div className="relative group">
                <select 
                    value={conditionFilter}
                    onChange={(e) => setConditionFilter(e.target.value)}
                    className="appearance-none w-full bg-[#f4f6f8] border border-transparent text-[13px] font-bold text-[var(--gw-primary)] pl-6 pr-12 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--gw-primary)] transition-all cursor-pointer shadow-sm group-hover:shadow-md"
                >
                    <option value="">Chief Complaint / Condition</option>
                    {allConditions.map(cond => (
                        <option key={cond} value={cond}>{cond}</option>
                    ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
            </div>

            {/* Service Filter */}
            <div className="relative group">
                <select 
                    value={serviceFilter}
                    onChange={(e) => setServiceFilter(e.target.value)}
                    className="appearance-none w-full bg-[#f4f6f8] border border-transparent text-[13px] font-bold text-[var(--gw-primary)] pl-6 pr-12 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--gw-primary)] transition-all cursor-pointer shadow-sm group-hover:shadow-md"
                >
                    <option value="">Interested Service</option>
                    {allServices.map(service => (
                        <option key={service} value={service}>{service}</option>
                    ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
            </div>

          </div>

          <div className="flex justify-center mt-4">
            <button 
              onClick={() => { setIsToolExpanded(false); resetFilters(); }}
              className="text-[12px] font-bold uppercase tracking-widest text-slate-400 hover:text-[var(--gw-primary)] transition-colors underline underline-offset-4"
            >
              Close Selection Tool
            </button>
          </div>

        </div>
      </section>
      )}

      {/* Providers Grid */}
      <section className="max-w-6xl mx-auto px-6 mt-[120px]">
        
        {filteredDoctors.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--gw-primary)] mb-12 text-center">
              Integrative & Functional Medicine Doctors, Physicians and Practitioners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8">
              {filteredDoctors.map((provider) => (
                  <Link href={`/people/${provider.slug}`} key={provider.id} className="flex flex-col items-center group cursor-pointer text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                      
                      {/* Avatar Circle with Border */}
                      <div className="w-[180px] h-[180px] border border-gray-100 rounded-full overflow-hidden mb-5 bg-[#f4f6f8] flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-md group-hover:border-[var(--gw-accent)]">
                          {provider.image ? (
                              <img src={provider.image} alt={provider.name} className="w-full h-full object-cover" />
                          ) : (
                              <div className="flex flex-col items-center gap-[6px] opacity-100">
                                  
                              </div>
                          )}
                      </div>

                      {/* Text Details */}
                      <div>
                          <h3 
                              className="text-[16px] font-bold text-[var(--gw-primary)] mb-1 leading-snug font-sans"
                              style={{ fontFamily: "var(--font-ginto), Ginto, sans-serif" }}
                          >
                              {provider.name}, {provider.credentials}
                          </h3>
                          {/* Tags Preview (Optional, for better matching tool feedback) */}
                          {hasActiveFilters && (
                             <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Matched specialist</p>
                          )}
                      </div>
                  </Link>
              ))}
            </div>
          </div>
        )}

        {filteredStaff.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--gw-primary)] mb-12 text-center">
              Our Clinic Support Staff
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8">
              {filteredStaff.map((provider) => (
                  <Link href={`/people/${provider.slug}`} key={provider.id} className="flex flex-col items-center group cursor-pointer text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                      
                      {/* Avatar Circle with Border */}
                      <div className="w-[180px] h-[180px] border border-gray-100 rounded-full overflow-hidden mb-5 bg-[#f4f6f8] flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-md group-hover:border-[var(--gw-accent)]">
                          {provider.image ? (
                              <img src={provider.image} alt={provider.name} className="w-full h-full object-cover" />
                          ) : (
                              <div className="flex flex-col items-center gap-[6px] opacity-100">
                                  
                              </div>
                          )}
                      </div>

                      {/* Text Details */}
                      <div>
                          <h3 
                              className="text-[16px] font-bold text-[var(--gw-primary)] mb-1 leading-snug font-sans"
                              style={{ fontFamily: "var(--font-ginto), Ginto, sans-serif" }}
                          >
                              {provider.name}, {provider.credentials}
                          </h3>
                          {/* Tags Preview (Optional, for better matching tool feedback) */}
                          {hasActiveFilters && (
                             <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Matched specialist</p>
                          )}
                      </div>
                  </Link>
              ))}
            </div>
          </div>
        )}
            
        {filteredProviders.length === 0 && (
            <div className="col-span-full py-12 text-center">
                <p className="text-slate-500 font-light italic text-lg mb-4">No providers found matching your criteria.</p>
                <button onClick={resetFilters} className="text-[12px] font-bold uppercase tracking-widest text-[var(--gw-primary)] border-b border-[var(--gw-primary)] pb-1 hover:text-[var(--gw-blue)] hover:border-[var(--gw-blue)] transition-all">
                    Reset All Filters
                </button>
            </div>
        )}
      </section>
    </main>
    <Footer />
    </div>
  );
}

