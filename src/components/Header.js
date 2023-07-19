import React, { useState } from "react";
import Navbar from "../Pages/Navbar";

const Header = () => {
  const [selectedPage, setSelectedPage] = useState("");

  return (
    <header>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </header>
  );
};

export default Header;
