import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Root() {
  return (
    <>
      <ScrollToHashElement behavior="smooth" inline="start" block="center" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
