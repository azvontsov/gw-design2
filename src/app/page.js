
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsEvents from "@/components/NewsEvents";
import OurServices from "@/components/OurServices";
import Providers from "@/components/Providers";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import AboutSnippet from "@/components/AboutSnippet";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--gw-background)] font-sans antialiased">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <AboutSnippet />
        <OurServices />
        
        {/* Providers Section - maybe add a background color here */}
        <div className="bg-white">
            <Providers />
        </div>
        <NewsEvents />

        {/* Reviews Section */}
        <section className="bg-[var(--gw-secondary-light)]">
            <Reviews />
        </section>

        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
