import React, { useContext } from "react";
import Title from "../components/Title"; 
import Counter from "../components/Counter";
import useCountdown from "../hooks/useCountdown";
import { CountdownContext } from "../context/CountdownContext";
import { Navigate } from "react-router-dom";

const Countdown = () => {
  const {event} = useContext(CountdownContext);

  const [day, hour, minute, second] = useCountdown(event.date);

  const eventTitle = event.title

  const eventColor = event.color;

  if(!event) return <Navigate to="/" />;

  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />

      <div className="contdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour}  eventColor={eventColor}  />
        <Counter title="Minutos" number={minute} eventColor={eventColor}  />
        <Counter title="Segundos" number={second} eventColor={eventColor}  />
      </div>
    </>
  );
};

export default Countdown;
