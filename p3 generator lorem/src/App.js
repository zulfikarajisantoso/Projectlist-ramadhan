import { useState, useEffect } from "react";

import text from "./data";

function App() {
  const [display, setdisplay] = useState([]);
  const [count, setcount] = useState(0);

  const handlesum = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    if (count <= 0) {
      alert("ngak ada!!");
      amount = 1;
    }
    if (count > 8) {
      alert("kebanyakan!!");
      amount = 8;
    }
    setdisplay(text.slice(0, amount));
  };

  return (
    <div className="App">
      <h1>LOREM GENERATOR</h1>
      <div style={{ display: "flex", flexDirection: "" }}>
        <form action="">
          <input
            type="number"
            value={count}
            onChange={(e) => setcount(e.target.value)}
          />
          <button onClick={handlesum}> Generate </button>
        </form>
      </div>
      <div>
        {display.map((item, index) => (
          <div> {item}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
