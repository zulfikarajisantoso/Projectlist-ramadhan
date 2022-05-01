import { useState, useEffect } from "react";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setloading] = useState(true);
  const [isi, setisi] = useState([]);
  const [value, setvalue] = useState(0);

  const fec = async () => {
    const ambil = await fetch(url);
    const jadijson = await ambil.json();

    setisi(jadijson);
    setloading(false);
  };

  useEffect(() => {
    fec();
  }, []);

  if (loading) {
    <div className="" style={{ display: "flex", justifyContent: "center" }}>
      <h2>Loading</h2>
    </div>;
  }
  const { company, dates, duties, title } = isi[value];
  return (
    <div className="App">
      <h2>Display</h2>

      <div style={{ display: "flex" }}>
        <div className="" style={{ display: "flex", flexDirection: "column" }}>
          {isi.map((item, index) => (
            <button key={index} onClick={() => setvalue(index)}>
              {item.company}
            </button>
          ))}
        </div>
        <div>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <h6>{dates}</h6>
          <p>{duties}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
