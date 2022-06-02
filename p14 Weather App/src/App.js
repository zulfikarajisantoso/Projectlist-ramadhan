import { useState } from "react";
import axios from "axios";

function App() {
  const [location, setlocation] = useState("");
  const [data, setdata] = useState({});
  const [error, seterror] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=4c70573bbc7a7e66093510dfe2c7710c`;

  const ambildata = (e) => {
    if (e.key === "Enter") {
      axios
        .get(url)
        .then((res) => {
          setdata(res.data);
          setlocation("");
          console.log(res.data);
          seterror(false);
        })
        .catch((err) => {
          seterror(true);
          console.log("Kota Not Found");
        });
    }
  };

  const waktusekarang = (d) => {
    const bulan = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const hari = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = hari[d.getDay()],
      date = d.getDate(),
      month = bulan[d.getMonth()],
      year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="App">
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="City Name"
            value={location}
            onKeyPress={ambildata}
            onChange={(e) => setlocation(e.target.value)}
          />
        </div>
        <div>
          <h3>
            {data.name}, {data.sys?.country}
          </h3>
          <div> {waktusekarang(new Date())} </div>
        </div>
        <div>
          <div>
            <h6>{Math.floor((data.main?.temp - 32) / 1.8)} °C</h6>
          </div>
        </div>

        <div>{error ? <div className="popbawah">Data tidak Ada</div> : ""}</div>
      </div>
    </div>
  );
}

export default App;
