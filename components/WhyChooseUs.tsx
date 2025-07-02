"use client";

import Image from "next/image";

type Feature = {
  id: number;
  icon: string;      
  title: string;
  description: string;
};

type WhyChooseUsProps = {
  heading: string;
  subheading: string;
  image: string;     
  features: Feature[];
};

export default function WhyChooseUs({
  heading,
  subheading,
  image,
  features,
}: WhyChooseUsProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-8 md:py-16">
      <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
        <Image
          src={image}
          alt="Illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 px-[1.5rem] sm:px-8 md:px-12 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{heading}</h2>
        <p className="text-gray-600 mb-6">{subheading}</p>
        <div className="space-y-6">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start gap-4">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={40}
                height={40}
                className="flex-shrink-0"
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
