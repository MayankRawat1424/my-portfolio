import React from "react";

const Header = () => {
  return (
    <header className=" sticky top-0 z-50 backdrop-blur-xs px-4">
      <div className="max-w-7xl flex justify-between items-baseline pt-10 mx-auto pb-5 border-b-1 mb-16">
        <h1 className="font-bold font-serif">Mayank_R.</h1>
        <nav>
          <ul className="flex gap-14 text-sm">
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
