import React from "react";

import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="  grid grid-cols-12 w-ful bgBlack">
      <div className="logo col-span-2 flexLeft">
        <Link to={"/"}>
          <img className="w-12 h-12" src={logo} alt="" />
        </Link>
      </div>
      <div className="navContent col-span-7 flexCenter gap-5">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-500 border-b-2 border-amber-400 font-semibold text-[18px]"
              : "text-gray-500 font-semibold text-[18px]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-500 border-b-2 border-amber-400 font-semibold text-[18px]"
              : "text-gray-500 font-semibold text-[18px]"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={"/about-me"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-500 border-b-2 border-amber-400 font-semibold text-[18px]"
              : "text-gray-500 font-semibold text-[18px]"
          }
        >
          About Me
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-500 border-b-2 border-amber-400 font-semibold text-[18px]"
              : "text-gray-500 font-semibold text-[18px]"
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="navButton col-span-3 flexRight gap-5">
        <button className="primary">Resume</button>
        <button>contact</button>
      </div>
    </div>
  );
};

export default Navbar;
