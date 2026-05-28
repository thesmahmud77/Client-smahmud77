import React from "react";
import MainContainer from "../Hooks/MainContainer";
import logo from "../assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-12">
      <div className="logo col-span-2 flexLeft">
        <Link to={"/"}>
          <img className="w-12 h-12" src={logo} alt="" />
        </Link>
      </div>
      <div className="navContent col-span-7 flexCenter gap-5">
        <Link
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-gray-500 font-semibold text-[18px]"
              : "text-red-500 font-semibold text-[18px]"
          }
        >
          Home
        </Link>
        <Link
          to={"/projects"}
          className={({ isActive }) =>
            isActive
              ? "text-gray-500 font-semibold text-[18px]"
              : "text-red-500 font-semibold text-[18px]"
          }
        >
          Projects
        </Link>
        <Link
          to={"/about-me"}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-semibold text-[18px]"
              : "text-red-500 font-semibold text-[18px]"
          }
        >
          About Me
        </Link>
        <Link
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "text-gray-500 font-semibold text-[18px]"
              : "text-red-500 font-semibold text-[18px]"
          }
        >
          Contact
        </Link>
      </div>
      <div className="navButton col-span-3 flexRight gap-5">
        <button>Resume</button>
        <button>contact</button>
      </div>
    </div>
  );
};

export default Navbar;
