"use client";

import React from "react";
import { MyDetails } from "./AboutData";
import { useState } from "react";
import Image from "next/image";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("Introduction");
  const colors = [
    "#A7F3D0", // mint green
    "#FBCFE8", // soft pink
    "#BFDBFE", // soft blue
    "#FDE68A", // soft yellow
    "#CFFAFE", // pastel cyan
    // "#FECACA", // light coral
    "#E0C3FC", // lavender
    "#D9F99D", // light lime
    "#FFE4E6", // very soft rose
    "#FDE2FF", // pastel purple
    "#FCD5A2", // peach
    "#C6F6D5", // light green
    "#DBEAFE", // sky blue
    "#FFF9C4", // pale yellow
    "#FEE2E2", // blush pink
    "#D8B4FE", // lilac
    "#BAE6FD", // soft cyan
    "#FEEBC8", // light apricot
    "#F3E8FF", // light violet
    "#E6FFFA", // pale turquoise
  ];

  const renderDetail = (key) => {
    const section = MyDetails[key];

    if (!section || !section.Detail) return null;

    switch (key) {
      case "Introduction":
        return (
          <>
            {/* <img src="/inst.jpeg" alt="" className="mb-8" /> */}
            <p className="text-lg tracking-wider ">{section.Detail}</p>
          </>
        );

      case "Education Qualification":
        return (
          <div>
            {Object.entries(section.Detail).map(([degree, info], index) => (
              <div
                key={degree}
                className="mb-4 px-4 py-2 shadow-lg border-gray-400 border-2 rounded-sm"
              >
                <h3 className="text-xl mb-4 font-semibold">{degree}</h3>
                <div className="flex items-baseline gap-2">
                  <FaBuildingColumns />
                  <p className="text-md mb-2"> {info.Institute}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <FaCalendarAlt />
                  <p className="text-md mb-2">{info.Duration}</p>
                </div>
                <p className="text-lg font-bold"> {info.Performance}</p>
              </div>
            ))}
          </div>
        );

      case "Tools/ Technologies/ Skills":
        return (
          <div>
            <div className="mb-8">
              <h3 className="font-semibold text-xl mb-2">Hard Skills</h3>
              <ul className="grid grid-cols-5 gap-4 ">
                {section.Detail["Hard Skills"].map((skill, index) => (
                  <li
                    key={skill}
                    className="p-2 rounded text-sm flex items-center justify-center text-center  shadow-lg font-mono"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">Soft Skills</h3>
              <ul className="grid grid-cols-4 gap-4">
                {section.Detail["Soft Skills"].map((skill, index) => (
                  <li
                    key={skill}
                    className="p-2 rounded text-sm flex items-center justify-center text-center  shadow-lg font-mono"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case "Experience":
        return (
          <div>
            {Object.entries(section.Detail).map(([role, info]) => (
              <div key={role} className="mb-4">
                <h3 className="text-2xl font-semibold mb-2">{role}</h3>
                <p className="mb-4 text-gray-600"> {info.Duration}</p>
                <p className="text-xl">{info.Description}</p>
              </div>
            ))}
          </div>
        );

      default:
        return <pre>{JSON.stringify(section.Detail, null, 2)}</pre>;
    }
  };

  return (
    <>
      <div className="grid grid-cols-5 px-4 max-w-7xl mx-auto pb-5 mb-32">
        <div className="col-span-1 border-r-2 mr-16 border-gray-400">
          <h1 className="text-4xl font-bold">About</h1>
        </div>

        <div className="col-span-3 max-w-2xl">
          {activeSection ? (
            <div>
              <h2
                className="text-3xl font-semibold mb-6
              "
              >
                {MyDetails[activeSection].Title}
              </h2>
              {renderDetail(activeSection)}
            </div>
          ) : (
            <p className="text-gray-600">
              Click a section on the right to see details
            </p>
          )}
        </div>
        <div className="col-span-1">
          {Object.keys(MyDetails).map((key) => (
            <p
              key={key}
              className={`border-2 border-white rounded-sm text-xl p-2 mb-8 hover:cursor-pointer hover:bg-black hover:text-white hover:shadow-lg active:bg-white active:text-black active:border-2 active:border-black ${
                activeSection === key ? "bg-black shadow-lg text-white" : ""
              }`}
              onClick={() => setActiveSection(key)}
            >
              {MyDetails[key].Title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
