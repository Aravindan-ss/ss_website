"use client";

import React from "react";
import Slider from "react-slick";
import TitleBorder from "../../components/titleBorder";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Service = {
  icon: string;
  title: string;
  description: string;
  linkText: string;
};

type Title = {
  text: string;
  className?: string;
};

type ServiceCarouselProps = {
  title: Title[];
  description: string;
  services: Service[];
  autoplaySpeed?: number; // in ms
};

export default function ServiceCarousel({
  services,
  title = [],
  description,
}: ServiceCarouselProps) {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full px-4 py-16 my-8 overflow-x-hidden">
      <div className="lg:w-10/12 flex justify-center mx-auto items-center">
        <h2 className="text-center" style={{ fontFamily: '"PT Serif", serif' }}>
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
      <p className="text-center text-gray-600 mb-8 text-[1.1rem] md:px-20">
        {description}
      </p>
      <div className="max-w-full w-full">
        <Slider {...settings}>
          {services.map((service, idx) => (
            <div key={idx} className="px-2">
              <div className="bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 p-6 h-full flex flex-col justify-between">
                <div className="mb-4 flex justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-center mb-2 text-[24px] font-bold h-[60px] leading-[30px] group-hover:text-[#ff0042]">
                  {service.title}
                </h3>
                <p className="font-['PT_Serif',serif] text-[17px] md:text-[1.1rem] font-normal h-[178.5px] leading-[25.5px] text-gray-800 flex-1">
                  {service.description}
                </p>

                <div className="mt-4 text-center">
                  <Link
                    href={service.linkText}
                    className="text-pink-600 text-sm font-medium hover:underline"
                  >
                    know More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
