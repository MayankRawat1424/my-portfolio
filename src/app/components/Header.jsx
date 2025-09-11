import React from "react";

const Header = () => {
  return (
    <div className="flex">
      <h1>Mayank R.</h1>
      <nav>
        <ul className="flex">
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Projects</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
