import React, { useState, useContext, useEffect, useCallback } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Detail from "./Detail";
import About from "./About";
import Error from "./Error";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function App() {
  const [loading, setloading] = useState(true);
  const [caricar, setcaricar] = useState("a");
  const [datame, setdata] = useState([]);

  const fetchmenu = useCallback(async () => {
    setloading(false);
    try {
      const response = await fetch(`${url}${caricar}`);
      const data = await response.json();

      const { drinks } = data;

      if (drinks) {
        const newmenu = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });

        setdata(newmenu);
      } else {
        setdata([]);
      }
    } catch {
      console.log("error");
      setloading(true);
    }
  }, [caricar]);
  useEffect(() => {
    fetchmenu();
  }, [caricar, fetchmenu]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home setcaricar={setcaricar} datame={datame} loading={loading} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
