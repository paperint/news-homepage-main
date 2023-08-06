import React from "react";
import Navbar from "../component/Navbar";
import Main from "../component/Main";
import { useState } from "react";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="bg-Neutral-offWhite">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Main isOpen={isOpen} />
      </section>
    </>
  );
}

export default Homepage;
