// components/technology.tsx
import { technologyData } from "../lib/technologyData";
import Image from "next/image";

interface Tech { name: string; logo: string }

interface ScrollRowProps {
  data: Tech[];
  reverse?: boolean;
  duration?: number;
}

const ScrollRow = ({
  data,
  reverse = false,
  duration = 80,
}: ScrollRowProps) => {
  const loopData = [...data, ...data];

  return (
    <div className="relative overflow-hidden w-full py-3">
      <div
        className={`flex w-max whitespace-nowrap gap-16 ${
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loopData?.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-3 bg-[#fff8fa] rounded-[10px] shadow-sm flex-shrink-0"
          >
            <Image
              loading="lazy"
              width={40}
              height={40}
              src={tech?.logo}
              alt={`Hire ${tech?.name} Developers`}
              title={`Hire ${tech?.name} Developers`}
            />
            <span className="whitespace-nowrap">{tech?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechStackSection = () => {
  return (
    <section className="py-12 bg-white relative">
      <div className="mx-auto w-full px-4 container">
        <div className="lg:w-2/3 mb-12">
          <span className="caveat-custom text-[34px] inline-flex mb-2 font-black text-4xl text-red-500 font-serif">
            {technologyData?.title}
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2 leading-tight">
            {technologyData?.subtitle}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {technologyData?.description}
          </p>
        </div>
      </div>

      {/* Three rows with alternate scroll directions */}
      <ScrollRow data={technologyData?.techStackData1} reverse={false} duration={80} />
      <ScrollRow data={technologyData?.techStackData2} reverse={true} duration={80} />
      <ScrollRow data={technologyData?.techStackData3} reverse={false} duration={80} />
    </section>
  );
};

export default TechStackSection;
