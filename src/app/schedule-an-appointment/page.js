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
    providersOrUndecided: '',
    referral: '',
    concerns: '',
    pediatricAttendees: '',
    diagnoses: '',
    services: [],
    lawsuits: false,
    medicare: false,
    newsletter: false
  });

  const servicesList = [
    "Functional & Naturopathic Medicine",
    "Integrative Psychiatry",
    "Integrative Oncology Support",
    "Long COVID",
    "Acupuncture",
    "Ayurvedic Medicine",
    "Somatic Experiencing",
    "IV/Infusion Therapy",
    "MBSR/Mindfulness",
    "Mind-body method (Sarno method)",
    "Medical Cannabis",
    "KAP (Ketamine Assisted Psychotherapy)",
    "Health & Spiritual Coaching",
    "Pediatric and Adolescent Psychiatry / Integrative Medicine",
    "Weight Loss",
    "Shoemaker Protocol (CIRS/Mold protocol)",
    "Microneedling and Cosmetic Acupuncture",
    "Physical Therapy / Pelvic Floor Therapy",
    "Sleep Disorders and Sleep Study",
    "Integrative Concierge Care",
    "Other"
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
    alert('Thank you for your inquiry. Our staff will review your information.');
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
          <h1 className="text-3xl md:text-5xl font-serif text-black mb-6 leading-tight">
            Welcome to the GW Center for Integrative Medicine! Please read the entire page.
          </h1>
          
          <div className="text-[var(--gw-text-main)] mb-8 space-y-4">
            <p>Welcome to the GW Center for Integrative Medicine!</p>
            
            <p className="font-bold">Emergency Care Notice: In case of medical emergency please call 911.</p>
            
            <p>
                <strong>Fees and Policies:</strong> GWCIM does not participate in any insurance plans.<br/>
                To review complete billing policy and fees, learn more at our <Link href="/fees-and-insurance" className="underline text-[#0066cc]">Fees and Policies</Link>.
            </p>

            <p>
                <strong>Important:</strong> All new or returning patients &ndash; ChARM Patient Portal is all communication. MUST send you through the Patient Portal - It is important to check in your messages in the Portal.
            </p>
          </div>

          <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-black">Scheduling Appointments:</h2>
              <div className="space-y-4 text-black">
                  <p>
                      <strong>Established Patients:</strong> please call <strong className="font-bold">202-833-5055</strong> to schedule, or for your regular follow-ups.
                  </p>
                  <div>
                      <p className="font-bold mb-2">New Patients: How to set up the steps online to help you schedule new patient appointment:</p>
                      <ul className="list-disc pl-6 space-y-2">
                          <li>Submit our secure <strong>New Patient Inquiry (NPI)</strong> intake form at the bottom of this page.</li>
                          <li>In 1-2 days you receive ChARM Patient Portal invitation with (forms) (Informed Consent and New Patient Health Inventory)</li>
                          <li>Set up your account in ChARM Patient Portal and submit the required forms.</li>
                          <li>Portal Access: You can log in to the ChARM Patient Portal anytime, <a href="/charm-patient-portal" className="text-[#0066cc] underline">HERE</a>. All future communication will be done <strong>ONLY</strong> through the Patient Portal.</li>
                          <li>For immediate assistance call <strong className="font-bold">(202)-833-5055</strong> or email <a href="mailto:info@gwcim.com" className="font-bold">info@gwcim.com</a>.</li>
                          <li>Additional Medical Records (if relevant to your visit):
                              <ul className="list-disc pl-6 mt-1 space-y-1">
                                  <li>You can upload any past or recent medical documents. records, labs, referrals, or imaging.</li>
                                  <li>Reviewing typically is 15 minutes overhead to be used for your complexity of your disease.</li>
                              </ul>
                          </li>
                          <li>We will contact you to set up your first appointment.</li>
                          <li><strong>During your first appointment, you will:</strong>
                              <ul className="list-disc pl-6 mt-1 space-y-1">
                                  <li>Discuss all your concerns with your intake provider</li>
                                  <li>Discuss some of your past diagnostics with history and records</li>
                                  <li>Undergo a physical exam which needed</li>
                                  <li>Discuss non-US lab referrals and therapies during your personalized care plan</li>
                                  <li>Discuss recommendations for your initial treatment</li>
                                  <li>Have some individual treatments/therapies applied by your intake provider</li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-black">Cancellation Policy:</h2>
            <p className="text-black">
                There is no charge for cancellations made more than <strong>48 hours</strong> before the appointment. Late cancellations (under <strong>TWO business days</strong>) / no-shows flags are charged <strong>100% of the provider fee</strong>.
            </p>
          </div>

          <div className="bg-white rounded-none p-8 md:p-14 shadow-2xl border border-gray-100 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[var(--gw-accent)]"></div>
            <h2 className="text-[var(--gw-primary)] font-serif text-3xl md:text-4xl mb-10">New Patient Appointment Inquiry Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-12">
                
                {/* PERSONAL INFO SECTION */}
                <div>
                    <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 border-b border-gray-100 pb-3">Personal Information</h3>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-600 block ml-1">First Name <span className="text-[var(--gw-accent)]">*</span></label>
                                <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all placeholder:text-gray-400 text-gray-800" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-600 block ml-1">Last Name <span className="text-[var(--gw-accent)]">*</span></label>
                                <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all placeholder:text-gray-400 text-gray-800" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-600 block ml-1">Date of Birth <span className="text-[var(--gw-accent)]">*</span></label>
                                <input required type="date" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800" value={formData.dob} onChange={e => setFormData({...formData, dob: e.target.value})} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-600 block ml-1">Age <span className="text-[var(--gw-accent)]">*</span></label>
                                <input required type="number" min="0" max="150" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800" value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTACT SECTION */}
                <div>
                   <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 border-b border-gray-100 pb-3">Contact Details</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                           <label className="text-xs font-bold uppercase tracking-widest text-gray-600 block ml-1">Primary Phone / Cell <span className="text-[var(--gw-accent)]">*</span></label>
                           <input required type="tel" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                       </div>
                       <div className="space-y-2">
                           <label className="text-xs font-bold uppercase tracking-widest text-gray-600 block ml-1">Secondary Phone / Address</label>
                           <input type="text" placeholder="Home/Work, Zip code" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all placeholder:text-gray-400 text-gray-800" value={formData.secondaryPhone} onChange={e => setFormData({...formData, secondaryPhone: e.target.value})} />
                       </div>
                   </div>
                </div>

                {/* CLINICAL INFO SECTION */}
                <div>
                   <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 border-b border-gray-100 pb-3">Clinical Information</h3>
                   <div className="space-y-8">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-600 leading-normal block ml-1">
                                Main Health Concerns <span className="text-[var(--gw-accent)]">*</span>
                                <span className="block text-[11px] text-gray-500 tracking-normal normal-case mt-1 font-normal">Please describe the main concerns you have brought to GWCIM.</span>
                            </label>
                            <textarea required rows={4} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800 resize-y" value={formData.concerns} onChange={e => setFormData({...formData, concerns: e.target.value})}></textarea>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-600 leading-normal block ml-1">
                                Prior Diagnoses <span className="text-[var(--gw-accent)]">*</span>
                                <span className="block text-[11px] text-gray-500 tracking-normal normal-case mt-1 font-normal">To your knowledge, have you ever been diagnosed with? (If you have any undiagnosed concerns list them above).</span>
                            </label>
                            <textarea required rows={3} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800 resize-y" value={formData.diagnoses} onChange={e => setFormData({...formData, diagnoses: e.target.value})}></textarea>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-600 leading-normal block ml-1">
                                Provider Preferences <span className="text-[var(--gw-accent)]">*</span>
                                <span className="block text-[11px] text-gray-500 tracking-normal normal-case mt-1 font-normal">Which GWCIM providers/services are you specifically interested in? (Write "UNDECIDED" if unsure).</span>
                            </label>
                            <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800" value={formData.providersOrUndecided} onChange={e => setFormData({...formData, providersOrUndecided: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-600 leading-normal block ml-1">
                                Pediatric/Adolescent Psychiatry <span className="text-[var(--gw-accent)]">*</span>
                                <span className="block text-[11px] text-gray-500 tracking-normal normal-case mt-1 font-normal">If scheduling for a minor, who will attend the visits? (Write "N/A" if not applicable).</span>
                            </label>
                            <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800" value={formData.pediatricAttendees} onChange={e => setFormData({...formData, pediatricAttendees: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-600 leading-normal block ml-1">
                                Referral Source <span className="text-[var(--gw-accent)]">*</span>
                                <span className="block text-[11px] text-gray-500 tracking-normal normal-case mt-1 font-normal">Please list the doctor(s), specialists, friends, online search, etc.</span>
                            </label>
                            <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800" value={formData.referral} onChange={e => setFormData({...formData, referral: e.target.value})} />
                        </div>
                   </div>
                </div>

                {/* SERVICES SELECTION SECTION */}
                <div>
                    <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gw-primary)] mb-6 border-b border-gray-100 pb-3">Services of Interest</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 bg-slate-50 p-6 md:p-8 rounded-none border border-slate-200">
                        {servicesList.map(service => (
                            <label key={service} className="flex items-start gap-3 cursor-pointer group">
                                <div className="pt-0.5 shrink-0">
                                    <input 
                                        type="checkbox" 
                                        className="w-5 h-5 rounded-none border-gray-300 text-[var(--gw-primary)] focus:ring-[var(--gw-primary)] accent-[var(--gw-primary)] transition-all cursor-pointer"
                                        checked={formData.services.includes(service)}
                                        onChange={() => handleServiceChange(service)}
                                    />
                                </div>
                                <span className="text-sm text-gray-600 group-hover:text-[var(--gw-primary)] transition-colors leading-snug select-none mt-0.5">{service}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* LEGAL & CONSENT SECTION */}
                <div className="space-y-4 pt-6">
                    <label className="flex items-start gap-4 p-5 rounded-none border border-gray-200 hover:bg-slate-50 transition-colors cursor-pointer group">
                        <div className="pt-0.5 shrink-0">
                            <input 
                                type="checkbox" 
                                className="w-5 h-5 rounded-none border-gray-300 text-[var(--gw-primary)] focus:ring-[var(--gw-primary)] accent-[var(--gw-primary)] transition-all cursor-pointer"
                                checked={formData.lawsuits}
                                onChange={e => setFormData({...formData, lawsuits: e.target.checked})}
                            />
                        </div>
                        <span className="text-sm md:text-base text-gray-700 leading-relaxed group-hover:text-black transition-colors select-none">Are you involved in any ongoing or prior lawsuits?</span>
                    </label>
                    <label className="flex items-start gap-4 p-5 rounded-none border border-[var(--gw-accent)] bg-[var(--gw-accent)]/5 hover:bg-[var(--gw-accent)]/10 transition-colors cursor-pointer group">
                        <div className="pt-0.5 shrink-0">
                            <input 
                                type="checkbox" 
                                required
                                className="w-5 h-5 rounded-none border-[var(--gw-accent)] text-[var(--gw-accent)] focus:ring-[var(--gw-accent)] accent-[var(--gw-accent)] transition-all cursor-pointer"
                                checked={formData.medicare}
                                onChange={e => setFormData({...formData, medicare: e.target.checked})}
                            />
                        </div>
                        <span className="text-sm md:text-base text-gray-900 leading-relaxed font-medium select-none">I understand there will NOT be Medicare claims submitted for any GWCIM service provided. <span className="text-[var(--gw-accent)] font-bold">*</span></span>
                    </label>
                    <label className="flex items-start gap-4 p-5 rounded-none border border-gray-200 hover:bg-slate-50 transition-colors cursor-pointer group">
                        <div className="pt-0.5 shrink-0">
                            <input 
                                type="checkbox" 
                                required
                                className="w-5 h-5 rounded-none border-gray-300 text-[var(--gw-primary)] focus:ring-[var(--gw-primary)] accent-[var(--gw-primary)] transition-all cursor-pointer"
                                checked={formData.newsletter}
                                onChange={e => setFormData({...formData, newsletter: e.target.checked})}
                            />
                        </div>
                        <span className="text-sm md:text-base text-gray-700 leading-relaxed group-hover:text-black transition-colors select-none">Would you like to join our newsletter & email list? <span className="text-[var(--gw-accent)] font-bold">*</span></span>
                    </label>
                </div>

                <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-100 mt-10">
                    {/* Placeholder for CAPTCHA image */}
                    <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-none border border-gray-200 shadow-sm w-full md:w-auto">
                      <input type="checkbox" className="w-6 h-6 border-gray-300 rounded-none focus:ring-blue-500 outline-none" />
                      <span className="text-sm font-medium text-gray-700">I'm not a robot</span>
                      <div className="flex flex-col items-center ml-4">
                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="w-6 opacity-80" alt="reCAPTCHA" />
                        <span className="text-[9px] text-gray-500 mt-1">reCAPTCHA</span>
                      </div>
                    </div>

                    <button 
                        type="submit"
                        className="w-full md:w-auto bg-[var(--gw-primary)] text-white px-10 py-5 rounded-none font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[var(--gw-primary)] border border-transparent hover:border-[var(--gw-primary)] transition-all shadow-xl"
                    >
                        Submit Inquiry
                    </button>
                </div>
            </form>
          </div>

          <div className="text-sm text-gray-700 mt-12 space-y-4">
              <p>*** Above ideally you can complete in ChARM. But "Request an Appointment" sends a link to specific forms listed on our website:</p>
              <ul className="list-disc pl-6 space-y-1 text-[#0066cc]">
                  <li><a href="#" className="underline">Adult Patient Intake Inventory Form</a></li>
                  <li><a href="#" className="underline">or Pediatric Intake Inventory (for patients 18 years old)</a></li>
                  <li><a href="#" className="underline">Consent Forms</a></li>
              </ul>
              <p>and fax them to <strong className="font-bold">202-833-5055</strong>, or email/fax it to us. Ensure your forms cleared.</p>
              <p>Our address is <strong>GW CIM 908 New Hampshire Ave NW, Suite 200, Washington, D.C. 20037.</strong></p>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

