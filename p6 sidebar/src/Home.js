import React from "react";
import { FaBars } from "react-icons/fa";

const Home = ({ openSidebar, openModal }) => {
  return (
    <div className="main">
      <button className="bar" onClick={openSidebar}>
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        Show modal
      </button>
    </div>
  );
};

export default Home;
