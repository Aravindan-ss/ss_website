import HeroSection from "../../components/heroSection";
import {
  consultationBannerData,
  heroSectionData,
  logisticsIndustryOverview,
  aiSolutions,
  keyBenefits,
  technologiesSection,
  successStories,
} from "../../lib/ai-in-logistics/ai-in-logistics";
import ConsultationBanner from "../../components/consultationBanner";
import ClientsSection from "../../components/clientSection";
import { clientData } from "../../lib/clientData";
import IndustryOverview from "../../components/industryOverview";
import KeyBenefits from "../../components/keyBenefits";
import BookConsultation from "../../components/bookConsultation";
import AiSolution2 from "../../components/aisolution2";
import SuccessStories from "../../components/successStoriesSlider";
export default function AiInLogistics() {
  return (
    <>
      <main className="relative min-h-[calc(100dvh-56px)] lg:min-h-[calc(100dvh-73px)] flex flex-col justify-evenly items-center text-white !p-0 custom-scrollbar overflow-hidden">
        <HeroSection {...heroSectionData} />
      </main>
      <ClientsSection {...clientData} />
      <IndustryOverview {...logisticsIndustryOverview} />
      <AiSolution2 {...aiSolutions} />
      <KeyBenefits {...keyBenefits} />
      <ClientsSection {...technologiesSection} />
      <SuccessStories {...successStories} />
      <ConsultationBanner {...consultationBannerData} />
      <BookConsultation />
    </>
  );
}
