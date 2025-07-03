"use client";

import Image from "next/image";

type Partner = {
  name: string;
  logo: string;
};

type PartnersSectionProps = {
  title: string;
  partners: Partner[];
};

export default function PartnersSection({
  title,
  partners,
}: PartnersSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <h2 className="text-center text-2xl md:text-[calc(1.25rem+0.75vw)] font-bold text-[#232c3b] mb-2">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center justify-items-center">
        {partners.map((partner, idx) => (
          <div key={idx} className="relative w-24 h-10 md:w-28 md:h-12">
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
