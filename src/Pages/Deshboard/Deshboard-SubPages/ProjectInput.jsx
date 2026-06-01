import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ProjectInput = () => {
  // useForm ইনিশিয়ালাইজ করা হলো
  const { register, handleSubmit, setValue } = useForm();

  // ১. Features এবং Technologies এর জন্য আলাদা দুটি Array State
  const [features, setFeatures] = useState([
    "Firebase Authentication",
    "MongoDB Integration",
    "HeroUI Components",
    "Live Dashboard",
  ]);

  const [technologies, setTechnologies] = useState([
    "Next.js",
    "MongoDB",
    "Firebase",
    "HeroUI",
  ]);

  // ২. কাস্টম স্টেটের ডাটাগুলো নিয়মিত useForm-এর সাথে সিঙ্ক (Sync) রাখার জন্য useEffect
  useEffect(() => {
    setValue("features", features);
  }, [features, setValue]);

  useEffect(() => {
    setValue("technologies", technologies);
  }, [technologies, setValue]);

  // ৩. কি-বোর্ডের Enter বাটন প্রেস করে নতুন ট্যাগ যোগ করার ফাংশন
  const handleAddTag = (e, type) => {
    if (e.key === "Enter") {
      e.preventDefault(); // ফর্ম যেন সাবমিট না হয়ে যায়
      const value = e.target.value.trim();

      if (value) {
        if (type === "features" && !features.includes(value)) {
          setFeatures([...features, value]);
        } else if (type === "technologies" && !technologies.includes(value)) {
          setTechnologies([...technologies, value]);
        }
        e.target.value = ""; // ইনপুট বক্স খালি করা হলো
      }
    }
  };

  // ৪. কোনো ট্যাগের ক্রসে (×) ক্লিক করলে সেটি বাদ দেওয়ার ফাংশন
  const handleRemoveTag = (indexToRemove, type) => {
    if (type === "features") {
      const filtered = features.filter((_, index) => index !== indexToRemove);
      setFeatures(filtered);
    } else if (type === "technologies") {
      const filtered = technologies.filter(
        (_, index) => index !== indexToRemove,
      );
      setTechnologies(filtered);
    }
  };

  // মেইন ফর্ম সাবমিট হ্যান্ডলার (সব ডাটা একসাথে এখানে আসবে)
  const onSubmit = (data) => {
    console.log("Combined Form Submitted Data:", data);
    alert("সব ডাটা সফলভাবে সাবমিট হয়েছে! ব্রাউজারের কনসোল চেক করুন।");
  };
  return (
    <div className="w-full bg-[#0a0a0c] text-gray-200 min-h-screen p-6 md:p-10 font-sans">
      {/* মেইন ফর্ম স্টার্ট */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* ===================================================================
            SECTION 1: BASIC INFORMATION CARD
           =================================================================== */}
        <div className="bg-[#0c0d0e] border border-gray-800 rounded-xl p-6 space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-900 pb-4">
            <span className="w-4 h-4 bg-orange-600 rounded-md inline-block"></span>
            <h2 className="text-lg font-semibold tracking-wide text-white">
              Basic Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project ID */}
            <div className="form-control w-full">
              <label className="label mb-1">
                <span className="label-text text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Project ID
                </span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-500 font-bold text-lg">
                  #
                </span>
                <input
                  type="text"
                  placeholder="03"
                  {...register("projectId")}
                  className="w-full bg-[#131416] border border-gray-800 rounded-lg py-3 pl-10 pr-4 text-gray-200 outline-none focus:border-orange-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Title */}
            <div className="form-control w-full">
              <label className="label mb-1">
                <span className="label-text text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Title
                </span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-500 font-semibold text-base">
                  T
                </span>
                <input
                  type="text"
                  placeholder="QurbaniHub"
                  {...register("title")}
                  className="w-full bg-[#131416] border border-gray-800 rounded-lg py-3 pl-10 pr-4 text-gray-200 outline-none focus:border-orange-500 transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="form-control w-full">
            <label className="label mb-1">
              <span className="label-text text-gray-400 text-xs font-semibold uppercase tracking-wider">
                Description
              </span>
            </label>
            <div className="relative flex items-start">
              <span className="absolute left-4 top-4 text-gray-500 text-sm">
                ☰
              </span>
              <textarea
                rows="4"
                placeholder="A specialized web application built with robust backend integration and seamless Firebase auth."
                {...register("description")}
                className="w-full bg-[#131416] border border-gray-800 rounded-lg py-3 pl-10 pr-4 text-gray-200 outline-none focus:border-orange-500 transition-all duration-200 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Project Type (Text Input) */}
          <div className="form-control w-full">
            <label className="label mb-1">
              <span className="label-text text-gray-400 text-xs font-semibold uppercase tracking-wider">
                Project Type
              </span>
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-500 text-sm">🥞</span>
              <input
                type="text"
                placeholder="Full Stack"
                {...register("projectType")}
                className="w-full bg-[#131416] border border-gray-800 rounded-lg py-3 pl-10 pr-4 text-gray-200 outline-none focus:border-orange-500 transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* ===================================================================
            SECTION 2: FEATURES & TECHNOLOGIES CARD (Tag Manager)
           =================================================================== */}
        <div className="bg-[#0c0d0e] border border-gray-800 rounded-xl p-6 space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-900 pb-4">
            <span className="w-4 h-4 bg-orange-600 rounded-md inline-block"></span>
            <h2 className="text-lg font-semibold tracking-wide text-white">
              Features & Technologies
            </h2>
          </div>

          {/* Features Tag Input */}
          <div className="form-control w-full">
            <label className="label mb-1">
              <span className="label-text text-gray-400 text-xs font-semibold uppercase tracking-wider">
                Features
              </span>
            </label>
            <div className="w-full bg-[#131416] border border-gray-800 rounded-lg p-2 flex flex-wrap gap-2 items-center focus-within:border-orange-500 transition-all duration-200">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 bg-[#1a1b1e] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md border border-gray-800"
                >
                  <span>{feature}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(index, "features")}
                    className="text-gray-500 hover:text-orange-500 font-bold transition ml-1"
                  >
                    ×
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder="Add feature..."
                onKeyDown={(e) => handleAddTag(e, "features")}
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-200 py-1 px-2 min-w-[120px]"
              />
            </div>
          </div>

          {/* Technologies Tag Input */}
          <div className="form-control w-full">
            <label className="label mb-1">
              <span className="label-text text-gray-400 text-xs font-semibold uppercase tracking-wider">
                Technologies
              </span>
            </label>
            <div className="w-full bg-[#131416] border border-gray-800 rounded-lg p-2 flex flex-wrap gap-2 items-center focus-within:border-orange-500 transition-all duration-200">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 bg-[#1a1b1e] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md border border-gray-800"
                >
                  <span>{tech}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(index, "technologies")}
                    className="text-gray-500 hover:text-orange-500 font-bold transition ml-1"
                  >
                    ×
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder="Add technology..."
                onKeyDown={(e) => handleAddTag(e, "technologies")}
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-200 py-1 px-2 min-w-[120px]"
              />
            </div>
          </div>
        </div>

        {/* ===================================================================
            SECTION 3: LINKS & DATES CARD
           =================================================================== */}
        <div className="bg-[#0c0d0e] border border-gray-800 rounded-xl p-6 space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-900 pb-4">
            <span className="w-4 h-4 bg-orange-600 rounded-md inline-block"></span>
            <h2 className="text-lg font-semibold tracking-wide text-white">
              Links & Dates
            </h2>
          </div>

          {/* Live Link এবং Source Link পাশাপাশি */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Live Link */}
            <div className="form-control w-full">
              <label className="label mb-1">
                <span className="label-text text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Live Link
                </span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-500 text-sm">
                  🔗
                </span>
                <input
                  type="url"
                  placeholder="https://github.com"
                  {...register("liveLink")}
                  className="w-full bg-[#131416] border border-gray-800 rounded-lg py-3 pl-10 pr-4 text-gray-200 outline-none focus:border-orange-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Source Link */}
            <div className="form-control w-full">
              <label className="label mb-1">
                <span className="label-text text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Source Link
                </span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-500 text-sm">
                  🐙
                </span>
                <input
                  type="url"
                  placeholder="https://github.com"
                  {...register("sourceLink")}
                  className="w-full bg-[#131416] border border-gray-800 rounded-lg py-3 pl-10 pr-4 text-gray-200 outline-none focus:border-orange-500 transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Upload Date এবং Publish Date পাশাপাশি */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upload Date */}
            <div className="form-control w-full">
              <label className="label mb-1">
                <span className="label-text text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Upload Date
                </span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-500 text-sm">
                  📅
                </span>
                <input
                  type="date"
                  {...register("uploadDate")}
                  className="w-full bg-[#131416] border border-gray-800 rounded-lg py-3 pl-10 pr-4 text-gray-200 outline-none focus:border-orange-500 transition-all duration-200 cursor-pointer"
                />
              </div>
            </div>

            {/* Publish Date */}
            <div className="form-control w-full">
              <label className="label mb-1">
                <span className="label-text text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Publish Date
                </span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-500 text-sm">
                  📅
                </span>
                <input
                  type="date"
                  {...register("publishDate")}
                  className="w-full bg-[#131416] border border-gray-800 rounded-lg py-3 pl-10 pr-4 text-gray-200 outline-none focus:border-orange-500 transition-all duration-200 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* মেইন সাবমিট বাটন */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-8 py-3 rounded-lg transition-all text-sm shadow-lg shadow-orange-900/20 cursor-pointer"
          >
            Save All Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectInput;
