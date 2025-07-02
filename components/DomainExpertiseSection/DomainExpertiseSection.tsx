"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import TitleBorder from "../../components/titleBorder";
type ExpertiseItem = {
  icon: string; // Path to icon (e.g., /icons/aviation.svg)
  title: string;
  description: string;
  href: string; // Link to navigate
};

interface Title {
  text: string;
  className?: string;
}

type DomainExpertiseSectionProps = {
  title: Title[];
  subheading: string;
  items: ExpertiseItem[];
};

export default function DomainExpertiseSection({
  title,
  subheading,
  items,
}: DomainExpertiseSectionProps) {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16  mx-auto">
      <div className="text-center mb-8">
        <div className="lg:w-10/12 flex justify-center mx-auto items-center">
          <h2
            className="text-center"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            {title.map((line, index) => (
              <span key={index} className={line.className}>
                {line.text}&nbsp;
              </span>
            ))}
          </h2>
        </div>
        <div className="flex justify-center mb-4">
          <TitleBorder />
        </div>
        <p className="text-gray-600 mx-auto font-ptserif text-[1.2rem] font-normal leading-[25.5px] h-[102px]">
          {subheading}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300"
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={75}
              height={75}
              className="h-[4.5rem] w-[4.5rem] mb-4 contrast-200"
            />
            <Link href={item.href}>
              <span className="text-lg font-semibold mb-2 cursor-pointer transition-colors duration-300 hover:text-[#ff0042]">
                {item.title}
              </span>
            </Link>
            <p className="text-gray-600  mx-auto font-ptserif text-[1.1rem] font-normal leading-[25.5px] ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
