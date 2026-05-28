import React from "react";
import MainContainer from "../../Hooks/MainContainer";
import useLoader from "../../Hooks/useLoader";

const ProjectPage = () => {
  const { data, loader } = useLoader();
  console.log("Fetching Data", data);
  return (
    <MainContainer>
      <main class="w-full bg-[#0B0B0F] text-white min-h-screen py-16 px-6 md:px-12 flex flex-col items-center gap-12">
        <div class="max-w-7xl w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-gray-900 pb-12">
          <div class="flex flex-col gap-3 max-w-xl">
            <div class="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F97316] uppercase">
              <span class="w-6 h-[1px] bg-[#F97316]"></span>
              My Work {data.length}
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">
              All <span class="text-[#F97316]">Projects</span>
            </h1>
            <p class="text-gray-400 text-sm md:text-base leading-relaxed mt-1">
              A collection of web applications I've built — from full-stack
              platforms to polished frontend UIs.
            </p>
          </div>

          <div class="flex items-center gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
            <div class="bg-[#121217] border border-[#1F1F29] rounded-2xl p-5 min-w-[140px] text-center flex flex-col gap-1">
              <p class="text-2xl font-extrabold text-[#F97316]">20+</p>
              <p class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                Total Projects
              </p>
            </div>
            <div class="bg-[#121217] border border-[#1F1F29] rounded-2xl p-5 min-w-[140px] text-center flex flex-col gap-1">
              <p class="text-2xl font-extrabold text-[#F97316]">10+</p>
              <p class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                Technologies
              </p>
            </div>
            <div class="bg-[#121217] border border-[#1F1F29] rounded-2xl p-5 min-w-[140px] text-center flex flex-col gap-1">
              <p class="text-2xl font-extrabold text-[#F97316]">2+</p>
              <p class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                Years Building
              </p>
            </div>
          </div>
        </div>

        <div class="max-w-7xl w-full flex justify-between items-center gap-4">
          <div class="flex items-center gap-2.5">
            <button class="bg-[#121217] border border-[#F97316]/30 text-[#F97316] px-5 py-2 rounded-full text-xs font-semibold transition-all">
              All
            </button>
            <button class="bg-[#121217] border border-[#1F1F29] hover:border-gray-700 text-gray-400 hover:text-white px-5 py-2 rounded-full text-xs font-semibold transition-all">
              Full Stack
            </button>
            <button class="bg-[#121217] border border-[#1F1F29] hover:border-gray-700 text-gray-400 hover:text-white px-5 py-2 rounded-full text-xs font-semibold transition-all">
              Frontend
            </button>
          </div>
          <div class="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <span>🎛️</span> 6 projects
          </div>
        </div>

        <div class="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div class="bg-[#121217] border border-[#1F1F29] rounded-3xl overflow-hidden flex flex-col transition-all hover:border-gray-800 group">
            <div class="relative w-full aspect-[16/10] bg-gray-900 overflow-hidden border-b border-[#1F1F29]">
              <img
                src="/path-to-your-image1.jpg"
                alt="Job Tracker"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span class="absolute top-4 left-4 bg-[#F97316] text-black text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Full Stack
              </span>
              <span class="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-mono px-2.5 py-0.5 rounded-md border border-white/10">
                01
              </span>
            </div>
            <div class="p-6 flex flex-col flex-grow gap-4">
              <h3 class="text-lg font-bold text-white tracking-tight">
                Dynamic Job Application Tracker
              </h3>
              <ul class="text-xs text-gray-400 flex flex-col gap-2 list-disc list-inside">
                <li>Real-time Dashboard</li>
                <li>Analytics & Charts</li>
                <li>Secure Auth</li>
                <li>Status Tracking</li>
              </ul>
              <div class="flex flex-wrap gap-1.5 mt-2">
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  JavaScript
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  Tailwind CSS
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  LocalStorage
                </span>
              </div>
              <div class="flex items-center gap-5 mt-auto pt-4 border-t border-gray-800/60 text-xs font-semibold text-gray-400">
                <a
                  href="#"
                  class="hover:text-[#F97316] flex items-center gap-1.5 transition-colors"
                >
                  ↗️ Live Demo
                </a>
                <a
                  href="#"
                  class="hover:text-[#F97316] flex items-center gap-1.5 transition-colors"
                >
                  🐙 Source Code
                </a>
              </div>
            </div>
          </div>

          <div class="bg-[#121217] border border-[#1F1F29] rounded-3xl overflow-hidden flex flex-col transition-all hover:border-gray-800 group">
            <div class="relative w-full aspect-[16/10] bg-gray-900 overflow-hidden border-b border-[#1F1F29]">
              <img
                src="/path-to-your-image2.jpg"
                alt="StyleDecor"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span class="absolute top-4 left-4 bg-[#F97316] text-black text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Full Stack
              </span>
              <span class="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-mono px-2.5 py-0.5 rounded-md border border-white/10">
                02
              </span>
            </div>
            <div class="p-6 flex flex-col flex-grow gap-4">
              <h3 class="text-lg font-bold text-white tracking-tight">
                StyleDecor — Online Booking System
              </h3>
              <ul class="text-xs text-gray-400 flex flex-col gap-2 list-disc list-inside">
                <li>Client & Admin Dashboard</li>
                <li>Booking Management</li>
                <li>Secure Login</li>
                <li>Responsive Design</li>
              </ul>
              <div class="flex flex-wrap gap-1.5 mt-2">
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  React
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  Firebase
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  Tailwind CSS
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  Express
                </span>
              </div>
              <div class="flex items-center gap-5 mt-auto pt-4 border-t border-gray-800/60 text-xs font-semibold text-gray-400">
                <a
                  href="#"
                  class="hover:text-[#F97316] flex items-center gap-1.5 transition-colors"
                >
                  ↗️ Live Demo
                </a>
                <a
                  href="#"
                  class="hover:text-[#F97316] flex items-center gap-1.5 transition-colors"
                >
                  🐙 Source Code
                </a>
              </div>
            </div>
          </div>

          <div class="bg-[#121217] border border-[#1F1F29] rounded-3xl overflow-hidden flex flex-col transition-all hover:border-gray-800 group">
            <div class="relative w-full aspect-[16/10] bg-gray-900 overflow-hidden border-b border-[#1F1F29]">
              <img
                src="/path-to-your-image3.jpg"
                alt="QurbaniHub"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span class="absolute top-4 left-4 bg-[#F97316] text-black text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Full Stack
              </span>
              <span class="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-mono px-2.5 py-0.5 rounded-md border border-white/10">
                03
              </span>
            </div>
            <div class="p-6 flex flex-col flex-grow gap-4">
              <h3 class="text-lg font-bold text-white tracking-tight">
                QurbaniHub
              </h3>
              <ul class="text-xs text-gray-400 flex flex-col gap-2 list-disc list-inside">
                <li>Firebase Authentication</li>
                <li>MongoDB Integration</li>
                <li>HeroUI Components</li>
                <li>Live Dashboard</li>
              </ul>
              <div class="flex flex-wrap gap-1.5 mt-2">
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  Next.js
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  MongoDB
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  Firebase
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  HeroUI
                </span>
              </div>
              <div class="flex items-center gap-5 mt-auto pt-4 border-t border-gray-800/60 text-xs font-semibold text-gray-400">
                <a
                  href="#"
                  class="hover:text-[#F97316] flex items-center gap-1.5 transition-colors"
                >
                  ↗️ Live Demo
                </a>
                <a
                  href="#"
                  class="hover:text-[#F97316] flex items-center gap-1.5 transition-colors"
                >
                  🐙 Source Code
                </a>
              </div>
            </div>
          </div>

          <div class="bg-[#121217] border border-[#1F1F29] rounded-3xl overflow-hidden flex flex-col transition-all hover:border-gray-800 group">
            <div class="relative w-full aspect-[16/10] bg-gray-900 overflow-hidden border-b border-[#1F1F29]">
              <img
                src="/path-to-your-image4.jpg"
                alt="Portfolio Website"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span class="absolute top-4 left-4 bg-[#3B82F6] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Frontend
              </span>
              <span class="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-mono px-2.5 py-0.5 rounded-md border border-white/10">
                04
              </span>
            </div>
            <div class="p-6 flex flex-col flex-grow gap-4">
              <h3 class="text-lg font-bold text-white tracking-tight">
                Portfolio Website
              </h3>
              <ul class="text-xs text-gray-400 flex flex-col gap-2 list-disc list-inside">
                <li>Animated Sections</li>
                <li>Responsive Layout</li>
                <li>Dark Theme</li>
                <li>Contact Form</li>
              </ul>
              <div class="flex flex-wrap gap-1.5 mt-2">
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  Next.js
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  Tailwind CSS
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  Framer Motion
                </span>
              </div>
              <div class="flex items-center gap-5 mt-auto pt-4 border-t border-gray-800/60 text-xs font-semibold text-gray-400">
                <a
                  href="#"
                  class="hover:text-[#F97316] flex items-center gap-1.5 transition-colors"
                >
                  ↗️ Live Demo
                </a>
                <a
                  href="#"
                  class="hover:text-[#F97316] flex items-center gap-1.5 transition-colors"
                >
                  🐙 Source Code
                </a>
              </div>
            </div>
          </div>

          <div class="bg-[#121217] border border-[#1F1F29] rounded-3xl overflow-hidden flex flex-col transition-all hover:border-gray-800 group">
            <div class="relative w-full aspect-[16/10] bg-gray-900 overflow-hidden border-b border-[#1F1F29]">
              <img
                src="/path-to-your-image5.jpg"
                alt="Task Manager"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span class="absolute top-4 left-4 bg-[#3B82F6] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Frontend
              </span>
              <span class="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-mono px-2.5 py-0.5 rounded-md border border-white/10">
                05
              </span>
            </div>
            <div class="p-6 flex flex-col flex-grow gap-4">
              <h3 class="text-lg font-bold text-white tracking-tight">
                Task Manager Pro
              </h3>
              <ul class="text-xs text-gray-400 flex flex-col gap-2 list-disc list-inside">
                <li>Drag & Drop UI</li>
                <li>Priority Sorting</li>
                <li>Local Persistence</li>
                <li>Responsive Design</li>
              </ul>
              <div class="flex flex-wrap gap-1.5 mt-2">
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  React
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  Tailwind CSS
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  LocalStorage
                </span>
              </div>
              <div class="flex items-center gap-5 mt-auto pt-4 border-t border-gray-800/60 text-xs font-semibold text-gray-400">
                <a
                  href="#"
                  class="hover:text-[#F97316] flex items-center gap-1.5 transition-colors"
                >
                  ↗️ Live Demo
                </a>
                <a
                  href="#"
                  class="hover:text-[#F97316] flex items-center gap-1.5 transition-colors"
                >
                  🐙 Source Code
                </a>
              </div>
            </div>
          </div>

          <div class="bg-[#121217] border border-[#1F1F29] rounded-3xl overflow-hidden flex flex-col transition-all hover:border-gray-800 group">
            <div class="relative w-full aspect-[16/10] bg-gray-900 overflow-hidden border-b border-[#1F1F29]">
              <img
                src="/path-to-your-image6.jpg"
                alt="E-Commerce Store"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span class="absolute top-4 left-4 bg-[#F97316] text-black text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Full Stack
              </span>
              <span class="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-mono px-2.5 py-0.5 rounded-md border border-white/10">
                06
              </span>
            </div>
            <div class="p-6 flex flex-col flex-grow gap-4">
              <h3 class="text-lg font-bold text-white tracking-tight">
                E-Commerce Store
              </h3>
              <ul class="text-xs text-gray-400 flex flex-col gap-2 list-disc list-inside">
                <li>Product Catalog</li>
                <li>Shopping Cart</li>
                <li>Payment Integration</li>
                <li>Admin Panel</li>
              </ul>
              <div class="flex flex-wrap gap-1.5 mt-2">
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  Next.js
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  MongoDB
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  Stripe
                </span>
                <span class="bg-[#1A1A24] border border-[#2E2E3B] px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-400">
                  Tailwind CSS
                </span>
              </div>
              <div class="flex items-center gap-5 mt-auto pt-4 border-t border-gray-800/60 text-xs font-semibold text-gray-400">
                <a
                  href="#"
                  class="hover:text-[#F97316] flex items-center gap-1.5 transition-colors"
                >
                  ↗️ Live Demo
                </a>
                <a
                  href="#"
                  class="hover:text-[#F97316] flex items-center gap-1.5 transition-colors"
                >
                  🐙 Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainContainer>
  );
};

export default ProjectPage;
