import { type } from "@testing-library/user-event/dist/type";
import { useState, useEffect } from "react";
import sublinks from "./data";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

function App() {
  const [navopen, setnavopen] = useState(false);
  const [submenu, setsubmenu] = useState(false);
  const [pagee, setpage] = useState({ page: "", links: [] });
  const [location, setlocation] = useState({});

  const opennav = () => {
    setnavopen(true);
  };
  const closenav = () => {
    setnavopen(false);
  };

  const opensubmenu = ({ text, coordinates }) => {
    const page = sublinks.find((link) => link.page === text);
    setpage(page);
    setsubmenu(true);
    setlocation(coordinates);
  };
  const closesubmenu = () => {
    setsubmenu(false);
  };

  return (
    <div className="App">
      <Navbar
        opennav={opennav}
        opensubmenu={opensubmenu}
        closesubmenu={closesubmenu}
      />
      <Hero />
      <Sidebar navopen={navopen} closenav={closenav} />
      <Submenu
        submenu={submenu}
        // pagee={...pagee}
        location={location}
      />
    </div>
  );
}

export default App;
