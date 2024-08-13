import React from "react";
import "./css files.css/about.css";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            id="mob"
          >
            About
          </p>
        </div>

        <p className="text-xl" id="descrip">
          I have 5 years of experience building and desgining software.
          Currently, I love to work on web application using technologies like
          React, Next JS,Django,PHP and GraphQL,I am and expert in game
          development using Unity and #C as a scripted language.Am at advanced
          level for database administration.
          <span id="descrip">
            <br />I follow mainly two stacks<span id="mob">MERN and DASP</span>{" "}
            for web development <br />
            For mobile application development advancely
            <span id="mob">react-native</span>, basically
            <span id="mob">flutter</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
