import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = ({ opennav, opensubmenu, closesubmenu }) => {
  const displatsubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    opensubmenu(page, { center, bottom });
    console.log(tempBtn);
  };

  const handlesub = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closesubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handlesub}>
      <div className="center">
        <div className="atas">
          <h1>Logo.</h1>
          <button className="bar" onClick={opennav}>
            <FaBars />
          </button>
        </div>
        <ul className="links">
          <li>
            <button className="link-btn" onMouseOver={displatsubmenu}>
              Home
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displatsubmenu}>
              Contact
            </button>
          </li>
          <li>
            <a href=""> About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
