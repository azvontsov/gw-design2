"use client";

import Link from 'next/link';
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mockProviders = [
  {
    id: 1,
    name: "Ashley Drapeau",
    credentials: "PA-C, L.Ac., MPAS, MAC",
    image: "/images/providers/ashley.jpeg",
    slug: "ashley-drapeau-pa-c-l-ac-mpas-mac",
    ages: ["adults"]
  },
  {
    id: 2,
    name: "Deirdre Orceyre",
    credentials: "ND, MSOM, L.Ac.",
    image: "/images/providers/dierdre.jpg",
    slug: "deirdre-orceyre-nd-lac",
    ages: ["seniors"]
  },
  {
    id: 3,
    name: "Mikhail Kogan",
    credentials: "MD",
    image: "/images/providers/misha.jpg",
    slug: "mikhail-kogan-md",
    ages: ["adults", "seniors"]
  },
  {
    id: 4,
    name: "Marianna Ledenac",
    credentials: "ND",
    image: "/images/providers/marianna.jpeg",
    slug: "marianna-ledenac-nd",
    ages: ["adults", "pediatrics", "seniors"]
  },
  {
    id: 5,
    name: "Monica Arias",
    credentials: "Clinic Manager",
    image: "/images/providers/monica.jpeg",
    slug: "monica-arias",
    ages: [] // Administration
  },
  {
    id: 6,
    name: "Angela Gabriel",
    credentials: "MSOM, LAc, SEP",
    image: "/images/providers/angela.png",
    slug: "angela-n-gabriel-acupuncture-se",
    ages: ["adults", "pediatrics", "seniors"]
  }
];

export default function ProvidersAndStaffPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [ageFilter, setAgeFilter] = useState("");

  const filteredProviders = mockProviders.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAge = ageFilter === "" || p.ages.includes(ageFilter);
    return matchesSearch && matchesAge;
  });

  return (
    <div className="flex min-h-screen flex-col bg-[var(--gw-background)] font-sans antialiased">
      <Header />
      <main className="bg-white flex-1 w-full pt-40 pb-24">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <p className="text-[13px] font-bold tracking-widest text-[var(--gw-primary)] uppercase mb-4">
          Providers
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-[72px] font-serif text-[var(--gw-primary)] mb-8 leading-tight">
          Meet your providers
        </h1>
        <p className="text-[17px] text-[var(--gw-text-muted)] leading-relaxed max-w-3xl mx-auto font-light">
          Being a provider at GW Center for Integrative Medicine means we're passionate about practicing the most up-to-date, high-quality medicine you'll find anywhere. We've trained at some of the world's best institutions and continuously push ourselves to learn more. We think about your health comprehensively and take the time to hear your concerns and treat you as a person — not a diagnosis.
        </p>
      </section>

      {/* Filter / Search Bar */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center pb-8">
            
          {/* Search Input */}
          <div className="relative w-full">
            <input 
                type="text" 
                placeholder="Search for a provider name" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f4f6f8] text-slate-700 py-3.5 pl-12 pr-12 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gw-primary)] transition-all placeholder:text-slate-400"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[var(--gw-primary)] transition-colors p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Select Dropdowns */}
          <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full md:w-auto">
            <select 
                value={ageFilter}
                onChange={(e) => setAgeFilter(e.target.value)}
                className="appearance-none bg-[#f4f6f8] border border-transparent text-[13px] font-bold text-[var(--gw-primary)] px-6 py-3.5 pr-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--gw-primary)] transition-all cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%232C4A5A%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[right_1.5rem_center] w-full sm:w-auto shadow-sm hover:shadow-md active:scale-95 transition-transform"
            >
                <option value="">Ages Seen</option>
                <option value="adults">Adults</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="seniors">Seniors</option>
            </select>
          </div>

        </div>
      </section>

      {/* Providers Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8">
            {filteredProviders.map((provider) => (
                <Link href={`/people/${provider.slug}`} key={provider.id} className="flex flex-col items-center group cursor-pointer text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                    
                    {/* Avatar Square-ish */}
                    <div className="w-[180px] h-[180px] border border-gray-200 rounded-full overflow-hidden mb-5 bg-[#f4f6f8] flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:shadow-md">
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
                    </div>
                </Link>
            ))}
            
            {filteredProviders.length === 0 && (
                <div className="col-span-full py-12 text-center text-slate-500 font-light italic">
                    No providers found matching your search criteria.
                </div>
            )}
        </div>
      </section>
    </main>
    <Footer />
    </div>
  );
}
