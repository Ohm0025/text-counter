import { GoogleGenerativeAI } from "@google/generative-ai";
import style from "./GeminiBox.module.css";
import { aiRun } from "../../utils/aigenerate";
import { useState } from "react";
import { useRequest } from "../../store/request";
import { useInstruction } from "../../store/instruction";

const GeminiBox = () => {
  const [resText, setResText] = useState("");

  const { request } = useRequest();
  const { instruction } = useInstruction();

  const genAI = new GoogleGenerativeAI(
    "AIzaSyA2g2LZG-FGoZx4EtORerh7SM6CG13JC9U"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  return (
    <div className={style.container}>
      <button
        // onClick={async () => {
        //   const res = await aiRun(model, instruction, request);
        //   setResText(res);
        // }}
        onClick={() => {
          console.log(instruction);
          console.log(request);
        }}>
        evaluate by ai
      </button>
      <div>{resText}</div>
    </div>
  );
};

export default GeminiBox;
