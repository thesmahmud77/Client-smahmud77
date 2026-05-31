import React from "react";
import MainContainer from "../../Hooks/MainContainer";
import { NavLink, Outlet } from "react-router";

const Deshboard = () => {
  return (
    <MainContainer>
      <div className="w-full min-h-screen grid grid-cols-12">
        <div className="deshboard-menu col-span-2 flex flex-col items-center justify-start gap-3 py-10 bg-gray-500/20 border-2 border-gray-500/50">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-amber-500/20 w-50 text-center px-5 py-3 rounded-[5px] border-2 border-amber-500 text-amber-500 font-bold"
                : "bg-gray-500/40 w-50 text-center px-5 py-3 rounded-[5px] border-2 border-gray-500 text-white font-bold"
            }
            to={"project-summary"}
          >
            Project Summary
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-amber-500/20 w-50 text-center px-5 py-3 rounded-[5px] border-2 border-amber-500 text-amber-500 font-bold"
                : "bg-gray-500/40 w-50 text-center px-5 py-3 rounded-[5px] border-2 border-gray-500 text-white font-bold"
            }
            to={"project-input"}
          >
            Project Input
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-amber-500/20 w-50 text-center px-5 py-3 rounded-[5px] border-2 border-amber-500 text-amber-500 font-bold"
                : "bg-gray-500/40 w-50 text-center px-5 py-3 rounded-[5px] border-2 border-gray-500 text-white font-bold"
            }
            to={"skill-input"}
          >
            Skills Input
          </NavLink>
        </div>
        <div className="deshboard-Pages col-span-9 flex items-center justify-center">
          <Outlet></Outlet>
        </div>
      </div>
    </MainContainer>
  );
};

export default Deshboard;
