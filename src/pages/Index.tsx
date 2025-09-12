import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Market from "@/components/Market";
import HowItWorks from "@/components/HowItWorks";
import FuturePlans from "@/components/FuturePlans";
import Operators from "@/components/Operators";
import Download from "@/components/Download";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Market />
        <HowItWorks />
        <FuturePlans />
        <Operators />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
