"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleBorder from "./titleBorder";
type TechnologyCategory = {
  title: string;
  technologies: { name: string; icon: string }[];
};

type TechnologyStackProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  categories: TechnologyCategory[];
};

const TechnologyStack: React.FC<TechnologyStackProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  categories,
  image,
}) => {
  const settings = {
    infinite: true,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 3, // default desktop
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024, // lg
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // md
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start p-4 md:p-10 bg-white">
      {/* Left static content */}
      <div className="md:w-1/3 space-y-4">
        <h2 className="font-bold text-gray-800 text-[30.245px] leading-[45.3675px]">
          {title}
        </h2>
        <TitleBorder />
        <p className="text-gray-600 text-[17px] font-normal leading-[34px] font-['PT_Serif',serif]">
          {description}
        </p>
        <Link
          href={buttonLink}
          className="bg-pink-600 text-white px-4 py-2 rounded-md"
        >
          {buttonText}
        </Link>
        <div className="relative w-full h-64 mt-6">
          <Image
            src={image}
            alt="Tech Diagram"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Right slider */}
      <div className="md:w-2/3 w-full relative rounded-tl-2xl rounded-bl-2xl">
        {/* background image */}
        <Image
          src="/images/technoly-stack-icon/techstack-background.webp"
          alt="Technology Background"
          fill
          className="object-cover object-center pointer-events-none z-0 rounded-tl-2xl rounded-bl-2xl"
        />
        {/* slider */}
        <div className="relative z-10">
          <Slider {...settings}>
            {categories.map((category, idx) => (
              <div key={idx} className="p-3 h-full">
                <div className="bg-white rounded-xl shadow hover:shadow-md transition p-4 flex flex-col h-full min-h-[320px] max-h-[320px]">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 inline-block">
                    {category.title}
                  </h3>
                  <TitleBorder />
                  <div className="grid grid-cols-3 gap-4 mt-2 overflow-auto">
                    {category.technologies.map((tech, techIdx) => (
                      <div
                        key={techIdx}
                        className="flex flex-col items-center justify-center"
                      >
                        <div className="relative w-10 h-10 mb-1">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="text-xs text-center text-gray-600">
                          {tech.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
