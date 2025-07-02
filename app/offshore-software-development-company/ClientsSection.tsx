// components/ClientsSection.tsx
"use client";
import Image from "next/image";
import TitleBorder from "../../components/titleBorder";
interface ClientLogo {
  src: string;
  alt: string;
  title?: string;
}

interface Title {
  text: string;
  className?: string;
}

interface ClientsSectionProps {
  title: Title[];
  clientLogos: ClientLogo[];
}

const ClientsSection = ({ title, clientLogos }: ClientsSectionProps) => {
  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full container px-4">
        <div className="lg:w-10/12 flex justify-center mx-auto items-center">
          <h2
            className="text-center"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            {title.map((line, index) => (
              <span key={index} className={line.className}>
                {line.text}&nbsp;
              </span>
            ))}
          </h2>
        </div>
        <div className="flex justify-center mb-4">
          <TitleBorder />
        </div>
        <div className="overflow-hidden py-3 group">
          <div className="flex gap-16 animate-scroll-left w-max group-hover:[animation-play-state:paused]">
            {clientLogos?.map(({ src, alt }, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[150px]"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={150}
                  height={100}
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
