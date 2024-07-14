import { GoogleGenerativeAI } from "@google/generative-ai";
import style from "./GeminiBox.module.css";
import { aiRun } from "../../utils/aigenerate";
import { useState } from "react";

let exampleQ =
  "Some people say that children should spend their free time on clubs and extra classes. Others, however, believe they should spend their leisure time doing activities with their families.Discuss both of these views and give your own opinion.";

const GeminiBox = (rawText) => {
  const [resText, setResText] = useState("");

  const genAI = new GoogleGenerativeAI(
    "AIzaSyA2g2LZG-FGoZx4EtORerh7SM6CG13JC9U"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  return (
    <div className={style.container}>
      <button
        onClick={async () => {
          const res = await aiRun(model, exampleQ, rawText);
          setResText(res);
        }}>
        evaluate by ai
      </button>
      <div>{resText}</div>
    </div>
  );
};

export default GeminiBox;
