import React from "react";

const Header = () => {
  return (
    <header className=" sticky top-0 z-50 backdrop-blur-xs">
      <div className="grid grid-cols-5 items-center max-w-7xl px-4 pt-10 mx-auto pb-5 border-b-1 mb-16 ">
        <h1 className="col-span-1 font-bold font-serif">Mayank_R.</h1>
        <p className="col-span-3 text-sm text-gray-600">Front-End Developer</p>
        <nav className="col-span-1">
          <ul className="flex justify-between text-sm">
            <li>
              <button className="hover:cursor-pointer hover:text-gray-500 active:text-black">
                Home
              </button>
            </li>
            <li>
              <button className="hover:cursor-pointer hover:text-gray-500 active:text-black">
                About
              </button>
            </li>
            <li>
              <button className="hover:cursor-pointer hover:text-gray-500 active:text-black">
                Projects
              </button>
            </li>
            <li>
              <button className="hover:cursor-pointer hover:text-gray-500 active:text-black">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
