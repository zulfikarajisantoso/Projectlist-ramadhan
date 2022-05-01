import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const DataList = ({ datame, loading }) => {
  if (loading) {
    return <Loading />;
  }
  if (datame.length < 1) {
    return;
    <div>
      <h1>Data itu tidak ada</h1>
    </div>;
  }

  return (
    <div className="datacontainer">
      <h3 className="text-center">Menu</h3>
      <div className="datalist">
        {datame.map((item) => (
          <div className="card" key={item.id}>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div className="caption">
              <h3>{item.name}</h3>
              <h4>{item.glass}</h4>
              <p>{item.info}</p>
            </div>
            <div className="caption2">
              <Link to={`/detail/${item.id}`} className="btn">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataList;
