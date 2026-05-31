import React, { useContext } from "react";

import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Logout Successfully",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        SetError(errorCode);
      });
  };
  return (
    <div className="  grid grid-cols-12 w-ful bg-black border-b border-gray-400/20 py-3 px-5">
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
              ? "bg-gray-500/20 px-5 py-1 rounded-2xl border-b-2 border-amber-400/40 font-semibold text-[18px]"
              : "text-gray-500 font-semibold text-[18px]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-500/20 px-5 py-1 rounded-2xl border-b-2 border-amber-400/40 font-semibold text-[18px]"
              : "text-gray-500 font-semibold text-[18px]"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={"/about-me"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-500/20 px-5 py-1 rounded-2xl border-b-2 border-amber-400/40 font-semibold text-[18px]"
              : "text-gray-500 font-semibold text-[18px]"
          }
        >
          About Me
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-500/20 px-5 py-1 rounded-2xl border-b-2 border-amber-400/40 font-semibold text-[18px]"
              : "text-gray-500 font-semibold text-[18px]"
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="navButton col-span-3 flexRight gap-5">
        {user ? (
          <div className="flex items-center justify-center gap-5">
            <button
              className={
                " font-semibold px-5 py-2 rounded-[5px] border-2 border-gray-300"
              }
              onClick={() => handleLogout()}
            >
              Logout
            </button>
            <NavLink
              to={"/deshboard"}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-500/20 px-5 py-1 rounded-2xl border-b-2 border-amber-400/40 font-semibold text-[18px]"
                  : "text-gray-500 font-semibold text-[18px]"
              }
            >
              Deshboard
            </NavLink>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-5">
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-500/20 px-5 py-1 rounded-2xl border-b-2 border-amber-400/40 font-semibold text-[18px]"
                  : "text-gray-500 font-semibold text-[18px]"
              }
            >
              Login
            </NavLink>
            <NavLink
              to={"/register"}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-500/20 px-5 py-1 rounded-2xl border-b-2 border-amber-400/40 font-semibold text-[18px]"
                  : "text-gray-500 font-semibold text-[18px]"
              }
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
