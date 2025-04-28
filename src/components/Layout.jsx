import React from "react";
import { Outlet } from "react-router-dom";
import background from "../assets/images/background.svg"
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div
  className="min-h-screen bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${background})`,
    backgroundAttachment: "fixed"
  }}
>

      <div className=" min-h-screen">
        <Outlet />
      </div>

      <Footer/>
    </div>
  );
};

export default Layout;