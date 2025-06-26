"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Story {
  id: number;
  title: string;
  image: string;
  results: string[];
}

interface SuccessStoriesProps {
  heading?: string;
  subheading?: string;
  description?: string;
  buttontext?: string;
  storiestitle?: string;
  stories?: Story[];
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({
  heading,
  subheading,
  description,
  buttontext,
  storiestitle,
  stories,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [stories.length]);

  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev === 0 ? stories.length - 1 : prev - 1));

  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % stories.length);

  const currentStory = stories[currentSlide];

  return (
    <section>
      <div className="container mx-auto px-4 py-12 bg-white">
        {/* Heading */}
        <div className="mb-10">
          <p className="caveat-custom text-[34px] font-extrabold text-[#ff0042] mb-2 block">
            {heading}
          </p>
          <h2 className="text-2xl md:text-[calc(1.25rem+0.75vw)] font-bold text-[#232c3b] mb-4">
            {subheading}
          </h2>
          <p className="text-[17px] text-gray-600 leading-loose md:leading-[1.75] mb-4">
            {description}
          </p>
        </div>

        {/* Main Card */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500">
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto overflow-hidden">
              <img
                src={currentStory.image}
                alt="Success Story"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
                {currentStory.title}
              </h3>

              <h4 className="text-lg font-bold text-red-500 mb-4">
                {storiestitle}
              </h4>
              <ul className="space-y-4 mb-8">
                {currentStory.results.map((text, index) => (
                  <li
                    key={index}
                    className="
                  relative pl-10 text-gray-700 leading-snug text-start
                  after:content-['➣']
                  after:text-red-500
                  after:absolute
                  after:left-0
                  after:top-[-6px]
                  after:text-2xl
                "
                  >
                    {text}
                  </li>
                ))}
              </ul>

              <button className="bg-[#ff0042] text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-[#e60039] transition cursor-pointer w-fit">
                {buttontext}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-4 right-4 flex gap-3">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
