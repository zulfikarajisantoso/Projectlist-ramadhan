import items from "./data";
import { useState } from "react";

const allcate = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [category, setcategory] = useState(allcate);
  const [menu, setmenu] = useState(items);

  const filterr = (category) => {
    if (category === "all") {
      setmenu(items);
      return;
    }
    const newitem = items.filter((item) => item.category === category);
    setmenu(newitem);
  };

  console.log(filterr);
  return (
    <div className="App">
      <div
        className="container "
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <div>
          <div>
            <h3>MENU LIST</h3>
          </div>
          <div>
            {category.map((ite, index) => (
              <button key={index} onClick={() => filterr(ite)}>
                {ite}
              </button>
            ))}
          </div>

          <div>
            {menu.map((item, index) => {
              const { id, title, img, desc, price } = item;
              return (
                <div className="" key={id}>
                  <img src={img} alt={title} />
                  <div>
                    <h2>{title}</h2>
                    <h5>{price}</h5>
                  </div>
                  <div>{desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
