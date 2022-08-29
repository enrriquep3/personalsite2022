import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#050823] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-600">About</p>
          </div>
          <div></div>
          </div>
          <div  className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold ">
                <p> Hi. I am Enrrique, this is my portfolio website</p>
            </div>
            <div>
                <p>I am a highly motivated and problem solver Front-end Developer, always
          using the latest technologies to build, maintain, and escalate
          appealing user-friendly platforms, websites, and applications.
          Knowledgeable in a variety of computer languages with strong written
          and verbal communication skills. </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
