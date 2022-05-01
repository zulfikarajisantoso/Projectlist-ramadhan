import React from "react";

const Aturan = ({ handlechange, quiz, handlesubmit }) => {
  return (
    <div>
      <form className="containerform">
        <h2>Setup Kuis</h2>
        <div className="forminput">
          <label>Nomor kuis</label>
          <input
            type="number"
            name="amount"
            min={1}
            max={50}
            value={quiz.amount}
            onChange={handlechange}
          />
        </div>
        <div className="forminput">
          <label>Category</label>
          <select
            className="options"
            value={quiz.category}
            name="category"
            id="category"
            onChange={handlechange}
          >
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>
        <div className="forminput">
          <label>Select Level</label>
          <select
            className="options"
            value={quiz.difficulty}
            name="difficulty"
            id="difficulty"
            onChange={handlechange}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <button type="submit" onClick={handlesubmit}>
          Start
        </button>
      </form>
    </div>
  );
};

export default Aturan;
