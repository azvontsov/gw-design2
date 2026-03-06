import Link from "next/link";

export default function OurServices() {

  const servicesData = {
    "Consultations": [
      { id: 1, icon: "/images/doodles/icon-1.png", title: "Integrative Geriatrics", slug: "integrative-geriatrics" },
      { id: 2, icon: "/images/doodles/icon-2.png", title: "Naturopathic Medicine", slug: "naturopathic-medicine" },
      { id: 3, icon: "/images/doodles/icon-3.png", title: "Functional Medicine", slug: "functional-medicine" },
      { id: 4, icon: "/images/doodles/icon-4.png", title: "Integrative Mental Health", slug: "integrative-mental-health" },
      { id: 5, icon: "/images/doodles/icon-5.png", title: "Sarno/Mind-Body Method", slug: "sarno-mind-body-method" },
      { id: 6, icon: "/images/doodles/icon-6.png", title: "Pediatric and Adolescent Integrative Medicine", slug: "pediatric-adolescent-integrative-medicine" },
      { id: 7, icon: "/images/doodles/icon-7.png", title: "Medical Cannabis", slug: "medical-cannabis" },
      { id: 8, icon: "/images/doodles/icon-8.png", title: "Nutritional Counseling", slug: "nutritional-counseling" }
    ],
    "Treatments": [
      { id: 11, icon: "/images/doodles/icon-11.png", title: "Intravenous Therapy", slug: "intravenous-therapy" },
      { id: 12, icon: "/images/doodles/icon-12.png", title: "Mistletoe Injection Therapy for Cancer", slug: "mistletoe-injection-therapy" },
      { id: 13, icon: "/images/doodles/icon-13.png", title: "Acupuncture and Chinese Medicine", slug: "acupuncture-chinese-medicine" },
      { id: 14, icon: "/images/doodles/icon-14.png", title: "Microneedling and Facial Acupuncture", slug: "microneedling-facial-acupuncture" },
      { id: 15, icon: "/images/doodles/icon-15.png", title: "Reiki", slug: "reiki" },
      { id: 16, icon: "/images/doodles/icon-16.png", title: "Somatic Experiencing", slug: "somatic-experiencing" },
      { id: 17, icon: "/images/doodles/icon-17.png", title: "KAP Assisted Psychotherapy", slug: "kap-assisted-psychotherapy" }
    ],
    "Programs": [
      { id: 21, icon: "/images/doodles/icon-21.png", title: "Concierge Integrative Medicine Care", slug: "concierge-integrative-medicine" },
      { id: 22, icon: "/images/doodles/icon-22.png", title: "Reversal of Cognitive Decline ReCODE", slug: "reversal-cognitive-decline-recode" },
      { id: 23, icon: "/images/doodles/icon-23.png", title: "Long Covid", slug: "long-covid" },
      { id: 24, icon: "/images/doodles/icon-24.png", title: "Shoemaker Protocol for CIRS and Mold Toxicity", slug: "shoemaker-protocol-cirs-mold" },
      { id: 25, icon: "/images/doodles/icon-25.png", title: "Mindfulness Based Stress Reduction MBSR", slug: "mindfulness-based-stress-reduction" },
      { id: 26, icon: "/images/doodles/icon-26.png", title: "Weight/Body Composition", slug: "weight-body-composition" },
      { id: 27, icon: "/images/doodles/icon-27.png", title: "Executive Coaching", slug: "executive-coaching" }
    ],
    "Ongoing Groups": [
      { id: 31, icon: "/images/doodles/icon-31.png", title: "Long COVID Medical Online Groups", slug: "long-covid-online-groups" },
      { id: 32, icon: "/images/doodles/icon-32.png", title: "ReCODE Support Group", slug: "recode-support-group" }
    ]
  };

  const categoryDescriptions = {
    "Consultations": "Medical in-person and telemedicine appointments",
    "Treatments": "Therapeutic body-centered modalities",
    "Programs": "Coordinated expert care for complex conditions",
    "Ongoing Groups": "Affordable medical support groups with our expert doctors",
  };

  const categories = Object.keys(servicesData);

  const getCategoryColor = (category) => {
    switch (category) {
      case "Consultations": return "bg-[var(--sw-hazel)]"; // #B9C1B3
      case "Treatments": return "bg-[var(--sw-privilege)]"; // #7A8775
      case "Programs": return "bg-[var(--sw-solitude)]"; // #99A7B8
      case "Ongoing Groups": return "bg-[var(--sw-searching)]"; // #586b86ff
      default: return "bg-gray-200";
    }
  };

  return (
    <section className="pt-12 bg-white">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[72px] leading-[72px] font-medium tracking-normal text-[var(--gw-primary)] mb-4 uppercase"
          style={{ 
            fontFamily: 'var(--font-gt-super)', 
            fontWeight: 700,
            lineHeight: '1.2'
          }}
          >
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide holistic medicine in DC via over 25 services:
          </p>
        </div>
      </div>

      {/* Layout: Rows of Categories (Edge to Edge) */}
      <div className="flex flex-col w-full">
        {categories.map((category) => {
          
          // Using exact hex codes because Tailwind does not compile opacity modifiers like `/20` 
          // on dynamic CSS variables unless they are defined explicitly as RGB values in globals.css!
          let rightBgColor = "bg-transparent";
          if (category === "Consultations") rightBgColor = "bg-[#B9C1B3]/20";
          if (category === "Treatments") rightBgColor = "bg-[#7A8775]/20";
          if (category === "Programs") rightBgColor = "bg-[#99A7B8]/20";
          if (category === "Ongoing Groups") rightBgColor = "bg-[#6C7F9A]/20";

          return (
            <div key={category} className="flex flex-col md:flex-row w-full mb-0 overflow-hidden relative">
              
              {/* Category Left Block */}
              <div className={`w-full md:w-[30%] lg:w-[30%] flex flex-col items-center md:items-end justify-center px-6 py-4 md:py-5 lg:py-6 md:pl-4 md:pr-8 lg:pl-6 lg:pr-10 xl:pr-16 transition-colors duration-300 ${getCategoryColor(category)} relative z-20`}>
                <h3 
                  className="text-4xl md:text-[24px] lg:text-[28px] xl:text-4xl 2xl:text-4xl font-medium text-white text-center md:text-right tracking-wide"
                  style={{ fontFamily: 'var(--font-gt-super)' }}
                >
                  {category}
                </h3>

                {/* Category Description */}
                <p className="mt-2 text-sm text-white text-center md:text-right max-w-[240px] leading-snug">
                  {categoryDescriptions[category]}
                </p>
                  
                {/* See More Button Moved Here */}
                <Link
                  href={`/services?category=${encodeURIComponent(category)}`}
                  className="mt-4 lg:mt-6 inline-flex items-center text-white font-bold text-sm hover:text-[var(--gw-blue)] transition-colors duration-300 group"
                >
                  See more 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </Link>
              </div>

              {/* Services Grid Right Block */}
              <div className={`w-full md:w-[70%] lg:w-[75%] ${rightBgColor} py-4 md:py-5 lg:py-6 px-6 sm:px-10 lg:px-12 xl:px-16 flex flex-col justify-center relative z-10`}>
                
                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 lg:gap-y-14 gap-x-6 md:gap-x-10">
                  {servicesData[category].map((service, index) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="relative text-left group flex-col items-start bg-transparent flex"
                    >
                      {/* Vertical Separator */}
                      <div className={`absolute top-2 bottom-2 -right-3 md:-right-[20px] w-px bg-[var(--gw-primary)]/15 hidden ${
                        index % 2 !== 1 ? 'sm:block' : 'sm:hidden'
                      } ${
                        index % 3 !== 2 ? 'md:block' : 'md:hidden'
                      } ${
                        index % 4 !== 3 ? 'lg:block' : 'lg:hidden'
                      }`} />

                      {/* Icon */}
                      <div className="mb-2">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Title */}
                      <h4
                        className="text-base md:text-lg font-semibold text-[var(--gw-primary)] mb-1 leading-tight group-hover:text-[var(--gw-blue)] transition-colors duration-300 pr-2"
                        style={{ fontFamily: "Ginto, Helvetica, sans-serif" }}
                      >
                        {service.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
