import React from "react";
import {
  FaFacebook,
  FaSquareGithub,
  FaSquareXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { IoMailUnread } from "react-icons/io5";

const HomeIdea = () => {
  return (
    <div>
      <section class="w-full bg-[#0B0B0F] text-white py-16 px-6 md:px-12 flex justify-center">
        <div class="max-w-7xl w-full bg-[#121217] border border-[#1F1F29] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col gap-12">
          <div class="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#F97316]/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
            <div class="flex flex-col items-start gap-6">
              <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Have a project idea{" "}
                <span class="text-[#F97316]">or looking to hire?</span>
              </h2>
              <p class="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
                Let's build something amazing together. I'm available for
                freelance, full-time, and contract opportunities.
              </p>

              <div class="flex flex-wrap gap-4 pt-2">
                <button class="bg-[#F97316] hover:bg-[#EA580C] text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-lg shadow-[#F97316]/10">
                  Let's Talk ➔
                </button>
                <button class="bg-[#1A1A24] border border-[#2E2E3B] hover:border-gray-500 text-white font-medium px-5 py-3 rounded-xl flex items-center gap-2 transition-colors">
                  🗓️ Schedule a Call
                </button>
              </div>
            </div>

            <div class="flex flex-col gap-4 w-full max-w-md lg:ml-auto">
              <div class="bg-[#1A1A24]/60 border border-[#2E2E3B]/60 p-4 rounded-xl flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-black/40 border border-[#2E2E3B] flex items-center justify-center text-[#F97316]">
                  🕒
                </div>
                <div>
                  <p class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                    Response Time
                  </p>
                  <p class="text-sm font-semibold text-white">&lt; 24 Hours</p>
                </div>
              </div>

              <div class="bg-[#1A1A24]/60 border border-[#2E2E3B]/60 p-4 rounded-xl flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-black/40 border border-[#2E2E3B] flex items-center justify-center text-[#F97316]">
                  🌐
                </div>
                <div>
                  <p class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                    Work Mode
                  </p>
                  <p class="text-sm font-semibold text-white">
                    Remote / On-site
                  </p>
                </div>
              </div>

              <div class="bg-[#1A1A24]/60 border border-[#2E2E3B]/60 p-4 rounded-xl flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-black/40 border border-[#2E2E3B] flex items-center justify-center text-[#F97316]">
                  ✅
                </div>
                <div>
                  <p class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                    Availability
                  </p>
                  <p class="text-sm font-semibold text-white">Open to Work</p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full border-t border-gray-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 text-xs text-gray-400">
            <div class="flex flex-wrap justify-center sm:justify-start gap-6">
              <span class="flex items-center gap-2">
                <IoMailUnread />
                <p>mahmudsazzad77@gmail.com</p>
              </span>
              <span class="flex items-center gap-2">📍 Dhaka, Bangladesh</span>
            </div>

            <div class="flex gap-2">
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
              <button
                onClick={() =>
                  window.open("https://wa.me/8801921215292", "_blank")
                }
                className="cursor-pointer w-9 h-9 flex items-center justify-center bg-[#121217] border border-[#2E2E3B] rounded-lg text-gray-400 hover:text-[#25D366] transition-colors"
              >
                <FaWhatsapp />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeIdea;
<section class="w-full bg-[#0B0B0F] text-white py-16 px-6 md:px-12 flex justify-center">
  <div class="max-w-7xl w-full bg-[#121217] border border-[#1F1F29] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col gap-12">
    <div class="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#F97316]/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
      <div class="flex flex-col items-start gap-6">
        <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Have a project idea{" "}
          <span class="text-[#F97316]">or looking to hire?</span>
        </h2>
        <p class="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
          Let's build something amazing together. I'm available for freelance,
          full-time, and contract opportunities.
        </p>

        <div class="flex flex-wrap gap-4 pt-2">
          <button class="bg-[#F97316] hover:bg-[#EA580C] text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-lg shadow-[#F97316]/10">
            Let's Talk ➔
          </button>
          <button class="bg-[#1A1A24] border border-[#2E2E3B] hover:border-gray-500 text-white font-medium px-5 py-3 rounded-xl flex items-center gap-2 transition-colors">
            🗓️ Schedule a Call
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-4 w-full max-w-md lg:ml-auto">
        <div class="bg-[#1A1A24]/60 border border-[#2E2E3B]/60 p-4 rounded-xl flex items-center gap-4">
          <div class="w-10 h-10 rounded-lg bg-black/40 border border-[#2E2E3B] flex items-center justify-center text-[#F97316]">
            🕒
          </div>
          <div>
            <p class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
              Response Time
            </p>
            <p class="text-sm font-semibold text-white">&lt; 24 Hours</p>
          </div>
        </div>

        <div class="bg-[#1A1A24]/60 border border-[#2E2E3B]/60 p-4 rounded-xl flex items-center gap-4">
          <div class="w-10 h-10 rounded-lg bg-black/40 border border-[#2E2E3B] flex items-center justify-center text-[#F97316]">
            🌐
          </div>
          <div>
            <p class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
              Work Mode
            </p>
            <p class="text-sm font-semibold text-white">Remote / On-site</p>
          </div>
        </div>

        <div class="bg-[#1A1A24]/60 border border-[#2E2E3B]/60 p-4 rounded-xl flex items-center gap-4">
          <div class="w-10 h-10 rounded-lg bg-black/40 border border-[#2E2E3B] flex items-center justify-center text-[#F97316]">
            ✅
          </div>
          <div>
            <p class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
              Availability
            </p>
            <p class="text-sm font-semibold text-white">Open to Work</p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full border-t border-gray-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 text-xs text-gray-400">
      <div class="flex flex-wrap justify-center sm:justify-start gap-6">
        <span class="flex items-center gap-2">📧 your.email@example.com</span>
        <span class="flex items-center gap-2">📍 Dhaka, Bangladesh</span>
      </div>

      <div class="flex gap-2">
        <a
          href="#"
          class="w-8 h-8 flex items-center justify-center bg-[#1A1A24] border border-[#2E2E3B] rounded-lg text-gray-400 hover:text-white transition-colors"
        >
          🐙
        </a>
        <a
          href="#"
          class="w-8 h-8 flex items-center justify-center bg-[#1A1A24] border border-[#2E2E3B] rounded-lg text-gray-400 hover:text-white transition-colors"
        >
          💼
        </a>
        <a
          href="#"
          class="w-8 h-8 flex items-center justify-center bg-[#1A1A24] border border-[#2E2E3B] rounded-lg text-gray-400 hover:text-white transition-colors"
        >
          🐦
        </a>
      </div>
    </div>
  </div>
</section>;
