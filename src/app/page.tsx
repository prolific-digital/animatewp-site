import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Features from "@/components/Features";
import AdvancedSettings from "@/components/AdvancedSettings";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <WhyChoose />
        <section className="w-full">
          <Features />
          <AdvancedSettings />
        </section>
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
