import React from "react";

const Header = () => {
  return (
    <header className=" sticky top-0 z-50 backdrop-blur-xs">
      <div className="grid grid-cols-5 items-center max-w-7xl px-4 pt-10 mx-auto pb-5 border-b-1 mb-16 ">
        <h1 className="col-span-1 font-bold font-serif">Mayank_R.</h1>
        <p className="col-span-3"></p>
        <nav className="col-span-1">
          <ul className="flex justify-between text-sm">
            <li>
              <button className="hover:cursor-pointer">Home</button>
            </li>
            <li>
              <button className="hover:cursor-pointer">About</button>
            </li>
            <li>
              <button className="hover:cursor-pointer">Projects</button>
            </li>
            <li>
              <button className="hover:cursor-pointer">Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
