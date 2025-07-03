import BookConsultation from "../../components/bookConsultation";
import FaqSection from "../../components/FAQ/FaqSection";
import {
  faqs,
  AIteckStackData,
  whyChooseUsData,
  partners,
  AIServicesTailored,
  aiProcessSteps,
  heroSectionData
} from "../../lib/ai-development-service/ai-development-service";
import Testimonials from "../../components/testimonial";
import AiTechStack from "./AiTechStack";
import HireAIDevelopers from "./HireAIDevelopers";
import WhyChooseUs from "./WhyChooseUs";
import PartnersSection from "../../components/PartnersSection";
import AIProcessSteps from "../../components/AIProcessSteps";
import HeroSection1 from "@/components/HeroSection1";
export default function AiDevelopmentService() {
  return (
    <>
      <HeroSection1 {...heroSectionData}  />
      <PartnersSection
        title="Trusted Partner for Startups and SMBs."
        partners={partners}
      />
      <WhyChooseUs {...AIServicesTailored} />
      <AIProcessSteps
        title={
          <>
            Our <span className="text-[#ff0042]">Personalized Approach</span> to
            AI Solutions
          </>
        }
        {...aiProcessSteps}
      />
      <WhyChooseUs {...whyChooseUsData} />
      <HireAIDevelopers
        title="Need Dedicated AI Developers?"
        description="Soft Suave has a pool of dedicated AI Developers who deliver your app development project on time and under your budget."
        buttonText="Hire AI Developers"
        buttonLink="/hire-dedicated-developers"
      />
      <AiTechStack {...AIteckStackData} />
      <Testimonials />
      <FaqSection {...faqs} />
      <BookConsultation />
    </>
  );
}
