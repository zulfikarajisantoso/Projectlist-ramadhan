import React, { useEffect, useRef } from "react";
import DataList from "./components/DataList";

const Home = ({ loading, datame, setcaricar }) => {
  const cari = useRef("");

  useEffect(() => {
    cari.current.focus();
  }, []); //ngak tau harus di pake apa ngak

  const handlecari = () => {
    setcaricar(cari.current.value);
  };

  return (
    <div className="home">
      <div className="containerhome">
        <div className="search">
          <label for=""> Cari Menu</label>
          <input
            ref={cari}
            onChange={handlecari}
            className="inputcari"
            placeholder="Search..."
          />
        </div>

        <DataList loading={loading} datame={datame} />
      </div>
    </div>
  );
};

export default Home;
