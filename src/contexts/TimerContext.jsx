import { createContext, useRef, useState } from "react";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [isTimerStart, setTimerStart] = useState(false);
  const [inputTime, setInputTime] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0);
  const [error, setError] = useState("");
  const timerRef = useRef(null);

  function resetTimeToZero() {
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
  }

  const handleTimer = (seconds, minutes, hours, days) => {
    // validation check
    if (seconds <= 59 && minutes <= 59 && hours <= 23 && days <= 99) {
      console.log({ seconds, minutes, hours, days });
      timerRef.current = setInterval(() => {
        timer();
      }, 1000);
    } else {
      setError("Selected Time is more than 100 days");
    }
  };

  function timer() {
    if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
      resetTimeToZero();
      stopTimer();
    } else if (seconds != 0) {
      setSeconds((preVal) => preVal - 1);
    } else if (minutes != 0 && seconds == 0) {
      setSeconds("59");
      setMinutes((preVal) => preVal - 1);
    } else if (hours != 0 && minutes == 0) {
      setMinutes("60");
      setHours((preVal) => preVal - 1);
    } else if (days != 0 && hours == 0) {
      setHours("23");
      setDays((preVal) => preVal - 1);
    }
    setTimerStart(!isTimerStart);
  }

  const context = {
    inputTime,
    isTimerStart,
    hours,
    minutes,
    seconds,
    days,
    error,
    setDays,
    setSeconds,
    setHours,
    setMinutes,
    setTimerStart,
    setInputTime,
    handleTimer,
  };

  return (
    <TimerContext.Provider value={context}>{children}</TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
