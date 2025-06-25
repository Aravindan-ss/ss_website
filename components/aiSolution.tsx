// components/aiSolution.tsx
import Image from "next/image";

export interface FeatureBlockProps {
  label: string;
  heading: string;
  description: string;
  features: {
    title: string;
    content: string;
    image: string;
    alt: string;
  }[];
}

const AiSolutions = ({
  label,
  heading,
  description,
  features,
}: FeatureBlockProps) => {
  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="lg:w-2/3 mb-12">
          <span className="caveat-custom text-[34px] font-extrabold text-[#ff0042] mb-2 block">
            {label}
          </span>
          <h2 className="text-2xl md:text-[calc(1.25rem+0.75vw)] font-bold text-[#232c3b] mb-4">
            {heading}
          </h2>
          <p className="text-[17px] text-gray-600 leading-relaxed md:leading-[1.75]">
            {description}
          </p>
        </div>

        {/* Features Section */}
        {features.map((feature, index) => {
          const isEven = index % 2 !== 0;
          const number = (index + 1).toString().padStart(2, "0");

          return (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-10 mb-16 ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-start gap-6 p-6">
                  <span className="text-[#ff0042] text-[68px] font-extrabold leading-none">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-[24px] font-bold text-[#232c3b] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[17px] text-gray-600 text-justify leading-loose mb-3">
                      {feature.content}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              {feature?.image && (
                <div className="w-full lg:w-1/2 relative aspect-[16/9]">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="rounded-xl object-fit"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AiSolutions;
