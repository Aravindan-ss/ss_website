import BookConsultation from "../../components/bookConsultation";
import HeroSection from "./HeroSection";
import ClientsSection from "./ClientsSection";
import DomainExpertiseSection from "../../components/DomainExpertiseSection/DomainExpertiseSection";
import ServiceCarousel from "../../components/ServiceCarousel/ServiceCarousel";
import FaqSection from "../../components/FAQ/FaqSection";
import WhyChooseUs from "../../components/WhyChooseUs";
import OffshoreProcess from "../../components/OffshoreProcess";
import OffshoreBenefits from "../../components/OffshoreBenefits";
import TechnologyStack from "../../components/TechnologyStack";
import {
  heroSectionData,
  clientData,
  services,
  title,
  description,
  domainExpertiseData,
  faqs,
  whyChooseUsData,
  offshoreProcess,
  offshoreBenefitsData,
  technologyStackData,
} from "../../lib/offshore-software-development-company/offshore-software-development-company";
export default function OffshoreSoftwareDevelopmentCompany() {
  return (
    <>
      <HeroSection {...heroSectionData} />
      <ClientsSection {...clientData} />
      <OffshoreBenefits {...offshoreBenefitsData} />
      <ServiceCarousel
        services={services}
        title={title}
        description={description}
      />
      <OffshoreProcess {...offshoreProcess} />
      <DomainExpertiseSection {...domainExpertiseData} />
      <WhyChooseUs {...whyChooseUsData} />
      <TechnologyStack {...technologyStackData} />
      <FaqSection {...faqs} />
      <BookConsultation />
    </>
  );
}
