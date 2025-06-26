// components/ConsultationBanner.tsx

import Link from "next/link";

interface ConsultationBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage: string; // e.g., "/images/airplane-bg.jpg"
  onButtonClick: string;
}

const ConsultationBanner = ({
  title,
  subtitle,
  buttonText,
  backgroundImage,
  onButtonClick,
}: ConsultationBannerProps) => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover text-white py-24 px-4 text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
      }}
    >
      <div className="flex flex-col items-center mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl mb-8 md:w-[60%] w-full">{subtitle}</p>
        <Link
          href={onButtonClick}
          className="inline-flex items-center justify-center gap-2 px-10 py-3 font-medium bg-[#ff0042] rounded-[10px] hover:border hover:bg-transparent hover:border-white"
        >
          {buttonText}
          <i className="fa-solid fa-arrow-right-long animate-arrow-anime"></i>
        </Link>
      </div>
    </section>
  );
};

export default ConsultationBanner;
