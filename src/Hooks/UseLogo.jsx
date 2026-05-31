import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const UseLogo = () => {
  return (
    <div class="flex gap-5">
      <button
        onClick={() => window.open("https://wa.me/8801921215292", "_blank")}
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
          window.open("https://www.facebook.com/smahmud77.dev", "_blank")
        }
        className="cursor-pointer w-9 h-9 flex items-center justify-center bg-[#121217] border border-[#2E2E3B] rounded-lg text-gray-400 hover:text-white transition-colors"
      >
        <FaFacebook />
      </button>
      <button
        onClick={() =>
          window.open("https://www.linkedin.com/in/smahmud77/", "_blank")
        }
        className="cursor-pointer w-9 h-9 flex items-center justify-center bg-[#121217] border border-[#2E2E3B] rounded-lg text-gray-400 hover:text-white transition-colors"
      >
        <IoLogoLinkedin />
      </button>
      <button
        onClick={() => window.open("https://x.com/smahmudul77", "_blank")}
        className="cursor-pointer w-9 h-9 flex items-center justify-center bg-[#121217] border border-[#2E2E3B] rounded-lg text-gray-400 hover:text-white transition-colors"
      >
        <FaSquareXTwitter />
      </button>
    </div>
  );
};

export default UseLogo;
