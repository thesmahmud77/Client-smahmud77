import React from "react";
import { Link } from "react-router";

const ProjectCard = ({ singleProject }) => {
  // console.log(singleProject);
  const {
    image,
    title,
    features,
    technologies,
    projectType,
    liveLink,
    sourceLink,
    _id,
  } = singleProject;
  return (
    <Link
      to={`/project/${_id}`}
      class="bg-[#121217] border-2 border-gray-300/30 rounded-3xl overflow-hidden flex flex-col transition-all hover:border-amber-400 group"
    >
      <div class="relative w-full aspect-[16/10] bg-gray-900 overflow-hidden border-b border-[#1F1F29]">
        <img
          src={image}
          alt="Job Tracker"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span class="absolute top-4 left-4 bg-[#F97316] text-black text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
          {projectType}
        </span>
      </div>
      <div class="flex items-center justify-center gap-5 mt-2 text-xs mt-5">
        <a
          href={liveLink}
          class="text-gray-500 border-2 border-amber-400 px-3 py-2 rounded-2xl"
        >
          ↗️ Live Demo
        </a>
        <a
          href={sourceLink}
          class="text-gray-500 border-2 border-amber-400 px-3 py-2 rounded-2xl"
        >
          🐙 Source Code
        </a>
      </div>
      <div class="p-6 flex flex-col flex-grow gap-4">
        <h3 class="text-lg font-bold text-white tracking-tight">{title}</h3>
        <ul class="text-xs text-gray-400 flex flex-col gap-2 list-disc list-inside">
          {features.map((projectFeature) => (
            <li>{projectFeature}</li>
          ))}
        </ul>
        <div class="flex flex-wrap gap-1.5 mt-2">
          {technologies.map((projectTechnology) => (
            <span class="bg-[#1A1A24] border-2 border-amber-400/70 px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
              {projectTechnology}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
