import TextInput from "./components/TextInput";
import Timer from "./components/timer/Timer";
import "./App.css";
import GeminiBox from "./components/geminiBox/GeminiBox";
import QuestionBox from "./components/questionBox/QuestionBox";

function App() {
  return (
    <div style={{ marginBottom: "100px" }}>
      <h1 style={{ textAlign: "center" }}>IELTS WRITING</h1>
      <Timer />
      <QuestionBox />
      <TextInput />
      <GeminiBox />
    </div>
  );
}

export default App;
