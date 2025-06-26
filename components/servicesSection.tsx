// components/servicesSection.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { servicesSectionData } from "../lib/servicesData";

const ServicesSection = () => {
  return (
    <section className="py-12 w-full">
      <div className="mx-auto w-full container px-4">
        {/* Title Block */}
        <div className="lg:w-2/3 mb-12">
          <span className="caveat-custom text-[34px] inline-flex mb-2 font-black text-4xl text-red-500 font-serif">
            {servicesSectionData?.title}
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2 leading-tight">
            {servicesSectionData?.subtitle}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {servicesSectionData?.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap -mx-3">
          {servicesSectionData?.cardData?.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
              <div className="group rounded-3xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out flex flex-col justify-between hover:shadow-[0_0_20px_rgba(0,0,0,0.14)]">
                <div className="rounded-t-3xl">
                  <Image
                    src={item?.image}
                    alt={item?.name}
                    width={300}
                    height={175}
                    className="w-full object-cover rounded-t-xl"
                  />
                </div>
                <div className="flex flex-col h-full p-4">
                  <h3 className="group-hover:text-[#ff0042] text-[1.5em] font-bold leading-snug mb-2 mt-3">
                    {item?.name}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed pb-3">
                    {item?.description}
                  </p>
                  <Link
                    href={item?.href}
                    className="group-hover:opacity-100 text-[#ff0042] no-underline opacity-0 transition-opacity duration-200 w-fit"
                  >
                    {servicesSectionData?.knowMore}{" "}
                    <i
                      className="fa fa-long-arrow-right animate-arrow-anime"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;