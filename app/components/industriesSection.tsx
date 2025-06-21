// components/industriesSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { industriesData } from "../lib/industriesData";

const IndustriesSection = () => {
  return (
    <section className="py-12 w-full">
      <div className="mx-auto w-full container px-4">
        {/* Title Block */}
        <div className="lg:w-2/3 mb-12">
          <span className="caveat-custom text-[34px] inline-flex mb-2 font-black text-4xl text-red-500 font-serif">
            {industriesData?.title}
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2 leading-tight">
            {industriesData?.subtitle}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {industriesData?.description}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-2 gap-5">
          {/* Left Column */}
          <div className="flex flex-col gap-5">
            {industriesData?.industriesListLeft?.map((item, index) => (
              // Aviation
              <div
                key={index}
                className={`group relative ${item?.className} rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl bg-cover bg-center relative after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0.14)_100%)]`}
              >
                {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}

                {/* Default View */}
                <div className="group absolute bottom-8 left-8 z-10 flex items-center gap-2">
                  <div className="animate-[jump-shaking_1.83s_infinite] opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <Image
                      src={item?.cardImage}
                      alt={item?.cardTitle}
                      width="50"
                      height="50"
                      loading="lazy"
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="text-white font-bold text-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    {item?.cardTitle}
                  </span>
                </div>

                {/* Hover Content */}
                <div className="absolute left-8 w-4/5 z-10 transition-all duration-300 ease-out transform translate-y-full group-hover:translate-y-0 group-hover:bottom-8 opacity-0 group-hover:opacity-100">
                  <div className=" flex items-center gap-2 mb-2">
                    <Image
                      src={item?.cardImage}
                      alt={item?.cardTitle}
                      width="50"
                      height="50"
                      loading="lazy"
                      className="w-12 h-12"
                    />
                    <span className="text-white font-bold text-2xl">
                      {item?.cardTitle}
                    </span>
                  </div>
                  <p className="text-white mb-3 text-base leading-relaxed">
                    {item?.cardDescription}
                  </p>
                  <Link
                    href={item?.cardLink}
                    className="text-white hover:text-gray-200 transition-colors duration-300 flex items-center gap-2 text-base font-medium"
                  >
                    {industriesData?.knowMore}
                    <i
                      className="fa fa-long-arrow-right animate-arrow-anime"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">
            {industriesData?.industriesListRight?.map((item, index) =>
              item?.cardTitle !== "View All" ? (
                <div
                  key={index}
                  className={`group relative ${item?.className} rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl bg-cover bg-center relative after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0.14)_100%)]`}
                >
                  {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}

                  {/* Default View */}
                  <div className="group absolute bottom-8 left-8 z-10 flex items-center gap-2">
                    <div className="animate-[jump-shaking_1.83s_infinite] group-hover:opacity-0 transition-opacity duration-300">
                      <Image
                        src={item?.cardImage}
                        alt={item?.cardTitle}
                        width="50"
                        height="50"
                        loading="lazy"
                        className="w-12 h-12"
                      />
                    </div>
                    <span className="text-white font-bold text-2xl group-hover:opacity-0 transition-opacity duration-300">
                      {item?.cardTitle}
                    </span>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute left-8 w-4/5 z-10 transition-all duration-300 ease-out transform translate-y-full group-hover:translate-y-0 group-hover:bottom-8 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src={item?.cardImage}
                        alt={item?.cardTitle}
                        width="50"
                        height="50"
                        loading="lazy"
                        className="w-12 h-12"
                      />
                      <span className="text-white font-bold text-2xl">
                        {item?.cardTitle}
                      </span>
                    </div>
                    <p className="text-white mb-3 text-base leading-relaxed">
                      {item?.cardDescription}
                    </p>
                    <Link
                      href={item?.cardLink}
                      className="text-white hover:text-gray-200 transition-colors duration-300 flex items-center gap-2 text-base font-medium"
                    >
                      {industriesData?.knowMore}
                      <i
                        className="fa fa-long-arrow-right animate-arrow-anime"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className={`${item?.className} rounded-lg overflow-hidden flex items-center justify-center cursor-pointer hover:shadow-2xl transition-all duration-300 bg-cover bg-center relative after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0.14)_100%)]`}
                >
                  <Link
                    href={item?.cardLink}
                    className="text-white hover:text-gray-200 transition-colors duration-300 flex items-center gap-2 text-[24px] font-medium z-[99]"
                  >
                    {item?.cardTitle}
                    <i
                      className="fa fa-long-arrow-right animate-arrow-anime"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
