import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import { getTime } from "../utils";

const CountdownTimer = () => {
  const {
    isTimerStart,
    inputTime,
    setInputTime,
    handleTimer,
    hours,
    minutes,
    seconds,
    days,
    setDays,
    setSeconds,
    setHours,
    setMinutes,
    error,
  } = useContext(TimerContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const userGivenTime = new Date(inputTime);
    const curr_time = new Date();

    const userGivenTimeINMilliSec = userGivenTime.getTime();
    const currTimeINMilliSec = curr_time.getTime();
    const reqTimeDiff = userGivenTimeINMilliSec - currTimeINMilliSec;

    if (reqTimeDiff > 0) {
      const { seconds, minutes, hours, days } = getTime(reqTimeDiff);
      setDays(days);
      setSeconds(seconds);
      setHours(hours);
      setMinutes(minutes);

      // handleTimer(seconds, minutes, hours, days);
    }
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
            id="datetime"
            name="datetime"
            autoCapitalize="off"
            value={inputTime}
            onChange={(e) => setInputTime(e.target.value)}
            type="datetime-local"
            className=" p-2 outline-none rounded-lg border-2 border-slate-300"
          />
        </label>

        <div className="flex gap-5">
          {!isTimerStart ? (
            <button
              type="submit"
              className="p-2.5 text-white bg-violet-900 hover:bg-violet-800"
              onClick={() => {}}
            >
              Start Timer
            </button>
          ) : (
            <button
              type="submit"
              className="p-2.5 text-white bg-violet-900 hover:bg-violet-800"
              onClick={() => {}}
            >
              Cancel Timer
            </button>
          )}
        </div>
        {error && (
          <p className="text-red-800 font-bold text-center mt-2 mb-2">
            {error}
          </p>
        )}
      </form>

      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
        <div className="flex justify-center gap-2 items-center rounded-xl md:flex-col bg-violet-800 hover:bg-violet-900 text-white p-5 w-40">
          <span className="font-bold text-4xl">{days}</span> Days
        </div>
        <div className="flex justify-center gap-2 items-center  rounded-xl  md:flex-col bg-violet-800 hover:bg-violet-900 text-white p-5 w-40">
          <span className="font-bold text-4xl">{hours}</span> Hours
        </div>
        <div className="flex justify-center gap-2 items-center rounded-xl  md:flex-col bg-violet-800 hover:bg-violet-900 text-white p-5 w-40">
          <span className="font-bold text-4xl">{minutes}</span> Minutes
        </div>
        <div className="flex justify-center gap-2 items-center rounded-xl  md:flex-col bg-violet-800 hover:bg-violet-900 text-white p-5 w-40">
          <span className="font-bold text-4xl">{seconds}</span> Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
