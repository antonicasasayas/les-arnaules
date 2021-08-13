import React from "react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children, setModalShow }) => {
  return (
    <>
      <nav className="mb-4">
        <Navbar setModalShow={setModalShow}/>
        
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
