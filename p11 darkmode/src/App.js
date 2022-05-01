import { useEffect, useState } from "react";

const getstoragetheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, settheme] = useState(getstoragetheme());

  const handletoogle = () => {
    if (theme === "light-theme") {
      settheme("dark-theme");
    } else {
      settheme("light-theme");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <div className="container">
        <nav className="nav">
          <h2>Logo.</h2>
          <button className="btn" onClick={handletoogle}>
            Mode
          </button>
        </nav>
      </div>
    </div>
  );
}

export default App;
