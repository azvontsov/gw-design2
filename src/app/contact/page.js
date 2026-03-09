'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you as soon as possible.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
        <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 border border-slate-100 animate-in fade-in slide-in-from-left-8 duration-700">
            <h2 className="text-2xl font-serif text-[var(--gw-primary)] mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full p-4 bg-slate-50 border border-transparent focus:border-[var(--gw-primary)] focus:bg-white outline-none transition-all text-sm font-light"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full p-4 bg-slate-50 border border-transparent focus:border-[var(--gw-primary)] focus:bg-white outline-none transition-all text-sm font-light"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Subject</label>
                <input 
                  required
                  type="text" 
                  className="w-full p-4 bg-slate-50 border border-transparent focus:border-[var(--gw-primary)] focus:bg-white outline-none transition-all text-sm font-light"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full p-4 bg-slate-50 border border-transparent focus:border-[var(--gw-primary)] focus:bg-white outline-none transition-all text-sm font-light"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[var(--gw-primary)] text-white py-5 px-8 font-bold tracking-[0.2em] uppercase hover:bg-[var(--gw-blue)] transition-all text-sm shadow-xl"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-700">
            
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

            {/* Google Map Placeholder */}
            <div className="aspect-video bg-slate-100 border border-slate-200 relative overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                Google Map Interactive
              </div>
            </div>

          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
