"use client";

import React from "react";
import Image from "next/image";
import DiscussProjectForm from "../../components/DiscussProjectForm/DiscussProjectForm";

type HeroSectionProps = {
  backgroundImage: string; // url of bg image
  title: string;
  description: string;
  bottomIcons?: { icon: string; alt?: string }[];
};

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  description,
  bottomIcons = [],
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
          priority // tells Next.js to preload
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col md:flex-row  justify-between max-w-7xl mx-auto px-4 md:py-6">
        {/* Left Side Content */}
        <div className="md:w-3/5 text-white mb-6 md:mt-8 md:p-6">
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
          <p className="text-base md:text-lg mb-6 max-w-xl">{description}</p>
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

export default HeroSection;
