import { createContext, useRef, useState } from "react";
import { getTime } from "../utils";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [isTimerStart, setTimerStart] = useState(false);
  const [isBtnClicked, setBtnClicked] = useState(false);
  const [inputTime, setInputTime] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [days, setDays] = useState(0);
  const [error, setError] = useState("");
  const [statement, setStatement] = useState("");
  let timerRef = useRef(null);

  function stopTimer() {
    clearInterval(timerRef.current);
  }

  function resetTimerToZero() {
    setDays("00");
    setHours("00");
    setMinutes("00");
    setSeconds("00");
    stopTimer();
  }

  const handleTimer = (userGivenTime) => {
    const userGivenTimeInMilliSec = userGivenTime.getTime();
    timerRef.current = setInterval(() => {
      const currTimeInMilliSec = new Date().getTime();
      const timeDifference = userGivenTimeInMilliSec - currTimeInMilliSec;
      const { d, s, m, h } = getTime(timeDifference);
      if (d < 100) {
        if (timeDifference < 0) {
          stopTimer();
          setStatement("The countdown is over! What's next on your adventure");
        } else {
          setTimerStart(!isTimerStart);
          setDays(d);
          setHours(h);
          setMinutes(m);
          setSeconds(s);
        }
      } else {
        setError("The selected days is more than 100 days");
      }
    }, 1000);
  };

  const context = {
    inputTime,
    isTimerStart,
    hours,
    minutes,
    seconds,
    days,
    error,
    isBtnClicked,
    resetTimerToZero,
    setBtnClicked,
    setDays,
    setSeconds,
    setHours,
    setMinutes,
    setTimerStart,
    setInputTime,
    handleTimer,
    stopTimer,
    statement,
  };

  return (
    <TimerContext.Provider value={context}>{children}</TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
