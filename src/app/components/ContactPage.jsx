import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const ContactPage = () => {
  return (
    <div className=" grid grid-cols-5 px-4 max-w-7xl mx-auto pb-5 mb-32 ">
      <div className="col-span-1 border-r-2 mr-16 border-gray-400">
        <h1 className="text-4xl font-bold">Contact</h1>
      </div>
      <div className="col-span-3 max-w-2xl">
        <p className="text-xl mb-2">Thanks for visiting!</p>
        <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
        <p className="text-md mb-6">
          All messages are sent directly to my email, and I'll make sure to
          respond promptly. I look forward to connecting with you and discussing
          your ideas!
        </p>

        <form
          action="https://formspree.io/f/mrbavqwk"
          method="POST"
          className="flex flex-col "
        >
          <label htmlFor="name" className="font-bold text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-2 border-gray-400 rounded-sm text-md py-1 px-2 mb-4 focus:outline-none focus:border-black"
            placeholder="Your full name"
            required
          />

          <label htmlFor="email" className="font-bold text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 border-gray-400 rounded-sm text-md py-1 px-2 mb-4 focus:outline-none focus:border-black"
            placeholder="your@email.com"
            required
          />

          <label htmlFor="message" className="font-bold text-lg">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="border-2 border-gray-400 rounded-sm text-md py-1 px-2 mb-8 focus:outline-none focus:border-black"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button
            type="submit"
            className="bg-black border-black border-2 p-2 rounded-sm text-white mr-auto px-8 font-bold hover:shadow-xl active:bg-white active:text-black"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
      <div className="col-span-3">
        <div className=" flex mt-16 justify-evenly gap-8 text-4xl mb-8">
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
  );
};

export default ContactPage;
