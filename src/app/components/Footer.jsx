import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center max-w-7xl px-4 mx-auto pb-5 mb-16 ">
          <div className="col-span-1"></div>
          <div className="col-span-3">
            <div className=" flex mt-12 justify-evenly text-4xl mb-8">
              <a
                href="https://x.com/babyboytycoon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/mayank-rawat-a6971924b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/MayankRawat1424"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub />
              </a>
            </div>
            <div className="text-sm font-mono text-center">
              <p>
                <b>Mail:</b>{" "}
                <a href="mailto:mayankrawat1424@gmail.com">
                  <u>mayankrawat1424@gmail.com</u>
                </a>
              </p>
              <p>
                <b>Location:</b> Dehradun, India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
