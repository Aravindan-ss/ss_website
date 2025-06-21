// Main Page
import React from "react";
import Image from "next/image";
import ClientsSection from "./components/clientSection";
import IndustriesSection from "./components/industriesSection";
import ServicesSection from "./components/servicesSection";
import ChooseUs from "./components/chooseUs";
import CounterSection from "./components/counter";
import AwardSection from "./components/awards";
import TechStackSection from "./components/technology";
import Testimonials from "./components/testimonial";
import { mainPageData } from "./lib/mainPageData";
import { clientData } from "./lib/clientData";

const Home = () => {
  return (
    <>
      <main className="relative min-h-[calc(100dvh-56px)] lg:min-h-[calc(100dvh-73px)] flex flex-col justify-evenly items-center text-white !p-0 custom-scrollbar overflow-hidden">
        <Image
          src={mainPageData?.backgroundImage}
          alt={mainPageData?.backgroundImageAlt}
          fill
          priority
          quality={100}
          className="object-cover object-center -z-10"
        />
        <div className="w-full px-4 sm:px-6 lg:px-8 container flex flex-col gap-[50px]">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="w-full lg:w-9/12 px-3">
              <h1 className="sr-only">{mainPageData?.title}</h1>
              <h2 className="leading-[1.2] text-white font-bold text-[calc(1.5rem+2.5vw)] xl:text-[calc(1.5rem+1.75vw)] lg:text-[calc(1.5rem+2vw)]">
                <span className="font-bold text-[1.5em] lg:text-[1.3em] text-center">
                  {mainPageData?.heading}
                </span>
                <br /> {mainPageData?.subHeading}
              </h2>
              <p className="text-white leading-[1.5] my-6 text-[1rem] xl:text-[1.25rem]">
                {mainPageData?.description}
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-wrap gap-x-8 gap-y-12 px-4 w-full justify-around items-center sm:relative mt-md-5 mt-lg-5 sm-number-line">
          <CounterSection />
        </div>
      </main>
      <ClientsSection {...clientData} />
      <IndustriesSection />
      <ServicesSection />
      <ChooseUs />
      <AwardSection />
      <TechStackSection />
      <Testimonials />
    </>
  );
};

export default Home;
