import React, { useState } from "react";

function App() {
  const [time, settime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [stop, setstop] = useState("");
  const [status, setstatus] = useState(0);

  let upms = time.ms,
    ups = time.s,
    upm = time.m,
    uph = time.h;

  const run = () => {
    if (upm === 60) {
      uph++;
      upm = 0;
    }
    if (ups === 60) {
      upm++;
      ups = 0;
    }

    if (upms === 100) {
      ups++;
      upms = 0;
    }
    upms++;

    return settime({ ms: upms, s: ups, m: upm, h: uph });
  };

  const jalankan = () => {
    run();
    setstatus(1);
    setstop(setInterval(run, 10));
  };
  const berhenti = () => {
    clearInterval(stop);
    setstatus(2);
  };
  const jalanlagi = () => {
    setstatus(1);
    setstop(setInterval(run, 10));
    /// atau jalankan function ini
    // jalankan()
  };

  const reset = () => {
    setstatus(0);
    clearInterval(stop);
    settime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const masukjam = () => {
    if (time.h === 0) {
      return "";
    }
    return (
      <div>
        <p>Jam</p>
        <div>{time.h >= 10 ? time.h : "0" + time.h}</div>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <h1 style={{ color: "white" }}>Stop Watch</h1>
        <div className="waktunya">
          {masukjam()}
          <div>
            <p>Menit</p>
            <div>{time.m >= 10 ? time.m : "0" + time.m}</div>
          </div>
          <div>
            <p>Detik</p>
            <div>{time.s >= 10 ? time.s : "0" + time.s}</div>
          </div>
          <div>
            <p>Mili</p>
            <div>{time.ms >= 10 ? time.ms : "0" + time.ms}</div>
          </div>
        </div>
        <div>
          {status === 0 ? (
            <div className="button">
              <button onClick={jalankan}>Start</button>
            </div>
          ) : (
            ""
          )}
          {status === 1 ? (
            <div className="button">
              <button onClick={berhenti}>Stop</button>
              <button onClick={reset}>Reset</button>
            </div>
          ) : (
            ""
          )}
          {status === 2 ? (
            <div className="button">
              <button onClick={jalanlagi}>Resume</button>
              <button onClick={reset}>Reset</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
