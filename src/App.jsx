import TextInput from "./components/TextInput";
import Timer from "./components/timer/Timer";
import "./App.css";
import GeminiBox from "./components/geminiBox/GeminiBox";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Word Counter</h1>
      <Timer />
      <TextInput />
      <GeminiBox />
    </div>
  );
}

export default App;
