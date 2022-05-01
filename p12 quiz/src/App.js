import axios from "axios";
import { useEffect, useState } from "react";
import Aturan from "./Aturan";
import Modal from "./Modal";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

function App() {
  const [loading, setloading] = useState(false);
  const [waiting, setwaiting] = useState(true);
  const [pertanyaan, setpertanyaan] = useState([]);
  const [index, setindex] = useState(0);
  const [corret, setcorret] = useState(0);
  const [modal, setmodal] = useState(false);

  const [quiz, setquiz] = useState({
    amount: 10,
    category: "sports",
    dificulty: "easy",
  });

  const ambildata = async (url) => {
    setloading(true);
    setwaiting(false);

    const respon = await axios(url).catch((err) => console.log(err));

    if (respon) {
      const data = respon.data.results;
      if (data.length > 0) {
        setpertanyaan(data);
        setwaiting(false);
        setloading(false);
      } else {
        setwaiting(true);
        setloading(true);
      }
    } else {
      setwaiting(true);
    }
  };

  useEffect(() => {
    ambildata();
  }, []);

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setquiz({ ...quiz, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;

    const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    ambildata(url);
  };

  /// atas setup aturan form

  if (waiting) {
    return (
      <Aturan
        handlechange={handlechange}
        handlesubmit={handlesubmit}
        quiz={quiz}
      />
    );
  }
  if (loading) {
    return <div>Loading..</div>;
  }

  const { question, incorrect_answers, correct_answer } = pertanyaan[index];

  let answer = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answer.push(correct_answer);
  } else {
    answer.push(answer[tempIndex]);
    answer[tempIndex] = correct_answer;
  }

  const openmodal = () => {
    setmodal(true);
  };

  const nextquestion = () => {
    setindex((oldin) => {
      const index = oldin + 1;
      if (index > pertanyaan.length - 1) {
        openmodal();
        return 0;
      } else {
        return index;
      }
    });
  };

  const clodemodal = () => {
    setmodal(false);
    setwaiting(true);
    setcorret(0);
  };

  const checkanswer = (value) => {
    if (value) {
      setcorret((oldstate) => oldstate + 1);
    }
    nextquestion();
  };

  return (
    <div className="App">
      <Modal
        modal={modal}
        corret={corret}
        clodemodal={clodemodal}
        pertanyaan={pertanyaan}
      />
      <div className="container">
        <div className="quiz">
          <p>
            correct answers : {corret}/{index}
          </p>
        </div>
        <div>
          <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
          <div
            className=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            {answer.map((item, index) => (
              <button
                className=""
                onClick={() => checkanswer(correct_answer === answer)}
                key={index}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            ))}
          </div>
          <div>
            <button onClick={nextquestion}>Next Kuis</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
