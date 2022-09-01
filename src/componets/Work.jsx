import React from "react";
import SushiPlace from "../assets/sushiplace.jpg";
import Youtubes from "../assets/youtubes.jpg";
import Poltrait from "../assets/poltrait.jpg";
import MovieSearch from "../assets/moviesearch.jpg";
import JqueryCalculator from "../assets/JqueryCalculator.png"
import SoccerTrivia from "../assets/Soccertrivia.png"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#050823]">
      <div className="max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600">
            Work
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>

         {/*Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${SushiPlace})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Sushi Restaurant
              </span>
              <div className="pt-8 text-center">
                <a href="https://sushiplace-v1.vercel.app/">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/enrriquep3/React-Apps/tree/main/sushiplace">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Youtubes})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Youtube App
              </span>
              <div className="pt-8 text-center">
                <a href="https://youtubeapp-ten.vercel.app/">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/enrriquep3/React-Apps/tree/main/youtubeapp">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
                  {/* Grid Item */}
                  <div
            style={{ backgroundImage: `url(${Poltrait})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                City Weather Search
              </span>
              <div className="pt-8 text-center">
                <a href="https://enrriquep3.github.io/PROJECT-01/">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/enrriquep3/PROJECT-01">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${MovieSearch})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Movie Search App
              </span>
              <div className="pt-8 text-center">
                <a href="https://moviesearch-gamma.vercel.app/">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/enrriquep3/React-Apps/tree/main/movies">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
                  {/* Grid Item */}
                  <div
            style={{ backgroundImage: `url(${JqueryCalculator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Jquery Calculator App
              </span>
              <div className="pt-8 text-center">
                <a href="https://enrriquep3.github.io/jQuery-Calculator/">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/enrriquep3/jQuery-Calculator">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${SoccerTrivia})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Soccer Trivia App
              </span>
              <div className="pt-8 text-center">
                <a href="https://first-trivia.vercel.app/">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/enrriquep3/FirstTrivia">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
