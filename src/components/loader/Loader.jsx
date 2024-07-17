import style from "./loader.module.css";

const Loader = () => {
  return (
    <div className={style.container}>
      <div className={style.spinner}></div>
      <div className={style.textLoad}>Loading...</div>
    </div>
  );
};

export default Loader;
