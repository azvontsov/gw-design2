
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MembershipSection from "@/components/MembershipSection";
import NewsEvents from "@/components/NewsEvents";
import OurServices from "@/components/OurServices";
import DynamicHero from "@/components/DynamicHero";
import Providers from "@/components/Providers";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        
        {/* Divider */}
        <div className="h-[1px] bg-gray-200 mx-4 sm:mx-6 lg:mx-12 2xl:mx-24"></div>
        
        <NewsEvents />
        
       
        
        <DynamicHero />
        
       
        
        <OurServices />
        
        {/* Divider */}
        <div className="h-[1px] bg-[var(--gw-powder-blue)] mx-4 sm:mx-6 lg:mx-12 2xl:mx-24"></div>
        
        <Providers />
        
        {/* Divider */}
        <div className="h-[1px] bg-[var(--gw-powder-blue)] mx-4 sm:mx-6 lg:mx-12 2xl:mx-24"></div>
        
        <FAQ />
        {/* <MembershipSection /> */}
      </main>
      <Footer />
    </div>
  );
}
