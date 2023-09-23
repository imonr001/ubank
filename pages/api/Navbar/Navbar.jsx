import React from "react";
import WebView from "./WebView";
import MobilView from "./MobilView";
import { useState } from "react";
function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="">
      <WebView click={handleNav} />
      <MobilView click={handleNav} nav={nav} />
    </div>
  );
}

export default Navbar;
