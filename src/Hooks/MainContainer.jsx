import React from "react";
import Navbar from "../Components/Navbar";

const MainContainer = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default MainContainer;
