import axios from "axios";

const ielts_api = import.meta.env.VITE_BASE_URL;

const getRandomQuestion = async () => {
  const res = await axios.get(ielts_api + "/ran_question");
  return res.data;
};

export { getRandomQuestion };
