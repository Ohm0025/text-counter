import TextInput from "./components/TextInput";
import Timer from "./components/timer/Timer";
import "./App.css";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Word Counter</h1>
      <Timer />
      <TextInput />
    </div>
  );
}

export default App;
