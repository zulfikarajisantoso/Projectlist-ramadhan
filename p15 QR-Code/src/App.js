import React, { useState, useRef } from "react";
import QRCode from "qrcode";
import QrReader from "react-qr-reader";

function App() {
  const [text, settext] = useState("");
  const [gamber, setgamber] = useState("");
  const [scanres, setscanres] = useState("");
  const [cam, setcam] = useState("");
  const qrRef = useRef(null);

  const generater = async () => {
    const response = await QRCode.toDataURL(text);
    setgamber(response);
  };

  const handlrror = (err) => {
    console.log(err);
  };
  const handlrrorweb = (err) => {
    console.log(err);
  };

  const handleScanFile = (res) => {
    if (res) {
      setscanres(res);
    }
  };
  const FileReader = () => {
    qrRef.current.openImageDialog();
  };

  const webcmscan = (res) => {
    if (res) {
      setcam(res);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="kotak1">
          <div className="hah">
            <input
              type="text"
              placeholder="Enter qr code"
              onChange={(e) => settext(e.target.value)}
            />
            <button onClick={() => generater()}>Generate</button>
          </div>
          {gamber ? (
            <a href={gamber} download>
              <img src={gamber} alt="img" />{" "}
            </a>
          ) : null}
        </div>
        <div className="kotak2">
          <button onClick={FileReader}>Scan QR Code</button>

          <QrReader
            ref={qrRef}
            delay={300}
            style={{ width: "100px" }}
            onError={handlrror}
            onScan={handleScanFile}
            legacyMode
          />
          <h4>Scan Code : {scanres}</h4>
        </div>
        <div>
          <h2>Scan by Webcam</h2>

          <QrReader
            delay={300}
            style={{ width: "100px" }}
            onError={handlrrorweb}
            onScan={webcmscan}
          />

          <h4>Scan by webcam : {cam}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
