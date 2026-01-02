import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import SessionsSection from "@/components/home/SessionsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProgramsSection />
        <WhyUsSection />
        <SessionsSection />
        <TestimonialsSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
