"use client";
import Image from "next/image";
import Link from "next/link";
import TitleBorder from "./titleBorder";
import React from "react";
type Step = {
  icon: string;
  title: string;
  desc: string;
};

type OffshoreProcessProps = {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  steps: Step[];
  backgroundImage: string;
  link: string;
};

export default function OffshoreProcess({
  title,
  subtitle,
  description,
  buttonText,
  link,
  steps,
  backgroundImage,
}: OffshoreProcessProps) {
  const Steps = React.useCallback(
    () => (
      <ol className="space-y-6 pl-4 list-none relative">
        {steps.map((step, index) => (
          <li key={index} className="relative pl-12">
            <span className="absolute left-0 top-1 bg-[#ff0042] text-white rounded-full flex items-center justify-center font-bold z-10">
              <Image
                src={step.icon}
                alt={`Step ${index + 1}`}
                width={40}
                height={40}
                className="rounded-full"
              />
            </span>
            <span className="text-[16.8px] font-semibold text-[#a3a3a3] leading-[25.2px] h-[25.1875px] inline-block">
              STEP {index + 1}
            </span>
            <br />
            <span className="text-white text-[24px] font-semibold leading-[36px]">
              {step.title}
            </span>
            <br />
            <span className="text-white font-['PT_Serif',serif] text-[16px] font-normal leading-[25.5px]">
              {step.desc}
            </span>
            {index !== steps.length - 1 && (
              <div className="absolute left-[20px] top-[30px] h-full w-[4px] border-l border-dashed border-white z-0"></div>
            )}
          </li>
        ))}
      </ol>
    ),
    [steps]
  );
  return (
    <section className="relative">
      {/* Background fixed only inside this section */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative flex flex-col md:gap-6 md:flex-row max-w-7xl mx-auto py-12 px-4 md:py-24 md:px-8 min-h-screen">
        {/* Left side sticky */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:sticky top-24 self-start">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <h3 className="text-2xl font-bold text-[#ff0042]  mb-2">
            {subtitle}
          </h3>
          <TitleBorder />
          <p className="text-white font-['PT_Serif',serif] text-[17px] font-normal leading-[25.5px] mb-4">
            {description || ""}
          </p>
          <Link href={link}>
            <button className="bg-[#ff0042] hover:bg-[#e6003c] text-white px-4 py-2 rounded">
              {buttonText}
            </button>
          </Link>
        </div>

        {/* Right side steps with dotted vertical line */}
        <div className="md:w-1/2">
          <Steps />
        </div>
      </div>
    </section>
  );
}
