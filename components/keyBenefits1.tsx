"use client";

import { useState } from "react";
import Image from "next/image";

interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

interface BenefitShowcaseProps {
  label: string;
  heading: string;
  description: string;
  benefits: BenefitItem[];
}

function KeyBenefits1({
  label,
  heading,
  description,
  benefits,
}: BenefitShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        {/* Headings */}
        <div className="lg:w-2/3 mb-12">
          <span className="caveat-custom text-[34px] font-extrabold text-[#ff0042] mb-2 block">
            {label}
          </span>
          <h2 className="text-2xl md:text-[calc(1.25rem+0.75vw)] font-bold text-[#232c3b] mb-4">
            {heading}
          </h2>
          <p className="text-[17px] text-gray-600 leading-loose md:leading-[1.75]">
            {description}
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Scroll Menu */}
          <div className="md:w-[50%] bg-[#ffeef2] p-4 rounded-xl overflow-y-auto max-h-[360px]">
            {benefits.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer py-8 px-10 border-b text-[24px] border-gray-300 transition font-medium ${
                  activeIndex === index
                    ? "text-[#ff0042] font-semibold"
                    : "text-gray-500"
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Right Card */}
          <div className="md:w-[50%] border-4 border-gray-500 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div>
                <Image
                  src={benefits[activeIndex].icon}
                  alt={benefits[activeIndex].title}
                  width={64}
                  height={64}
                />
                <h3 className="text-xl md:text-[24px] font-bold mb-2">
                  {benefits[activeIndex].title}
                </h3>
                <p className="text-[17px] text-gray-600 leading-loose md:leading-[1.75]">
                  {benefits[activeIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyBenefits1;
