import AiSolution1 from "../../components/aiSolution1";
import BookConsultation from "../../components/bookConsultation";
import ClientsSection from "../../components/clientSection";
import ConsultationBanner from "../../components/consultationBanner";
import HeroSection from "../../components/heroSection";
import AviationOverview from "../../components/industryOverview";
import KeyBenefits1 from "../../components/keyBenefits1";
import SuccessStories2 from "../../components/successStories2";
import {
  aiSolutions,
  aviationIndustryOverview,
  consultationBanner,
  heroSectionData,
  keyBenefits,
  successStories,
  technologiesSection,
} from "../../lib/ai-solutions-in-edutech-data";
import { clientData } from "../../lib/clientData";

const AiInAviation = () => {
  return (
    <>
      <main className="relative min-h-[calc(100dvh-56px)] lg:min-h-[calc(100dvh-73px)] flex flex-col justify-evenly items-center text-white !p-0 custom-scrollbar overflow-hidden">
        <HeroSection {...heroSectionData} />
      </main>
      <ClientsSection {...clientData} />
      <AviationOverview {...aviationIndustryOverview} />
      <AiSolution1 {...aiSolutions} />
      <KeyBenefits1 {...keyBenefits} />
      <ClientsSection {...technologiesSection} />
      <SuccessStories2 {...successStories} />
      <ConsultationBanner {...consultationBanner} />
      <BookConsultation />
    </>
  );
};

export default AiInAviation;
