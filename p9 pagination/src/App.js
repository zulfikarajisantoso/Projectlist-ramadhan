import { useEffect, useState } from "react";
import paginate from "./utils";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

function App() {
  const [page, setpage] = useState(0);
  const [datanya, setdatanya] = useState([]);
  const [displaydata, setdisplaydata] = useState([]);

  const ambildata = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setdatanya(paginate(data));
  };
  useEffect(() => {
    ambildata();
  }, []);

  const nextpage = () => {
    setpage((oldpage) => {
      let nextpage = oldpage + 1;
      if (nextpage > datanya.length - 1) {
        nextpage = 0;
      }
      return nextpage;
    });
  };

  const prevpage = () => {
    setpage((oldpage) => {
      let prevpage = oldpage - 1;
      if (prevpage < 0) {
        prevpage = datanya.length - 1;
      }
      return prevpage;
    });
  };

  const handlepage = (index) => {
    setpage(index);
  };

  useEffect(() => {
    setdisplaydata(datanya[page]);
  }, [page]);

  return (
    <div className="App">
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px 20px",
        }}
      >
        <div>
          <h1 className="text-center">Pagination</h1>
        </div>
        <div className="cardcontainer">
          {displaydata.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.avatar_url} />
              <h3>{item.login}</h3>
              <a href={item.html_url}> View Profile</a>
            </div>
          ))}
        </div>
        <div>
          <div>
            <button className="" onClick={prevpage}>
              Prev
            </button>
          </div>
          {datanya.map((item, index) => {
            return (
              <button
                key={index}
                className={`${index === page ? "active" : null}`}
                onClick={() => handlepage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <div>
            <button className="" onClick={nextpage}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
