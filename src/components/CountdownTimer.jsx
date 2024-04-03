import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

const CountdownTimer = () => {
  const { isTimerStart, setTimerStart } = useContext(TimerContext);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center gap-12 items-center flex-col bg-white p-10">
      <h1 className="text-3xl font-bold">Countdown Timer</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5 justify-center items-center"
      >
        <label htmlFor="datetime">
          <input
            type="datetime-local"
            className=" p-2 outline-none rounded-lg border-2 border-slate-300"
            name="datetime"
            id="datetime"
            autoCapitalize="off"
          />
        </label>

        <div className="flex gap-5">
          {!isTimerStart ? (
            <button
              type="submit"
              className="p-2.5 text-white bg-violet-900 hover:bg-violet-800"
              onClick={() => setTimerStart(!isTimerStart)}
            >
              Start Timer
            </button>
          ) : (
            <button
              type="submit"
              className="p-2.5 text-white bg-violet-900 hover:bg-violet-800"
              onClick={() => setTimerStart(!isTimerStart)}
            >
              Cancel Timer
            </button>
          )}
        </div>
      </form>

      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
        <div className="flex justify-center gap-2 items-center rounded-xl md:flex-col bg-violet-800 hover:bg-violet-900 text-white p-5 w-40">
          <span className="font-bold text-4xl">0</span> Days
        </div>
        <div className="flex justify-center gap-2 items-center  rounded-xl  md:flex-col bg-violet-800 hover:bg-violet-900 text-white p-5 w-40">
          <span className="font-bold text-4xl">0</span> Hours
        </div>
        <div className="flex justify-center gap-2 items-center rounded-xl  md:flex-col bg-violet-800 hover:bg-violet-900 text-white p-5 w-40">
          <span className="font-bold text-4xl">0</span> Minutes
        </div>
        <div className="flex justify-center gap-2 items-center rounded-xl  md:flex-col bg-violet-800 hover:bg-violet-900 text-white p-5 w-40">
          <span className="font-bold text-4xl">0</span> Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
