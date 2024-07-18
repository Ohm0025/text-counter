import { useResult } from "../../store/result";
import Loader from "../loader/Loader";
import style from "./modal.module.css";
import { formatResult } from "../../utils/textFormat";

const Modal = ({ isLoading, setIsOpen }) => {
  const { result } = useResult();

  return (
    <div className={style.container} onClick={() => setIsOpen(false)}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.header}>
          <h3>Estimated Result By AI</h3>
          <button onClick={() => setIsOpen(false)}>x</button>
        </div>
        <hr />
        <div className={style.body}>
          {isLoading ? <Loader /> : formatResult(result)}
        </div>
      </div>
    </div>
  );
};

export default Modal;
