// component/testimonial.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { testimonialData } from "../lib/testimonialData";

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateAvatars, setAnimateAvatars] = useState(false);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateAvatars(true);
      setTimeout(() => setAnimateAvatars(false), 1500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
  };

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <section className="py-16 bg-white Testimonial">
      <div className="container mx-auto px-4">
        <div className="lg:w-2/3 mb-12">
          <span className="caveat-custom text-[34px] font-extrabold text-[#ff0042] mb-2 flex">
            {testimonialData?.title}
          </span>
          <h2 className="text-2xl md:text-[calc(1.25rem+0.75vw)] font-bold text-[#232c3b] mb-2">
            {testimonialData?.subtitle}
          </h2>
          <p className="text-[17px] text-gray-600 leading-relaxed md:leading-[1.75]">
            {testimonialData?.description}
          </p>
        </div>
        <Slider ref={sliderRef} {...sliderSettings} className="p-5">
          {testimonialData?.testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="!mb-0 rounded-[20px] p-5 shadow-[6px_6px_12px_rgba(0,0,0,0.1)]"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div
                  className="relative h-[250px] md:h-[300px] lg:h-[380px] w-full md:w-[60%] flex justify-center  bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url('${testimonial?.image}')` }}
                >
                  {" "}
                  <a
                    href={testimonial?.video || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    {testimonial?.video && <span className="block w-full h-full bg-[url('/images/Play_btn.svg')] bg-no-repeat bg-center drop-shadow-md" />}
                  </a>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <p className="text-lg italic text-gray-700 mb-4">
                    {testimonial?.text}
                  </p>
                  <p className="text-xl font-semibold">{testimonial?.name}</p>
                  {testimonial?.title && (
                    <p className="text-gray-600">{testimonial?.title}</p>
                  )}
                  <div className="mt-3 flex justify-center md:justify-start">
                    <Image
                      src={testimonial?.stars}
                      alt={testimonial?.starsText}
                      width={100}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Avatar Dots - Only on md+ */}
        <div className="hidden sm:flex justify-around gap-6">
          {testimonialData?.testimonials?.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial by ${testimonial?.name}`}
              className={`w-16 h-16 rounded-full relative transition-all duration-300 ease-in-out testimonial-avatar cursor-pointer overflow-hidden
                ${
                  index === activeIndex
                    ? "opacity-100 scale-110 active"
                    : "opacity-50 hover:opacity-100"
                }
                ${animateAvatars ? "animate-pulse" : ""}
              `}
              data-active={index === activeIndex}
            >
              {/* Background ring for active state */}
              <div className="absolute inset-0 bg-[#ff0042] rounded-full z-0 testimonial-ring"></div>

              {/* White overlay for animation */}
              <div className="absolute inset-0 bg-white rounded-full z-10 testimonial-overlay"></div>

              {/* Avatar image */}
              <div className="relative z-20 w-14 h-14 m-1 rounded-full overflow-hidden">
                <Image
                  src={testimonial?.image}
                  alt={testimonial?.name}
                  width={56}
                  height={56}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>

        <div className="sm:hidden flex justify-center gap-6">
          {testimonialData?.testimonials?.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer
              ${
                index === activeIndex
                  ? "bg-[#ff0042] scale-125"
                  : "bg-gray-300 opacity-50 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
