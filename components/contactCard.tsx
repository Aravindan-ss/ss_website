// components/contactCard.tsx
import Link from "next/link";
import Image from "next/image";
import { contactCardData } from "../lib/headerData";

const ContactCard = () => {
  return (
    <div className="p-0 w-full rounded-[5px] relative inline-block backdrop-blur-[5px] bg-white/90 shadow-[0_0_5px_rgba(247,55,87,0.3)]">
      <h2 className="text-[16px] text-[#212529] leading-[1.2] font-extrabold px-5 py-2.5 tracking-[0.5px] border-b border-[#f73757]/[0.1]">
        {contactCardData?.title}
      </h2>

      <div className="max-h-[500px] overflow-y-auto pr-0 custom-scrollbar-thin">
        {contactCardData?.contactSection?.map((section, index) => {
          const IconComponent = section?.img;

          return (
            <div
              key={index}
              className="border-t border-[rgba(247,55,87,0.1)] flex flex-col last:border-none"
            >
              <h3 className="mt-5 font-bold text-left ml-7.5">
                {section?.title}
              </h3>

              <div className="!border-t-0 flex gap-4 text-left min-h-[110px] px-5 py-[15px] items-center">
                <div>{IconComponent && <IconComponent />}</div>

                <div className="flex flex-col gap-4">
                  {section?.text && (
                    <div className="text-[16px] text-[#212529] font-bold">
                      {section?.text}
                    </div>
                  )}

                  <ul>
                    {section?.lists?.map((list, index) => (
                      <li
                        key={index}
                        className="flex items-center mb-3 gap-2 text-base font-semibold"
                      >
                        {list?.icon && (
                          <Image
                            src={list?.icon}
                            alt={`${list?.country} Flag`}
                            width={24}
                            height={24}
                            loading="lazy"
                          />
                        )}
                        {list.href.startsWith("mailto:") ? (
                          <>
                            <i className="fa-solid fa-envelope"></i>
                            <Link
                              href={list?.href}
                              className="text-[#ff0042] hover:text-black"
                            >
                              {list?.text}
                            </Link>
                          </>
                        ) : (
                          <>
                            {!list?.icon && (<i className="fa-solid fa-phone"></i>)}
                            <Link
                              href={list?.href}
                              className="text-[#ff0042] hover:text-black"
                            >
                              {list?.text}
                            </Link>
                            {list?.extras && (
                              <>
                                (<i className="fa-solid fa-phone"></i> &
                                <Image
                                  width={24}
                                  height={24}
                                  loading="lazy"
                                  src={contactCardData?.whatsappImage}
                                  alt={contactCardData?.whatsappImageAlt}
                                />
                                )
                              </>
                            )}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>

                  <span className="text-gray-600">
                    ({section?.redirectText}{" "}
                    <Link
                      href={section?.redirectLink}
                      className="text-[#ff0042] hover:text-black"
                    >
                      {section?.redirectTextLink}
                    </Link>
                    )
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactCard;
