import React, { useState } from "react";

import Hero from "./Components/Hero/Hero";

import Head from "next/head";
import Footer from "./Components/Footer/Footer";
import NewNavBar from "./Components/Navbar/NewNavBar";

function homePage() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      {/* <NewNavBar click={handleNav} nav={nav} /> */}
      <Hero />
    </>
  );
}
export default homePage;
