"use client";
import React from "react";
import Image from "next/image";
import TitleBorder from "../../components/titleBorder";
import Link from "next/link";

type Feature = {
  icon: string; // Path to icon image
  title: string;
  description: string;
};

interface Heading {
  text: string;
  className?: string;
}

interface FooterButton {
  text: string;
  link: string;
  className?: string;
}
type WhyChooseUsProps = {
  heading: Heading[];
  description: string;
  features: Feature[];
  fotterText?: string;
  fottorButton?: FooterButton;
};

export default function WhyChooseUs({
  heading,
  description,
  features,
  fotterText,
  fottorButton,
}: WhyChooseUsProps) {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-2xl md:text-[calc(1.25rem+0.75vw)] font-bold text-[#232c3b] mb-2">
        {heading.map((line, index) => (
          <span key={index} className={line.className}>
            {line.text}
            {"\u00A0"}
          </span>
        ))}
      </h2>
      <div className="flex justify-center items-center mb-4">
        <TitleBorder />
      </div>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">{description}</p>

      <div className="flex flex-col gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-2xl md:text-[calc(1.25rem+0.75vw)] font-bold text-[#232c3b] mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      <p className="text-xl font-semibold text-[#232c3b] mt-8 mb-4">{fotterText}</p>
      {fottorButton ? (
        <Link href={fottorButton.link} className={fottorButton.className || ""}>
          {fottorButton.text}
        </Link>
      ) : null}
    </section>
  );
}
