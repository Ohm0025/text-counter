import style from "./Input.module.css";

const InputCustom = ({ func, value, style }) => {
  return (
    <input
      type="number"
      value={value}
      style={style}
      onChange={(e) => func(e.target.value)}
    />
  );
};

export default InputCustom;
