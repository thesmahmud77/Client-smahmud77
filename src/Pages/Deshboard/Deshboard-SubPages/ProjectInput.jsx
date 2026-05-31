import React from "react";

const ProjectInput = () => {
  return (
    <div className="w-full bg-[#0a0a0c] text-gray-200 min-h-screen p-6 md:p-10 font-sans">
      {/* Admin Panel Header */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-800 pb-6 mb-8">
        <div>
          <p className="text-orange-500 text-xs font-semibold tracking-wider uppercase mb-1">
            — Admin Panel
          </p>
          <h1 className="text-3xl font-bold text-white">
            Upload <span className="text-orange-500">New Project</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Fill in the details below. Preview updates live on the right.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <button
            type="button"
            className="px-5 py-2.5 bg-[#16161a] hover:bg-[#222227] border border-gray-800 rounded-lg text-sm font-medium transition cursor-pointer"
          >
            Save Draft
          </button>
          <button
            type="button"
            className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition shadow-lg shadow-orange-900/20 cursor-pointer"
          >
            🚀 Publish Project
          </button>
        </div>
      </div>

      {/* Main Form Elements - Now Full Width */}
      <form className="w-full space-y-6">
        {/* 1. Basic Information */}
        <div className="w-full bg-[#111115] border border-gray-800/60 rounded-xl p-6">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4 mb-6">
            <span className="w-3 h-6 bg-orange-500 rounded-sm"></span>
            <h2 className="text-lg font-semibold text-white">
              Basic Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Project ID
              </label>
              <input
                type="text"
                defaultValue="# 03"
                className="w-full bg-[#16161a] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-orange-500 transition"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Title
              </label>
              <input
                type="text"
                defaultValue="QurbaniHub"
                className="w-full bg-[#16161a] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-orange-500 transition"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              Description
            </label>
            <textarea
              rows="3"
              defaultValue="A specialized web application built with robust backend integration and seamless Firebase auth."
              className="w-full bg-[#16161a] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-orange-500 transition resize-none"
            ></textarea>
          </div>

          <div className="mt-6">
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              Project Type
            </label>
            <select className="w-full bg-[#16161a] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-orange-500 transition appearance-none cursor-pointer">
              <option value="fullstack">Full Stack</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="mobile">Mobile</option>
              <option value="design">Design</option>
            </select>
          </div>
        </div>

        {/* 2. Features & Technologies */}
        <div className="w-full bg-[#111115] border border-gray-800/60 rounded-xl p-6">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4 mb-6">
            <span className="w-3 h-6 bg-orange-500 rounded-sm"></span>
            <h2 className="text-lg font-semibold text-white">
              Features & Technologies
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Features
              </label>
              <div className="w-full bg-[#16161a] border border-gray-800 rounded-lg p-2 flex flex-wrap gap-2 items-center">
                {[
                  "Firebase Authentication",
                  "MongoDB Integration",
                  "HeroUI Components",
                  "Live Dashboard",
                ].map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-[#222227] border border-gray-700 text-xs text-gray-300 px-2.5 py-1 rounded flex items-center gap-1.5"
                  >
                    {feature}{" "}
                    <button
                      type="button"
                      className="text-gray-500 hover:text-red-400 font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  placeholder="Add feature..."
                  className="bg-transparent border-none text-xs text-gray-400 focus:outline-none ml-2 flex-1 min-w-[120px]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Technologies
              </label>
              <div className="w-full bg-[#16161a] border border-gray-800 rounded-lg p-2 flex flex-wrap gap-2 items-center">
                {["Next.js", "MongoDB", "Firebase", "HeroUI"].map(
                  (tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#222227] border border-gray-700 text-xs text-gray-300 px-2.5 py-1 rounded flex items-center gap-1.5"
                    >
                      {tech}{" "}
                      <button
                        type="button"
                        className="text-gray-500 hover:text-red-400 font-bold"
                      >
                        ×
                      </button>
                    </span>
                  ),
                )}
                <input
                  type="text"
                  placeholder="Add technology..."
                  className="bg-transparent border-none text-xs text-gray-400 focus:outline-none ml-2 flex-1 min-w-[120px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Project Image */}
        <div className="w-full bg-[#111115] border border-gray-800/60 rounded-xl p-6">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4 mb-6">
            <span className="w-3 h-6 bg-orange-500 rounded-sm"></span>
            <h2 className="text-lg font-semibold text-white">Project Image</h2>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              Project Image URL
            </label>
            <input
              type="text"
              placeholder="Paste image URL..."
              className="w-full bg-[#16161a] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <div className="relative flex flex-col items-center justify-center border-2 border-dashed border-gray-800 hover:border-gray-700 rounded-xl p-8 mt-6 transition bg-[#141418]">
            <svg
              className="w-8 h-8 text-gray-500 mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            <p className="text-sm text-gray-400 mb-1">Drag & drop image here</p>
            <p className="text-xs text-gray-500 mb-4">
              PNG, JPG, WEBP up to 5MB
            </p>
            <button
              type="button"
              className="px-4 py-1.5 bg-[#1c1c22] hover:bg-[#26262d] border border-gray-700 text-xs text-gray-300 font-medium rounded-md transition cursor-pointer"
            >
              Browse Files
            </button>
          </div>
        </div>

        {/* 4. Links & Dates */}
        <div className="w-full bg-[#111115] border border-gray-800/60 rounded-xl p-6">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4 mb-6">
            <span className="w-3 h-6 bg-orange-500 rounded-sm"></span>
            <h2 className="text-lg font-semibold text-white">Links & Dates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Live Link
              </label>
              <input
                type="text"
                defaultValue="https://github.com"
                className="w-full bg-[#16161a] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-orange-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Source Link
              </label>
              <input
                type="text"
                defaultValue="https://github.com"
                className="w-full bg-[#16161a] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-orange-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Upload Date
              </label>
              <input
                type="text"
                defaultValue="25-May-2026"
                className="w-full bg-[#16161a] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-orange-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Publish Date
              </label>
              <input
                type="text"
                defaultValue="25-May-2026"
                className="w-full bg-[#16161a] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-orange-500 transition"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectInput;
