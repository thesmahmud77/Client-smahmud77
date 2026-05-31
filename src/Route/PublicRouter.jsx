import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import ProjectPage from "../Pages/Projects/ProjectPage";
import AboutMe from "../Pages/About-Me/AboutMe";
import ContactMe from "../Pages/Contact/ContactMe";
import ProjectDetails from "../Pages/Projects/ProjectDetails";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Deshboard from "../Pages/Deshboard/Deshboard";
import ProjectSummary from "../Pages/Deshboard/Deshboard-SubPages/ProjectSummary";
import ProjectInput from "../Pages/Deshboard/Deshboard-SubPages/ProjectInput";
import SkillInput from "../Pages/Deshboard/Deshboard-SubPages/SkillInput";

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
  {
    path: "/deshboard",
    element: (
      <PrivateRoute>
        <Deshboard></Deshboard>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        path: "project-summary",
        element: <ProjectSummary></ProjectSummary>,
      },
      {
        path: "project-input",
        element: <ProjectInput></ProjectInput>,
      },
      {
        path: "skill-input",
        element: <SkillInput></SkillInput>,
      },
    ],
  },
]);
