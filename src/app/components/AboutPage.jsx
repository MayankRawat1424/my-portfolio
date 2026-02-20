"use client";

import React from "react";
import { MyDetails } from "./data/AboutData";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const sections = Object.keys(MyDetails).map((key) =>
      document.getElementById(key.replace(/\s+/g, "-")),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace(/-/g, " ");
            setActiveSection(id);
          }
        });
      },
      {
        threshold: 0.3, // Adjust sensitivity (0.3–0.6 works well)
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <section
        id="about"
        className="grid grid-cols-1 md:grid-cols-5 px-4 max-w-7xl mx-auto pb-5 mb-32 scroll-mt-32"
      >
        <div className="col-span-1 md:border-r-2 mr-16 md:border-gray-400">
          <h1 className="text-4xl font-bold mb-8">About</h1>
        </div>

        <div className="col-span-3 max-w-2xl md:mb-0">
          {Object.entries(MyDetails).map(([key, section]) => (
            <div
              key={key}
              className="scroll-mt-32"
              id={key.replace(/\s+/g, "-")}
            >
              <h2 className="text-3xl font-semibold mb-6">{section.Title}</h2>

              {/* Introduction */}
              {key === "Introduction" && (
                <p className="text-lg tracking-wide mb-24">{section.Detail}</p>
              )}

              {/* Education */}
              {key === "Education Qualification" && (
                <div className="mb-24">
                  {Object.entries(section.Detail).map(([degree, info]) => (
                    <div
                      key={degree}
                      className="mb-4 px-4 py-2 shadow-lg border-gray-400 border-2 rounded-sm hover:scale-102 transition-transform duration-300"
                    >
                      <h3 className="text-xl mb-4 font-semibold">{degree}</h3>

                      <div className="flex items-baseline gap-2">
                        <FaBuildingColumns />
                        <p className="text-md mb-2">{info.Institute}</p>
                      </div>

                      <div className="flex items-baseline gap-2">
                        <FaCalendarAlt />
                        <p className="text-md mb-2">{info.Duration}</p>
                      </div>

                      <p className="text-lg font-bold">{info.Performance}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills */}
              {key === "Tools/ Technologies/ Skills" && (
                <div className="mb-24">
                  <div className="mb-8">
                    <h3 className="font-semibold text-xl mb-2">Hard Skills</h3>
                    <ul className="grid grid-cols-3 md:grid-cols-5 gap-4">
                      {section.Detail["Hard Skills"].map((skill, index) => (
                        <li
                          key={skill}
                          className="p-2 rounded text-sm flex items-center justify-center text-center shadow-lg font-mono hover:scale-115 transition-transform duration-200"
                          style={{
                            backgroundColor: colors[index % colors.length],
                          }}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl mb-2">Soft Skills</h3>
                    <ul className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {section.Detail["Soft Skills"].map((skill, index) => (
                        <li
                          key={skill}
                          className="p-2 rounded text-sm flex items-center justify-center text-center shadow-lg font-mono hover:scale-115 transition-transform duration-200"
                          style={{
                            backgroundColor: colors[index % colors.length],
                          }}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Experience */}
              {key === "Experience" && (
                <div>
                  {Object.entries(section.Detail).map(([role, info]) => (
                    <div key={role} className="mb-4">
                      <h3 className="text-2xl font-semibold mb-2">{role}</h3>
                      <p className="mb-4 text-gray-600">{info.Duration}</p>
                      <p className="text-xl">{info.Description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="col-span-1 hidden md:flex md:flex-col sticky top-32 h-fit self-start">
          {Object.keys(MyDetails).map((key) => (
            <button
              key={key}
              className={`rounded-sm text-xl px-4 py-2 mb-8 border border-gray-400 transition-all duration-300 
        hover:cursor-pointer hover:bg-black hover:text-white hover:shadow-lg 
        active:bg-[rgb(53,53,53)] active:scale-95
        ${
          activeSection === key
            ? "bg-black text-white shadow-lg border-black"
            : "bg-white text-black"
        }`}
              onClick={() => {
                setActiveSection(key);

                const element = document.getElementById(
                  key.replace(/\s+/g, "-"),
                );
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {MyDetails[key].Title}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
