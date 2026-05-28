import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import ProjectPage from "../Pages/Projects/ProjectPage";
import AboutMe from "../Pages/About-Me/AboutMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/projects",
    element: <ProjectPage></ProjectPage>,
  },
  {
    path: "/about-me",
    element: <AboutMe></AboutMe>,
  },
  {
    path: "/contact",
    element: <AboutMe></AboutMe>,
  },
]);
