import React from "react";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className=" grid grid-cols-1 md:grid-cols-5 px-4 max-w-7xl mx-auto pb-5 mb-32 scroll-mt-32"
    >
      <div className="col-span-1 md:border-r-2 mr-16 md:border-gray-400 mb-8">
        <h1 className="text-4xl font-bold">Contact</h1>
      </div>
      <div className="col-span-3 max-w-2xl">
        <p className="text-xl mb-4">Thanks for visiting!</p>
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <p className="text-md mb-8">
          All messages are sent directly to my email, and I'll make sure to
          respond promptly. I look forward to connecting with you and discussing
          your ideas!
        </p>

        <form
          action="https://formspree.io/f/mrbavqwk"
          method="POST"
          className="flex flex-col "
        >
          <label htmlFor="name" className="font-bold text-lg mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-2 border-gray-400 rounded-sm text-md py-1 px-2 mb-4 focus:outline-none focus:border-black transition-all duration-300"
            placeholder="Your full name"
            required
          />

          <label htmlFor="email" className="font-bold text-lg mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 border-gray-400 rounded-sm text-md py-1 px-2 mb-4 focus:outline-none focus:border-black transition-all duration-300"
            placeholder="your@email.com"
            required
          />

          <label htmlFor="message" className="font-bold text-lg mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="border-2 border-gray-400 rounded-sm text-md py-1 px-2 mb-8 focus:outline-none focus:border-black transition-all duration-300"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button
            type="submit"
            className="rounded-sm text-xl px-4 py-2 mb-8 border mr-auto border-gray-400 transition-all duration-300 
                hover:cursor-pointer hover:bg-black hover:text-white hover:shadow-lg 
              active:bg-[rgb(53,53,53)] active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="col-span-1"></div>
    </section>
  );
};

export default ContactPage;
