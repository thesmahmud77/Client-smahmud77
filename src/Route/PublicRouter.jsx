import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import ProjectPage from "../Pages/Projects/ProjectPage";
import AboutMe from "../Pages/About-Me/AboutMe";
import ContactMe from "../Pages/Contact/ContactMe";
import ProjectDetails from "../Pages/Projects/ProjectDetails";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

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
    element: <ContactMe></ContactMe>,
  },
  {
    path: "/project/:id",
    element: <ProjectDetails></ProjectDetails>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
