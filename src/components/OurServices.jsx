import Link from 'next/link';

export default function OurServices() {
  const services = [
    {
      id: 1,
      icon: "/images/image1.png",
      title: "Concierge Integrative Medicine",
      description: "Personalized, comprehensive care with longer appointments and direct access.",
      link: "#"
    },
    {
      id: 2,
      icon: "/images/image3.png",
      title: "Acupuncture & Chinese Medicine",
      description: "Ancient wisdom for modern healing.",
      link: "#"
    },
    {
      id: 3,
      icon: "/images/image2.png",
      title: "Integrative Geriatrics",
      description: "Personalized care for quality of life and healthy aging.",
      link: "#"
    },
    {
      id: 4,
      icon: "/images/image4.png",
      title: "Support Groups & Classes",
      description: "Empowering your health journey through community.",
      link: "#"
    },
    {
      id: 5,
      icon: "/images/image5.png",
      title: "Celiac & Gut Health",
      description: "Comprehensive functional approach to digestive wellness.",
      link: "#"
    },
    {
      id: 6,
      icon: "/images/image6.png",
      title: "Mindfulness & MBSR",
      description: "Evidence-based stress reduction techniques.",
      link: "#"
    },
    {
      id: 7,
      icon: "/images/image7.png",
      title: "Long Covid Recovery",
      description: "Targeted protocols for complex post-viral conditions.",
      link: "#"
    },
    {
      id: 8,
      icon: "/images/image8.png",
      title: "Weight Optimization",
      description: "Sustainable, metabolic approach to healthy weight.",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-[var(--gw-secondary-light)]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--gw-accent)] uppercase mb-4">WHAT WE OFFER</p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[var(--gw-primary)] mb-6">Comprehensive Care Paths</h2>
          <p className="text-lg text-[var(--gw-text-muted)] max-w-2xl mx-auto">
            Combining the best of conventional and complementary medicine.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link 
                key={service.id} 
                href={service.link}
                className="group bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-[var(--gw-secondary-light)]"
            >
              <div className="mb-6 overflow-hidden rounded-full w-20 h-20 mx-auto bg-[var(--gw-secondary-light)] flex items-center justify-center">
                 {/* Placeholder for Icon - using simple img for now */}
                 <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain opacity-80 group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <h3 className="text-xl font-serif font-medium text-[var(--gw-primary)] mb-3 text-center group-hover:text-[var(--gw-accent)] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-[var(--gw-text-muted)] text-center leading-relaxed opacity-80 mb-6">
                {service.description}
              </p>

              <div className="text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--gw-primary)] border-b border-transparent group-hover:border-[var(--gw-accent)] transition-all">
                    Learn More
                  </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-16">
            <Link 
                href="/services" 
                className="inline-block border border-[var(--gw-primary)] text-[var(--gw-primary)] px-8 py-3 rounded-full text-sm font-bold tracking-widest hover:bg-[var(--gw-primary)] hover:text-white transition-all uppercase"
            >
                See all our services
            </Link>
        </div>

      </div>
    </section>
  );
}
