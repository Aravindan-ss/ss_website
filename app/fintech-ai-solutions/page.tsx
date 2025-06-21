import AiSolution2 from "../components/aisolution2";
import BookConsultation from "../components/bookConsultation";
import ClientsSection from "../components/clientSection";
import ConsultationBanner from "../components/consultationBanner";
import HeroSection from "../components/heroSection";
import AviationOverview from "../components/industryOverview";
import KeyBenefits from "../components/keyBenefits";
import SuccessStories from "../components/successStoriesSlider";
import { clientData } from "../lib/clientData";
import {
  aiSolutions,
  aviationIndustryOverview,
  consultationBanner,
  heroSectionData,
  keyBenefits,
  successStories,
  technologiesSection,
} from "../lib/fintech-ai-solutions-data";

const keyAreas = [
  {
    icon: "/images/ai-in-aviation-images/AI1.webp",
    title: "Flight Scheduling & Route Optimization",
  },
  {
    icon: "/images/ai-in-aviation-images/AI2.webp",
    title: "Predictive Maintenance",
  },
  {
    icon: "/images/ai-in-aviation-images/AI3.webp",
    title: "Air Traffic Management",
  },
  {
    icon: "/images/ai-in-aviation-images/AI4.webp",
    title: "Baggage Handling & Tracking",
  },
  {
    icon: "/images/ai-in-aviation-images/AI5.webp",
    title: "Customer Experience Personalization",
  },
  {
    icon: "/images/ai-in-aviation-images/AI6.webp",
    title: "Safety & Security Monitoring",
  },
];

const fintechCards = [
  {
    id: 1,
    icon: "/icons/payment-icon.svg",
    title: "AI-Driven Transaction Optimization & Security",
    description:
      "We provide intelligent solutions for seamless payment tracking, multi-token processing, and proactive fraud prevention, ensuring secure and efficient financial operations.",
    image: "/images/payment.jpg",
  },
  {
    id: 2,
    icon: "/icons/payment-icon.svg",
    title: "AI-Driven Transaction Optimization & Security",
    description:
      "We provide intelligent solutions for seamless payment tracking, multi-token processing, and proactive fraud prevention, ensuring secure and efficient financial operations.",
    image: "/images/payment.jpg",
  },
  {
    id: 3,
    icon: "/icons/payment-icon.svg",
    title: "AI-Driven Transaction Optimization & Security",
    description:
      "We provide intelligent solutions for seamless payment tracking, multi-token processing, and proactive fraud prevention, ensuring secure and efficient financial operations.",
    image: "/images/payment.jpg",
  },
  {
    id: 4,
    icon: "/icons/payment-icon.svg",
    title: "AI-Driven Transaction Optimization & Security",
    description:
      "We provide intelligent solutions for seamless payment tracking, multi-token processing, and proactive fraud prevention, ensuring secure and efficient financial operations.",
    image: "/images/payment.jpg",
  },
  {
    id: 5,
    icon: "/icons/payment-icon.svg",
    title: "AI-Driven Transaction Optimization & Security",
    description:
      "We provide intelligent solutions for seamless payment tracking, multi-token processing, and proactive fraud prevention, ensuring secure and efficient financial operations.",
    image: "/images/payment.jpg",
  },
  {
    id: 6,
    icon: "/icons/chart.svg",
    title: "Predictive Financial Analytics",
    description:
      "Leverage data-driven insights to anticipate market trends, risks, and opportunities with real-time predictive models.",
    image: "/images/analytics.jpg",
  },
  // Add
];

const tabs = [
  {
    label: "Smart Scheduling",
    icon: "/icons/calendar.svg",
    number: "01",
    title: "Immersive Property Visualization & Lifecycle Intelligence",
    description:
      "We offer AI-powered 360-degree virtual property visualization and smart CRM with predictive property lifecycle tracking for dynamic, data-driven customer experiences.",
    image: "/images/ai-in-aviation-images/AI-Solution-4.webp",
  },
  {
    label: "Safety First",
    icon: "/icons/safety.svg",
    number: "02",
    title: "AI for Construction Safety Compliance",
    description:
      "AI sensors monitor real-time site conditions to ensure safer operations, minimize accidents, and enforce compliance.",
    image: "/images/safety-compliance.png",
  },
  {
    label: "Smart Scheduling",
    icon: "/icons/calendar.svg",
    number: "03",
    title: "Immersive Property Visualization & Lifecycle Intelligence",
    description:
      "We offer AI-powered 360-degree virtual property visualization and smart CRM with predictive property lifecycle tracking for dynamic, data-driven customer experiences.",
    image: "/images/construction-hero.png",
  },
  {
    label: "Safety First",
    icon: "/icons/safety.svg",
    number: "04",
    title: "AI for Construction Safety Compliance",
    description:
      "AI sensors monitor real-time site conditions to ensure safer operations, minimize accidents, and enforce compliance.",
    image: "/images/safety-compliance.png",
  },
  {
    label: "Smart Scheduling",
    icon: "/icons/calendar.svg",
    number: "05",
    title: "Immersive Property Visualization & Lifecycle Intelligence",
    description:
      "We offer AI-powered 360-degree virtual property visualization and smart CRM with predictive property lifecycle tracking for dynamic, data-driven customer experiences.",
    image: "/images/construction-hero.png",
  },
  // Add more as needed...
];

const benefits = [
  {
    icon: "/images/ai-in-aviation-images/AI1.webp",
    title: "Proactive Maintenance & MRO Efficiency",
    description:
      "AI enables proactive maintenance and streamlines MRO operations to reduce downtime, improve aircraft health monitoring, and boost maintenance turnaround efficiency.",
    borderColor: "border-pink-500",
  },
  {
    icon: "/images/ai-in-aviation-images/AI1.webp",
    title: "Smarter Scheduling & Resource Optimization",
    description:
      "AI optimizes flight scheduling and resource allocation, ensuring better aircraft usage, crew deployment, and operational efficiency across airports and airline networks.",
    borderColor: "border-blue-500",
  },
  {
    icon: "/images/ai-in-aviation-images/AI1.webp",
    title: "Enhanced Air Traffic & Flight Management",
    description:
      "Advanced AI systems improve air traffic management by predicting congestion, optimizing flight paths, and enabling safer, more efficient navigation through busy airspace.",
    borderColor: "border-green-500",
  },
  {
    icon: "/images/ai-in-aviation-images/AI1.webp",
    title: "Personalized Passenger Experience & Service",
    description:
      "AI enhances the passenger journey by offering real-time personalization, reducing delays, and streamlining airport services for a seamless, engaging travel experience.",
    borderColor: "border-purple-500",
  },
  {
    icon: "/images/ai-in-aviation-images/AI1.webp",
    title: "Intelligent Security & Threat Detection",
    description:
      "AI strengthens security through smart threat detection, behavioral analysis, and predictive alerts, improving safety for passengers, crew, and ground operations.",
    borderColor: "border-yellow-400",
  },
  {
    icon: "/images/ai-in-aviation-images/AI1.webp",
    title: "Baggage Handling, Fuel Use & Cost Savings",
    description:
      "AI improves baggage tracking, logistics optimization, and fuel efficiency, reducing operational costs and environmental impact while ensuring reliable, on-time luggage delivery.",
    borderColor: "border-pink-500",
  },
];

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
