"use client";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorkSection from "@/components/HowItWorkSection";
import ProofAndCtaBtn from "@/components/ProofAndCtaBtn";
import Testimonials from "@/components/Testimonials";
import WaitlistForm from "@/components/WaitlistForm";
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

      {/* ProblemSection */}
      <SolutionSection />

      <ProofAndCtaBtn />

      {/* Testimonials */}
      <Testimonials />

      {/* Wailist FOrm */}
      <WaitlistForm />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
