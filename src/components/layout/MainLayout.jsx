import React from "react";
import Navbar from "../shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-blue to-light-blue py-28 px-4 lg:px-8 min-h-screen w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
