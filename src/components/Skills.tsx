import React from "react";
import Document from "../assets/document.png";
import Developing from "../assets/developing-icon.png";
import Education from "../assets/monitor.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full sm:h-screen bg-[#ebb3a9]">
      <div className="max-w-[1000px] mx-auto p-14 pt-18 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-700 text-gray-900 pt-24">
            Skills and background
          </p>
          <p className="py-5">Take a look at my experiences</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-10 text-center py-8">
          <div className="bg-[#edede9] shadow-md shadow-gray-500 py-5 px-4">
            <img
              className="w-10 mx-auto"
              src={Developing}
              alt="Developing icon"
            />
            <p className="my-4 font-semibold">Developing</p>
            <p className="my-4">
              I like to code things from scratch, and enjoy bringing ideas to
              life.
            </p>
            <p className="font-semibold my-4"> Languages and frameworks:</p>
            <p className="my-4">
              React, Typescript, Javascript, Python, Java, SQL, CSS, Azure,
              Tailwind
            </p>
          </div>
          <div className="bg-[#edede9] shadow-md shadow-gray-500 px-4 py-5">
            <img className="w-10 mx-auto" src={Document} alt="Document icon" />
            <p className="my-4 font-semibold">Certificates</p>
            <p className="my-4">Microsoft Certified: Azure Fundamentals</p>
            <p className="my-4">
              Microsoft Certified: Azure Developer Associate
            </p>
            <p className="my-4">NSM grunnprinsipper for IKT-sikkerhet</p>
          </div>
          <div className="bg-[#edede9] shadow-md shadow-gray-500 px-4 py-5">
            <img className="w-10 mx-auto" src={Education} alt="Event icon" />
            <p className="my-4 font-semibold">Education</p>
            <p className="my-4">
              2019 - : Communication technology and digital security at the
              Norwegian University of Science and Technology with infomration
              security as specialization
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

//Programmeringsspråk
//Andre skills (Presentation) (kan klikke seg inn på bilder av foredrag og arbeid jeg har gjort)
//Design

//Arrangering
