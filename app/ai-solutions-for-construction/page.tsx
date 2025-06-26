import AiSolution from "../../components/aiSolution";
import AiSolution3 from "../../components/aiSolution3";
import BookConsultation from "../../components/bookConsultation";
import ClientsSection from "../../components/clientSection";
import ConsultationBanner from "../../components/consultationBanner";
import HeroSection from "../../components/heroSection";
import IndustryOverview from "../../components/industryOverview";
import { clientData } from "../../lib/clientData";
import SuccessStories from "../../components/successStoriesSlider";
import { technologiesSection } from "../../lib/ai-in-aviation-data";
import {
  tabs,
  keyAreas,
  heroSectionData,
  industryOverview,
  aiTabConstructionSolutions,
  aiSolutionsData,
  successStoriesData
} from "../../lib/ai-solutions-for-construction/ai-solutions-for-construction";

const AiInAviation = () => {
  return (
    <>
      <main className="relative min-h-[calc(100dvh-56px)] lg:min-h-[calc(100dvh-73px)] flex flex-col justify-evenly items-center text-white !p-0 custom-scrollbar overflow-hidden">
        <HeroSection {...heroSectionData} />
      </main>
      <ClientsSection {...clientData} />
      <IndustryOverview {...industryOverview} keyAreas={keyAreas} />
      <AiSolution3 {...aiTabConstructionSolutions} tabs={tabs} />
      <AiSolution {...aiSolutionsData} />
      <ClientsSection {...technologiesSection} />
      <SuccessStories {...successStoriesData} />
      <ConsultationBanner
        title="Build Smarter with AI Solutions"
        subtitle="Reimagine construction with AI solutions built to predict, optimize, and power real-time decisions from ground to completion."
        buttonText="Request a Consultation"
        backgroundImage="images/ai-solutions-for-construction/construction-btn-bg.webp"
        onButtonClick="/30-min-free-consultation"
      />
      <BookConsultation />
    </>
  );
};

export default AiInAviation;
