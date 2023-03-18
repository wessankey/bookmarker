import React from "react";
import AppSidebar from "./AppSidebar";

type TLayout = {
  children: React.ReactNode;
};

const Layout: React.FC<TLayout> = ({ children }) => {
  return (
    <div className="flex">
      <AppSidebar />
      <div className="w-screen p-5">{children}</div>
    </div>
  );
};

export default Layout;
