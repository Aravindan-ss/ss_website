"use client";
import Image from "next/image";

type Benefit = {
  icon: string;
  title: string;
  description: string;
};

type OffshoreBenefitsProps = {
  heading: string;
  subheading: string;
  description: string;
  image: string;
  benefits: Benefit[];
};

export default function OffshoreBenefits({
  heading,
  subheading,
  description,
  image,
  benefits,
}: OffshoreBenefitsProps) {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-primary mb-2">{subheading}</p>
          <p className="text-xl font-normal leading-[25.5px] text-[rgb(69,90,100)] font-['PT_Serif',serif]">{description}</p>
        </div>
        {/* Image Section */}
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={image}
            alt="Offshore Development"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Benefits cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="md:relative bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
          >
            <div className="md:absolute md:-top-[32px] md:-left-[16px]">
              <div className="mb-3 bg-[#ff0042] rounded-lg flex items-center justify-center w-14 h-14">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={50}
                  height={35}
                />
              </div>
            </div>
            <h3 className="font-bold text-[24px] leading-[30px] mb-2">
              {benefit.title}
            </h3>
            <p className="text-[17px] font-normal leading-[25.5px] text-[rgb(69,90,100)] font-['PT_Serif',serif]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
