import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsMarquee from "@/components/StatsMarquee";
import ValuesSection from "@/components/ValuesSection";
import AcademicAreasSection from "@/components/AcademicAreasSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProgramsSection from "@/components/ProgramsSection";
import TraditionsSection from "@/components/TraditionsSection";
import DivisionsSection from "@/components/DivisionsSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsMarquee />
      <ValuesSection />
      <AcademicAreasSection />
      <TestimonialsSection />
      <ProgramsSection />
      <TraditionsSection />
      <DivisionsSection />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Index;
