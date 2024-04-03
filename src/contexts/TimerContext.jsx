import { createContext, useState } from "react";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [isTimerStart, setTimerStart] = useState(false);
  const context = {
    isTimerStart,
    setTimerStart,
  };

  return (
    <TimerContext.Provider value={context}>{children}</TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
