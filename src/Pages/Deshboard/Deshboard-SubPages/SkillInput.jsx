import React from "react";

const SkillInput = () => {
  return (
    <div className="w-full bg-[#0a0a0c] text-gray-200 min-h-screen p-6 md:p-10 font-sans">
      {/* Admin Panel Header */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-800 pb-6 mb-8">
        <div>
          <p className="text-orange-500 text-xs font-semibold tracking-wider uppercase mb-1">
            — Admin Panel
          </p>
          <h1 className="text-3xl font-bold text-white">
            Add New <span className="text-orange-500">Skill</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Log a new technology or skill to your toolkit.
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
            ➕ Add to Toolkit
          </button>
        </div>
      </div>

      {/* Main Form Elements - Full Width */}
      <form className="w-full space-y-6">
        {/* 1. Skill Identity */}
        <div className="w-full bg-[#111115] border border-gray-800/60 rounded-xl p-6">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4 mb-6">
            <span className="w-3 h-6 bg-orange-500 rounded-sm"></span>
            <h2 className="text-lg font-semibold text-white">Skill Identity</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skill Name Input with attached Icon */}
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Skill / Technology Name
              </label>
              <div className="flex items-center bg-[#16161a] border border-gray-800 rounded-lg px-3 focus-within:border-orange-500 transition">
                <span className="text-gray-500 text-sm mr-2">T</span>
                <input
                  type="text"
                  defaultValue="Next.js"
                  className="w-full bg-transparent border-none py-2.5 text-sm text-gray-300 focus:outline-none"
                />
              </div>
            </div>

            {/* Short Label Input with attached Icon */}
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Short Label
              </label>
              <div className="flex items-center bg-[#16161a] border border-gray-800 rounded-lg px-3 focus-within:border-orange-500 transition">
                <span className="text-gray-500 text-sm mr-2">🏷️</span>
                <input
                  type="text"
                  defaultValue="Framework"
                  className="w-full bg-transparent border-none py-2.5 text-sm text-gray-300 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Description Textarea with attached Icon */}
          <div className="mt-6">
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              Description
            </label>
            <div className="flex items-start bg-[#16161a] border border-gray-800 rounded-lg px-3 py-2.5 focus-within:border-orange-500 transition">
              <span className="text-gray-500 text-sm mr-2 mt-0.5">≡</span>
              <textarea
                rows="3"
                defaultValue="The React framework for production. Enables server-side rendering and static site generation."
                className="w-full bg-transparent border-none text-sm text-gray-300 focus:outline-none resize-none"
              ></textarea>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Category Custom Dropdown / Input with attached Icon */}
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Category
              </label>
              <div className="flex items-center bg-[#16161a] border border-gray-800 rounded-lg px-3 focus-within:border-orange-500 transition relative">
                <span className="text-gray-500 text-sm mr-2">📁</span>
                <select className="w-full bg-transparent border-none py-2.5 text-sm text-gray-300 focus:outline-none appearance-none cursor-pointer">
                  <option value="Framework">Framework</option>
                  <option value="Library">Library</option>
                  <option value="Database">Database</option>
                  <option value="Runtime">Runtime</option>
                  <option value="Tool">Tool</option>
                  <option value="Language">Language</option>
                  <option value="Auth">Auth</option>
                  <option value="DevOps">DevOps</option>
                </select>
                <span className="absolute right-3 text-gray-500 pointer-events-none text-xs">
                  ▼
                </span>
              </div>
            </div>

            {/* Years of Experience Input with attached Icon */}
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Years of Experience
              </label>
              <div className="flex items-center bg-[#16161a] border border-gray-800 rounded-lg px-3 focus-within:border-orange-500 transition">
                <span className="text-gray-500 text-sm mr-2">🕒</span>
                <input
                  type="text"
                  defaultValue="1.5"
                  className="w-full bg-transparent border-none py-2.5 text-sm text-gray-300 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Proficiency Level */}
        <div className="w-full bg-[#111115] border border-gray-800/60 rounded-xl p-6">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4 mb-6">
            <span className="w-3 h-6 bg-orange-500 rounded-sm"></span>
            <h2 className="text-lg font-semibold text-white">
              Proficiency Level
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Beginner", "Intermediate", "Advanced", "Expert"].map((level) => {
              const isActive = level === "Advanced";
              return (
                <button
                  key={level}
                  type="button"
                  className={`flex flex-col items-center justify-center p-5 rounded-xl border text-sm font-medium transition cursor-pointer ${
                    isActive
                      ? "bg-[#1a1412] border-orange-600 text-orange-500 shadow-md"
                      : "bg-[#16161a] border-gray-800/80 text-gray-400 hover:border-gray-700"
                  }`}
                >
                  <div className="flex items-end gap-0.5 mb-2 h-4">
                    <span
                      className={`w-1 h-2 rounded-sm ${isActive ? "bg-orange-500" : "bg-gray-600"}`}
                    ></span>
                    <span
                      className={`w-1 h-3 rounded-sm ${isActive ? "bg-orange-500" : "bg-gray-600"}`}
                    ></span>
                    <span
                      className={`w-1 h-4 rounded-sm ${isActive ? "bg-orange-500" : "bg-gray-600"}`}
                    ></span>
                    <span
                      className={`w-1 h-1 rounded-sm ${isActive ? "bg-gray-700" : "bg-gray-700"}`}
                    ></span>
                  </div>
                  {level}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Project Usage */}
        <div className="w-full bg-[#111115] border border-gray-800/60 rounded-xl p-6">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4 mb-6">
            <span className="w-3 h-6 bg-orange-500 rounded-sm"></span>
            <h2 className="text-lg font-semibold text-white">Project Usage</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Used In Projects
              </label>
              <div className="w-full bg-[#16161a] border border-gray-800 rounded-lg p-2 flex flex-wrap gap-2 items-center">
                {["QurbaniHub", "Portfolio Website", "E-Commerce Store"].map(
                  (project, idx) => (
                    <span
                      key={idx}
                      className="bg-[#222227] border border-gray-700 text-xs text-gray-300 px-2.5 py-1 rounded flex items-center gap-1.5"
                    >
                      {project}{" "}
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
                  placeholder="Add project name..."
                  className="bg-transparent border-none text-xs text-gray-400 focus:outline-none ml-2 flex-1 min-w-[140px]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Related Skills
              </label>
              <div className="w-full bg-[#16161a] border border-gray-800 rounded-lg p-2 flex flex-wrap gap-2 items-center">
                {["React.js", "TypeScript", "Vercel"].map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[#222227] border border-gray-700 text-xs text-gray-300 px-2.5 py-1 rounded flex items-center gap-1.5"
                  >
                    {skill}{" "}
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
                  placeholder="Add related skill..."
                  className="bg-transparent border-none text-xs text-gray-400 focus:outline-none ml-2 flex-1 min-w-[140px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4. Display Settings */}
        <div className="w-full bg-[#111115] border border-gray-800/60 rounded-xl p-6">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4 mb-6">
            <span className="w-3 h-6 bg-orange-500 rounded-sm"></span>
            <h2 className="text-lg font-semibold text-white">
              Display Settings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Icon Name Input with attached Icon */}
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Icon Name (Lucide)
              </label>
              <div className="flex items-center bg-[#16161a] border border-gray-800 rounded-lg px-3 focus-within:border-orange-500 transition">
                <span className="text-gray-500 text-sm mr-2">🌐</span>
                <input
                  type="text"
                  defaultValue="triangle"
                  className="w-full bg-transparent border-none py-2.5 text-sm text-gray-300 focus:outline-none"
                />
              </div>
            </div>

            {/* Display Order Input with attached Icon */}
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Display Order
              </label>
              <div className="flex items-center bg-[#16161a] border border-gray-800 rounded-lg px-3 focus-within:border-orange-500 transition">
                <span className="text-gray-500 text-sm mr-2">🔢</span>
                <input
                  type="number"
                  defaultValue="1"
                  className="w-full bg-transparent border-none py-2.5 text-sm text-gray-300 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Visibility Section */}
          <div className="mt-6">
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              Visibility
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 bg-[#1a1412] border border-orange-600 text-orange-500 rounded-xl text-sm font-medium transition cursor-pointer"
              >
                👁️ Visible
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 bg-[#16161a] border border-gray-800 text-gray-400 hover:border-gray-700 rounded-xl text-sm font-medium transition cursor-pointer"
              >
                🪓 Hidden
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SkillInput;
