import React, { useState } from "react";
import MainContainer from "../../Hooks/MainContainer";
import useLoader from "../../Hooks/useLoader";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
  const { data = [], loader } = useLoader();

  const [activeCategory, setActiveCategory] = useState("All");

  console.log("Fetching Data", data);

  const filteredProjects =
    activeCategory === "All"
      ? data
      : data.filter(
          (project) =>
            project.projectType?.toLowerCase() === activeCategory.toLowerCase(),
        );

  if (loader) {
    return <div className="text-center py-20 text-white">Loading...</div>;
  }

  return (
    <MainContainer>
      <main className=" bg-black w-full min-h-screen py-16 px-6 md:px-12 flex flex-col items-center gap-12">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-gray-500/20 pb-12">
          <div className="flex flex-col gap-3 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              All <span className="text-[#F97316]">Project</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-1">
              A collection of web applications I've built — from full-stack
              platforms to polished frontend UIs.
            </p>
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
            <div className="bg-[#121217] border border-[#1F1F29] rounded-2xl p-5 min-w-[140px] text-center flex flex-col gap-1">
              <p className="text-2xl font-extrabold text-[#F97316]">20+</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                Total Projects
              </p>
            </div>
            <div className="bg-[#121217] border border-[#1F1F29] rounded-2xl p-5 min-w-[140px] text-center flex flex-col gap-1">
              <p className="text-2xl font-extrabold text-[#F97316]">10+</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                Technologies
              </p>
            </div>
            <div className="bg-[#121217] border border-[#1F1F29] rounded-2xl p-5 min-w-[140px] text-center flex flex-col gap-1">
              <p className="text-2xl font-extrabold text-[#F97316]">2+</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                Years Building
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl w-full flex justify-between items-center gap-4">
          <div className="flex items-center gap-2.5">
            {/* All Button */}
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === "All"
                  ? "bg-[#121217] border border-[#F97316]/30 text-[#F97316]"
                  : "bg-[#121217] border border-[#1F1F29] text-gray-400 hover:text-white hover:border-gray-700"
              }`}
            >
              All
            </button>

            {/* Full Stack Button */}
            <button
              onClick={() => setActiveCategory("Full Stack")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === "Full Stack"
                  ? "bg-[#121217] border border-[#F97316]/30 text-[#F97316]"
                  : "bg-[#121217] border border-[#1F1F29] text-gray-400 hover:text-white hover:border-gray-700"
              }`}
            >
              Full Stack
            </button>

            {/* Frontend Button */}
            <button
              onClick={() => setActiveCategory("Frontend")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === "Frontend"
                  ? "bg-[#121217] border border-[#F97316]/30 text-[#F97316]"
                  : "bg-[#121217] border border-[#1F1F29] text-gray-400 hover:text-white hover:border-gray-700"
              }`}
            >
              Frontend
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <span>🎛️</span> Search
          </div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* এখানে 'data.map'-এর জায়গায় 'filteredProjects.map' ব্যবহার করা হয়েছে */}
          {filteredProjects.map((singleProject) => (
            <ProjectCard
              singleProject={singleProject}
              key={singleProject._id}
            />
          ))}
        </div>
      </main>
    </MainContainer>
  );
};

export default ProjectPage;
