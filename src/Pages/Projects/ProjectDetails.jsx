import React, { useEffect, useState } from "react";
import MainContainer from "../../Hooks/MainContainer";
import { Link, useParams } from "react-router";

const singleProject = async () => {
  const fetchData = await fetch(`http://localhost:8080/portfolio/${id}`);
  const res = await fetchData.json();
  return res;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/portfolio/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setLoading(false);
      });
  }, [id]);
  if (loading) return <p>Loading...</p>;
  if (!project) return <p>Project not found.</p>;
  return (
    <MainContainer>
      <main class="w-full bg-[#0B0B0F] text-white min-h-screen py-16 px-6 md:px-12 flex flex-col items-center">
        <div class="max-w-5xl w-full flex flex-col gap-10">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-900 pb-8">
            <div class="flex flex-col gap-2">
              <Link
                to="/projects"
                class="text-xs text-gray-500 hover:text-[#F97316] flex items-center gap-1 transition-colors mb-2"
              >
                ← Back to All Projects
              </Link>
              <div class="flex items-center gap-3">
                <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">
                  {project.title}
                </h1>
                <span class="bg-[#F97316] text-black text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider h-fit">
                  {project.projectType}
                </span>
              </div>
            </div>

            <div class="flex items-center gap-4 text-xs font-semibold">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                class="bg-[#F97316] hover:bg-[#EA580C] text-white px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow-lg shadow-[#F97316]/10"
              >
                ↗️ Live Demo
              </a>
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noreferrer"
                class="bg-[#121217] border border-[#1F1F29] hover:border-gray-700 text-gray-300 px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition-all"
              >
                🐙 Source Code
              </a>
            </div>
          </div>

          <div class="w-full aspect-[16/9] bg-[#121217] border border-[#1F1F29] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              class="w-full h-full object-cover"
            />
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div class="lg:col-span-7 flex flex-col gap-6">
              <div class="flex flex-col gap-3">
                <h2 class="text-lg font-bold tracking-tight border-b border-gray-900 pb-2 text-gray-200">
                  Project Overview
                </h2>
                <p class="text-gray-400 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div class="flex flex-col gap-3">
                <h2 class="text-lg font-bold tracking-tight border-b border-gray-900 pb-2 text-gray-200">
                  Key Features
                </h2>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400">
                  {project.features?.map((feature, index) => (
                    <li
                      key={index}
                      class="flex items-center gap-2.5 bg-[#121217] border border-[#1F1F29] p-3 rounded-xl"
                    >
                      <span class="text-[#F97316] text-xs">⚡</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div class="lg:col-span-5 flex flex-col gap-6 bg-[#121217] border border-[#1F1F29] p-6 rounded-3xl">
              <div class="flex flex-col gap-3">
                <h3 class="text-sm font-bold uppercase tracking-wider text-gray-400 border-b border-gray-800 pb-2">
                  Technologies Used
                </h3>
                <div class="flex flex-wrap gap-2 pt-1">
                  {project.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      class="bg-[#1A1A24] border border-[#2E2E3B] px-3 py-1.5 rounded-xl text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div class="flex flex-col gap-2.5 pt-4 border-t border-gray-800/60 text-xs text-gray-500 font-medium">
                <div class="flex justify-between">
                  <span>Project ID:</span>
                  <span class="text-gray-300 font-mono">#{project.id}</span>
                </div>
                <div class="flex justify-between">
                  <span>Deployment:</span>
                  <span class="text-green-400 flex items-center gap-1">
                    <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>{" "}
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainContainer>
  );
};

export default ProjectDetails;
