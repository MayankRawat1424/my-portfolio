import React from "react";

const Header = () => {
  return (
    <header className=" sticky top-0 z-50 backdrop-blur-xs">
      <div className="grid grid-cols-5 items-center max-w-7xl px-4 pt-10 mx-auto pb-5 border-b-1 mb-16 ">
        <h1 className="col-span-1 font-bold font-serif">Mayank_Rawat</h1>
        <p className="hidden sm:block col-span-3 text-sm text-gray-600">
          Web-Developer
        </p>
        <nav className="col-span-4 sm:col-span-1">
          <ul className="flex justify-between text-sm">
            <li>
              <a href="#home" className="hover:underline hidden sm:block">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline hidden sm:block">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline hidden sm:block">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
