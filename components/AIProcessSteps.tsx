"use client";
import Image from "next/image";
import React from "react";

interface Step {
  id: number;
  icon: string;
  title: string;
  description: string;
  range: string;
}

type AIProcessStepsProps = {
  title: string | React.ReactNode;
  description: string;
  steps: Step[];
};

export default function AIProcessSteps({
  title,
  description,
  steps,
}: AIProcessStepsProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
        {title}
      </h2>
      <p className="text-center text-gray-600 mb-10">{description}</p>

      <div className="flex flex-col gap-2">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-start gap-4 p-4 border border-gray-300 rounded-md hover:shadow transition"
          >
            <div className="flex-shrink-0 text-sm text-gray-500 w-16">
              {step.range}
            </div>
            <div className="flex-shrink-0">
              <Image src={step.icon} alt={step.title} width={32} height={32} />
            </div>
            <div>
              <h3 className="text-2xl md:text-[calc(1.25rem+0.75vw)] font-bold text-[#232c3b] mb-2">{step.title}</h3>
              {step.description && (
                <p className="font-[PT_Serif,serif] text-[17px] md:text-[18px] font-normal leading-[34px] mt-1">{step.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
