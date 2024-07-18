import { useCallback, useEffect, useState } from "react";
import style from "./questionBox.module.css";
import { getRandomQuestion } from "../../api/getQuestion";
import { useInstruction } from "../../store/instruction";
import { useLoading } from "../../store/loading";
import Loader from "../loader/Loader";

const QuestionBox = () => {
  const { instruction, setInstruction } = useInstruction();
  const { loading, setLoading } = useLoading();

  const [createQuestion, setCreateQuestion] = useState(false);
  const [tempQuestion, setTempQuestion] = useState("");

  useEffect(() => {
    const fetchRandom = async () => {
      try {
        setLoading(true);
        const res = await getRandomQuestion();
        setInstruction(res.question);
        console.log("random 1 cycle");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRandom();
  }, []);

  return (
    <div className={style.container}>
      <h1>Writing Instruction</h1>
      {createQuestion ? (
        loading ? (
          <Loader />
        ) : (
          <textarea
            placeholder="Writing your own instruction here..."
            className={style.textQuestion}
            value={tempQuestion}
            onChange={(e) => setTempQuestion(e.target.value)}></textarea>
        )
      ) : (
        <div className={style.content}>
          {loading ? <Loader /> : instruction}
        </div>
      )}
      <div className={style.groupBtn}>
        {createQuestion ? (
          <>
            <button
              onClick={() => {
                setInstruction(tempQuestion);
                setLoading(true);
                setTimeout(() => {
                  setCreateQuestion(false);
                  setLoading(false);
                }, 1000);
              }}>
              Enter
            </button>
            <button onClick={() => setCreateQuestion(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button
              onClick={async () => {
                try {
                  setLoading(true);
                  const res = await getRandomQuestion();
                  setInstruction(res.question);
                  console.log("random 1 cycle");
                } catch (err) {
                  console.log(err);
                } finally {
                  setLoading(false);
                }
              }}>
              Random Again
            </button>
            <button onClick={() => setCreateQuestion(true)}>
              Create Question
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionBox;
