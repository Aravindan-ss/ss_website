"use client";

import { useEffect, useRef, useState } from "react";
import ContactCard from "./contactCard";
import HeaderTab from "./headerTab";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { tabData, headerData } from "../lib/headerData";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleCard = () => setIsOpen(!isOpen);
  const closeCard = () => setIsOpen(false);
  const openCard = () => setIsOpen(true);
  const menuRef = useRef<HTMLDivElement>(null);

  //outside click handler to close the mobile menu
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        toggleMobileMenu(); // Close menu
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileMenuOpen]);

  const handleClick = (index: number) => {
    setActiveTabIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-[999999]">
      <div className="lg:container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center">
            <Image
              src={headerData?.logo}
              alt={headerData?.logoAlt}
              width={200}
              height={50}
              loading="lazy"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        {/*header*/ }
        <div className="lg:ml-auto lg:mr-[1rem]">
          <div className="flex items-end space-x-6 flex-col">
            <div className="hidden sm:flex items-center space-x-2 text-sm gap-2 m-0">
              <div>
                <i className="fa-solid fa-envelope me-2 text-[#ff0042]"></i>
                <Link
                  href={headerData?.href}
                  className="hover:text-[#ff0042] text-[17px]"
                >
                  {headerData?.mail}
                </Link>
              </div>
              <div className="hidden sm:block w-px h-5 bg-gray-300" />
              <div
                className="hidden sm:flex relative items-center space-x-1 cursor-pointer group"
                onClick={toggleCard}
                onMouseEnter={openCard}
                onMouseLeave={closeCard}
              >
                <i className="fa-solid fa-phone shake-animate text-[#ff0042] me-1"></i>
                <i className="fa-solid fa-caret-down group-hover:text-[#ff0042]"></i>

                <div
                  className={`absolute top-[150%] w-[400px] right-[-1.2rem] z-[9999] transition-all ease-in-out duration-200
                    before:absolute before:content-[''] before:top-[-14px] before:right-[14px] lg:before:right-[21px]
                    before:border-l-[7px] before:border-r-[7px] before:border-t-[7px] before:border-b-[7px]
                    before:border-l-transparent before:border-r-transparent before:border-t-transparent
                    before:border-b-[rgba(247,55,87,0.9)] before:drop-shadow-[0_0_5px_rgba(247,55,87,0.3)]
                    ${
                      isOpen ? "opacity-100 visible" : "opacity-0 hidden"
                    } group-hover:opacity-100 group-hover:visible`}
                >
                  <ContactCard />
                </div>
              </div>
            </div>
            <div className="bg-transparent border-r-0 border-l-0 transition-none transform-none">
              <div
                className="fixed bottom-0 z-[1045] flex flex-col max-w-full invisible bg-white outline-none transition-transform ease-in-out duration-300
                lg:static lg:z-[1000] lg:visible lg:bg-transparent lg:border-l-0 lg:border-r-0 lg:transition-none lg:transform-none lg:flex-grow"
              >
                <div
                  className="lg:flex lg:grow-0 lg:p-0 lg:overflow-y-visible gap-6"
                  onMouseLeave={() => setActiveTabIndex(null)}
                >
                  {tabData?.map((tab, index) => (
                    <div
                      key={index}
                      className={`hidden sm:flex items-center space-x-1 cursor-pointer group hover:text-[#ff0042] ${
                        activeTabIndex === index ? "text-[#ff0042]" : ""
                      }`}
                      onClick={() => handleClick(index)}
                    >
                      <p>{tab?.headerName}</p>
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeTabIndex === index
                            ? "rotate-180 text-[#ff0042]"
                            : "group-hover:rotate-180"
                        }`}
                      />

                      <div
                        className={`absolute top-full left-0 w-[100%] z-[9999] transition-all ease-in-out duration-200
                        ${
                          activeTabIndex === index
                            ? "opacity-100 visible"
                            : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                        }`}
                      >
                        <HeaderTab
                          tabName={tab?.tabName}
                          headerName={tab?.headerName}
                          headerDesc={tab?.headerDesc}
                          headerImage={tab?.headerImage}
                          headerStore={tab?.headerStore}
                          headerButton={tab?.headerButton}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <button className="bg-[#f20b4b] cursor-pointer hover:bg-white hover:text-[#ff0042] border border-[#ff0042] text-white px-4 py-2 rounded-lg text-sm">
            {headerData?.contactButtonName}
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          {isMobileMenuOpen ? (
            <button onClick={() => toggleMobileMenu()}>
              <i className="fa fa-times text-2xl"></i>
            </button>
          ) : (
            <button
              aria-label="Toggle navigation menu"
              className="navbar-toggler p-0 border-0 rounded-0"
              type="button"
              onClick={() => toggleMobileMenu()}
            >
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </button>
          )}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed bg-opacity-50 z-[999999]">
          <div
            ref={menuRef}
            className="fixed left-0 top-[56px] h-[calc(100vh-56px)] bg-gradient-to-b from-white to-pink-200 p-4 shadow-lg z-[9999999] overflow-y-auto lg:hidden block max-w-[400px] w-full hide-scrollbar"
          >
            {tabData?.map((section) => (
              <div key={section?.headerName} className="mb-2">
                <button
                  className="flex justify-between items-center w-full text-left py-2 text-lg font-medium cursor-pointer"
                  onClick={() =>
                    setOpenSection(
                      openSection === section?.headerName
                        ? null
                        : section?.headerName
                    )
                  }
                >
                  {section?.headerName}
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      openSection === section?.headerName ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === section?.headerName && (
                  <HeaderTab
                    tabName={section?.tabName}
                    headerName={section?.headerName}
                    headerDesc={section?.headerDesc}
                    headerImage={section?.headerImage}
                    headerStore={section?.headerStore}
                    headerButton={section?.headerButton}
                    closeMenu={() => setMobileMenuOpen(false)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
