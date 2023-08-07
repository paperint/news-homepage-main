import React from "react";
import logo from "../assets/images/logo.svg";
import closeimage from "../assets/images/icon-menu-close.svg";
import hamburger from "../assets/images/icon-menu.svg";

function Navbar({ isOpen, setIsOpen }) {
  return (
    <>
      <nav className="flex justify-between max-w-6xl p-6 mx-auto ">
        <div>
          <img src={logo} alt="logo" className="w-full" />
        </div>
        <ul className="flex items-center justify-center gap-10 max-md:hidden text-Neutral-darkGrayishBlue">
          <li className="hover:text-primary-softRed">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-primary-softRed">
            <a href="#">New</a>
          </li>
          <li className="hover:text-primary-softRed">
            <a href="#">Popular</a>
          </li>
          <li className="hover:text-primary-softRed">
            <a href="#">Trending</a>
          </li>
          <li className="hover:text-primary-softRed">
            <a href="#">Categories</a>
          </li>
        </ul>
        <button className=" md:hidden">
          <img src={hamburger} alt="menu" onClick={() => setIsOpen(true)} />
        </button>
        {isOpen && (
          <div className="absolute top-0 right-0 z-50 flex flex-col h-full gap-20 p-6 bg-Neutral-offWhite w-52">
            <div>
              <button onClick={() => setIsOpen(false)} className="float-right">
                <img src={closeimage} alt="closetag" />
              </button>
            </div>
            <ul className="flex flex-col text-xl gap-7">
              <li className="hover:text-primary-softRed">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-primary-softRed">
                <a href="#">New</a>
              </li>
              <li className="hover:text-primary-softRed">
                <a href="#">Popular</a>
              </li>
              <li className="hover:text-primary-softRed">
                <a href="#">Trending</a>
              </li>
              <li className="hover:text-primary-softRed">
                <a href="#">Categories</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
