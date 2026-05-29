import React from "react";
import heroImg from "../../../assets/my-main-photo.png";
import { Link } from "react-router";
import {
  FaFacebook,
  FaSquareGithub,
  FaSquareXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoLogoLinkedin, IoMdDownload } from "react-icons/io";

const HomeHero = () => {
  return (
    <section class="min-h-screen w-full bg-[#0B0B0F] text-white flex items-center justify-center p-6 md:p-12">
      <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="flex flex-col items-start gap-6">
          <div class="flex items-center gap-2 bg-[#121217] border border-[#2E2E3B] px-4 py-1.5 rounded-full text-xs text-gray-400 font-medium tracking-wide">
            AVAILABLE FOR WORK
          </div>

          <h1 class="text-5xl md:text-6xl font-bold tracking-tight">
            Md <span class="text-[#F97316]">Mahmudul</span> <br /> Hossain
            <span class="text-xl font-light text-gray-500 ml-3">
              — Web Developer
            </span>
          </h1>

          {/* <div class="flex flex-wrap gap-2 text-xs font-medium text-[#F97316]">
            <span class="bg-[#1A1A24] border border-[#2E2E3B] px-3 py-1 rounded-md">
              📦 MERN Stack
            </span>
            <span class="bg-[#1A1A24] border border-[#2E2E3B] px-3 py-1 rounded-md">
              ▲ Next.js
            </span>
            <span class="bg-[#1A1A24] border border-[#2E2E3B] px-3 py-1 rounded-md">
              🎨 Tailwind CSS
            </span>
          </div> */}

          <p class="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
            I specialize in building modern, scalable, and lightning-fast web
            applications using the MERN Stack and Next.js. Turning complex
            problems into elegant, user-centric solutions is my passion.
          </p>

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

          <div class="w-full border-t border-gray-800/60 my-4"></div>

          <div class="w-full flex items-center justify-between">
            <div class="flex gap-8">
              <div>
                <p class="text-2xl font-bold">20+</p>
                <p class="text-xs text-gray-500">Projects</p>
              </div>
              <div>
                <p class="text-2xl font-bold">2+</p>
                <p class="text-xs text-gray-500">Years</p>
              </div>
              <div>
                <p class="text-2xl font-bold">10+</p>
                <p class="text-xs text-gray-500">Technologies</p>
              </div>
            </div>

            <div class="flex gap-2">
              <button
                onClick={() =>
                  window.open("https://wa.me/8801921215292", "_blank")
                }
                className="cursor-pointer w-9 h-9 flex items-center justify-center bg-[#121217] border border-[#2E2E3B] rounded-lg text-gray-400 hover:text-[#25D366] transition-colors"
              >
                <FaWhatsapp />
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/thesmahmud77?tab=repositories",
                    "_blank",
                  )
                }
                className="cursor-pointer w-9 h-9 flex items-center justify-center bg-[#121217] border border-[#2E2E3B] rounded-lg text-gray-400 hover:text-white transition-colors"
              >
                <FaSquareGithub />
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/smahmud77.dev",
                    "_blank",
                  )
                }
                className="cursor-pointer w-9 h-9 flex items-center justify-center bg-[#121217] border border-[#2E2E3B] rounded-lg text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook />
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/smahmud77/",
                    "_blank",
                  )
                }
                className="cursor-pointer w-9 h-9 flex items-center justify-center bg-[#121217] border border-[#2E2E3B] rounded-lg text-gray-400 hover:text-white transition-colors"
              >
                <IoLogoLinkedin />
              </button>
              <button
                onClick={() =>
                  window.open("https://x.com/smahmudul77", "_blank")
                }
                className="cursor-pointer w-9 h-9 flex items-center justify-center bg-[#121217] border border-[#2E2E3B] rounded-lg text-gray-400 hover:text-white transition-colors"
              >
                <FaSquareXTwitter />
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center lg:justify-end w-full">
          <div class="relative w-full max-w-[400px] aspect-[4/5] bg-[#121217] rounded-3xl p-4 border border-[#2E2E3B]/40 shadow-2xl">
            <div class="w-full h-full rounded-2xl overflow-hidden bg-gray-700">
              <img
                src={heroImg}
                alt="Sajjad"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="absolute top-15 -left-6 bg-[#121217]/90 backdrop-blur-md border border-[#2E2E3B] p-2.5 rounded-xl flex items-center gap-3 shadow-xl hidden sm:flex">
              <div class="w-8 h-8 bg-black/40 border border-[#2E2E3B] rounded-lg flex items-center justify-center text-[#F97316] text-xs">
                ▲
              </div>
              <div>
                <p class="text-xs font-bold">Next.js</p>
                <p class="text-[10px] text-gray-500">React Framework</p>
              </div>
            </div>

            <div class="absolute top-1/4 -right-6 bg-[#F97316] text-black py-2.5 px-4 rounded-xl font-bold text-center shadow-xl hidden sm:block">
              <p class="text-xl leading-none">20+</p>
              <p class="text-[10px] uppercase font-medium mt-0.5 tracking-wider">
                Projects
              </p>
            </div>

            <div class="absolute bottom-30 -left-6 bg-[#121217]/90 backdrop-blur-md border border-[#2E2E3B] p-2.5 rounded-xl flex items-center gap-3 shadow-xl hidden sm:flex">
              <div class="w-8 h-8 bg-black/40 border border-[#2E2E3B] rounded-lg flex items-center justify-center text-[#F97316] text-sm">
                📦
              </div>
              <div>
                <p class="text-xs font-bold">MERN Stack</p>
                <p class="text-[10px] text-gray-500">Full Stack</p>
              </div>
            </div>

            <div class="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center justify-between">
              <div>
                <p class="text-sm font-bold">smahmud77</p>
                <p class="text-[10px] text-gray-400">Web Developer</p>
              </div>
              <div class="flex items-center gap-1.5 bg-[#F97316]/10 border border-[#F97316]/30 px-2.5 py-1 rounded-full">
                <span class="w-1.5 h-1.5 bg-[#F97316] rounded-full"></span>
                <span class="text-[10px] text-[#F97316] font-medium uppercase tracking-wider">
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
