import React from "react";
import desktopImage from "../assets/images/image-web-3-desktop.jpg";
import mobileImage from "../assets/images/image-web-3-mobile.jpg";
import img1 from "../assets/images/image-retro-pcs.jpg";
import img2 from "../assets/images/image-top-laptops.jpg";
import img3 from "../assets/images/image-gaming-growth.jpg";

function Main({ isOpen }) {
  return (
    <main
      className={
        isOpen
          ? `max-w-6xl mx-auto bg-Neutral-darkGrayishBlue opacity-50`
          : `max-w-6xl mx-auto`
      }
    >
      <div className="grid items-center justify-center w-full grid-cols-1 row-auto gap-6 p-6 md:p-0 md:grid-cols-3 md:grid-rows-3">
        <div className="flex flex-col w-full gap-5 md:col-span-2 md:row-span-2 ">
          <div>
            <picture>
              <source media="(min-width:768px)" srcSet={desktopImage} />
              <img src={mobileImage} alt="MainCover" />
            </picture>
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="flex-1">
              <h1 className="text-5xl font-extrabold text-Neutral-veryDarkBlue">
                The Bright Future of Web 3.0?
              </h1>
            </div>
            <div className="flex flex-col justify-between flex-1">
              <p className="text-sm text-Neutral-darkGrayishBlue">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="px-4 py-2 tracking-widest w-fit bg-Neutral-veryDarkBlue text-Neutral-offWhite">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="h-full p-6 md:row-span-2 bg-Neutral-veryDarkBlue">
          <h1 className="mb-6 text-4xl font-extrabold text-primary-softOrange">
            New
          </h1>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2 pb-5 border-b-2 border-Neutral-darkGrayishBlue">
              <h2 className="font-bold text-Neutral-offWhite hover:text-primary-softOrange">
                <a href="#">Hydrogen VS Electric Cars</a>
              </h2>
              <p className=" text-Neutral-darkGrayishBlue">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="flex flex-col gap-2 pb-5 border-b-2 border-Neutral-darkGrayishBlue">
              <h2 className="font-bold text-Neutral-offWhite hover:text-primary-softOrange">
                <a href="#">The Downsides of AI Artistry</a>
              </h2>
              <p className=" text-Neutral-darkGrayishBlue">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h2 className="font-bold text-Neutral-offWhite hover:text-primary-softOrange">
                <a href="#">Is VC Funding Drying Up?</a>
              </h2>
              <p className=" text-Neutral-darkGrayishBlue">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <img src={img1} alt="img1" className="w-32 h-32" />
          </div>
          <div className="flex flex-col w-44 justify-evenly">
            <h1 className="text-3xl font-extrabold text-Neutral-grayishBlue">
              01
            </h1>
            <h4 className="font-bold text-Neutral-veryDarkBlue hover:text-primary-softOrange">
              Reviving Retro PCs
            </h4>
            <p className="text-sm text-Neutral-darkGrayishBlue">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <img src={img2} alt="img2" className="w-32 h-32" />
          </div>
          <div className="flex flex-col w-44 justify-evenly">
            <h1 className="text-3xl font-extrabold text-Neutral-grayishBlue">
              02
            </h1>
            <h4 className="font-bold text-Neutral-veryDarkBlue hover:text-primary-softOrange">
              Top 10 Laptops of 2022
            </h4>
            <p className="text-sm text-Neutral-darkGrayishBlue">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <img src={img3} alt="img3" className="w-32 h-32" />
          </div>
          <div className="flex flex-col w-44 justify-evenly">
            <h1 className="text-3xl font-extrabold text-Neutral-grayishBlue">
              03
            </h1>
            <h4 className="font-bold text-Neutral-veryDarkBlue hover:text-primary-softOrange">
              The Growth of Gaming
            </h4>
            <p className="text-sm text-Neutral-darkGrayishBlue">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
