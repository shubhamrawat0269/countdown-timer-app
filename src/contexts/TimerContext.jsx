import { createContext, useState } from "react";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [isTimerStart, setTimerStart] = useState(false);
  const [inputTime, setInputTime] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0);
  const context = {
    inputTime,
    isTimerStart,
    hours,
    minutes,
    seconds,
    days,
    setDays,
    setSeconds,
    setHours,
    setMinutes,
    setTimerStart,
    setInputTime,
  };

  return (
    <TimerContext.Provider value={context}>{children}</TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
