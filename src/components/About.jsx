import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a an undergraduate from the Faculty of Engineering and
          Technology,Buea-Cameroon, I have 3 years of experience building and
          desgining software. Currently, I love to work on web application using
          technologies like React, Tailwind, Next JS and GraphQL,I am and expert
          in game development using Unity and #C as a scripted language. Am at
          beginner level for database administration.
        </p>

        <br />

        <p className="text-xl">
          I am a an undergraduate from the Faculty of Engineering and
          Technology,Buea-Cameroon, I have 3 years of experience building and
          desgining software. Currently, I love to work on web application using
          technologies like React, Tailwind, Next JS and GraphQL,I am and expert
          in game development using Unity and #C as a scripted language. Am at
          beginner level for database administration.
        </p>
      </div>
    </div>
  );
};

export default About;
