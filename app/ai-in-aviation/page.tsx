import AiSolution from "../components/aiSolution";
import BookConsultation from "../components/bookConsultation";
import ClientsSection from "../components/clientSection";
import ConsultationBanner from "../components/consultationBanner";
import HeroSection from "../components/heroSection";
import AviationOverview from "../components/industryOverview";
import KeyBenefits from "../components/keyBenefits";
import {
  aiSolutions,
  aviationIndustryOverview,
  heroSectionData,
  keyBenefits,
  technologiesSection,
  consultationBanner,
} from "../lib/ai-in-aviation-data";
import { clientData } from "../lib/clientData";

const AiInAviation = () => {
  return (
    <>
      <main className="relative sm:min-h-[calc(100dvh-56px)] min-h-[80vh] lg:min-h-[calc(100dvh-73px)] flex flex-col justify-evenly items-center text-white !p-0 custom-scrollbar overflow-hidden">
        <HeroSection {...heroSectionData} />
      </main>
      <ClientsSection {...clientData} />
      <AviationOverview {...aviationIndustryOverview} />
      <AiSolution {...aiSolutions} />
      <KeyBenefits {...keyBenefits} />
      <ClientsSection {...technologiesSection} />
      <ConsultationBanner {...consultationBanner} />
      <BookConsultation />
    </>
  );
};

export default AiInAviation;
