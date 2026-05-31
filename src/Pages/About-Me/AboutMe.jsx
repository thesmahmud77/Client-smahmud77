import React from "react";
import MainContainer from "../../Hooks/MainContainer";
import myPic from "../../../src/assets/my-main-photo.png";
import { IoMdDownload } from "react-icons/io";

const AboutMe = () => {
  return (
    <MainContainer>
      <main class="w-full bg-[#0B0B0F] text-white min-h-screen py-16 px-6 md:px-12 flex flex-col items-center gap-24">
        <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-5 flex justify-center lg:justify-start w-full">
            <div class="relative w-full max-w-[380px] aspect-square bg-[#121217] rounded-3xl p-4 border border-[#1F1F29] shadow-2xl">
              <div class="w-full h-full rounded-2xl overflow-hidden bg-gray-800">
                <img
                  src={myPic}
                  alt="Sajjad"
                  class="w-full h-full object-cover"
                />
              </div>

              <div class="absolute top-10 -left-4 bg-[#121217] border border-[#2E2E3B] py-1.5 px-3.5 rounded-xl font-bold flex items-center gap-2 shadow-xl">
                <span class="text-[#F97316] text-sm">⭐</span>
                <div class="text-left">
                  <p class="text-xs font-bold leading-none">20+</p>
                  <p class="text-[9px] text-gray-500 mt-0.5 uppercase tracking-wider">
                    Projects
                  </p>
                </div>
              </div>

              <div class="absolute bottom-30 -right-5 bg-[#121217] border border-[#2E2E3B] py-1.5 px-3.5 rounded-xl font-bold flex items-center gap-2 shadow-xl">
                <span class="text-[#F97316] text-sm">🌟</span>
                <div class="text-left">
                  <p class="text-xs font-bold leading-none">2+</p>
                  <p class="text-[9px] text-gray-500 mt-0.5 uppercase tracking-wider">
                    Yrs Exp.
                  </p>
                </div>
              </div>

              <div class="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="text-[#F97316] text-xs font-mono">&lt;/&gt;</div>
                  <div>
                    <p class="text-xs font-bold">Sajjad</p>
                    <p class="text-[9px] text-gray-400">
                      CSE Student & Full-Stack Dev
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-1 bg-[#F97316]/10 border border-[#F97316]/30 px-2 py-0.5 rounded-full">
                  <span class="w-1 h-1 bg-[#F97316] rounded-full animate-pulse"></span>
                  <span class="text-[9px] text-[#F97316] font-medium uppercase tracking-wider">
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 flex flex-col items-start gap-6">
            <div class="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F97316] uppercase">
              <span class="w-6 h-[1px] bg-[#F97316]"></span>
              About Me
            </div>

            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Who I Am & <br />
              <span class="text-[#F97316]">What I Do</span>
            </h1>

            <div class="flex flex-col gap-4 text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
              <p>
                I am a student of Computer Science and Engineering who is deeply
                passionate about software engineering and web technologies. My
                core focus lies in the JavaScript ecosystem, specifically
                crafting seamless full-stack applications.
              </p>
              <p>
                I believe that a great website is not just about writing clean
                code; it's about presentation, responsiveness, and performance.
                I pay strict attention to pixel-perfect UI designs, smooth
                animations, and optimized user flows.
              </p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2.5 w-full pt-2">
              <span class="bg-[#121217] border border-[#1F1F29] px-3.5 py-2 rounded-xl text-xs font-medium text-gray-300 flex items-center gap-2">
                📋 Pixel-Perfect UI
              </span>
              <span class="bg-[#121217] border border-[#1F1F29] px-3.5 py-2 rounded-xl text-xs font-medium text-gray-300 flex items-center gap-2">
                ⚡ Performance First
              </span>
              <span class="bg-[#121217] border border-[#1F1F29] px-3.5 py-2 rounded-xl text-xs font-medium text-gray-300 flex items-center gap-2">
                📱 Responsive Design
              </span>
              <span class="bg-[#121217] border border-[#1F1F29] px-3.5 py-2 rounded-xl text-xs font-medium text-gray-300 flex items-center gap-2">
                🛡️ Clean Code
              </span>
              <span class="bg-[#121217] border border-[#1F1F29] px-3.5 py-2 rounded-xl text-xs font-medium text-gray-300 flex items-center gap-2">
                👥 User-Centric
              </span>
            </div>

            <div class="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => window.open("/projects", "_blank")}
                className="bg-[#F97316] hover:bg-[#EA580C] text-white font-medium px-6 py-3 rounded-xl cursor-pointer flex items-center gap-2 transition-colors shadow-lg shadow-[#F97316]/10"
              >
                View My Projects ➔
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1UM5Sei4fGJ8B1OcjbI134BfN122s9LJB/view?usp=sharing",
                    "_blank",
                  )
                }
                className="bg-[#121217] border border-[#2E2E3B] hover:border-gray-500 text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-colors"
              >
                <IoMdDownload /> Resume
              </button>
            </div>
          </div>
        </div>

        <div class="max-w-7xl w-full flex flex-col gap-10 pt-8">
          <div class="flex flex-col items-center text-center gap-2">
            <div class="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F97316] uppercase">
              <span class="w-4 h-[1px] bg-[#F97316]"></span>
              Background
              <span class="w-4 h-[1px] bg-[#F97316]"></span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
              Education & Goals
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div class="bg-[#121217] border border-[#1F1F29] rounded-2xl p-6 md:p-8 flex flex-col gap-6">
              <div class="w-10 h-10 rounded-xl bg-[#1A1A24] border border-[#2E2E3B] flex items-center justify-center text-[#F97316]">
                🎓
              </div>
              <div class="flex flex-col gap-1">
                <p class="text-xs uppercase tracking-wider text-[#F97316] font-semibold">
                  Education
                </p>
                <h3 class="text-xl font-bold text-white leading-snug">
                  B.Sc. in Computer Science & Engineering (CSE)
                </h3>
                <p class="text-sm text-gray-500 mt-1">
                  🏢 Northern University Bangladesh
                </p>
              </div>

              <div class="flex flex-wrap gap-2 pt-2">
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-400">
                  Algorithms
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-400">
                  Data Structures
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-400">
                  Software Engineering
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-400">
                  Database Systems
                </span>
              </div>

              <div class="mt-auto pt-4 border-t border-gray-800/60 flex items-center gap-2 text-xs text-gray-500">
                📅 Currently Enrolled
              </div>
            </div>

            <div class="bg-[#121217] border border-[#1F1F29] rounded-2xl p-6 md:p-8 flex flex-col gap-6">
              <div class="w-10 h-10 rounded-xl bg-[#1A1A24] border border-[#2E2E3B] flex items-center justify-center text-[#F97316]">
                🎯
              </div>
              <div class="flex flex-col gap-1">
                <p class="text-xs uppercase tracking-wider text-[#F97316] font-semibold">
                  Career Goals
                </p>
                <h3 class="text-xl font-bold text-white leading-snug">
                  Aspiring AI-Integrated Software Engineer
                </h3>
                <p class="text-sm text-gray-400 mt-2 leading-relaxed">
                  Aiming to build next-generation SaaS applications that solve
                  real-world industry problems by leveraging AI and modern web
                  technologies.
                </p>
              </div>

              <div class="flex flex-col gap-3 pt-2">
                <div class="flex items-center gap-3 text-xs text-gray-300">
                  <span class="text-[#F97316]">⚙️</span> AI-Integrated
                  Applications
                </div>
                <div class="flex items-center gap-3 text-xs text-gray-300">
                  <span class="text-[#F97316]">🚀</span> Next-Generation SaaS
                  Products
                </div>
                <div class="flex items-center gap-3 text-xs text-gray-300">
                  <span class="text-[#F97316]">🌐</span> Real-World Industry
                  Impact
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainContainer>
  );
};

export default AboutMe;
