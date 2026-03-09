'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { useState } from 'react';

export default function NewsAndEventsPage() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'News', 'Events', 'Podcasts & Audio', 'Media'];

  const newsItems = [
    {
      id: 1,
      category: 'News',
      title: "Ashley Drapeau Appointed as New Medical Director",
      date: "March 1, 2025",
      excerpt: "GWCIM is proud to announce the transition of leadership as Ashley Drapeau, PA-C, L.Ac., takes the helm to lead our clinical programs into the future.",
      image: "/images/news/01.png",
      link: "/about/our-story-gw-integrative-medicine-center"
    },
    {
      id: 2,
      category: 'Events',
      title: "Mindfulness-Based Stress Reduction (MBSR) Spring Session",
      date: "April 15, 2025",
      excerpt: "Join our intensive 8-week program designed to help you develop tools for managing stress, pain, and illness through mindfulness meditation.",
      image: "/images/news/02.jpg",
      link: "/services/mindfulness-based-stress-reduction"
    },
    {
      id: 3,
      category: 'News',
      title: "Integrative Medicine and the Future of Geriatrics",
      date: "February 12, 2025",
      excerpt: "Dr. Mikhail Kogan discusses the role of integrative approaches in promoting healthy aging and cognitive longevity in recent academic panel.",
      image: "/images/news/03.png",
      link: "/people/mikhail-kogan-md"
    },
    {
      id: 4,
      category: 'Podcasts & Audio',
      title: "Podcast: The Healing Power of Genomic Nutrition",
      date: "January 30, 2025",
      excerpt: "Listen to our latest episode where we explore how personalized nutrition based on your genetic profile can transform your recovery and longevity.",
      image: "/images/news/healing-podcast.webp",
      link: "/services/nutritional-counseling"
    }
  ];

  const filteredItems = filter === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />
      
      <main className="flex-1 w-full pt-40 pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'Resources', href: '#' }, { label: "News & Events" }]} />
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--gw-primary)] mb-6 leading-tight">
            News & <span className="text-[var(--gw-accent)]">Events</span>
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
            Stay informed about the latest clinical breakthroughs, health podcasts, and integrative medicine events at GWCIM.
          </p>
        </section>

        {/* Filter Navigation */}
        <section className="max-w-6xl mx-auto px-6 mb-12">
            <div className="flex flex-wrap gap-4 pb-6">
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                            filter === cat 
                            ? 'bg-[var(--gw-primary)] text-white shadow-lg' 
                            : 'text-slate-400 hover:text-[var(--gw-primary)] hover:bg-slate-50'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </section>

        {/* News Grid */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id} 
                className="group flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 bg-[var(--gw-primary)] text-white px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase">
                        {item.category}
                    </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <span className="text-xs font-medium text-slate-400 mb-4 block">{item.date}</span>
                    <h3 className="text-2xl font-serif text-[var(--gw-primary)] mb-6 group-hover:text-[var(--gw-blue)] transition-colors leading-tight">
                        {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-8 font-light flex-grow">
                        {item.excerpt}
                    </p>
                    <Link 
                        href={item.link}
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[var(--gw-primary)] hover:text-[var(--gw-blue)] transition-colors"
                    >
                        Read More 
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mailing List CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-32">
            <div className="bg-[#1A365D] p-12 md:p-16 text-center rounded-none relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--gw-accent)]"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-serif text-white mb-6">Never miss an update</h2>
                    <p className="text-white/70 mb-10 max-w-xl mx-auto font-light">
                        Join our community newsletter to receive health tips, event invitations, and the latest news from our clinics.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="flex-grow bg-white/10 px-6 py-4 text-white placeholder:text-white/30 outline-none focus:border-white transition-all text-sm"
                        />
                        <button className="bg-[var(--gw-accent)] text-[var(--gw-primary)] px-8 py-4 font-bold tracking-widest uppercase hover:bg-white transition-all text-sm whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full"></div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
