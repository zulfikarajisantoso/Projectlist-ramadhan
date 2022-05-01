import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav1">
          <h1>Logo.</h1>
        </div>
        <div className="nav2">
          <ul>
            <li className="liststyle">
              <a href="/">Home</a>
            </li>
            <li className="liststyle">
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
