import { useEffect, useState } from "react";
import style from "./Timer.module.css";

import ButtonCustom from "../button/Button";
import { formatTime, minmaxTime, revertTime } from "../../utils/timerfunction";
import { resetBtn, timerStart, timerStop } from "../../utils/buttonstyle";
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
    if (min === 0) {
      if (startSwitch) {
        setStartSwitch(false);
        alert("time out!!!");
      }
    } else {
      if (startSwitch) {
        setChangeDisplay(false);
        const interval = setInterval(() => {
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
          onClick={() => {
            //startSwitch || setChangeDisplay(true);
            if (!startSwitch) {
              setChangeDisplay(true);
              setObjTime(() => {
                return { ...revertTime(min) };
              });
            }
          }}>
          {formatTime(min)}
        </span>
      ) : (
        <span>
          <InputCustom
            func={(value) =>
              setObjTime((prev) => {
                return { ...prev, hr: minmaxTime(value) };
              })
            }
            style={timerInput}
            value={objTime.hr}
          />{" "}
          :{" "}
          <InputCustom
            func={(value) =>
              setObjTime((prev) => {
                return { ...prev, min: minmaxTime(value) };
              })
            }
            style={timerInput}
            value={objTime.min}
          />{" "}
          :{" "}
          <InputCustom
            func={(value) =>
              setObjTime((prev) => {
                return { ...prev, sec: minmaxTime(value) };
              })
            }
            style={timerInput}
            value={objTime.sec}
          />
        </span>
      )}

      <ButtonCustom
        text={startSwitch ? "stop!!!" : changeDisplay ? "enter" : "start!!!"}
        func={() => {
          if (changeDisplay) {
            setChangeDisplay(false);
            setMin(
              objTime.hr * 60 * 60000 + objTime.min * 60000 + objTime.sec * 1000
            );
          }
          setStartSwitch((previousState) => !previousState);
        }}
        style={startSwitch ? timerStop : timerStart}
      />
      <ButtonCustom
        text={changeDisplay ? "clear" : "reset"}
        func={() => {
          if (!changeDisplay) {
            setStartSwitch(false);
            setMin(
              objTime.hr * 60 * 60000 + objTime.min * 60000 + objTime.sec * 1000
            );
          } else {
            setObjTime((prev) => {
              return { hr: 0, min: 0, sec: 0 };
            });
          }
        }}
        style={resetBtn}
      />
    </div>
  );
};

export default Timer; //
