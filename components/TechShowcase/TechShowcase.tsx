"use client";

import { useState } from "react";
import Image from "next/image";

export type Technology = {
  id: number;
  name: string;
  description: string;
  icon: string;
};

export type Topic = {
  id: number;
  title: string;
  technologies: Technology[];
};

type TechShowcaseProps = {
  title: string;
  description: string;
  topics: Topic[];
  bgImage: string;
};

export default function TechShowcase({
  title,
  description,
  topics,
  bgImage,
}: TechShowcaseProps) {
  // Start by selecting the first technology of the first topic
  const firstTech = topics[0]?.technologies[0];
  const [selected, setSelected] = useState<Technology | null>(
    firstTech || null
  );

  return (
    <div className="flex flex-col items-center px-4 py-8 md:py-12 lg:py-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
        {title}
      </h2>
      <p className="text-center max-w-2xl text-gray-600 mb-6 md:mb-10">
        {description}
      </p>

      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6">
        {/* Left scrollable list */}
        <div className="flex md:flex-col gap-12 overflow-x-auto md:overflow-y-auto max-h-[500px] md:w-1/3">
          {topics.map((topic) => (
            <div key={topic.id} className="min-w-[200px] md:min-w-0">
              <h4
                className="mb-2 flex items-center mb-8"
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  height: "42px",
                  lineHeight: "42px",
                }}
              >
                <span
                  className="mr-3"
                  style={{
                    display: "inline-block",
                    width: "4px",
                    height: "42px",
                    background: "#ff0042",
                    borderRadius: "2px",
                  }}
                />
                <span className="text-gray-800">{topic.title}</span>
              </h4>
              <div className="flex gap-8">
                {topic.technologies.map((tech) => {
                  const isSelected = selected?.id === tech.id;
                  return (
                    <button
                      key={tech.id}
                      onClick={() => setSelected(tech)}
                      className={`px-4 py-4 flex flex-col items-center justify-center gap-2 rounded-2xl 
                    ${isSelected ? "bg-[#ff0042]" : "bg-white"}
                    
                    border-0
                    group
                    shadow-md
                    `}
                      style={{ aspectRatio: "1 / 1" }}
                    >
                      <div
                        className={`w-7 h-7 flex items-center justify-center rounded-md
                      ${isSelected ? "bg-[#ff0042]" : "bg-white"}
                     
                      shadow
                    `}
                        style={{ aspectRatio: "1 / 1" }}
                      >
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={28}
                          height={28}
                          className={`transition
                      ${isSelected ? "invert brightness-0" : ""}
                     
                      `}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right sticky content */}
        <div
          className="
            flex-1
            sticky
            top-1/5
            md:top-1/4
            xl:top-1/4
            bg-cover
            bg-center
            rounded-xl
            shadow-[0_0_16px_rgba(69,90,100,0.1)]
            p-4
            sm:p-6
            md:p-8
            xl:p-10
            bg-white/90
            z-10
          "
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {selected && (
            <div className="bg-white/80 backdrop-blur-md rounded-lg">
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src={selected.icon}
                  alt={selected.name}
                  width={40}
                  height={40}
                />
                <h3 className="text-lg md:text-xl font-semibold">
                  {selected.name}
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                {selected.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
