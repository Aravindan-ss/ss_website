"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Story {
  id: number;
  title: string;
  image: string;
  results?: string[];
}

interface Props {
  title: string;
  heading: string;
  subheading: string;
  stories: {
    title: string;
    knowmore: string;
    story: Story[];
  };
}

const SuccessStories2 = ({ title, heading, subheading, stories }: Props) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full container px-4">
        <div className="pb-8 lg:w-10/12">
          <p className="caveat-custom text-[34px] font-extrabold text-[#ff0042] mb-2 flex">
            {title}
          </p>
          <h2 className="text-2xl md:text-[calc(1.25rem+0.75vw)] font-bold text-[#232c3b] mb-2">
            {heading}
          </h2>
          <p className="text-[17px] text-gray-600 leading-relaxed md:leading-[1.75]">
            {subheading}
          </p>
        </div>

        <div className="flex gap-4 md:overflow-visible flex-wrap justify-between px-4">
          {stories?.story?.map((story) => (
            <div
              key={story.id}
              className="relative group w-[100%] lg:w-[30%] h-[80vh] rounded-xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer flex-shrink-0"
              onMouseEnter={() => setActiveId(story.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-transparent bg-opacity-70 p-4 transition-all">
                <h3 className="text-white text-[24px] font-semibold">
                  {story.title}
                </h3>

                {/* Reveal Results on Hover */}
                {activeId === story.id && story.results && (
                  <div className="mt-2 space-y-1 text-white text-lg">
                    <p className="font-semibold">Result:</p>
                    {story.results.map((point, idx) => (
                      <p key={idx} className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 bg-[#FF0042] rounded-full flex-shrink-0 mt-1"></span>
                        <span className="leading-snug">{point}</span>
                      </p>
                    ))}
                  </div>
                )}

                <Link
                  href="/contact"
                  className="mt-2 inline-block text-lg text-[#FF0042] font-semibold"
                >
                  Know More
                  <i className="fa-solid fa-arrow-right-long animate-arrow-anime"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories2;
