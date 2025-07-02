"use client";

import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaPhone, FaClipboardList } from "react-icons/fa";
import TitleBorder from "../titleBorder";
type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Add your API call or logic here
  };

  return (
    <div className="max-w-md mx-auto bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 md:p-8 text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
        Lets Discuss Your Project
      </h2>
      <div className="flex justify-center mb-2">
        <TitleBorder />
      </div>
      <p className="text-gray-600 text-sm mb-6">
        Get free rough quote in 24 hrs
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
        <div className="flex items-center border-b border-gray-300 py-2 relative">
          <span className="pl-4 relative flex items-center">
            <FaUser className="text-gray-500 mr-3" />
            <span className="absolute -right-1.5 -top-2 text-pink-500 text-base pointer-events-none select-none">
              *
            </span>
          </span>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full focus:outline-none bg-transparent ml-1 pl-2"
            {...register("name", { required: true })}
          />
        </div>
        {errors.name && (
          <p className="text-xs text-pink-600 ml-8">Full Name is required.</p>
        )}

        <div className="flex items-center border-b border-gray-300 py-2 relative">
          <span className="pl-4 relative flex items-center">
            <FaEnvelope className="text-gray-500 mr-3" />
            <span className="absolute -right-1.5 -top-2 text-pink-500 text-base pointer-events-none select-none">
              *
            </span>
          </span>
          <input
            type="email"
            placeholder="Email ID"
            className="w-full focus:outline-none bg-transparent ml-1 pl-2"
            {...register("email", { required: true })}
          />
        </div>
        {errors.email && (
          <p className="text-xs text-pink-600 ml-8">Email is required.</p>
        )}

        <div className="flex items-center border-b border-gray-300 py-2 relative">
          <span className="pl-4 relative flex items-center">
            <FaPhone className="text-gray-500 mr-3" />
            <span className="absolute -right-1.5 -top-2 text-pink-500 text-base pointer-events-none select-none">
              *
            </span>
          </span>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full focus:outline-none bg-transparent ml-1 pl-2"
            {...register("phone", { required: true })}
          />
        </div>
        {errors.phone && (
          <p className="text-xs text-pink-600 ml-8">
            Phone Number is required.
          </p>
        )}

        <div className="flex items-center border-b border-gray-300 py-2 relative">
          <span className="pl-4 relative flex items-center">
            <FaClipboardList className="text-gray-500 mr-3" />
            <span className="absolute -right-1.5 -top-2 text-pink-500 text-base pointer-events-none select-none">
              *
            </span>
          </span>
          <textarea
            placeholder="How Can We Help(Requirement)"
            rows={2}
            className="w-full focus:outline-none bg-transparent resize-none ml-1 pl-2"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        {errors.message && (
          <p className="text-xs text-pink-600 ml-8">This field is required.</p>
        )}

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-full shadow mt-2 transition"
        >
          Submit
        </button>
      </form>

      <p className="text-xs text-gray-600 mt-4 flex items-center justify-center">
        <span className="text-pink-600 mr-1">❤️</span> 100% Privacy Guaranteed
      </p>
    </div>
  );
}
