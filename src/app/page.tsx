"use client";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import CTA from "@/components/CTA";
import HowItWorkSection from "@/components/HowItWorkSection";
import WhyItWork from "@/components/WhyItWork";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="relative w-full h-full bg-gray-50 text-gray-900">
      {/* Hero section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* How it Works Section */}
      <HowItWorkSection />


      <WhyItWork />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FaqSection />

      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
