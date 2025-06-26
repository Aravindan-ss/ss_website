// components/footer.tsx
import Image from "next/image";
import Link from "next/link";
import { footerData } from "../lib/footerData";

const footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background decorative elements */}
      <Image
        src={footerData?.backgroundImage}
        alt={footerData?.backgroundImageAlt}
        fill
        priority
        quality={100}
        className="object-cover object-center -z-10"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Main Content Grid */}
        <div className="relative mb-0 pb-0 flex flex-wrap -mt-0 -mx-[0.75rem] justify-between">
          {/* Expertise Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-3 relative">
            <div className="w-full px-3 relative">
              <span className="text-lg font-bold text-gray-900">
                {footerData?.title}
              </span>
              <hr className="h-[1.4px] w-[30%] border-0 bg-gradient-to-r from-[#ff0042] via-[#ff0042] to-transparent my-2" />
              <ul className="pt-2">
                {footerData?.expertiseItems?.map((link, i) => (
                  <li
                    key={i}
                    className="group flex items-center pb-4 text-base cursor-pointer w-fit tracking-wide"
                  >
                    {/* Red animated bar */}
                    <div className="group-hover:w-6 w-0 h-[2px] rounded-full bg-[#ff3757] transition-all duration-1000" />

                    {/* Tick icon */}
                    <div className="flex items-center justify-center text-primary">
                      <Image
                        src={footerData?.listImage}
                        alt={footerData?.listImageAlt}
                        width={14}
                        height={14}
                        className="me-2"
                      />
                    </div>

                    {/* Link text */}
                    <Link
                      href={link?.href}
                      className="text-[17px] text-[#0c0c0c] hover:text-[#ff0042] transition-colors"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-3 relative sm:pt-10 sm:mt-2">
            <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-[#ff0042] to-transparent hidden sm:block" />
            <ul className="w-full px-3 relative">
              {footerData?.expertiseItems2?.map((link, i) => (
                <li
                  key={i}
                  className="group flex items-center pb-4 text-base cursor-pointer w-fit tracking-wide"
                >
                  {/* Red animated bar */}
                  <div className="group-hover:w-6 w-0 h-[2px] rounded-full bg-[#ff3757] transition-all duration-1000" />

                  {/* Tick icon */}
                  <div className="flex items-center justify-center text-primary">
                    <Image
                      src={footerData?.listImage}
                      alt={footerData?.listImageAlt}
                      width={14}
                      height={14}
                      className="me-2"
                    />
                  </div>

                  {/* Link text */}
                  <Link
                    href={link?.href}
                    className="text-[17px] text-[#0c0c0c] hover:text-[#ff0042] transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* About Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 relative flex-shrink-0 px-3 mt-0">
            <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-[#ff0042] to-transparent hidden lg:block" />
            <span className="text-lg font-bold text-gray-900">
              {footerData?.aboutData?.title}
            </span>
            <hr className="h-[1.4px] w-[30%] border-0 bg-gradient-to-r from-[#ff0042] via-[#ff0042] to-transparent my-2" />
            <div className="flex items-center justify-center text-center">
              <Image
                src={footerData?.aboutData?.img}
                alt={footerData?.aboutData?.alt}
                loading="lazy"
                width={186}
                height={154}
                className="rounded-full mb-4"
              />
            </div>
          </div>

          <div className="flex justify-center mb-8 flex-col items-center w-full sm:w-1/2 lg:w-1/4 relative flex-shrink-0 px-3 mt-0">
            <div className="flex items-center flex-col gap-16">
              <Image
                src={footerData?.socialMedia?.logo}
                alt={footerData?.socialMedia?.logoAlt}
                width={250}
                height={50}
              />

              {/* Social Media Icons */}
              <div className="flex flex-col items-center justify-center mb-8">
                {footerData?.socialMedia?.socialMediaLinks?.map(
                  (row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="flex gap-[30px] justify-center mt-[10px]"
                    >
                      {row.map((item, i) => (
                        <Link
                          key={i}
                          href={item?.href}
                          target="_blank"
                          rel="noopener"
                          title={item?.title}
                        >
                          <Image
                            width="35"
                            height="35"
                            loading="lazy"
                            src={item?.src}
                            alt={item?.alt}
                            className="hover:scale-110 transition-transform duration-300 ease-in-out"
                          />
                        </Link>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <hr className="h-[1.4px] w-[100%] border-0 bg-gradient-to-r from-transparent via-[#ff0042] to-transparent" />

        {/* Company Description */}
        <div className="mt-10 flex flex-col lg:flex-row gap-12 items-center justify-between text-center lg:text-left">
          <div className="w-full lg:w-2/3">
            <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              {footerData?.navigation?.content}
            </p>

            <ul className="flex flex-wrap justify-center gap-5 mb-12 pb-8 mt-5">
              {footerData?.navigation?.navigationItems?.map((item, index) => (
                <li
                  key={index}
                  className="relative group border-r-2 border-gray-600 pr-5 last:border-none list-none"
                >
                  <Link
                    href={item?.href}
                    className="text-gray-600 hover:text-[#ff0042] transition-colors font-medium"
                  >
                    {item?.label}
                  </Link>
                  <span className="block h-[2px] w-0 bg-[#ff3757] transition-all duration-200 ease-in group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            <hr className="h-[1.4px] w-[100%] border-0 bg-gradient-to-r from-transparent via-[#ff0042] to-transparent" />
          </div>

          {/* Contact Section */}
          <div>
            <div className="w-full mt-10 lg:mt-0 space-y-6">
              <div className="text-xl font-bold text-gray-800 text-left m-0">
                {footerData?.footerContact?.heading}
              </div>
              <hr className="h-[1.4px] w-[30%] border-0 bg-gradient-to-r from-[#ff0042] via-[#ff0042] to-transparent my-2" />

              <div className="space-y-4">
                {/* Company Info */}
                <div className="flex items-start space-x-3">
                  <Image
                    src={footerData?.footerContact?.logo?.src}
                    alt={footerData?.footerContact?.logo?.alt}
                    width={footerData?.footerContact?.logo?.width}
                    height={footerData?.footerContact?.logo?.height}
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-gray-800 text-left">
                      {footerData?.footerContact?.company?.name}
                    </div>
                    <div className="text-gray-600 text-left whitespace-pre-line">
                      {footerData?.footerContact?.company?.address}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                  <i
                    className={footerData?.footerContact?.email?.iconClass}
                  ></i>
                  <Link
                    href={footerData?.footerContact?.email?.href}
                    className="hover:text-[#ff0042] text-[17px]"
                  >
                    {footerData?.footerContact?.email?.text}
                  </Link>
                </div>

                {/* Phone Numbers */}
                {footerData?.footerContact?.phones?.map((phone, index) => (
                  <div key={index} className="flex items-center space-x-3 mt-3">
                    <Image
                      src={phone?.flag}
                      height={24}
                      width={24}
                      loading="lazy"
                      alt={`${phone?.country} Flag`}
                    />
                    <Link
                      href={phone?.link}
                      className="hover:text-[#ff0042] text-black"
                    >
                      {phone?.number}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}

        {/* Contact Section */}

        {/* Footer */}
        <div className="text-center mt-12 pt-8 relative flex items-center gap-[20px]">
          <div className="w-[35%] h-px left-[-31%] top-1/2 bg-gradient-to-r from-transparent to-[#ff0042]" />
          <p className="text-gray-600 text-wrap sm:text-nowrap">
            Copyright © {footerData?.copyrights?.year} by{" "}
            <span className="text-[#ff0042] font-semibold">Soft Suave</span>.
            All Rights Reserved.
          </p>
          <div className="w-[35%] h-px right-[-31%] top-1/2 bg-gradient-to-l from-transparent to-[#ff0042]" />
        </div>
      </div>

      {/* Free Estimate Button
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 -rotate-90 origin-right">
        <button className="bg-gray-800 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-700 transition-colors">
          Get Free Estimate
        </button>
      </div> */}
    </footer>
  );
};

export default footer;
