
"use client";
import React from "react";
import Link from "next/link";

type HireAIDevelopersProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export default function HireAIDevelopers({
  title,
  description,
  buttonText,
  buttonLink,
}: HireAIDevelopersProps) {
  return (
    <section className="bg-[#ff0042] text-white flex flex-col items-center justify-center text-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="max-w-2xl mb-6">{description}</p>
      <Link
        href={buttonLink}
        className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#ff0042] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
      >
        {buttonText} <span className="ml-2">→</span>
      </Link>
    </section>
  );
}
