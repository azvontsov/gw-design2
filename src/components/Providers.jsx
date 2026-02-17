"use client";

import Link from "next/link";

export default function Providers() {
  const providers = [
    {
      id: 1,
      name: "Angela Gabriel, MSOM, LAc, SEP",
      image: "/images/provider1.png",
      link: "#",
    },
    {
      id: 2,
      name: "Nina Paul",
      image: "/images/provider2.png",
      link: "#",
    },
    {
      id: 3,
      name: "Robert Pendergrast, MD, MPH, FAAP",
      image: "/images/provider3.png",
      link: "#",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-[var(--gw-primary)] mb-6">
            Our Team
          </h2>
          <p className="text-lg text-[var(--gw-text-muted)] max-w-2xl mx-auto leading-relaxed">
            We are a dedicated team of 20+ medical professionals, working
            together and combining our expertise to guide you toward optimal
            health.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-24 mb-16">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-6 filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-bold text-[var(--gw-primary)] max-w-[240px] leading-tight">
                {provider.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#"
            className="inline-block text-[var(--gw-text-muted)] text-lg hover:text-[var(--gw-primary)] transition-colors border-b border-transparent hover:border-[var(--gw-primary)] pb-1"
          >
            See all 20+ providers
          </Link>
        </div>
      </div>
    </section>
  );
}
