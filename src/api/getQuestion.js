import axios from "axios";
import { ielts_api } from "../constant/linkApi";

const getRandomQuestion = async () => {
  const res = await axios.get(ielts_api + "/ran_question");
  return res.data;
};

export { getRandomQuestion };
