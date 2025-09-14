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
            <p className="text-xl tracking-wider">{section.Detail}</p>
          </>
        );

      case "Education Qualification":
        return (
          <div>
            {Object.entries(section.Detail).map(([degree, info], index) => (
              <div
                key={degree}
                className="mb-8 px-4 py-2 shadow-lg border-amber-300 border-2 rounded-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{degree}</h3>
                <div className="flex items-baseline gap-2">
                  <FaBuildingColumns />
                  <p className="text-lg"> {info.Institute}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <FaCalendarAlt />
                  <p className="text-lg">{info.Duration}</p>
                </div>
                <p className="text-lg"> {info.Performance}</p>
              </div>
            ))}
          </div>
        );

      case "Tools/ Technologies/ Skills":
        return (
          <div>
            <div>
              <h3 className="font-semibold text-xl">Hard Skills</h3>
              <ul className="grid grid-cols-5 gap-2 ">
                {section.Detail["Hard Skills"].map((skill, index) => (
                  <li
                    key={skill}
                    className="p-2 text-center my-2 rounded place-items-center text-lg"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mt-4">Soft Skills</h3>
              <ul className="grid grid-cols-5 gap-2">
                {section.Detail["Soft Skills"].map((skill, index) => (
                  <li
                    key={skill}
                    className="p-2 text-center my-2 rounded"
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
                <p className="mb-4"> {info.Duration}</p>
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
      <div className="grid grid-cols-5 px-4 max-w-7xl mx-auto pb-5 mb-32 pt-4">
        <div className="col-span-1">
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
              className={`rounded-sm text-xl p-2 mb-8 hover:cursor-pointer hover:bg-amber-200 hover:shadow-gray-200 hover:shadow-[2px_4px_8px] active:bg-amber-300 ${
                activeSection === key
                  ? "bg-amber-200 shadow-gray-200 shadow-[2px_4px_8px]"
                  : ""
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
