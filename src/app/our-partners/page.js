'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export default function PartnersPage() {
  const partners = [
    {
      name: "Academic Consortium for Integrative Medicine & Health",
      description: "GWCIM is a life-long member of ACIMH, a national voice for the advancement of Integrative Medicine.",
      url: "https://imconsortium.org",
      phone: "(703) 556-9222"
    },
    {
      name: "Fullscript",
      description: "Fullscript is the online dispensary that carries all the professional-grade supplements recommended by functional medicine practitioners.",
      url: "https://fullscript.com"
    },
    {
      name: "VitaminLab",
      description: "Custom-prepared, individualized vitamin and supplement formulations, available in powder or capsule form, deliver a nutritional punch by covering recommended vitamin and mineral requirements, along with optional herbs, nutraceuticals, and adaptogens. VitaminLab is integrated with our EHR system, ChARM.",
      url: "https://getvitaminlab.com"
    },
    {
      name: "IntellxxDNA",
      description: "IntellxxDNA is a genomics intelligence services company, created to individualize the practice of medicine by empowering functional and integrative clinicians with molecular-level insight into each patient, realizing evidence-based, precision treatment.",
      url: "https://www.intellxxdna.com"
    },
    {
      name: "Good Bacteria – unique microbiome support",
      description: "Feed your microbiome with Good Bacteria — the rotating probiotic system for a more resilient, diverse gut. Get $10 off your first order with code: GWCIM",
      url: "https://itsgoodbacteria.com/GWCIM"
    },
    {
      name: "Center for Mind-Body Medicine",
      description: "CMBM’s mission is to make self-awareness, self-care, and group support central to all healthcare, the training of health professionals, and the education of our children.",
      url: "https://cmbm.org",
      phone: "202.966.7338"
    },
    {
      name: "Smith Center for Healing and the Arts",
      description: "Smith Center is a nonprofit health, education, and arts organization in Washington DC. It’s mission is to develop and promote healing practices that explore physical, emotional, and mental resources that lead to life-affirming changes for people affected by cancer.",
      url: "https://imconsortium.org",
      phone: "(202) 483-8600"
    },
    {
      name: "ThriveAgain Physical Therapy",
      description: "Simply one of the best PT teams in the town!",
      url: "https://ThriveAgainPT.com/",
      phone: "202.803.2068"
    },
    {
      name: "BoStrong Foundation",
      description: "We provide support and funding for holistic wellness options for young adults battling cancer and their loved ones. “STAY STRONG: we are with you!”",
      url: "https://www.bostrongfoundation.org",
      phone: "410.540.4987",
      email: "info@bostrong.us"
    },
    {
      name: "Greenspring Financial Partners: Daily Money Management Services",
      description: "Greenspring Financial Partners has tailored a portion of its services to support individuals navigating cognitive decline, easing the burden of managing daily financial obligations so they can focus on their wellness journey. Services are coordinated with healthcare, economic, and legal professionals to facilitate comprehensive life management.",
      url: "https://www.greenspringfp.com/",
      note: "Password: GWCIM",
      phone: "(937) 410 – 9977"
    },
    {
      name: "Dr. Ritchie Shoemaker, “Surviving Mold”",
      description: "Ritchie Shoemaker, M. D., is a recognized leader in patient care, research, and an education pioneer in the field of biotoxin-related illnesses. While illness acquired following exposure to the interior environment of water-damaged buildings (WDB) comprises the bulk of Shoemaker’s daily practice, other illnesses caused by exposure to biologically produced toxins are quite similar in their “final common pathway.”",
      url: "https://www.survivingmold.com"
    },
    {
      name: "High Tech Health International: Infra Red low-EMF saunas",
      description: "Since 1997, High Tech Health has been designing infrared saunas for health professionals and people serious about their health. From lowest-EMF cabins and use of only premium materials, to air-circulation design and state-of-the-art heaters, all High Tech Health infrared saunas include everything necessary for the most advanced sauna detoxification possible.",
      url: "https://www.hightechhealth.com/mi-kogan-req-25/",
      phone: "800-794-5355",
      note: "For a discount use code DRKOGAN"
    },
    {
      name: "Pediatric care: Dr. Nicole Land, MD",
      description: "Dr. Nicole V. Lang is a board-certified pediatrician with over 26 years of experience in caring for children in the Washington metropolitan area. She is the Founder, President, and CEO of both Washington Pediatric Associates and the specialized extension of her practice called Premier Pediatric Concierge Care.",
      url: "http://www.washingtonpediatric.com/lang.php"
    },
    {
      name: "“1440 Health” Integrative Wellness Center",
      description: "1440 Health is an integrative wellness center in Bethesda, MD. Their team offers a range of services to treat the whole person, including Integrative Medicine, manual therapy, nutrition counselling, acupuncture, exercise, yoga, Qi Gong, CST, classes and retreats, meditation, and more.",
      url: "https://1440health.com/",
      phone: "(301) 803-9254"
    },
    {
      name: "Vibration Therapeutic LLC",
      description: "Minnesota-based company specializing in the development, distribution, sale, and service of vibration plate exercise machines. Dr. Kogan has extensive experience treating patients with osteoporosis, incorporating vibration plates as a key part of the treatment plan. After a thorough market analysis, he selected a company that offers high-frequency vibration plates (up to 40Hz), aligning with the best clinical evidence.",
      url: "https://www.vibrationtherapeutic.com/vibration-plate-VT003F.html",
      note: "GWCIM discount code: 22MK75. Contact: via form on the website"
    },
    {
      name: "Zinn Chiropractic",
      description: "Zinn Chiropractic was established in 1990 in metro-accessible old town Takoma Park. Dr. JoAnn Zinn and her staff strive to provide comprehensive personalized chiropractic care.",
      url: "https://joannzinnchiropractic.com",
      phone: "301.853.6074"
    },
    {
      name: "Sally Norton",
      description: "Sally Norton is a nutrition and wellness consultant serving people who have a variety of nutritional challenges and health concerns, especially unexplained pain, inflammation, and urinary tract difficulties, which are associated with oxalates in the diet. Sally has unique expertise in dealing with oxalate reduction in the body.",
      url: "https://sallyknorton.com/"
    },
    {
      name: "VCTest.com",
      description: "VCTest.com provides online visual contrast sensitivity (VCS) testing to individuals who suffer or suspect they may suffer from a health condition that affects contrast sensitivity, and to healthcare professionals and researchers worldwide.",
      url: "https://vcstest.com",
      phone: "(703) 556-9222"
    },
    {
      name: "Core Wellness and Physical Therapies. Infrared Saunas.",
      description: "High-quality Infrared Saunas provide direct heat, allowing far infrared rays to penetrate into the body where they gently elevate its surface temperature and activate major bodily functions.",
      url: "https://alexandriaphysicaltherapist.com",
      phone: "(571) 403-2673"
    },
    {
      name: "Yu Tea",
      description: "Yu Tea Company provides the highest quality, most nutritionally beneficial organic green tea, sourced directly from pristine, organic farms. In powdered form green tea allows consuming the entire leaf for optimal nutritional benefits.",
      url: "https://www.yutea.com/",
      note: "20% discout link for GWCIM patients."
    },
    {
      name: "Performance Alexander Technique Studio",
      description: "Mary Naden is a certified Alexander Technique instructor offering private lessons in her Studio in Takoma Park, MD. Alexander Technique is a form of postural re-education that teaches you to use your whole body with ease, efficiency, ability, and power.",
      url: "https://www.performancealexandertechnique.com"
    },
    {
      name: "Community Ecology Institute",
      description: "The Community Ecology Institute in Maryland focuses on growing sustainable communities by connecting people with nature through education, regenerative projects, and community initiatives. Their programs are rooted at Freetown Farm & the Green Farmacy Garden in Maryland.",
      url: "https://www.communityecologyinstitute.org"
    },
    {
      name: "Pluck Seasoning",
      description: "Pluck seasoning is made by blending nutrient-rich organ meats with herbs and spices to create a versatile, flavorful seasoning that boosts nutrition. GWCIM patients can enjoy a special discount at the Affiliate link below.",
      url: "https://shop.eatpluck.com/discount/GWCIM?ref=gwcim"
    },
    {
      name: "Restore Tranquility: mental health practice.",
      description: "Our mental health, coaching, and mindfulness services are inclusive, designed to resonate with individuals from all walks of life, ensuring everyone finds their path to healing. Services include: psychotherapy, yoga therapy, psychedelic therapy, and coaching. We accept some insurances.",
      url: "https://restoretranquility.org",
      phone: "(301) 873-4457",
      address: "8730 Georgia Avenue, Ste 300, Silver Spring, MD, 20910"
    },
    {
      name: "Normotim: Brain & Mental Health Support Supplements",
      description: "Revolutionizing brain health with their patented lithium ascorbate formulation, Normopharm has redefined lithium supplements with a modern, research-backed approach. 10% discount for GWCIM patients.",
      url: "https://www.normotim.com", // Assumed URL based on content
      note: "Normotim supplement, Lithium Ascorbate"
    },
    {
      name: "MYFULLIUM: Functional adaptogens and ceremonial herbs",
      description: "Special discounts for GWCIM patients.",
      url: "https://myfeelium.co/collections/gwcim"
    },
    {
      name: "Fatty15",
      description: "Fatty15 is a once‑daily oral supplement formulated to support healthy aging by helping maintain cell membrane strength, mitochondrial function, and the natural activity of receptors involved in immunity, metabolism, mood, appetite, and sleep. Pure pentadecanoic acid (C15:0).",
      url: "https://partners.fatty15.com/GWCIM",
      note: "Listen to the GW IM podcast with the founder of Fatty15: Apple Podcasts"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--gw-background)]">
      <Header />
      
      <main className="flex-1 w-full pt-40 pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 mt-4">
          <Breadcrumbs items={[{ label: 'Team', href: '/people' }, { label: "Our Partners" }]} />
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[var(--gw-primary)] mb-8 leading-tight">
            Our <span className="text-[var(--gw-accent)]">Partners</span>
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
            GWCIM is always seeking providers and companies that complement our services and support our patients on their health journey. We carefully research our partners’ offerings and only recommend the best in the field.
          </p>
          <div className="w-24 h-1 bg-[var(--gw-accent)] mt-10"></div>
        </section>

        {/* Partners List */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
            <div className="space-y-12">
                {partners.map((partner, idx) => (
                    <div 
                        key={idx} 
                        className="group bg-white border border-slate-100 p-8 md:p-12 hover:border-[var(--gw-accent)] transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                        style={{ animationDelay: `${idx * 50}ms` }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                <h2 className="text-2xl md:text-3xl font-serif text-[var(--gw-primary)] mb-6 group-hover:text-[var(--gw-blue)] transition-colors">
                                    {partner.name}
                                </h2>
                                <p className="text-slate-600 font-light leading-relaxed mb-8">
                                    {partner.description}
                                </p>
                                {partner.note && (
                                    <div className="bg-slate-50 border-l-4 border-[var(--gw-accent)] p-4 text-sm text-[var(--gw-primary)] font-medium mb-4">
                                        {partner.note}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col justify-start lg:border-l lg:border-slate-100 lg:pl-12 pt-2">
                                {partner.url && (
                                    <div className="mb-6">
                                        <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2 font-bold">Website</span>
                                        <a 
                                            href={partner.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-[var(--gw-primary)] hover:text-[var(--gw-blue)] transition-colors text-sm break-all underline underline-offset-4 decoration-slate-200"
                                        >
                                            {partner.url.replace('https://', '').replace('http://', '').split('/')[0]}
                                        </a>
                                    </div>
                                )}
                                {partner.phone && (
                                    <div className="mb-6">
                                        <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2 font-bold">Phone</span>
                                        <a href={`tel:${partner.phone}`} className="text-[var(--gw-primary)] hover:text-[var(--gw-blue)] transition-colors text-sm">
                                            {partner.phone}
                                        </a>
                                    </div>
                                )}
                                {partner.email && (
                                    <div className="mb-6">
                                        <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2 font-bold">Email</span>
                                        <a href={`mailto:${partner.email}`} className="text-[var(--gw-primary)] hover:text-[var(--gw-blue)] transition-colors text-sm">
                                            {partner.email}
                                        </a>
                                    </div>
                                )}
                                {partner.address && (
                                    <div className="mb-6">
                                        <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2 font-bold">Address</span>
                                        <p className="text-slate-600 text-sm font-light leading-snug">
                                            {partner.address}
                                        </p>
                                    </div>
                                )}
                                <div className="mt-auto">
                                    <a 
                                        href={partner.url || '#'} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gw-primary)] hover:text-[var(--gw-blue)] transition-colors"
                                    >
                                        Visit Partner <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-slate-50 py-24">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h3 className="text-3xl font-serif text-[var(--gw-primary)] mb-6">Interested in Partnering?</h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">
                    GW Center for Integrative Medicine is always looking for mission-aligned organizations and providers.
                </p>
                <Link 
                    href="/contact"
                    className="inline-flex bg-[var(--gw-primary)] text-white px-10 py-5 rounded-none font-bold tracking-widest hover:bg-[var(--gw-blue)] transition-all duration-300 uppercase text-xs"
                >
                    Inquire About Collaboration
                </Link>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
