import HeroSection from "../../components/heroSection";
import {
  heroSectionData,
  healthcareIndustryOverview,
  aiSolutions,
  technologiesSection,
  successStoriesData,
  consultationBannerData,
  keyBenefits
} from "../../lib/ai-solutions-in-healthtech/ai-solutions-in-healthtech";
import { clientData } from "../../lib/clientData";
import KeyBenefits from "../../components/keyBenefits";
import ClientsSection from "../../components/clientSection";
import IndustryOverview from "../../components/industryOverview";
import AiSolution2 from "../../components/aisolution2";
import BookConsultation from "../../components/bookConsultation";
import SuccessStories from "../../components/successStoriesSlider";
import ConsultationBanner from "../../components/consultationBanner";
export default function AiSolutionsInHealthTech() {
  return (
    <>
      <main className="relative min-h-[calc(100dvh-56px)] lg:min-h-[calc(100dvh-73px)] flex flex-col justify-evenly items-center text-white !p-0 custom-scrollbar overflow-hidden">
        <HeroSection {...heroSectionData} />
      </main>
      <ClientsSection {...clientData} />
      <IndustryOverview {...healthcareIndustryOverview} />
      <AiSolution2 {...aiSolutions} />
      <KeyBenefits {...keyBenefits}/>
      <ClientsSection {...technologiesSection} />
      <SuccessStories {...successStoriesData} />
      <ConsultationBanner {...consultationBannerData} />
      <BookConsultation />
    </>
  );
}
