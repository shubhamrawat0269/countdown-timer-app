import React from "react";

const CountdownTimer = () => {
  return (
    <div className="flex justify-center gap-12 items-center flex-col secondary__bg p-10">
      <h1 className="text-3xl font-bold">Countdown Timer</h1>
      <form
        onSubmit={() => {}}
        className="flex flex-col gap-3 justify-center items-center"
      >
        <label htmlFor="datetime">
          <input
            type="datetime-local"
            className=" p-2 outline-none rounded-lg border__style"
            name="datetime"
            id="datetime"
            autoCapitalize="off"
          />
        </label>

        <div className="flex gap-5">
          <button className="btn">Start Timer</button>
          <button className="btn">Cancel Timer</button>
        </div>
      </form>

      <div className="flex justify-center gap-8 items-center ">
        <div className="flex justify-center gap-2 items-center flex-col timer__bg p-5 w-40">
          <span className="font-bold text-7xl">0</span> Days
        </div>
        <div className="flex justify-center gap-2 items-center flex-col timer__bg p-5 w-40">
          <span className="font-bold text-7xl">0</span> Hours
        </div>
        <div className="flex justify-center gap-2 items-center flex-col timer__bg p-5 w-40">
          <span className="font-bold text-7xl">0</span> Minutes
        </div>
        <div className="flex justify-center gap-2 items-center flex-col timer__bg p-5 w-40">
          <span className="font-bold text-7xl">0</span> Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
