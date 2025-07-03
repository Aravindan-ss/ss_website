"use client";

import React from "react";
import Image from "next/image";
import DiscussProjectForm from "../components/DiscussProjectForm/DiscussProjectForm";
import BreadCrumbs from "./BreadCrumbs";

interface Points {
  icon?: string;
  points: string[];
  className?: string;
}

type HeroSectionProps = {
  backgroundImage: string;
  title: string;
  description: string;
  bottomIcons?: { icon: string; alt?: string }[];
  breadcrumbs?: BreadCrumb[];
  points?: Points;
};

interface BreadCrumb {
  label: string;
  link: string;
}

const HeroSection1: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  description,
  breadcrumbs = [],
  bottomIcons = [],
  points,
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill // makes it cover the parent
          style={{ objectFit: "cover" }}
          className="bg-gradient-to-br from-[#000428] to-[#000]"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col md:flex-row  justify-between max-w-7xl mx-auto px-4 md:py-6">
        {/* Left Side Content */}
        <div className="md:w-3/5 text-white mb-6 md:mt-8 md:p-6">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="mb-4">
              <BreadCrumbs breadcrumbs={breadcrumbs} />
            </div>
          )}
          <h1
            className="font-semibold mb-8"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 600,
            }}
          >
            {title}
          </h1>
        <p className="text-white font-['PT_Serif',serif] text-[20px] font-normal leading-[40px] mt-1 mb-4">{description}</p>

          {points && points.points.length > 0 && (
            <div className={`mb-6 ${points.className || ""}`}>
              <ul className="list-disc pl-5 space-y-2">
                {points.points.map((point, index) => (
                  points.icon ? (
                    <div
                      key={index}
                      className="text-white font-['PT_Serif',serif] text-[20px] font-normal leading-[40px] mt-1"
                    >
                      <Image
                        src={points.icon }
                        alt="Check Icon"
                        width={30}
                        height={30}
                        className="inline-block mr-2"
                      />
                      {point}
                    </div>
                  ) : (
                    <li
                      key={index}
                      className="relative pl-10 text-white font-['PT_Serif',serif] leading-snug text-start list-none after:content-['➣'] after:text-red-500 after:absolute after:left-0 after:top-[-6px] after:text-2xl"
                    >
                      {point}
                    </li>
                  )
                ))}
              </ul>
            </div>
          )}

          {bottomIcons.length > 0 && (
            <div className="flex space-x-4 mt-4">
              {bottomIcons.map((icon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center border border-white bg-white/10 backdrop-blur-[5px] p-2"
                >
                  <Image
                    src={icon.icon}
                    alt={icon.alt || `icon-${index}`}
                    width={40}
                    height={40}
                    className="h-10 md:w-15 object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side Form */}
        <div className="md:w-2/5 w-full  bg-opacity-90 rounded-xl p-6 shadow-lg">
          <DiscussProjectForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
