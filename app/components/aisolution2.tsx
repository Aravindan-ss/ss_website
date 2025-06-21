"use client";
import Image from "next/image";

interface CardData {
  id: number;
  icon: string;
  title: string;
  description: string;
  image: string;
}

interface StickyCardSectionProps {
  title: string;
  heading: string;
  subheading: string;
  buttonText: string;
  cards: CardData[];
}

const AiSolution2 = ({
  title,
  heading,
  subheading,
  buttonText,
  cards,
}: StickyCardSectionProps) => {
  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row py-10 gap-10">
          {/* LEFT SECTION - Sticky */}
          <div className="lg:w-1/2 w-full lg:sticky top-20 self-start">
            <h3 className="caveat-custom text-[34px] font-extrabold text-[#ff0042] mb-2 block">
              {title}
            </h3>
            <h2 className="text-2xl md:text-[calc(1.25rem+0.75vw)] font-bold text-[#232c3b] mb-4">
              {heading}
            </h2>
            <p className="text-[17px] text-gray-600 leading-relaxed md:leading-[1.75]">
              {subheading}
            </p>
            <button className="bg-[#ff0042] hover:bg-[#d1054c] text-white px-6 py-2 rounded-lg shadow-md font-semibold cursor-pointer">
              {buttonText} ➞
            </button>
          </div>

          {/* RIGHT SECTION - Scrollable Cards */}
          <div className="lg:w-1/2 w-full flex flex-col gap-6 pr-2">
            {cards.map((card, index) => (
              <div key={card.id} className="bg-white rounded-2xl p-4 shadow-md">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={300}
                  className="w-full h-auto rounded-xl object-cover mb-4"
                />
                <div className="flex items-center gap-2 mb-2">
                  <Image src={card.icon} alt="icon" width={50} height={50} />
                  <h3 className="font-semibold text-lg">{card.title}</h3>
                </div>
                <p className="text-[17px] text-gray-600 text-justify leading-loose mb-3">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSolution2;
