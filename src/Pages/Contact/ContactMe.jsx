import React from "react";
import MainContainer from "../../Hooks/MainContainer";

const ContactMe = () => {
  return (
    <MainContainer>
      <main class="w-full bg-[#0B0B0F] text-white min-h-screen py-16 px-6 md:px-12 flex justify-center items-center">
        <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div class="lg:col-span-5 flex flex-col gap-8 w-full">
            <div class="flex flex-col gap-3">
              <div class="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F97316] uppercase">
                <span class="w-6 h-[1px] bg-[#F97316]"></span>
                Get in Touch
              </div>
              <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
                Let's Work <br />
                <span class="text-[#F97316] mt-2 block">Together</span>
              </h1>
              <p class="text-gray-400 text-sm md:text-base leading-relaxed mt-4 max-w-md">
                Have a project in mind or want to hire me? I'd love to hear from
                you. Reach out and let's build something great.
              </p>
            </div>

            <div class="flex flex-col gap-4 w-full">
              <div class="bg-[#121217] border border-[#1F1F29] p-4 rounded-2xl flex items-center gap-4">
                <div class="w-10 h-10 rounded-xl bg-[#1A1A24] border border-[#2E2E3B] flex items-center justify-center text-[#F97316]">
                  ✉️
                </div>
                <div>
                  <p class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                    Email
                  </p>
                  <p class="text-sm font-semibold text-white">
                    your.email@example.com
                  </p>
                </div>
              </div>

              <div class="bg-[#121217] border border-[#1F1F29] p-4 rounded-2xl flex items-center gap-4">
                <div class="w-10 h-10 rounded-xl bg-[#1A1A24] border border-[#2E2E3B] flex items-center justify-center text-[#F97316]">
                  📍
                </div>
                <div>
                  <p class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                    Location
                  </p>
                  <p class="text-sm font-semibold text-white">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div class="bg-[#121217] border border-[#1F1F29] p-4 rounded-2xl flex items-center gap-4">
                <div class="w-10 h-10 rounded-xl bg-[#1A1A24] border border-[#2E2E3B] flex items-center justify-center text-[#F97316]">
                  🕒
                </div>
                <div>
                  <p class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                    Response Time
                  </p>
                  <p class="text-sm font-semibold text-white">&lt; 24 Hours</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <p class="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                Find me on
              </p>
              <div class="flex flex-wrap gap-2.5">
                <a
                  href="#"
                  class="bg-[#121217] border border-[#1F1F29] hover:border-gray-600 px-4 py-2 rounded-xl text-xs font-semibold text-gray-300 flex items-center gap-2 transition-all"
                >
                  🐙 GitHub
                </a>
                <a
                  href="#"
                  class="bg-[#121217] border border-[#1F1F29] hover:border-gray-600 px-4 py-2 rounded-xl text-xs font-semibold text-gray-300 flex items-center gap-2 transition-all"
                >
                  💼 LinkedIn
                </a>
                <a
                  href="#"
                  class="bg-[#121217] border border-[#1F1F29] hover:border-gray-600 px-4 py-2 rounded-xl text-xs font-semibold text-gray-300 flex items-center gap-2 transition-all"
                >
                  🐦 Twitter
                </a>
              </div>
            </div>

            <div class="flex items-center gap-2 border border-[#F97316]/30 bg-[#F97316]/5 w-fit px-4 py-2.5 rounded-full mt-2">
              <span class="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-pulse"></span>
              <span class="text-xs font-medium text-[#F97316]/90">
                Currently available for freelance & full-time roles
              </span>
            </div>
          </div>

          <div class="lg:col-span-7 w-full bg-[#121217] border border-[#1F1F29] rounded-3xl p-6 md:p-10 shadow-2xl relative">
            <div class="flex flex-col gap-1.5 mb-8">
              <h2 class="text-xl md:text-2xl font-bold text-white">
                Send a Message
              </h2>
              <p class="text-xs md:text-sm text-gray-500">
                Fill out the form below and I'll get back to you within 24
                hours.
              </p>
            </div>

            <form class="flex flex-col gap-5" onsubmit="event.preventDefault()">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="flex flex-col gap-2">
                  <label class="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                    Full Name
                  </label>
                  <div class="relative flex items-center">
                    <span class="absolute left-4 text-gray-500 text-xs">
                      👤
                    </span>
                    <input
                      type="text"
                      placeholder="Your full name"
                      class="w-full bg-black/40 border border-[#2E2E3B] focus:border-[#F97316] focus:outline-none rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-600 transition-colors"
                    />
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                    Email Address
                  </label>
                  <div class="relative flex items-center">
                    <span class="absolute left-4 text-gray-500 text-xs">
                      ✉️
                    </span>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      class="w-full bg-black/40 border border-[#2E2E3B] focus:border-[#F97316] focus:outline-none rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-600 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                  Subject
                </label>
                <div class="relative flex items-center">
                  <span class="absolute left-4 text-gray-500 text-xs">🏷️</span>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    class="w-full bg-black/40 border border-[#2E2E3B] focus:border-[#F97316] focus:outline-none rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-600 transition-colors"
                  />
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  class="w-full bg-black/40 border border-[#2E2E3B] focus:border-[#F97316] focus:outline-none rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#F97316]/10 mt-2 text-sm"
              >
                <span>📬</span> Send Message
              </button>

              <p class="text-center text-[11px] text-gray-500 mt-2">
                Your information is safe. I never share personal data.
              </p>
            </form>
          </div>
        </div>
      </main>
    </MainContainer>
  );
};

export default ContactMe;
