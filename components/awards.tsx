// components/AwardSection.tsx
"use client";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AwardsData } from "../lib/AwardsData";

const AwardSection = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center -mx-4">
          <div className="w-full lg:w-1/3 px-4">
            <div className="pb-8 p-0">
              <span className="caveat-custom text-[34px] font-extrabold text-[#ff0042] mb-2 flex">
                {AwardsData?.title}
              </span>
              <h2 className="text-2xl md:text-[calc(1.25rem+0.75vw)] font-bold text-[#232c3b] mb-2">
                {AwardsData?.subtitle}
              </h2>
              <p className="text-[17px] text-gray-600 leading-relaxed md:leading-[1.75]">
                {AwardsData?.description}
              </p>
              <Link
                href={AwardsData?.viewAllLink}
                className="text-[#ff0042] inline-block py-3 transition-all text-[22px]"
              >
                {AwardsData.viewAllText}{" "}
                <i
                  className="fa fa-long-arrow-right animate-arrow-anime"
                  aria-hidden="true"
                ></i>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-4/6 px-4">
            <div className="p-0">
              <div className="container mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="w-full">
                    <Slider {...AwardsData?.settings}>
                      {AwardsData?.awards.map((award, index) => (
                        <div key={index}>
                          <div className="flex justify-center items-center px-2">
                            <div className="flex justify-center items-center h-full">
                              <Image
                                src={award?.image}
                                alt={award?.alt}
                                width={150}
                                height={100}
                                loading="lazy"
                                className="mx-auto items-center h-auto w-full max-w-[150px] max-h-[100px] object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
