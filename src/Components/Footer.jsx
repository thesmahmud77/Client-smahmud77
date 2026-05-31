import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

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
                  smahmud77
                </span>
                <span class="text-[11px] text-gray-500 font-medium">
                  Full Stack Web Developer
                </span>
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
