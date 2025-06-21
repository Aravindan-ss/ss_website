import AiSolution from "../components/aiSolution";
import AiSolution1 from "../components/aiSolution1";
import AiSolution2 from "../components/aisolution2";
import AiSolution3 from "../components/aiSolution3";
import BookConsultation from "../components/bookConsultation";
import ClientsSection from "../components/clientSection";
import ConsultationBanner from "../components/consultationBanner";
import HeroSection from "../components/heroSection";
import AviationOverview from "../components/industryOverview";
import KeyBenefits from "../components/keyBenefits";
import SuccessStories from "../components/successStoriesSlider";

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
        <HeroSection
          bgImage="/images/ai-in-aviation-images/aviation-banner-bg.webp"
          altText="background image"
          title="AI in Aviation | custom AI solutions for AI industry"
          heading="Smarter Skies: AI for the"
          subheading="Future Of Aviation"
          subheadingclass="text-[#d8f629]"
          description="Smarter skies start with AI, boosting flight efficiency, elevating safety standards, and crafting seamless, personalized experiences from takeoff to touchdown."
          textAlign="left"
          textColor="text-white"
          showButton={true}
          buttonText="Request a Consultation"
          buttonLink="/contact"
        />
      </main>
      <ClientsSection
        title="Our Clients"
        subtitle="Trusted by Leading Companies"
        description="We’ve collaborated with some of the world’s most innovative companies to deliver groundbreaking digital solutions."
        clientLogos={[
          { src: "/logos/google.svg", alt: "Google" },
          { src: "/logos/meta.svg", alt: "Meta" },
          { src: "/logos/amazon.svg", alt: "Amazon" },
          { src: "/logos/microsoft.svg", alt: "Microsoft" },
        ]}
      />
      <AviationOverview
        sectionLabel="Industry Overview"
        headline="Unlocking the Future of Aviation with AI"
        description="From flight scheduling to predictive maintenance, AI solutions streamline aviation operations, enhance safety, reduce delays, and optimize productivity across the entire air travel ecosystem. Explore the six key areas where AI is revolutionizing the aviation industry."
        keyAreas={keyAreas}
        imageSrc="/images/ai-in-aviation-images/aviation-second-sec.webp"
      />
      <AiSolution
        label="AI Solutions"
        heading="Transforming Aviation with AI"
        description="Discover how our AI-driven solutions can transform your aviation operations, from predictive maintenance to customer experience personalization."
        features={[
          {
            image: "/images/ai-in-aviation-images/AI-Solution-1.webp",
            alt: "Flight Scheduling & Route Optimization",
            title: "Flight Scheduling & Route Optimization",
            content:
              "Optimize routes and schedules for maximum efficiency and reduced delays.",
          },
          {
            image: "/images/ai-in-aviation-images/AI-Solution-2.webp",
            alt: "Predictive Maintenance",
            title: "Predictive Maintenance",
            content:
              "Reduce downtime and costs by predicting maintenance needs before failures occur.",
          },
          {
            image: "/images/ai-in-aviation-images/AI-Solution-3.webp",
            alt: "Air Traffic Management",
            title: "Air Traffic Management",
            content:
              "Enhance safety and efficiency in airspace management with intelligent systems.",
          },
          {
            image: "/images/ai-in-aviation-images/AI-Solution-4.webp",
            alt: "Baggage Handling & Tracking",
            title: "Baggage Handling & Tracking",
            content:
              "Minimize lost luggage and improve passenger satisfaction with smart tracking.",
          },
          {
            image: "/images/ai-in-aviation-images/AI-Solution-5.webp",
            alt: "Customer Experience Personalization",
            title: "Customer Experience Personalization",
            content:
              "Deliver tailored experiences to passengers using AI-driven insights.",
          },
        ]}
      />
      <AiSolution1
        label="AI in EdTech"
        heading="Revolutionizing Education with AI"
        description="Explore how AI-driven solutions are transforming the education sector, from personalized assignments to automated grading and student engagement."
        buttonText="Learn More"
        image="/images/ai-in-aviation-images/edtech-robot.webp"
        features={[
          {
            id: 1,
            title: "AI-Powered Assignment Tools",
            description:
              "We equip your platform with intelligent assignment generators that personalize tasks based on learning pace, topic relevance, and student ability.",
            icon: "/images/ai-in-aviation-images/AI1.webp",
            image: "/images/ai-in-aviation-images/AI-Solution-4.webp",
          },
          {
            id: 2,
            title: "Student Progress Monitoring",
            description:
              "Track student progress in real-time with AI that provides actionable insights and recommends improvements.",
            icon: "/icons/progress.svg",
          },
          {
            id: 3,
            title: "Automated Chatbots for Student Queries",
            description:
              "Deploy AI chatbots to instantly handle student questions, improving engagement and reducing manual workload.",
            icon: "/icons/chatbot.svg",
          },
          {
            id: 4,
            title: "AI-Powered Auto-Grading",
            description:
              "Save time and reduce grading errors with intelligent grading tools that adapt to assignment types.",
            icon: "/icons/autograde.svg",
          },
          {
            id: 5,
            title: "Study Content Recommendations",
            description:
              "AI helps students by suggesting resources based on their performance and learning style.",
            icon: "/icons/study.svg",
          },
        ]}
      />
      <AiSolution2
        heading="Future of FinTech Built with AI"
        subheading="Soft Suave's AI solutions empower fintech with intelligent automation, data-driven insights, and enhanced efficiency, shaping the future of financial innovation. Here are some potential AI-driven solutions we offer."
        buttonText="Get In Touch"
        cards={fintechCards}
      />
      <AiSolution3
        tag="AI Solutions"
        heading="AI Solutions for Safer & Faster Construction"
        subheading="Built to meet the demands of modern construction, our AI solutions support safer practices, faster execution, and greater efficiency from start to finish."
        tabs={tabs}
      />
      <KeyBenefits
        tag="Key Benefits"
        heading="Why AI is a Game-Changer for Aviation"
        subheading="AI is driving a new era in aviation by enabling smarter operations, predictive insights, and real-time automation. It enhances safety, reduces costs, and delivers seamless, personalized experiences from ground to sky. Here's how AI-driven solutions can make a difference."
        cards={benefits}
      />
      <AiSolution
        label="Key Benefits"
        heading="Why AI is a Game-Changer for Aviation"
        description="Discover how our AI-driven solutions can transform your aviation operations, from predictive maintenance to customer experience personalization."
        features={[
          {
            image: "",
            alt: "",
            title: "Flight Scheduling & Route Optimization",
            content:
              "Optimize routes and schedules for maximum efficiency and reduced delays.",
          },
          {
            image: "",
            alt: "",
            title: "Predictive Maintenance",
            content:
              "Reduce downtime and costs by predicting maintenance needs before failures occur.",
          },
          {
            image: "",
            alt: "",
            title: "Air Traffic Management",
            content:
              "Enhance safety and efficiency in airspace management with intelligent systems.",
          },
          {
            image: "",
            alt: "",
            title: "Baggage Handling & Tracking",
            content:
              "Minimize lost luggage and improve passenger satisfaction with smart tracking.",
          },
          {
            image: "",
            alt: "",
            title: "Customer Experience Personalization",
            content:
              "Deliver tailored experiences to passengers using AI-driven insights.",
          },
        ]}
      />
      <ClientsSection
        title="Technologies"
        subtitle="Trusted by Leading Companies"
        description="We’ve collaborated with some of the world’s most innovative companies to deliver groundbreaking digital solutions."
        clientLogos={[
          { src: "/images/atomise.webp", alt: "Google" },
          { src: "/images/atomise.webp", alt: "Meta" },
          { src: "/images/atomise.webp", alt: "Amazon" },
          { src: "/images/atomise.webp", alt: "Microsoft" },
          { src: "/images/atomise.webp", alt: "Google" },
          { src: "/images/atomise.webp", alt: "Google" },
          { src: "/images/atomise.webp", alt: "Meta" },
          { src: "/images/atomise.webp", alt: "Amazon" },
          { src: "/images/atomise.webp", alt: "Microsoft" },
          { src: "/images/atomise.webp", alt: "Google" },
          { src: "/images/atomise.webp", alt: "Google" },
          { src: "/images/atomise.webp", alt: "Meta" },
          { src: "/images/atomise.webp", alt: "Amazon" },
          { src: "/images/atomise.webp", alt: "Microsoft" },
          { src: "/images/atomise.webp", alt: "Google" },
        ]}
      />
      <SuccessStories />
      <ConsultationBanner
        title="Ready to revolutionize your aviation operations?"
        subtitle="Request a Consultation to explore how our AI solutions in aviation can help you achieve smarter, more efficient operations."
        buttonText="Request a Consultation"
        backgroundImage="/images/ai-in-aviation-images/avaition-btn-bg.webp"
        onButtonClick="/30-min-free-consultation"
      />
      <BookConsultation />
    </>
  );
};

export default AiInAviation;
