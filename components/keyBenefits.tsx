"use client";
import Image from "next/image";

interface BenefitCard {
  icon: string;
  title: string;
  description: string;
  borderClassName: string; // e.g., 'border-pink-500', 'border-blue-500'
}

interface AviationBenefitsProps {
  tag: string;
  heading: string;
  subheading: string;
  cards: BenefitCard[];
}

const KeyBenefits = ({
  tag,
  heading,
  subheading,
  cards,
}: AviationBenefitsProps) => {
  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        {/* Section Header */}
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-xl ${card.borderClassName} bg-white shadow-sm p-6 transition hover:shadow-md`}
            >
              <Image src={card.icon} alt={card.title} width={64} height={64} />
              <h4 className="font-bold text-[20px] mt-4">{card.title}</h4>
              <p className="text-gray-700 text-[17px] mt-2 text-sm text-justify leading-loose">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
