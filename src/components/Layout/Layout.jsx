import React from "react";
import Navbar from "../Navbar";



const Layout = ({ children }) => {
  return (
    <>
      <Navbar className="navbar" />
      <div className="main-content">{children}</div>
    </>
  );
}

export default Layout;
