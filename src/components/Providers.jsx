"use client";

import Link from "next/link";

export default function Providers() {
  const providers = [
    {
      id: 1,
      name: "Ashley Drapeau, PA-C, L.Ac., MPAS, MAC",
      image: "/images/providers/ashley.jpeg",
      link: "/people/ashley-drapeau-pa-c-l-ac-mpas-mac",
    },
    {
      id: 4,
      name: "Mikhail Kogan, MD",
      image: "/images/providers/misha.jpg",
      link: "/people/mikhail-kogan-md",
    },
    {
      id: 5,
      name: "Deirdre Orceyre, ND, MSOM, L.Ac.",
      image: "/images/providers/dierdre.jpg",
      link: "/people/deirdre-orceyre-nd-lac",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[72px] leading-[72px] font-medium tracking-normal text-[var(--gw-primary)] mb-4 uppercase"
          style={{ 
            fontFamily: 'var(--font-gt-super)', 
            fontWeight: 700,
            lineHeight: '1.2'
          }}
          >
            Our Team
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are a dedicated team of 20+ medical professionals, working
            together and combining our expertise to guide you toward optimal
            health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="flex flex-col items-center text-center gap-4 group cursor-pointer"
            >
              <Link href={provider.link || "#"} className="relative w-48 h-48 md:w-56 md:h-56 xl:w-64 xl:h-64 overflow-hidden rounded-full bg-[#E5E1D8] transition-transform duration-500 group-hover:scale-105 block flex items-center justify-center border border-gray-200">
                {provider.image ? (
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-[6px] opacity-100 scale-125">
                      <div className="flex gap-[6px]">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <div className="flex gap-[6px]">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <div className="flex gap-[6px]">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                  </div>
                )}
              </Link>

              <Link href={provider.link || "#"}>
                <h3
                  className="text-md font-bold text-[var(--gw-primary)] m-3 px-4 hover:text-[var(--gw-blue)] transition-colors"
                  style={{ fontFamily: "Ginto, Helvetica, sans-serif" }}
                >
                  {provider.name}
                </h3>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/people"
            className="text-[var(--gw-deep-blue)] font-medium hover:text-[var(--gw-secondary)] transition-all flex items-center gap-1 group w-fit text-lg"
          >
            <span className="border-b border-transparent group-hover:border-current">
              See all 20+ providers
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
