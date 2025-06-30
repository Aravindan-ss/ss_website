import HeroSection from "../../components/heroSection";
import ClientsSection from "../../components/clientSection";
import {
  heroSectionData,
  industryOverview,
  consultationBannerData,
  technologiesSection,
  successStoriesData,
  keyBenefits,
    aiSolutionsData,
} from "../../lib/ai-solutions-for-ecommerce/ai-solutions-for-ecommerce";
import { clientData } from "../../lib/clientData";
import IndustryOverview from "../../components/industryOverview";
import SuccessStories from "../../components/successStoriesSlider";
import AiSolution1 from "../../components/aiSolution1";
import BookConsultation from "../../components/bookConsultation";
import KeyBenefits1 from "../../components/keyBenefits1";
import ConsultationBanner from "../../components/consultationBanner";
export default function AiSolutionsForEcommerce() {
  return (
    <>
      <main className="relative min-h-[calc(100dvh-56px)] lg:min-h-[calc(100dvh-73px)] flex flex-col justify-evenly items-center text-white !p-0 custom-scrollbar overflow-hidden">
        <HeroSection {...heroSectionData} />
      </main>
      <ClientsSection {...clientData} />
      <IndustryOverview {...industryOverview} />
      <AiSolution1 {...aiSolutionsData} />
      <KeyBenefits1 {...keyBenefits} />
      <ClientsSection {...technologiesSection} />
      <SuccessStories {...successStoriesData} />
      <ConsultationBanner {...consultationBannerData} />
      <BookConsultation />
    </>
  );
}
