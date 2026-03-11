"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { useState } from "react";

export default function ScheduleAppointmentPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    age: "",
    phone: "",
    secondaryPhone: "",
    providersOrUndecided: "",
    referral: "",
    concerns: "",
    pediatricAttendees: "",
    diagnoses: "",
    services: [],
    lawsuits: false,
    medicare: false,
    newsletter: false,
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
    "Other",
  ];

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your inquiry. Our staff will review your information.",
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />

      <main className="flex-1 w-full pt-40 pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs
            items={[
              { label: "Resources", href: "#" },
              { label: "Schedule an Appointment" },
            ]}
          />
        </div>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          {/* Page Header */}
          <h1 className="text-3xl md:text-5xl font-serif text-black mb-4 leading-tight">
            New Patient Appointment
          </h1>
          <p className="text-lg text-[var(--gw-text-muted)] mb-10">
            Welcome to GW Center for Integrative Medicine. Please review the
            information below before submitting your inquiry.
          </p>

          {/* Alert Banners */}
          <div className="space-y-3 mb-10">
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-none px-5 py-4">
              <svg
                className="w-5 h-5 text-red-500 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                />
              </svg>
              <p className="text-sm font-semibold text-red-700">
                Emergency Care: In case of medical emergency please call{" "}
                <strong>911</strong>.
              </p>
            </div>
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-none px-5 py-4">
              <svg
                className="w-5 h-5 text-amber-500 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z"
                />
              </svg>
              <p className="text-sm text-amber-800">
                All communication with new and returning patients is conducted
                exclusively through the{" "}
                <a href="https://accounts.charmtracker.com/signin?hide_signup-true&hide_secure=true&hide_gsignup-true&servicename-charmhealth&serviceurl=https://phr.charmtracker.com/main.do" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:opacity-80">ChARM Patient Portal</a>.
                Please check your portal messages regularly.
              </p>
            </div>
            <div className="flex items-start gap-3 bg-[var(--gw-secondary-light)] border border-[rgba(0,0,0,0.08)] rounded-none px-5 py-4">
              <svg
                className="w-5 h-5 text-[var(--gw-primary)] mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-[var(--gw-text-main)]">
                <strong>Fees & Insurance:</strong> GWCIM does not participate in
                any insurance plans.{" "}
                <Link
                  href="/fees-and-insurance"
                  className="text-[var(--gw-primary)] underline font-medium"
                >
                  Review our billing policies and fees →
                </Link>
              </p>
            </div>
          </div>

          {/* Two-column info cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Established Patients */}
            <div className="border border-gray-200 bg-white p-6">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gw-text-muted)] mb-3">
                Established Patients
              </h2>
              <p className="text-[var(--gw-text-main)] text-sm leading-relaxed">
                Please call us to schedule your follow-up or regular
                appointments.
              </p>
              <a
                href="tel:2028335055"
                className="mt-4 inline-flex items-center gap-2 text-[var(--gw-primary)] font-bold text-lg hover:text-[var(--gw-accent)] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                202-833-5055
              </a>
            </div>
            {/* Cancellation Policy */}
            <div className="border border-gray-200 bg-white p-6">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gw-text-muted)] mb-3">
                Cancellation Policy
              </h2>
              <p className="text-[var(--gw-text-main)] text-sm leading-relaxed">
                Cancellations made more than <strong>48 hours</strong> in
                advance are free of charge.
              </p>
              <p className="text-sm text-red-600 font-medium mt-2">
                Late cancellations or no-shows are charged <strong>100%</strong>{" "}
                of the provider fee.
              </p>
            </div>
          </div>

          {/* New Patient Steps */}
          <div className="bg-white border border-gray-200 p-6 md:p-8 mb-10">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gw-text-muted)] mb-6">
              New Patient — How It Works
            </h2>
            <ol className="space-y-5">
              {[
                {
                  step: "1",
                  title: "Submit Your Inquiry",
                  desc: "Complete the New Patient Inquiry (NPI) form at the bottom of this page.",
                },
                {
                  step: "2",
                  title: "Receive Portal Invitation",
                  desc: "Within 1–2 business days, you'll receive a ChARM Patient Portal invitation with your intake forms (Informed Consent & New Patient Health Inventory).",
                },
                {
                  step: "3",
                  title: "Complete Your Forms",
                  desc: "Set up your ChARM account and submit all required forms. All future communication will be handled exclusively through the Portal.",
                  link: {
                    label: "Access Patient Portal →",
                    href: "/charm-patient-portal",
                  },
                },
                {
                  step: "4",
                  title: "Upload Medical Records (Optional)",
                  desc: "You may upload past labs, imaging, referrals, or medical documents. Note that record review may add approximately 15 minutes to your visit time.",
                },
                {
                  step: "5",
                  title: "We'll Contact You",
                  desc: "Our team will reach out to schedule your first appointment. For immediate assistance, call (202) 833-5055 or email info@gwcim.com.",
                },
              ].map(({ step, title, desc, link }) => (
                <li key={step} className="flex gap-4 items-start">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[var(--gw-primary)] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {step}
                  </span>
                  <div>
                    <p className="font-semibold text-black text-sm">{title}</p>
                    <p className="text-sm text-[var(--gw-text-muted)] mt-0.5 leading-relaxed">
                      {desc}
                    </p>
                    {link && (
                      <Link
                        href={link.href}
                        className="text-xs font-bold text-[var(--gw-primary)] hover:text-[var(--gw-accent)] transition-colors mt-1 inline-block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            {/* First Appointment */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gw-text-muted)] mb-4">
                During Your First Appointment
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {[
                  "Discuss your health concerns with your intake provider",
                  "Review past diagnostics, history, and records",
                  "Physical exam as needed",
                  "Personalized care plan with lab referrals & therapies",
                  "Initial treatment recommendations",
                  "Individual treatments applied by your provider",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[var(--gw-text-main)]"
                  >
                    <svg
                      className="w-4 h-4 text-[var(--gw-accent)] mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          


          <div className="bg-white rounded-none p-8 md:p-14 shadow-2xl border border-gray-100 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[var(--gw-accent)]"></div>
            <h2 className="text-[var(--gw-primary)] font-serif text-3xl md:text-4xl mb-10">
              New Patient Appointment Inquiry Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* PERSONAL INFO SECTION */}
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 border-b border-gray-100 pb-3">
                  Personal Information
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-600 block ml-1">
                        First Name{" "}
                        <span className="text-[var(--gw-accent)]">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all placeholder:text-gray-400 text-gray-800"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-600 block ml-1">
                        Last Name{" "}
                        <span className="text-[var(--gw-accent)]">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all placeholder:text-gray-400 text-gray-800"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-600 block ml-1">
                        Date of Birth{" "}
                        <span className="text-[var(--gw-accent)]">*</span>
                      </label>
                      <input
                        required
                        type="date"
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800"
                        value={formData.dob}
                        onChange={(e) =>
                          setFormData({ ...formData, dob: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-600 block ml-1">
                        Age <span className="text-[var(--gw-accent)]">*</span>
                      </label>
                      <input
                        required
                        type="number"
                        min="0"
                        max="150"
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800"
                        value={formData.age}
                        onChange={(e) =>
                          setFormData({ ...formData, age: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTACT SECTION */}
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 border-b border-gray-100 pb-3">
                  Contact Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-600 block ml-1">
                      Primary Phone / Cell{" "}
                      <span className="text-[var(--gw-accent)]">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-600 block ml-1">
                      Secondary Phone / Address
                    </label>
                    <input
                      type="text"
                      placeholder="Home/Work, Zip code"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all placeholder:text-gray-400 text-gray-800"
                      value={formData.secondaryPhone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          secondaryPhone: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* CLINICAL INFO SECTION */}
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 border-b border-gray-100 pb-3">
                  Clinical Information
                </h3>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-600 leading-normal block ml-1">
                      Main Health Concerns{" "}
                      <span className="text-[var(--gw-accent)]">*</span>
                      <span className="block text-[11px] text-gray-500 tracking-normal normal-case mt-1 font-normal">
                        Please describe the main concerns you have brought to
                        GWCIM.
                      </span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800 resize-y"
                      value={formData.concerns}
                      onChange={(e) =>
                        setFormData({ ...formData, concerns: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-600 leading-normal block ml-1">
                      Prior Diagnoses{" "}
                      <span className="text-[var(--gw-accent)]">*</span>
                      <span className="block text-[11px] text-gray-500 tracking-normal normal-case mt-1 font-normal">
                        To your knowledge, have you ever been diagnosed with?
                        (If you have any undiagnosed concerns list them above).
                      </span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800 resize-y"
                      value={formData.diagnoses}
                      onChange={(e) =>
                        setFormData({ ...formData, diagnoses: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-600 leading-normal block ml-1">
                      Provider Preferences{" "}
                      <span className="text-[var(--gw-accent)]">*</span>
                      <span className="block text-[11px] text-gray-500 tracking-normal normal-case mt-1 font-normal">
                        Which GWCIM providers/services are you specifically
                        interested in? (Write "UNDECIDED" if unsure).
                      </span>
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800"
                      value={formData.providersOrUndecided}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          providersOrUndecided: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-600 leading-normal block ml-1">
                      Pediatric/Adolescent Psychiatry{" "}
                      <span className="text-[var(--gw-accent)]">*</span>
                      <span className="block text-[11px] text-gray-500 tracking-normal normal-case mt-1 font-normal">
                        If scheduling for a minor, who will attend the visits?
                        (Write "N/A" if not applicable).
                      </span>
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800"
                      value={formData.pediatricAttendees}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pediatricAttendees: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-600 leading-normal block ml-1">
                      Referral Source{" "}
                      <span className="text-[var(--gw-accent)]">*</span>
                      <span className="block text-[11px] text-gray-500 tracking-normal normal-case mt-1 font-normal">
                        Please list the doctor(s), specialists, friends, online
                        search, etc.
                      </span>
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:bg-white focus:border-[var(--gw-primary)] focus:ring-1 focus:ring-[var(--gw-primary)] outline-none transition-all text-gray-800"
                      value={formData.referral}
                      onChange={(e) =>
                        setFormData({ ...formData, referral: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* SERVICES SELECTION SECTION */}
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gw-primary)] mb-6 border-b border-gray-100 pb-3">
                  Services of Interest
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 bg-slate-50 p-6 md:p-8 rounded-none border border-slate-200">
                  {servicesList.map((service) => (
                    <label
                      key={service}
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <div className="pt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded-none border-gray-300 text-[var(--gw-primary)] focus:ring-[var(--gw-primary)] accent-[var(--gw-primary)] transition-all cursor-pointer"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                        />
                      </div>
                      <span className="text-sm text-gray-600 group-hover:text-[var(--gw-primary)] transition-colors leading-snug select-none mt-0.5">
                        {service}
                      </span>
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
                      onChange={(e) =>
                        setFormData({ ...formData, lawsuits: e.target.checked })
                      }
                    />
                  </div>
                  <span className="text-sm md:text-base text-gray-700 leading-relaxed group-hover:text-black transition-colors select-none">
                    Are you involved in any ongoing or prior lawsuits?
                  </span>
                </label>
                <label className="flex items-start gap-4 p-5 rounded-none border border-[var(--gw-accent)] bg-[var(--gw-accent)]/5 hover:bg-[var(--gw-accent)]/10 transition-colors cursor-pointer group">
                  <div className="pt-0.5 shrink-0">
                    <input
                      type="checkbox"
                      required
                      className="w-5 h-5 rounded-none border-[var(--gw-accent)] text-[var(--gw-accent)] focus:ring-[var(--gw-accent)] accent-[var(--gw-accent)] transition-all cursor-pointer"
                      checked={formData.medicare}
                      onChange={(e) =>
                        setFormData({ ...formData, medicare: e.target.checked })
                      }
                    />
                  </div>
                  <span className="text-sm md:text-base text-gray-900 leading-relaxed font-medium select-none">
                    I understand there will NOT be Medicare claims submitted for
                    any GWCIM service provided.{" "}
                    <span className="text-[var(--gw-accent)] font-bold">*</span>
                  </span>
                </label>
                <label className="flex items-start gap-4 p-5 rounded-none border border-gray-200 hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className="pt-0.5 shrink-0">
                    <input
                      type="checkbox"
                      required
                      className="w-5 h-5 rounded-none border-gray-300 text-[var(--gw-primary)] focus:ring-[var(--gw-primary)] accent-[var(--gw-primary)] transition-all cursor-pointer"
                      checked={formData.newsletter}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          newsletter: e.target.checked,
                        })
                      }
                    />
                  </div>
                  <span className="text-sm md:text-base text-gray-700 leading-relaxed group-hover:text-black transition-colors select-none">
                    Would you like to join our newsletter & email list?{" "}
                    <span className="text-[var(--gw-accent)] font-bold">*</span>
                  </span>
                </label>
              </div>

              <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-100 mt-10">
                {/* Placeholder for CAPTCHA image */}
                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-none border border-gray-200 shadow-sm w-full md:w-auto">
                  <input
                    type="checkbox"
                    className="w-6 h-6 border-gray-300 rounded-none focus:ring-blue-500 outline-none"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    I'm not a robot
                  </span>
                  <div className="flex flex-col items-center ml-4">
                    <img
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      className="w-6 opacity-80"
                      alt="reCAPTCHA"
                    />
                    <span className="text-[9px] text-gray-500 mt-1">
                      reCAPTCHA
                    </span>
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
                    {/* Patient Forms Section */}
          <div className="bg-white border border-gray-200 p-6 md:p-8 mb-10">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gw-text-muted)] mb-6">
              Patient Forms
            </h2>
            <p className="text-sm text-[var(--gw-text-muted)] mb-6 leading-relaxed">
              If you prefer to fill out your forms manually or wish to review them ahead of time, you can download them below. All forms should be uploaded to your ChARM Patient Portal once completed.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Adult Intake", 
                  desc: "New Patient Adult Health Inventory", 
                  href: "/forms/6.2024-GWCIM_New_Patient_Adult_PHI_Questionnaire.pdf" 
                },
                { 
                  title: "Pediatric Intake", 
                  desc: "Intake for patients under 18 years old", 
                  href: "/forms/Pediatric_PHI_Questionnaire.pdf" 
                },
                { 
                  title: "Consent Forms", 
                  desc: "Informed Consent for care at GWCIM", 
                  href: "/forms/Informed-Consent-Forms-2020.pdf" 
                },
              ].map((form, idx) => (
                <a 
                  key={idx}
                  href={form.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col p-4 bg-slate-50 border border-slate-100 hover:border-[var(--gw-primary)] hover:bg-white transition-all group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-[var(--gw-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--gw-primary)]">{form.title}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 group-hover:text-gray-700 transition-colors uppercase tracking-tight">{form.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
