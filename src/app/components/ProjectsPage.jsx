"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { MyProjects } from "./data/ProjectData.js";
import { SiGithub } from "react-icons/si";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectEntries = Object.entries(MyProjects);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectEntries.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === projectEntries.length - 1 ? 0 : prev + 1
    );
  };

  const [title, project] = projectEntries[currentIndex];

  return (
    <section
      id="projects"
      className="grid grid-cols-1 md:grid-cols-5 px-4 max-w-7xl mx-auto scroll-mt-32 pb-5 mb-32"
    >
      <div className="col-span-1 md:border-r-2 mr-16 md:border-gray-400">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
      </div>

      <div className="col-span-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-3 max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <img
              src={project.img}
              alt={title}
              className="w-full h-auto object-contain shadow-2xl rounded-lg fit"
            />
            <p
              dangerouslySetInnerHTML={{ __html: project.description }}
              className="mt-8 text-lg mb-2"
            />
            <p className="mb-2 text-lg italic">{project.achievement}</p>
          </div>

          <div className="col-span-1">
            <div>
              <h4 className="text-xl mb-2 font-semibold text-gray-900">
                Frontend
              </h4>
              <ul className="text-gray-600 mb-8 text-md">
                {project.tech.frontend.map((tech) => (
                  <li key={tech} className="mb-1">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl mb-2 font-semibold text-gray-900">
                Backend
              </h4>
              <ul className="text-gray-600 mb-8 text-md">
                {project.tech.backend.map((tech) => (
                  <li key={tech} className="mb-1">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center text-sm gap-1 underline">
              <a href={project.git} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
              <SiGithub />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1"></div>
        <div className="col-span-3 mt-8 max-w-2xl flex justify-center gap-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 active:scale-95 transition-all duration-300 shadow-sm"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 active:scale-95 transition-all duration-300 shadow-sm"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
