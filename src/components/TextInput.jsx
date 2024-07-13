import { useEffect, useRef, useState } from "react";
import autosize from "autosize";
import "./TextInput.css";

const TextInput = () => {
  const textareaRef = useRef();

  useEffect(() => {
    textareaRef.current.focus();
    autosize(textareaRef.current);
  }, []);

  const [text, setText] = useState("");
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <textarea
        value={text}
        onChange={handleTextChange}
        ref={textareaRef}
        className="textbox"
        name=""
        id=""></textarea>
      <div className="count-box">word count : {wordCount}</div>
    </div>
  );
};

export default TextInput;
