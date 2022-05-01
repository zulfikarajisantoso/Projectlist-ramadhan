import React from "react";

const Modal = ({ modal, corret, pertanyaan, clodemodal }) => {
  console.log(modal);

  return (
    <div className={`${modal ? "modall isopen" : "modall"}`}>
      <div className="container">
        <div className="card">
          <div>Selamat !!</div>
          <p>
            Kamu berhasil menjawab {corret} dari {pertanyaan.length} pertanyaan
          </p>
          <p>
            Nilaimu adalah {((corret / pertanyaan.length) * 100).toFixed(0)}%{" "}
          </p>

          <button className="closebtn" onClick={clodemodal}>
            Main Lagi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
