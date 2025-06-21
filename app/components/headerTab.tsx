import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type IndustriesSectionProps = {
  tabName: string;
  headerName: string;
  headerDesc: string;
  headerImage: string;
  headerStore: Array<{
    name?: string;
    description?: string;
    icon?: string;
    href?: string;
    colorClass?: string;
    hoverColorClass?: string;
    id?: string;
    services?: Array<{
      id?: string;
      name?: string;
      description?: string;
      icon?: string;
      href?: string;
      color?: string;
      hoverColorClass?: string;
    }>;
  }>;
  headerButton: string;
  closeMenu?: () => void;
};

const HeaderTab = ({
  tabName,
  headerName,
  headerDesc,
  headerImage,
  headerStore,
  headerButton,
  closeMenu,
}: IndustriesSectionProps) => {
  const [activeCategory, setActiveCategory] = useState("team-expertise");
  let currentCategory;
  if (tabName === "isServices") {
    currentCategory = headerStore.find((cat) => cat.id === activeCategory);
  }
  return (
    <div className="lg:w-100% lg:bg-white lg:border lg:border-[#f4f5f6] lg:shadow-lg lg:pt-10 lg:pb-10">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg lg:rounded-none lg:shadow-none shadow-lg p-4 lg:p-0">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column - Description */}
            <div className="lg:w-1/4 lg:border-r border-gray-200 lg:pr-6 mb-6 lg:mb-0">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 text-[22px]">
                {headerName}
              </h3>
              <p className="text-gray-600 mb-6 text-[17px]">{headerDesc}</p>
              {tabName === "isIndustries" && (
                <Link
                  href="/industries"
                  onClick={closeMenu}
                  className="inline-flex items-center px-4 py-2 text-[16px] bg-[#ff0042] text-white rounded-md border border-[#ff0042] hover:bg-white hover:text-[#ff0042] transition-colors duration-200 mb-4"
                >
                  {headerButton}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
              <div className="hidden lg:block">
                <Image
                  src={headerImage}
                  alt={headerName}
                  width={300}
                  height={150}
                  loading="lazy"
                  className="w-full rounded-md"
                />
              </div>
            </div>

            {/* Right Column - Industry Grid */}
            {tabName !== "isServices" && (
              <div className="lg:w-3/4 lg:pl-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  {headerStore?.map((tab, index) => (
                    <Link
                      key={index}
                      onClick={closeMenu}
                      href={tab?.href ?? "#"}
                      className={`flex items-center gap-3 p-3 rounded-lg ${tab?.hoverColorClass} transition-colors duration-200 group`}
                    >
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-lg ${tab?.colorClass}`}
                      >
                        <span className="text-xl">
                          <Image
                            src={tab?.icon ?? "/placeholder.png"}
                            alt={tab?.name ?? "Tab"}
                            width={35}
                            height={35}
                            loading="lazy"
                          />
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`font-semibold text-gray-800 transition-colors duration-200 text-[17px]`}
                        >
                          {tab?.name}
                        </h4>
                        <p className="text-sm text-gray-600 text-[15px]">
                          {tab?.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {tabName === "isServices" && (
              <div className="flex flex-col lg:flex-row rounded-lg">
                {/* Sidebar */}
                <div className="bg-white border-none gap-2 p-2 mr-5">
                  {headerStore?.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (category?.id) setActiveCategory(category?.id);
                      }}
                      className={`w-full flex items-center gap-2 px-4 py-3 rounded-md font-semibold text-[15px] text-left transition-all duration-300 ease-in-out relative m-2
                        ${
                          activeCategory === category?.id
                            ? "bg-pink-50 text-[#ff0042] lg:after:content-[''] lg:after:absolute lg:after:w-[20px] lg:after:h-[20px] lg:after:top-[9px] lg:after:-right-2 lg:after:bg-pink-50 lg:after:rotate-45"
                            : "text-gray-700 hover:bg-[#ffeff3]"
                        }`}
                    >
                      <span className="text-lg">
                        <Image
                          src={category?.icon ?? "/placeholder.png"}
                          alt={category?.name ?? "Category"}
                          width={35}
                          height={35}
                          className={`${
                            activeCategory === category?.id
                              ? "custom-icon-filter"
                              : "none"
                          }`}
                          loading="lazy"
                        />
                      </span>
                      <span className="font-medium">{category?.name}</span>
                    </button>
                  ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 p-5 border border-[#eeeeee] rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] box-border">
                  {currentCategory && (
                    <>
                      {/* Header Service for Mobile and Web Development */}
                      {(currentCategory?.id === "mobile-development" ||
                        currentCategory?.id === "web-development") &&
                        currentCategory?.services &&
                        currentCategory?.services?.length > 0 &&
                        currentCategory?.services[0]?.description && (
                          <div
                            className={`group mb-6 p-4 border-b border-[#eeeeee] ${currentCategory?.services[0]?.hoverColorClass} rounded-lg`}
                          >
                            <Link
                              className={`flex items-center gap-3`}
                              onClick={closeMenu}
                              href={currentCategory?.services[0]?.href ?? "#"}
                            >
                              <div
                                className={`w-[55px] h-[55px] rounded-lg flex items-center justify-center ${currentCategory?.services[0]?.color}`}
                              >
                                <span className="text-lg">
                                  <Image
                                    src={
                                      currentCategory?.services[0]?.icon ??
                                      "/placeholder.png"
                                    }
                                    alt={
                                      currentCategory?.services[0]?.name ??
                                      "Service"
                                    }
                                    width={35}
                                    height={35}
                                    loading="lazy"
                                  />
                                </span>
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  {currentCategory?.services[0]?.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {currentCategory?.services[0]?.description}
                                </p>
                              </div>
                            </Link>
                          </div>
                        )}

                      {/* Services Grid */}
                      {currentCategory?.id === "team-expertise" ? (
                        // Team Expertise - 2 column layout
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {currentCategory?.services?.map((service) => (
                            <Link
                              key={service?.id}
                              onClick={closeMenu}
                              className={`p-4 rounded-lg text-left group ${service?.hoverColorClass}`}
                              href={service?.href ?? "#"}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-[55px] h-[55px] rounded-lg flex items-center justify-center ${service?.color} group-hover:scale-105 transition-transform`}
                                >
                                  <span className="text-lg">
                                    <Image
                                      src={service?.icon ?? "/placeholder.png"}
                                      alt={service?.name ?? "Service"}
                                      width={35}
                                      height={35}
                                      loading="lazy"
                                    />
                                  </span>
                                </div>
                                <div>
                                  <h4
                                    className={`font-semibold text-gray-900 transition-colors`}
                                  >
                                    {service?.name}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {service?.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : currentCategory?.id === "others" ? (
                        // Others - 2 column layout
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {currentCategory?.services?.map((service) => (
                            <Link
                              key={service?.id}
                              onClick={closeMenu}
                              className={`p-4 rounded-lg text-left group ${service?.hoverColorClass}`}
                              href={service?.href ?? "#"}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-[55px] h-[55px] rounded-lg flex items-center justify-center ${service?.color} group-hover:scale-105 transition-transform`}
                                >
                                  <span className="text-lg">
                                    <Image
                                      src={service?.icon ?? "/placeholder.png"}
                                      alt={service?.name ?? "Service"}
                                      width={35}
                                      height={35}
                                      loading="lazy"
                                    />
                                  </span>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 transition-colors">
                                    {service?.name}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {service?.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        // Mobile and Web Development - 3 column layout (excluding first item with description)
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                          {currentCategory?.services
                            ?.slice(
                              currentCategory?.services &&
                                currentCategory?.services[0]?.description
                                ? 1
                                : 0
                            )
                            ?.map((service) => (
                              <Link
                                key={service?.id}
                                onClick={closeMenu}
                                className={`p-4 rounded-lg text-left group ${service?.hoverColorClass}`}
                                href={service?.href ?? "#"}
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`w-[55px] h-[55px] rounded-lg flex items-center justify-center ${service?.color} group-hover:scale-105 transition-transform`}
                                  >
                                    <span className="text-lg">
                                      <Image
                                        src={
                                          service?.icon ?? "/placeholder.png"
                                        }
                                        alt={service?.name ?? "Service"}
                                        width={35}
                                        height={35}
                                        loading="lazy"
                                      />
                                    </span>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900 transition-colors">
                                      {service?.name}
                                    </h4>
                                    {service?.description && (
                                      <p className="text-sm text-gray-600">
                                        {service?.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTab;
