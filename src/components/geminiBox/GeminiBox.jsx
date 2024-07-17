import { GoogleGenerativeAI } from "@google/generative-ai";
import style from "./GeminiBox.module.css";
import { aiRun } from "../../utils/aigenerate";
import { useState } from "react";
import { useRequest } from "../../store/request";
import { useInstruction } from "../../store/instruction";
import { useResult } from "../../store/result";
import { useLoading } from "../../store/loading";
import Modal from "../modal/Modal";

const GeminiBox = () => {
  const { request } = useRequest();
  const { instruction } = useInstruction();
  const { setResult } = useResult();
  const { loading, setLoading } = useLoading();

  const [modalOpen, setModalOpen] = useState(false);

  const genAI = new GoogleGenerativeAI(
    "AIzaSyA2g2LZG-FGoZx4EtORerh7SM6CG13JC9U"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  return (
    <div className={style.container}>
      <button
        onClick={async () => {
          try {
            setModalOpen(true);
            setLoading(true);
            const res = await aiRun(model, instruction, request);
            setResult(res);
          } catch (err) {
            console.log(err);
          } finally {
            setLoading(false);
          }
        }}>
        evaluate by ai
      </button>
      {modalOpen && <Modal isLoading={loading} setIsOpen={setModalOpen} />}
    </div>
  );
};

export default GeminiBox;
