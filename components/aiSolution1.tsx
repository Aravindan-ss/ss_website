"use client";

import Image from "next/image";
import { useState } from "react";

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
  image?: string;
};

type EdTechAISectionProps = {
  label: string;
  heading: string;
  description: string;
  buttonText: string;
  image: string;
  features: Feature[];
};

const AiSolution1 = ({
  label,
  heading,
  description,
  buttonText,
  image,
  features,
}: EdTechAISectionProps) => {
  const [active, setActive] = useState<number>(features[0].id);

  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side */}
          <div className="lg:w-1/2 flex flex-col items-start">
            <span className="caveat-custom text-[34px] font-extrabold text-[#ff0042] mb-2 block">
              {label}
            </span>
            <h2 className="text-2xl md:text-[calc(1.25rem+0.75vw)] font-bold text-[#232c3b] mb-4">
              {heading}
            </h2>
            <p className="text-[17px] text-gray-600 leading-loose md:leading-[1.75] mb-4">
              {description}
            </p>
            <button className="bg-[#ff0042] text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-[#e60039] transition cursor-pointer">
              {buttonText} ➞
            </button>
            <Image
              src={image}
              alt="Robot Illustration"
              width={300}
              height={300}
              className="mt-8 mx-auto"
            />
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white border rounded-lg shadow-md p-4 transition"
              >
                {/* Header Row */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    setActive(feature.id === active ? -1 : feature.id)
                  }
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={60}
                      height={60}
                      className="hidden md:block animate-[jump-shaking_1.83s_infinite]"
                    />
                    <h3 className="font-bold text-[24px]">{feature.title}</h3>
                  </div>
                  <span className=" text-xl">
                    {active === feature.id ? (
                      <i
                        className="fa fa-minus-square text-[#ff0042]"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i className="fa fa-plus-square" aria-hidden="true"></i>
                    )}
                  </span>
                </div>

                {/* Expanded Content */}
                {active === feature.id && (
                  <div className="mt-4">
                    {feature.image && (
                      <div className="w-full h-[300px] relative rounded-lg mb-2 overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <p className="text-justify text-gray leading-loose">
                      {feature.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSolution1;
