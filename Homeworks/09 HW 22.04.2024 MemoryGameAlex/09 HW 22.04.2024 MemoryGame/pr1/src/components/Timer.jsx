import { useState, useEffect } from "react";

export let timerValues = {
  minutes: 0,
  remainderSeconds: 0
};

const Timer = ({ isRunning }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);

      return () => {
		setSeconds(0);
		setMinutes(0);
        clearInterval(interval);
      };
    }
  }, [isRunning]);

  useEffect(() => {
    setMinutes(Math.floor(seconds / 60));
    timerValues.minutes = minutes;
    timerValues.remainderSeconds = seconds % 60;
  }, [seconds]);

  const remainderSeconds = seconds % 60;

  return (
    <div className="timer">
      {`${minutes < 10 ? "0" : ""}${minutes}:${
        remainderSeconds < 10 ? "0" : ""
      }${remainderSeconds}`}
    </div>
  );
};

export default Timer;
