"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const BookConsultation = () => {
  const [form, setForm] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    return Object.values(form).every((field) => field.trim() !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return alert("Please fill in all required fields.");

    setLoading(true);

    try {
      const ipRes = await fetch("https://api.ipify.org/?format=json");
      const { ip } = await ipRes.json();
      const infoRes = await fetch(
        `https://ipinfo.io/${ip}/json?token=63e4ceaaaf0f5b`
      );
      const location = await infoRes.json();

      const payload = {
        ...form,
        projectDescription: form.message,
        typeOfService: "Free Consultation",
        designation: "",
        ipAddress: ip,
        url: window.location.href,
        city: location.city?.normalize("NFD").replace(/\p{Diacritic}/gu, ""),
        region: location.region,
        country: location.country,
      };

      const res = await fetch(
        "https://www.softsuave.com/forms/enquires/freeQuote",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await res.json();
      if (result.status === "success") {
        window.location.href = "/thank-you.php";
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 w-full bg-[url('/images/03.webp')] bg-cover bg-center bg-fixed">
      <div className="container mx-auto px-4">
        <div className="text-white py-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[45px] font-bold">Book Free Consultation</h2>
            <p className="text-[22px]">
              Get a 30-minute free consultation from a field expert. Validate
              your idea for free and get a rough quote once you complete this
              form.
            </p>
            <Steps />
            <ConsultantInfo />
            <Link
              href="/30-min-free-consultation"
              className="mt-4 bg-[#f20b4b] hover:bg-white hover:text-[#ff0042] border border-[#ff0042] text-white px-10 py-2 rounded-lg w-fit"
            >
              Schedule a Call{" "}
              <i className="fa-solid fa-arrow-right-long animate-arrow-anime"></i>
            </Link>
            <TrustBadges />
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-8 text-black space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "name", label: "Your Name *", type: "text" },
                { name: "email", label: "Email Address *", type: "email" },
                { name: "company", label: "Company *", type: "text" },
                { name: "phone", label: "Phone Number *", type: "tel" },
              ].map(({ name, label, type }) => (
                <div key={name}>
                  <label className="block text-[17px] mb-1">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={(form as any)[name]}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-red-400 outline-none focus:border-red-600"
                  />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-[17px] mb-1">
                Brief about the project *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border-b border-red-400 outline-none focus:border-red-600 min-h-[80px]"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#fd004c] to-[#ff4f00] text-white py-3 rounded shadow-md font-semibold"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Steps = () => (
  <ol className="space-y-6 pl-4 list-none relative">
    {[
      {
        title: "Fill up your details",
        desc: "Get Custom Solutions, Recommendations, Estimates.",
      },
      {
        title: "What’s next?",
        desc: "One of our Account Managers will contact you shortly.",
      },
    ].map((step, index) => (
      <li key={index} className="relative pl-12">
        <span className="absolute left-0 top-1 w-8 h-8 bg-[#ff0042] text-white rounded-full flex items-center justify-center font-bold z-10">
          {index + 1}
        </span>
        <span className="text-[20px]">{step.title}</span>
        <br />
        <span className="text-[22px]">{step.desc}</span>
        {index === 0 && (
          <div className="absolute left-[15px] top-[30px] h-full w-[4px] border-l border-dashed border-[#ff0042] z-0"></div>
        )}
      </li>
    ))}
  </ol>
);

const ConsultantInfo = () => (
  <div className="flex items-center gap-4">
    <Image
      src="/images/madhu-manager.webp"
      alt="Madhu Kadiyala"
      width={100}
      height={100}
      className="rounded-full"
    />
    <div>
      <p className="font-bold text-[28px]">Madhu Kadiyala</p>
      <p className="text-[17px]">Technology Consultant</p>
    </div>
  </div>
);

const TrustBadges = () => {
  const badges = [
    { src: "/images/upwork-badge-new.webp", alt: "Upwork" },
    { src: "/images/clutch-color.webp", alt: "Clutch" },
    { src: "/images/microsoft-silver.webp", alt: "Microsoft" },
    { src: "/images/aws-color.webp", alt: "AWS" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map(({ src, alt }) => (
        <div
          key={alt}
          className="flex justify-center bg-white rounded-[10px] p-[5px]"
        >
          <Image
            src={src}
            alt={alt}
            width={100}
            height={35}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default BookConsultation;
