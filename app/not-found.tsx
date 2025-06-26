// app/not-found.tsx
import Image from "next/image";
import { notFoundPageData } from "../lib/mainPageData";

const NotFound = () => {
  return (
    <main className="min-h-full flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <Image
          src={notFoundPageData?.image}
          alt={notFoundPageData?.alt}
          width={500}
          height={500}
          className="mt-4"
        />
      </div>
    </main>
  );
};

export default NotFound;
