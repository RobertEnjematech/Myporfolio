import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-7xl font-bold text-white" id="mob">
            A pro-error Detector DEVELOPER Skilled In Programming And Coding of
            Basic and Advanced Ideations
          </h2>
          <p className="text-gray-500 py-4 max-w-md" id="descrip">
            Welcome to the world of An Engineering Developer who is currently a
            final year student of FET,University of Buea and very ready for the
            Job market, I am capable of giving life to your technical
            idealogical solutions
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-pink-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-600">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-2/4 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
