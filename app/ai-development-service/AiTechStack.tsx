"use client";
import Image from "next/image";
import TitleBorder from "../../components/titleBorder";
interface Title {
  text: string;
  className?: string;
}

type TechItem = {
  name: string;
  logo: string; 
};

type AiTechStackProps = {
  title: Title[];
  subtitle: string;
  technologies: TechItem[];
};

export default function AiTechStack({
  title,
  subtitle,
  technologies,
}: AiTechStackProps) {
  return (
    <section className="py-12 px-4 text-center bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        {title.map((line, index) => (
          <span key={index} className={line.className}>
            {line.text}
            {"\u00A0"}
          </span>
        ))}
      </h2>
      <div className="flex justify-center items-center mb-4">
      <TitleBorder  />
        </div>

      <p className="text-gray-600 max-w-2xl mx-auto mb-8">{subtitle}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex justify-center items-center">
            <Image
              src={tech.logo}
              alt={tech.name}
              width={100}
              height={100}
              className="object-contain h-16"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
