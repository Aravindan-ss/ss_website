import Image from "next/image";

interface KeyArea {
  icon: string;
  title: string;
}

interface IndustryOverviewProps {
  sectionLabel: string;
  headline: string;
  description: string;
  keyAreas: KeyArea[];
  imageSrc: string;
  altText?: string;
  flexReverse?: boolean;
}

export default function IndustryOverview({
  sectionLabel,
  headline,
  description,
  keyAreas,
  imageSrc,
  flexReverse = false,
  altText = "AI in Aviation",
}: IndustryOverviewProps) {
  const half = Math.ceil(keyAreas.length / 2);
  const leftItems = keyAreas.slice(0, half);
  const rightItems = keyAreas.slice(half);

  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col items-center lg:flex-row gap-16 ${
            flexReverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <p className="caveat-custom text-[34px] font-extrabold text-[#ff0042] mb-2 flex">
              {sectionLabel}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{headline}</h2>
            <p className="text-[17px] text-gray-600 leading-relaxed md:leading-[1.75] mb-6 pb-8">
              {description}
            </p>

            {/* Grid for key areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[leftItems, rightItems].map((group, i) => (
                <div key={i} className="flex flex-col gap-8">
                  {group.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Image
                        src={item?.icon}
                        alt={item?.title}
                        width={50}
                        height={50}
                      />
                      <p className="text-[17px] text-gray-800">{item.title}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image src={imageSrc} alt={altText} width={500} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
