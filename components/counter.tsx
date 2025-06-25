// components/CounterSection.tsx
"use client";
import { useEffect, useState } from "react";
import { mainPageData } from "../lib/mainPageData";
import React from "react";

interface CounterProps {
  target: number;
  speed: number;
  label: string;
}

const CounterSection = () => {
  return (
    <>
      {mainPageData?.stats?.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center justify-center lg:justify-start gap-x-8 sm:relative mt-md-5 mt-lg-5 basis-[40%] md:basis-[40%] lg:basis-[unset]">
            <SingleCounter
              target={item?.target}
              speed={item?.speed}
              label={item?.label}
            />
          </div>
          {index !== mainPageData?.stats?.length - 1 && (
            <div className="w-[3px] h-[125px] bg-white hidden lg:block" />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

const SingleCounter = ({ target, speed, label }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setCount(current);
      current++;
      if (current > target) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [target, speed]);

  return (
    <div className="flex flex-col items-center">
      <h3 className="md:text-[2em] text-[2em] lg:text-[4em] font-bold leading-tight text-white">
        {count}+
      </h3>
      <span className="text-center text-white">{label}</span>
    </div>
  );
};

export default CounterSection;
