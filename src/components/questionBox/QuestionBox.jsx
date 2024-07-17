import { useCallback, useEffect } from "react";
import style from "./questionBox.module.css";
import { getRandomQuestion } from "../../api/getQuestion";
import { useInstruction } from "../../store/instruction";
import { useLoading } from "../../store/loading";
import Loader from "../loader/Loader";

const QuestionBox = () => {
  const { instruction, setInstruction } = useInstruction();
  const { loading, setLoading } = useLoading();

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
      <div className={style.content}>{loading ? <Loader /> : instruction}</div>
      <div className={style.groupBtn}>
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
        <button>Create Question</button>
      </div>
    </div>
  );
};

export default QuestionBox;
