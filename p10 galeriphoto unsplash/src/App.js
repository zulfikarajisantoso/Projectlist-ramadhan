import { useEffect, useRef, useState } from "react";

const clientID = `?client_id=FLb3y-vmvTIxqvg-7XoEJjPvsQfzz_CIU3Md7rGOPFg`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setloading] = useState(false);
  const [photos, setphotos] = useState([]);
  const [page, setpage] = useState(1);
  const [query, setquery] = useState("");
  const mounted = useRef(false);

  const [newimage, setnewimage] = useState(false);

  const ambilimage = async () => {
    setloading(true);

    let url;
    const urlpage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    if (query) {
      url = `${searchUrl}${clientID}${urlpage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlpage}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      setphotos((oldphotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldphotos, ...data.results];
        } else {
          return [...oldphotos, ...data];
        }
      });
      setnewimage(false);
      setloading(false);
    } catch {
      setloading(true);
      setnewimage(false);
    }
  };

  useEffect(() => {
    ambilimage();
  }, [page]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!newimage) return;
    if (loading) return;
    //tidak tau yang atas buat apa

    setpage((oldpage) => oldpage + 1);
  }, [newimage]);

  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setnewimage(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", event);
    return () => window.removeEventListener("scroll", event);
  }, []);

  const handlecari = (e) => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      ambilimage();
    }
    setpage(1);
  };

  return (
    <div className="App">
      <div
        className="container"
        style={{
          padding: "20px 20px",
        }}
      >
        <form className="form">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />
          <button type="submit" onClick={handlecari}>
            {" "}
            Cari
          </button>
        </form>

        <div className="potos">
          {photos.map((item, index) => (
            <div className="card" key={index}>
              <img className="img1" src={item.urls.regular} alt="" />
              <div className="decphoto">
                <div style={{ padding: "0px 10px" }}>
                  <h4>{item.user.name}</h4>
                  <p>{item.likes} likes</p>
                </div>
                <a
                  style={{ padding: "0px 10px" }}
                  href={item.user.portfolio_url}
                >
                  <img src={item.user.profile_image.medium} alt="" />
                </a>
              </div>
            </div>
          ))}
          {loading && <h2 className="loading">Loading...</h2>}
        </div>
      </div>
    </div>
  );
}

export default App;
