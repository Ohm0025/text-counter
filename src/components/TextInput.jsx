import { useEffect, useRef, useState } from "react";
import autosize from "autosize";
import "./TextInput.css";
import { useRequest } from "../store/request";

const TextInput = () => {
  const textareaRef = useRef();
  const { request, setRequest } = useRequest();

  useEffect(() => {
    textareaRef.current.focus();
    autosize(textareaRef.current);
  }, []);

  const wordCount = request.split(/\s+/).filter(Boolean).length;

  return (
    <div className="container">
      <h1>Your essay</h1>
      <textarea
        value={request}
        onChange={(e) => {
          setRequest(e.target.value);
        }}
        ref={textareaRef}
        className="textbox"
        name=""
        id=""></textarea>
      <div className="count-box">word count : {wordCount}</div>
    </div>
  );
};

export default TextInput;
