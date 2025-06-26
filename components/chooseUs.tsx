// components/ChooseUs.tsx
import Image from "next/image";
import { chooseUsData } from "../lib/chooseUsData";

const ChooseUs = () => {
  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={chooseUsData?.image}
              loading="lazy"
              width={500}
              height={500}
              alt={chooseUsData?.alt}
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <span className="caveat-custom text-[34px] font-extrabold text-[#ff0042] mb-2 flex">
                {chooseUsData?.title}
              </span>
              <h2 className="text-2xl md:text-[calc(1.25rem+0.75vw)] font-bold text-[#232c3b] mb-2">
                {chooseUsData?.subtitle}
              </h2>
              <p className="text-[17px] text-gray-600 leading-relaxed md:leading-[1.75]">
                {chooseUsData?.description}
              </p>
            </div>

            <div className="flex flex-wrap mt-3 items-center -mx-3">
              {chooseUsData?.features?.map((item, index) => (
                <div key={index} className="w-full sm:w-1/2 px-3 mb-2">
                  <div className="flex items-center gap-2">
                    <Image
                      className="m-0"
                      src={item?.image}
                      loading="lazy"
                      width="64"
                      height="38"
                      alt={item?.text}
                    />
                    <p className="text-gray-500">{item?.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;