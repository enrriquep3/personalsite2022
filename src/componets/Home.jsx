import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#050823]">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Enrrique Pimentel
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0]">
          {" "}
          I am a Front-end Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
        As a Front-end developer I enjoy developing highly interactive user interfaces that enthuse customers while creating scalable, reliable solutions - but keeping consistency in design, good planning of UI and thinking how it affects the UX, and Search Engine Optimization.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-[#8892b0] duration-300">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
