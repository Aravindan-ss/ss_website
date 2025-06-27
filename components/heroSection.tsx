// components/DynamicHero.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

type DynamicHeroProps = {
  bgImage: string;
  altText: string;
  title?: string;
  beforeheading?: string;
  heading?: string;
  afterheading?: string;
  subheading?: string;
  headingclass?: string;
  subheadingclass?: string;
  description?: string;
  textAlign?: "left" | "center" | "right";
  textColor?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
};

const DynamicHero: React.FC<DynamicHeroProps> = ({
  bgImage,
  altText,
  title,
  beforeheading,
  heading,
  afterheading,
  subheading,
  headingclass,
  subheadingclass,
  description,
  textAlign,
  textColor,
  showButton,
  buttonText,
  buttonLink,
}) => {
  return (
    <>
      <Image
        src={bgImage}
        alt={altText}
        fill
        priority
        quality={100}
        className="object-cover object-center -z-10"
      />
      <div className="w-full h-full flex items-center justify-start px-4 sm:px-6 lg:px-8 container">
        <div
          className={`w-full text-center lg:w-1/2 space-y-6 md:text-${textAlign} ${textColor}`}
        >
          {title && <h1 className="sr-only">{title}</h1>}
          {heading && (
            <h1 className="leading-tight font-bold text-white text-[calc(1.5rem+2.5vw)] xl:text-[calc(1.5rem+1.75vw)] lg:text-[calc(1.5rem+2vw)]">
              <span className="block">
                {/* Split with highlighting (e.g., "AI-Driven", "EdTech", rest) */}
                {beforeheading}{" "}
                <span className={`${headingclass}`}>{heading}</span>{" "}
                {afterheading}
                <span className={`${subheadingclass}`}>{subheading}</span>
              </span>
            </h1>
          )}
          {description && (
            <p className="leading-[1.5] text-[1rem] xl:text-[1.25rem]">
              {description}
            </p>
          )}
          {/* Tailwind-based Button */}
          {showButton && (
            <div className="inline-block w-[300px] h-[40px]">
              {" "}
              {/* Fixed width and height */}
              <Link
                href={buttonLink ?? "#"}
                className="inline-flex items-center justify-center gap-2 w-full h-full font-medium bg-[#ff0042] rounded-[10px] hover:border hover:bg-transparent hover:border-white"
              >
                {buttonText}
                <i className="fa-solid fa-arrow-right-long animate-arrow-anime"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DynamicHero;
