const ButtonCustom = ({ text, style, func }) => {
  return (
    <button style={style} onClick={() => func()}>
      {text}
    </button>
  );
};

export default ButtonCustom;
