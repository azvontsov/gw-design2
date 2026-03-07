'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { useState } from 'react';

export default function ScheduleAppointmentPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    age: '',
    phone: '',
    secondaryPhone: '',
    concerns: '',
    referral: '',
    mailingList: false,
    services: [],
    gwAffiliation: '',
    consent: false
  });

  const servicesList = [
    "Primary Care: Integrative Medicine",
    "Naturopathic Medicine",
    "Integrative Mental Health",
    "Long Covid",
    "Acupuncture",
    "Herbal Medicine",
    "Ayurvedic Counseling",
    "KAP-Assisted Psychotherapy",
    "Shoemaker Protocol (CIRS/Mold)",
    "Nutrition Counseling",
    "Intravenous / IM Therapy",
    "MBSR (Mindfulness)",
    "Sarno / Mind-Body Method",
    "Geriatrics / Age Management",
    "ReCODE / Alzheimer's Protocol",
    "Integrative Oncology",
    "Reiki / Energy Healing",
    "Somatic Experiencing",
    "KAP"
  ];

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. Our staff will review your information and contact you via ChARM portal or phone within 1-2 business days.');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />
      
      <main className="flex-1 w-full pt-40 pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'Resources', href: '#' }, { label: "Schedule an Appointment" }]} />
        </div>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[var(--gw-primary)] mb-8 leading-tight">
            Welcome to the GW Center for Integrative Medicine
          </h1>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-12">
            <p className="text-amber-800 font-bold mb-2">Emergency Care Notice:</p>
            <p className="text-amber-700">If you are having a clinical emergency, please call <strong>911</strong> or go to the nearest emergency room.</p>
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-[var(--gw-text-main)] mb-16">
            <p className="text-xl font-light mb-8">
                We are delighted you are considering GWCIM for your health journey. Please read the information below carefully before submitting your inquiry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                    <h3 className="text-[var(--gw-primary)] font-serif text-2xl mb-4">Fees and Policies</h3>
                    <p className="text-base leading-relaxed">
                        GWCIM does not participate in any insurance plans. We provide patients with necessary documentation to submit for out-of-network reimbursement if applicable. Please review our <Link href="#" className="underline">Fees and Policies</Link> before proceeding.
                    </p>
                </div>
                <div>
                    <h3 className="text-[var(--gw-primary)] font-serif text-2xl mb-4">Secure Communication</h3>
                    <p className="text-base leading-relaxed">
                        Important: After registration, all communications <strong>MUST</strong> be done through the <Link href="/charm-patient-portal" className="underline">ChARM Patient Portal</Link>. Our staff will communicate via secure messaging within the portal.
                    </p>
                </div>
            </div>

            <div className="bg-white border border-slate-100 p-8 md:p-12 shadow-sm mb-16">
                <h2 className="text-[var(--gw-primary)] font-serif text-3xl mb-6">Scheduling Appointments</h2>
                <div className="space-y-6 text-base">
                    <div>
                        <p className="font-bold text-[var(--gw-primary)] uppercase tracking-wider text-xs mb-2">Established Patients</p>
                        <p>Please call us at <a href="tel:2028335055" className="font-bold">202-833-5055</a> or use the ChARM Portal for scheduling.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[var(--gw-primary)] uppercase tracking-wider text-xs mb-2">New Patients: How to start</p>
                        <ol className="list-decimal pl-5 space-y-3">
                            <li>Submit the <strong>New Patient Inquiry</strong> form below.</li>
                            <li>Within 1-2 business days, receive a ChARM Patient Portal invitation & intake forms.</li>
                            <li>Set up your account and submit the required digital forms.</li>
                            <li>Once forms are processed, you will be invited to schedule your consultation.</li>
                        </ol>
                    </div>
                </div>
            </div>

            <h2 className="text-[var(--gw-primary)] font-serif text-3xl mb-8 border-b pb-4">New Patient Appointment Inquiry Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 shadow-lg border border-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest">First Name *</label>
                        <input 
                            required 
                            type="text" 
                            className="w-full p-4 border border-slate-200 focus:border-[var(--gw-primary)] outline-none transition-colors"
                            value={formData.firstName}
                            onChange={e => setFormData({...formData, firstName: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest">Last Name *</label>
                        <input 
                            required 
                            type="text" 
                            className="w-full p-4 border border-slate-200 focus:border-[var(--gw-primary)] outline-none transition-colors"
                            value={formData.lastName}
                            onChange={e => setFormData({...formData, lastName: e.target.value})}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest">Date of Birth *</label>
                        <input 
                            required 
                            type="date" 
                            className="w-full p-4 border border-slate-200 focus:border-[var(--gw-primary)] outline-none transition-colors"
                            value={formData.dob}
                            onChange={e => setFormData({...formData, dob: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest">Age *</label>
                        <input 
                            required 
                            type="number" 
                            className="w-full p-4 border border-slate-200 focus:border-[var(--gw-primary)] outline-none transition-colors"
                            value={formData.age}
                            onChange={e => setFormData({...formData, age: e.target.value})}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest">Cell Phone *</label>
                        <input 
                            required 
                            type="tel" 
                            className="w-full p-4 border border-slate-200 focus:border-[var(--gw-primary)] outline-none transition-colors"
                            value={formData.phone}
                            onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest">Secondary Phone (Optional)</label>
                        <input 
                            type="tel" 
                            className="w-full p-4 border border-slate-200 focus:border-[var(--gw-primary)] outline-none transition-colors"
                            value={formData.secondaryPhone}
                            onChange={e => setFormData({...formData, secondaryPhone: e.target.value})}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest">Please describe your main health concerns *</label>
                    <textarea 
                        required 
                        rows={4}
                        className="w-full p-4 border border-slate-200 focus:border-[var(--gw-primary)] outline-none transition-colors"
                        value={formData.concerns}
                        onChange={e => setFormData({...formData, concerns: e.target.value})}
                    ></textarea>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest">How did you hear about us? *</label>
                    <textarea 
                        required 
                        rows={2}
                        className="w-full p-4 border border-slate-200 focus:border-[var(--gw-primary)] outline-none transition-colors"
                        value={formData.referral}
                        onChange={e => setFormData({...formData, referral: e.target.value})}
                    ></textarea>
                </div>

                <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-widest block mb-4">Which services are you specifically interested in? (Select all that apply)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {servicesList.map(service => (
                            <label key={service} className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                    type="checkbox" 
                                    className="w-5 h-5 accent-[var(--gw-primary)]"
                                    checked={formData.services.includes(service)}
                                    onChange={() => handleServiceChange(service)}
                                />
                                <span className="text-sm text-slate-600 group-hover:text-[var(--gw-primary)] transition-colors">{service}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input 
                            type="checkbox" 
                            required
                            className="w-5 h-5 accent-[var(--gw-primary)]"
                            checked={formData.consent}
                            onChange={e => setFormData({...formData, consent: e.target.checked})}
                        />
                        <span className="text-sm text-slate-600 italic">I consent to secure communication regarding my inquiry via email or portal invitation. *</span>
                    </label>
                    
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input 
                            type="checkbox" 
                            className="w-5 h-5 accent-[var(--gw-primary)]"
                            checked={formData.mailingList}
                            onChange={e => setFormData({...formData, mailingList: e.target.checked})}
                        />
                        <span className="text-sm text-slate-600">I would like to join the GWCIM mailing list for health updates and news.</span>
                    </label>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-[var(--gw-primary)] text-white font-bold tracking-[0.2em] uppercase py-6 hover:bg-[var(--gw-blue)] transition-all shadow-xl text-lg"
                >
                    Submit Inquiry Form
                </button>

                <p className="text-xs text-center text-slate-400">
                    Your information is protected and will be reviewed by our medical team.
                </p>
            </form>
          </div>
        </section>

        {/* Cancellation Policy Section */}
        <section className="bg-slate-50 py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-[var(--gw-primary)] font-serif text-3xl mb-6">Cancellation Policy</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    There is no charge for cancellations made more than <strong>three business days</strong> within the appointment. Late cancellation is charged our GWCIM administrative fee or missed visit appointment fee at the clinician's rate.
                </p>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
