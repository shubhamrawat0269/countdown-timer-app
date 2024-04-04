export const getTime = (timestamp) => {
  // convert ms to number of days, hours, minute, sec

  const sec = Math.floor(timestamp / 1000);
  const min = Math.floor(sec / 60);
  const hrs = Math.floor(min / 60);
  const days = Math.floor(hrs / 24);

  return {
    days: days,
    seconds: sec % 60,
    minutes: min % 60,
    hours: hrs % 24,
  };
};
