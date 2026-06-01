import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const SkillInput = () => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      skillName: "Next.js",
      shortLabel: "Framework",
      description:
        "The React framework for production. Enables server-side rendering and static site generation.",
      category: "Framework",
      yearsOfExperience: "1.5",
      iconName: "triangle",
      displayOrder: "1",
    },
  });

  // কাস্টম স্টেটসমূহ
  const [proficiency, setProficiency] = useState("Advanced");
  const [usedInProjects, setUsedInProjects] = useState([
    "QurbaniHub",
    "Portfolio Website",
    "E-Commerce Store",
  ]);
  const [relatedSkills, setRelatedSkills] = useState([
    "React.js",
    "TypeScript",
    "Vercel",
  ]);
  const [visibility, setVisibility] = useState("Visible");

  // কাস্টম স্টেটগুলোকে useForm-এর সাথে সিঙ্ক করা
  useEffect(() => {
    setValue("proficiency", proficiency);
    setValue("usedInProjects", usedInProjects);
    setValue("relatedSkills", relatedSkills);
    setValue("visibility", visibility);
  }, [proficiency, usedInProjects, relatedSkills, visibility, setValue]);

  // ট্যাগ যুক্ত করার হ্যান্ডলার
  const handleAddTag = (e, type) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = e.target.value.trim();
      if (value) {
        if (type === "projects" && !usedInProjects.includes(value)) {
          setUsedInProjects([...usedInProjects, value]);
        } else if (type === "skills" && !relatedSkills.includes(value)) {
          setRelatedSkills([...relatedSkills, value]);
        }
        e.target.value = "";
      }
    }
  };

  // ট্যাগ রিমুভ করার হ্যান্ডলার
  const handleRemoveTag = (indexToRemove, type) => {
    if (type === "projects") {
      setUsedInProjects(usedInProjects.filter((_, i) => i !== indexToRemove));
    } else if (type === "skills") {
      setRelatedSkills(relatedSkills.filter((_, i) => i !== indexToRemove));
    }
  };

  const onSubmit = (data) => {
    console.log("Uploaded Skill Data:", data);
    alert("Skill Submitted successfully! Check console.");
  };

  return (
    <div className="w-full bg-[#0a0a0c] text-gray-200 min-h-screen p-4 md:p-10 font-sans selection:bg-orange-600/30">
      {/* HEADER SECTION */}
      <div className="max-w-3xl mx-auto border-b border-gray-900 pb-6 mb-8">
        <p className="text-orange-500 text-xs font-semibold tracking-wider uppercase mb-1">
          — Admin Panel
        </p>
        <h1 className="text-3xl font-bold text-white">
          Add New <span className="text-orange-500">Skill</span>
        </h1>
        <p className="text-gray-500 text-xs mt-1">
          Log a new technology or skill to your toolkit.
        </p>
      </div>

      {/* MAIN FORM CONTAINER */}
      <div className="max-w-3xl mx-auto">
        <form
          id="skill-upload-form"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* CARD 1: Skill Identity */}
          <div className="bg-[#0c0d0e] border border-gray-900 rounded-xl p-6 space-y-5">
            <div className="flex items-center gap-3 border-b border-gray-900 pb-3">
              <span className="w-4 h-4 bg-orange-600/20 text-orange-500 rounded flex items-center justify-center text-xs font-bold">
                ⚙
              </span>
              <h2 className="text-sm font-semibold text-white tracking-wide">
                Skill Identity
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label-text text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  Skill / Technology Name
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-gray-600 text-xs">
                    𝖳
                  </span>
                  <input
                    type="text"
                    {...register("skillName")}
                    className="w-full bg-[#121316] border border-gray-800 rounded-lg py-2.5 pl-9 pr-4 text-sm text-gray-200 outline-none focus:border-orange-500/50 transition"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label-text text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  Short Label
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-gray-600 text-xs">
                    🏷
                  </span>
                  <input
                    type="text"
                    {...register("shortLabel")}
                    className="w-full bg-[#121316] border border-gray-800 rounded-lg py-2.5 pl-9 pr-4 text-sm text-gray-200 outline-none focus:border-orange-500/50 transition"
                  />
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label-text text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                Description
              </label>
              <div className="relative flex items-start">
                <span className="absolute left-4 top-3 text-gray-600 text-xs">
                  ☰
                </span>
                <textarea
                  rows="3"
                  {...register("description")}
                  className="w-full bg-[#121316] border border-gray-800 rounded-lg py-2.5 pl-9 pr-4 text-sm text-gray-200 outline-none focus:border-orange-500/50 transition resize-none"
                ></textarea>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label-text text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  Category
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-gray-600 text-xs">
                    📁
                  </span>
                  <select
                    {...register("category")}
                    className="w-full bg-[#121316] border border-gray-800 rounded-lg py-2.5 pl-9 pr-4 text-sm text-gray-200 outline-none focus:border-orange-500/50 appearance-none cursor-pointer"
                  >
                    <option value="Framework">Framework</option>
                    <option value="Library">Library</option>
                    <option value="Database">Database</option>
                    <option value="Runtime">Runtime</option>
                    <option value="Tool">Tool</option>
                    <option value="Language">Language</option>
                    <option value="Auth">Auth</option>
                    <option value="DevOps">DevOps</option>
                  </select>
                  <span className="absolute right-4 text-gray-600 text-[10px] pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>
              <div className="form-control">
                <label className="label-text text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  Years of Experience
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-gray-600 text-xs">
                    🕒
                  </span>
                  <input
                    type="text"
                    {...register("yearsOfExperience")}
                    className="w-full bg-[#121316] border border-gray-800 rounded-lg py-2.5 pl-9 pr-4 text-sm text-gray-200 outline-none focus:border-orange-500/50 transition"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Proficiency Level */}
          <div className="bg-[#0c0d0e] border border-gray-900 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-gray-900 pb-3">
              <span className="w-4 h-4 bg-orange-600/20 text-orange-500 rounded flex items-center justify-center text-xs font-bold">
                📊
              </span>
              <h2 className="text-sm font-semibold text-white tracking-wide">
                Proficiency Level
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["Beginner", "Intermediate", "Advanced", "Expert"].map(
                (level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setProficiency(level)}
                    className={`py-4 rounded-lg border text-center transition flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                      proficiency === level
                        ? "bg-orange-600/5 border-orange-500 text-orange-500 font-medium"
                        : "bg-[#121316] border-gray-800 text-gray-400 hover:border-gray-700"
                    }`}
                  >
                    <span
                      className={`text-base ${proficiency === level ? "text-orange-500" : "text-gray-600"}`}
                    >
                      📶
                    </span>
                    <span className="text-xs tracking-wide">{level}</span>
                  </button>
                ),
              )}
            </div>
          </div>

          {/* CARD 3: Project Usage */}
          <div className="bg-[#0c0d0e] border border-gray-900 rounded-xl p-6 space-y-5">
            <div className="flex items-center gap-3 border-b border-gray-900 pb-3">
              <span className="w-4 h-4 bg-orange-600/20 text-orange-500 rounded flex items-center justify-center text-xs font-bold">
                💼
              </span>
              <h2 className="text-sm font-semibold text-white tracking-wide">
                Project Usage
              </h2>
            </div>

            <div className="form-control">
              <label className="label-text text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                Used In Projects
              </label>
              <div className="w-full bg-[#121316] border border-gray-800 rounded-lg p-2 flex flex-wrap gap-2 items-center focus-within:border-orange-500/50 transition">
                {usedInProjects.map((proj, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 bg-[#1c1d22] text-gray-300 text-[11px] px-2.5 py-1 rounded border border-gray-800"
                  >
                    <span>{proj}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(i, "projects")}
                      className="text-gray-500 hover:text-orange-500 font-bold ml-1 text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <input
                  type="text"
                  placeholder="Add project name..."
                  onKeyDown={(e) => handleAddTag(e, "projects")}
                  className="flex-1 bg-transparent border-none outline-none text-xs text-gray-400 py-1 px-1 min-w-[130px]"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label-text text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                Related Skills
              </label>
              <div className="w-full bg-[#121316] border border-gray-800 rounded-lg p-2 flex flex-wrap gap-2 items-center focus-within:border-orange-500/50 transition">
                {relatedSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 bg-[#1c1d22] text-gray-300 text-[11px] px-2.5 py-1 rounded border border-gray-800"
                  >
                    <span>{skill}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(i, "skills")}
                      className="text-gray-500 hover:text-orange-500 font-bold ml-1 text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <input
                  type="text"
                  placeholder="Add related skill..."
                  onKeyDown={(e) => handleAddTag(e, "skills")}
                  className="flex-1 bg-transparent border-none outline-none text-xs text-gray-400 py-1 px-1 min-w-[130px]"
                />
              </div>
            </div>
          </div>

          {/* CARD 4: Display Settings */}
          <div className="bg-[#0c0d0e] border border-gray-900 rounded-xl p-6 space-y-5">
            <div className="flex items-center gap-3 border-b border-gray-900 pb-3">
              <span className="w-4 h-4 bg-orange-600/20 text-orange-500 rounded flex items-center justify-center text-xs font-bold">
                ☺
              </span>
              <h2 className="text-sm font-semibold text-white tracking-wide">
                Display Settings
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label-text text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  Icon Name (Lucide)
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-gray-600 text-xs">
                    💎
                  </span>
                  <input
                    type="text"
                    {...register("iconName")}
                    className="w-full bg-[#121316] border border-gray-800 rounded-lg py-2.5 pl-9 pr-4 text-sm text-gray-200 outline-none focus:border-orange-500/50 transition"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label-text text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  Display Order
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-gray-600 text-xs">
                    ⋮⋮
                  </span>
                  <input
                    type="text"
                    {...register("displayOrder")}
                    className="w-full bg-[#121316] border border-gray-800 rounded-lg py-2.5 pl-9 pr-4 text-sm text-gray-200 outline-none focus:border-orange-500/50 transition"
                  />
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label-text text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                Visibility
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setVisibility("Visible")}
                  className={`py-2.5 rounded-lg border text-xs font-medium transition cursor-pointer flex items-center justify-center gap-2 ${
                    visibility === "Visible"
                      ? "bg-orange-600/5 border-orange-500 text-orange-500"
                      : "bg-[#121316] border-gray-800 text-gray-400 hover:border-gray-700"
                  }`}
                >
                  👁 Visible
                </button>
                <button
                  type="button"
                  onClick={() => setVisibility("Hidden")}
                  className={`py-2.5 rounded-lg border text-xs font-medium transition cursor-pointer flex items-center justify-center gap-2 ${
                    visibility === "Hidden"
                      ? "bg-orange-600/5 border-orange-500 text-orange-500"
                      : "bg-[#121316] border-gray-800 text-gray-400 hover:border-gray-700"
                  }`}
                >
                  🗙 Hidden
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM BUTTONS SECTION */}
          <div className="flex justify-end items-center gap-3 border-t border-gray-900 pt-6 mt-8">
            <button
              type="button"
              className="px-6 py-2.5 bg-[#121316] hover:bg-[#1c1d22] border border-gray-800 rounded-lg text-xs font-medium text-gray-400 transition cursor-pointer"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-medium transition shadow-lg shadow-orange-900/10 flex items-center gap-1.5 cursor-pointer"
            >
              <span>⊕</span> Add to Toolkit
            </button>
          </div>
        </form>
      </div>

      {/* FOOTER */}
      <div className="max-w-3xl mx-auto mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-600 border-t border-gray-900/40">
        <p>
          <span className="text-white font-bold">S</span>ajjad.{" "}
          <span className="ml-2 text-gray-600">Full Stack Web Developer</span>
        </p>
        <p>© 2026 Sajjad. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </div>
  );
};

export default SkillInput;
