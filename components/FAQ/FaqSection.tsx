"use client";

import { useState } from "react";
import TitleBorder from "../titleBorder";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title: string;
  highlight: string;
  description: string;
  faqs: FaqItem[];
};

export default function FaqSection({
  title,
  highlight,
  description,
  faqs,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left side sticky title and description */}
      <div className="md:col-span-1 md:sticky top-24 self-start">
        <h2 className="text-2xl md:text-3xl font-bold text-[#232c3b] mb-2 md:pr-2">
          {title} <span className="text-[#ff0042]">{highlight}</span>
        </h2>

        <TitleBorder />
        {/* </div> */}
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Right side FAQ accordion */}
      <div className="md:col-span-2 space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-sm overflow-hidden shadow-lg transition-shadow border-l-4 border-[#ff0042]"
            >
              <button
                onClick={() => toggle(index)}
                className={`w-full text-left px-4 py-4 flex justify-between items-center font-medium transition-colors ${
                  isOpen
                    ? "text-[#ff0042]"
                    : "text-[#232c3b] hover:text-[#ff0042]"
                }`}
              >
                <span>{item.question}</span>
                <span
                  className={`ml-4 flex items-center justify-center w-5 h-5 rounded bg-black text-white text-lg font-bold transition-colors ${
                    isOpen ? "bg-black" : "bg-black"
                  }`}
                >
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              <div
                className={`px-4 text-gray-800 transition-all duration-300 ease-in-out overflow-hidden leading-[2rem] font-semibold ${
                  isOpen
                    ? "max-h-40 pb-4 opacity-100"
                    : "max-h-0 pb-0 opacity-0"
                }`}
                style={{
                  transitionProperty: "max-height, opacity, padding-bottom",
                }}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
