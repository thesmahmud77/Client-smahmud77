import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="w-full bg-[#0B0B0F] text-white pt-16 pb-8 px-6 md:px-12 flex justify-center border-t border-[#121217]">
        <div class="max-w-7xl w-full flex flex-col gap-8">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-6">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center text-black font-black text-lg">
                S
              </div>
              <div class="flex flex-col">
                <span class="text-base font-bold tracking-tight text-white">
                  Sajjad.
                </span>
                <span class="text-[11px] text-gray-500 font-medium">
                  Full Stack Web Developer
                </span>
              </div>
            </div>

            <nav class="flex flex-wrap items-center gap-6 md:gap-8 text-sm text-gray-400 font-medium">
              <a href="#" class="hover:text-white transition-colors">
                Home
              </a>
              <a href="#" class="hover:text-white transition-colors">
                Projects
              </a>
              <a href="#" class="hover:text-white transition-colors">
                About
              </a>
              <a href="#" class="hover:text-white transition-colors">
                Contact
              </a>
            </nav>

            <div class="flex items-center gap-3">
              <a
                href="#"
                class="w-9 h-9 flex items-center justify-center bg-transparent border border-[#1F1F29] hover:border-gray-500 rounded-full text-gray-400 hover:text-white transition-all text-sm"
              >
                🐙
              </a>
              <a
                href="#"
                class="w-9 h-9 flex items-center justify-center bg-transparent border border-[#1F1F29] hover:border-gray-500 rounded-full text-gray-400 hover:text-white transition-all text-sm"
              >
                💼
              </a>
              <a
                href="#"
                class="w-9 h-9 flex items-center justify-center bg-transparent border border-[#1F1F29] hover:border-gray-500 rounded-full text-gray-400 hover:text-white transition-all text-sm"
              >
                🐦
              </a>
            </div>
          </div>

          <div class="w-full border-t border-[#1F1F29]/60 my-1"></div>

          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-gray-500 font-medium">
            <p>© 2026 Sajjad. All rights reserved.</p>

            <p>
              Built with <span class="text-gray-400">Next.js</span> &{" "}
              <span class="text-gray-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
