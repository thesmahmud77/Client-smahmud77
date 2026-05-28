import React from "react";

const HomeJourney = () => {
  return (
    <div>
      <section class="w-full bg-[#0B0B0F] text-white py-16 px-6 md:px-12 flex justify-center">
        <div class="max-w-7xl w-full flex flex-col gap-10">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F97316] uppercase">
                <span class="w-6 h-[1px] bg-[#F97316]"></span>
                Experience
              </div>
              <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
                My Journey
              </h2>
            </div>
            <p class="text-gray-500 text-sm max-w-xs md:text-right leading-relaxed">
              From a curious beginner to a confident full-stack engineer — my
              path in web development.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="group bg-[#121217] border border-[#1F1F29] rounded-2xl p-6 md:p-8 flex flex-col gap-6 transition-all duration-300 hover:border-[#F97316]/30 hover:-translate-y-1 shadow-xl relative">
              <div class="flex items-center justify-between">
                <span class="text-3xl font-extrabold text-[#F97316] tracking-tight">
                  2024
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] text-xs font-medium text-[#F97316]/80 px-3 py-1 rounded-full flex items-center gap-1.5">
                  Foundation <span class="text-[10px] text-gray-500">01</span>
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 bg-[#1A1A24] border border-[#2E2E3B] rounded-xl flex items-center justify-center text-[#F97316] text-sm">
                  🚀
                </div>
                <h3 class="text-lg font-bold text-white">The Beginning</h3>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed">
                Started the journey into Web Development, mastering HTML, CSS,
                and modern JavaScript.
              </p>
            </div>

            <div class="group bg-[#121217] border border-[#1F1F29] rounded-2xl p-6 md:p-8 flex flex-col gap-6 transition-all duration-300 hover:border-[#F97316]/30 hover:-translate-y-1 shadow-xl relative">
              <div class="flex items-center justify-between">
                <span class="text-3xl font-extrabold text-[#F97316] tracking-tight">
                  2025
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] text-xs font-medium text-[#F97316]/80 px-3 py-1 rounded-full flex items-center gap-1.5">
                  Frontend <span class="text-[10px] text-gray-500">02</span>
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 bg-[#1A1A24] border border-[#2E2E3B] rounded-xl flex items-center justify-center text-[#F97316] text-sm">
                  🎛️
                </div>
                <h3 class="text-lg font-bold text-white">Frontend Mastery</h3>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed">
                Dove deep into Frontend Frameworks (React, Tailwind CSS,
                DaisyUI) and built dozens of interactive UIs.
              </p>
            </div>

            <div class="group bg-[#121217] border border-[#1F1F29] rounded-2xl p-6 md:p-8 flex flex-col gap-6 transition-all duration-300 hover:border-[#F97316]/40 hover:-translate-y-1 shadow-xl relative">
              <div class="flex items-center justify-between">
                <span class="text-3xl font-extrabold text-[#F97316] tracking-tight">
                  2026
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] text-xs font-medium text-[#F97316]/80 px-3 py-1 rounded-full flex items-center gap-1.5">
                  Full-Stack <span class="text-[10px] text-gray-500">03</span>
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 bg-[#1A1A24] border border-[#2E2E3B] rounded-xl flex items-center justify-center text-[#F97316] text-sm">
                  🥞
                </div>
                <h3 class="text-lg font-bold text-white">
                  Full-Stack Engineering
                </h3>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed">
                Advanced into Full-Stack Engineering, mastering Next.js, Server
                Actions, MongoDB, and secure authentication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeJourney;
