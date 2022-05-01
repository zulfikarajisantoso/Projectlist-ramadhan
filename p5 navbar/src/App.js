import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";

function App() {
  const [show, setshow] = useState(false);
  const linkcontainer = useRef(null);
  const linkref = useRef(null);

  const perlihatkan = () => {
    setshow(!show);
  };

  useEffect(() => {
    const linkheight = linkref.current.getBoundingClientRect().height;

    if (show) {
      linkcontainer.current.style.height = `${linkheight}px`;
    } else {
      linkcontainer.current.style.height = "0px";
    }
  }, [show]);

  return (
    <div className="App">
      <nav className="nav">
        <div className="na">
          <div>Logo.</div>
          <button className="but" onClick={perlihatkan}>
            <FaBars />
          </button>
        </div>

        <div className="linstcov" ref={linkcontainer}>
          <ul className="list" ref={linkref}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
