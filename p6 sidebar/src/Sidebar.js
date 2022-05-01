import React from "react";
import { FaTimes } from "react-icons/fa";
const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
 

  return (
    <aside>
      <div className={`${isSidebarOpen ? "side  showside" : "side"}`}>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 1.5rem",
          }}
        >
          <h2>Logo.</h2>
          <button onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Team</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">Work</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
