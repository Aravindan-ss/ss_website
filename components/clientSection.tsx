// components/ClientsSection.tsx
"use client";
import Image from "next/image";

interface ClientLogo {
  src: string;
  alt: string;
  title?: string;
}

interface ClientsSectionProps {
  title: string;
  subtitle: string;
  description: string;
  clientLogos: ClientLogo[];
}

const ClientsSection = ({
  title,
  subtitle,
  description,
  clientLogos,
}: ClientsSectionProps) => {
  const isTechSection = title.toLowerCase().includes("technologies");
  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full container px-4">
        <div className="pb-8 lg:w-10/12">
          <span className="caveat-custom text-[34px] font-extrabold text-[#ff0042] mb-2 flex">
            {title}
          </span>
          <h2 className="text-2xl md:text-[calc(1.25rem+0.75vw)] font-bold text-[#232c3b] mb-2">
            {subtitle}
          </h2>
          <p className="text-[17px] text-gray-600 leading-relaxed md:leading-[1.75]">
            {description}
          </p>
        </div>

        <div className="overflow-hidden py-3">
          <div
            className={`${
              isTechSection
                ? "flex flex-wrap justify-center gap-6 animate-scroll-left w-max"
                : "flex gap-16 animate-scroll-left w-max"
            }`}
          >
            {clientLogos?.map(({ src, alt, title }, index) => (
              <div
                key={index}
                className={`${
                  isTechSection
                    ? "bg-white p-5 rounded-xl shadow-md min-w-[200px] max-h-[125px] mx-2 text-center transition-transform duration-100 hover:scale-110"
                    : "flex-shrink-0 flex items-center justify-center min-w-[150px]"
                }`}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={isTechSection ? 50 : 150}
                  height={isTechSection ? 50 : 100}
                  loading="lazy"
                  className={`${
                    isTechSection
                      ? "mx-auto"
                      : "grayscale hover:grayscale-0 transition-all duration-300"
                  }`}
                />
                {isTechSection && <p>{title}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
