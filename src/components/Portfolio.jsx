import React from 'react';

import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import Resq from '../assets/portfolio/Resq.png';
import Smartsearch from '../assets/portfolio/SmartSearch.png';
import Vims from '../assets/portfolio/Vims.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Vims,
      descript:
        "A Vehicle monitoring systems  which uses real time scanning to store and follow through",
      code: "https://vehicledashboard.vercel.app",
      demo: "https://github.com/Robert-Ndive-tech/dashboard",
    },
    {
      id: 2,
      src: installNode,
      descript:
        "A set of pre-arrange commands used in preparing a new developers enviroment",
      code: "",
      demo: "",
    },
    {
      id: 3,
      src: navbar,
      descript:
        "A mobile responsive funtional dependencies used in performing good usability  access",
      code: "",
      demo: "",
    },
    {
      id: 4,
      src: reactSmooth,
      descript: "A dating app depending on close proximity that uses react to create a smooth user experience",
      code: "https://github.com/RobertEnjematech/newcloseecounter.git",
      demo: "https://closeencounter-murex.vercel.app",
    },
    {
      id: 5,
      src: Resq,
      descript:
        "A disaster very responsive and monitoring system which manages enviromental changes within  our various cultural activities",
      code: "https://github.com/MaivaC/CEF-440-Internet-Programming.-Group-18",
      demo: "",
    },
    {
      id: 6,
      src: Smartsearch,
      descript:
        "This is an image lost but found and search mobile application powered by Artifiicial intelligence,It is a 4 months old service still under production till date",
      code: "https://github.com/tchuidjanjordan/Codesample--final-task/tree/master",
      demo: "",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, descript, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div>{descript}</div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
