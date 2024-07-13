import { useEffect, useState } from "react";
import style from "./Timer.module.css";

import ButtonCustom from "../button/Button";
import { formatTime } from "../../utils/timerfunction";
import { timerStart, timerStop } from "../../utils/buttonstyle";
import InputCustom from "../input/Input";
import { timerInput } from "../../utils/inputstyle";
//
const Timer = () => {
  const [startSwitch, setStartSwitch] = useState(false);
  const [objTime, setObjTime] = useState({ hr: 0, min: 40, sec: 0 });
  const [min, setMin] = useState(
    objTime.hr * 60 * 60000 + objTime.min * 60000 + objTime.sec * 1000
  );
  const [changeDisplay, setChangeDisplay] = useState(false);

  useEffect(() => {
    if (
      objTime.hr * 60 * 60000 + objTime.min * 60000 + objTime.sec * 1000 ===
      0
    ) {
      alert("time out!!!");
      setObjTime((prev) => {
        return { hr: 0, min: 40, sec: 0 };
      });
      setStartSwitch(false);
    } else {
      if (startSwitch) {
        setChangeDisplay(false);
        const interval = setInterval(() => {
          //setMin(min * 60000 - 1000);
          setMin((previousValue) => {
            return previousValue - 1000;
          });
        }, 1000);
        return () => clearInterval(interval);
      }
    }
  }, [min, startSwitch]);

  return (
    <div className={style.container}>
      {!changeDisplay ? (
        <span
          className={style.display}
          onClick={() => startSwitch || setChangeDisplay(true)}>
          {formatTime(min)}
        </span>
      ) : (
        <span>
          <InputCustom
            func={(value) =>
              setObjTime((prev) => {
                return { ...prev, hr: value };
              })
            }
            style={timerInput}
            value={objTime.hr}
          />{" "}
          :{" "}
          <InputCustom
            func={(value) =>
              setObjTime((prev) => {
                return { ...prev, min: value };
              })
            }
            style={timerInput}
            value={objTime.min}
          />{" "}
          :{" "}
          <InputCustom
            func={(value) =>
              setObjTime((prev) => {
                return { ...prev, sec: value };
              })
            }
            style={timerInput}
            value={objTime.sec}
          />
        </span>
      )}

      <ButtonCustom
        text={startSwitch ? "stop!!!" : "start!!!"}
        func={() => setStartSwitch((previousState) => !previousState)}
        style={startSwitch ? timerStop : timerStart}
      />
    </div>
  );
};

export default Timer; //
