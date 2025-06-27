import AiSolution2 from "../../components/aisolution2";
import BookConsultation from "../../components/bookConsultation";
import ClientsSection from "../../components/clientSection";
import ConsultationBanner from "../../components/consultationBanner";
import HeroSection from "../../components/heroSection";
import AviationOverview from "../../components/industryOverview";
import KeyBenefits from "../../components/keyBenefits";
import SuccessStories from "../../components/successStoriesSlider";
import { clientData } from "../../lib/clientData";
import {
  aiSolutions,
  aviationIndustryOverview,
  consultationBanner,
  heroSectionData,
  keyBenefits,
  successStories,
  technologiesSection,
} from "../../lib/fintech-ai-solutions-data";

const AiInAviation = () => {
  return (
    <>
      <main className="relative min-h-[calc(100dvh-56px)] lg:min-h-[calc(100dvh-73px)] flex flex-col justify-evenly items-center text-white !p-0 custom-scrollbar overflow-hidden">
        <HeroSection {...heroSectionData} />
      </main>
      <ClientsSection {...clientData} />
      <AviationOverview {...aviationIndustryOverview} />
      <AiSolution2 {...aiSolutions} />
      <KeyBenefits {...keyBenefits} />
      <ClientsSection {...technologiesSection} />
      <SuccessStories {...successStories} />
      <ConsultationBanner {...consultationBanner} />
      <BookConsultation />
    </>
  );
};

export default AiInAviation;
