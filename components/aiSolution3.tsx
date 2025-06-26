"use client";
import { useState } from "react";
import Image from "next/image";

interface TabItem {
  label: string;
  icon: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

interface TabbedShowcaseProps {
  tag: string;
  heading: string;
  subheading: string;
  tabs: TabItem[];
}

const AiSolution3 = ({
  tag,
  heading,
  subheading,
  tabs,
}: TabbedShowcaseProps) => {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="lg:w-2/3 mb-12">
          <p className="caveat-custom text-[30px] font-bold text-[#ff0042] mb-3">
            {tag}
          </p>
          <h2 className="text-3xl md:text-[32px] font-bold text-[#232c3b] mb-4">
            {heading}
          </h2>
          <p className="text-gray-600 text-[17px] leading-relaxed mb-4">
            {subheading}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-6 mb-8 justify-around">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`flex items-center gap-2 border-b-2 px-2 pb-1 text-sm font-semibold cursor-pointer ${
                active === idx
                  ? "text-[#f20656] border-[#f20656]"
                  : "text-gray-700 border-transparent"
              } transition`}
            >
              <Image src={tab.icon} alt={tab.label} width={20} height={20} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 space-y-4">
            <p className="text-4xl font-bold text-[#f20656]">
              {current.number}
            </p>
            <h3 className="text-2xl font-bold">{current.title}</h3>
            <p className="text-gray-700">{current.description}</p>
          </div>

          <div className="lg:w-1/2">
            <Image
              src={current.image}
              alt={current.title}
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSolution3;
