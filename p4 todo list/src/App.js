import { type } from "@testing-library/user-event/dist/type";
import { useState, useEffect } from "react";

const getLocationStora = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.setItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [name, setname] = useState("");
  const [list, setlist] = useState(getLocationStora());
  const [editkah, seteditkah] = useState(false);
  const [editid, seteditid] = useState(null);
  const [alert, setalert] = useState({ show: false, msg: "", type: "" });

  const handlesub = (e) => {
    e.preventDefault();

    if (!name) {
      showalert(true, "danger", "Masukkan isinya!!");
    } else if (name && editkah) {
      setlist(
        list.map((item) => {
          if (item.id === editid)
            return {
              ...item,
              title: name,
            };
        })
      );
      setname("");
      seteditid(null);
      seteditkah(false);
      showalert(true, "success", "berhasil edit");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setlist([...list, newItem]);
      setname("");
      showalert(true, "success", "berhasil ditambah");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      showalert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  const showalert = (show = false, type = "", msg = "") => [
    setalert({ show, type, msg }),
  ];

  const edititem = (id) => {
    const temukan = list.find((item) => item.id === id);

    seteditkah(true);
    seteditid(id);
    setname(temukan.title);
  };

  const hapussatu = (id) => {
    showalert(true, "succeess", "berhasil hapus");
    setlist(list.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <div>
        <form action="">
          {alert.show && <p className={`alert alert-${type}`}>{alert.msg}</p>}

          <h3>Todo list</h3>
          <div>
            <input
              type="text"
              placeholder="Enter.."
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <button onClick={handlesub}>{editkah ? "Edit" : "Submit"} </button>
          </div>
        </form>
        {list.length > 0 && (
          <div>
            {list.map((item) => (
              <div key={item.id}>
                <p>{item.title}</p>

                <div>
                  <button onClick={() => hapussatu(item.id)}>hapus</button>
                  <button onClick={() => edititem(item.id)}>Edit</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
