import { useState, useEffect } from "react";

const useCountdown = (date) => {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

useEffect(() => {  
  const countDown = () => {
    const countDate = new Date(date).getTime();
    const now = new Date().getTime();

    const interval = Math.max (countDate - now, 0)

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayNumber = Math.floor(interval / day);
    const hourNumber = Math.floor((interval % day) / hour);
    const minuteNumber = Math.floor((interval % hour) / minute);
    const secondNumber = Math.floor((interval % minute) / second);

    setDay(dayNumber);
    setHour(hourNumber);
    setMinute(minuteNumber);
    setSecond(secondNumber);
  };
  countDown();

  const intervalId = setInterval(countDown, 1000);
  return () => clearInterval(intervalId);
  }, [date]);

  return [day, hour, minute, second];
};

export default useCountdown;
