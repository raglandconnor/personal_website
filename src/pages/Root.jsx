import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Root() {
  return (
    <>
      <ScrollToHashElement behavior="smooth" inline="start" block="start" />
      <Navbar />
      <main className="flex w-full justify-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
