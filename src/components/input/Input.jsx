import style from "./Input.module.css";

const InputCustom = ({ func, value, style }) => {
  return (
    <input
      type="number"
      value={value}
      style={style}
      min={0}
      max={60}
      onChange={(e) => func(e.target.value)}
    />
  );
};

export default InputCustom;
