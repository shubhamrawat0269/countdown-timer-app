import React from "react";

const CountdownTimer = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Countdown Timer</h1>
      <form onSubmit={() => {}}>
        <label htmlFor="datetime">
          <input type="datetime" name="datetime" id="datetime" />
        </label>

        <button>Start Timer</button>
        <button>Cancel Timer</button>
      </form>

      <div>
        <div>
          <span>0</span> Days
        </div>
        <div>
          <span>0</span> Hours
        </div>
        <div>
          <span>0</span> Minutes
        </div>
        <div>
          <span>0</span> Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
