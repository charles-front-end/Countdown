import NewYear from "./assets/newyear.jpg";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { CountdownContext } from "./context/CountdownContext";

import "./App.css";

function App() {
  const { event } = useContext(CountdownContext);

  let eventImagem = null;

  if (event) eventImagem = event.imagem;

  return (
    <div
      className="App"
      style={
        eventImagem
          ? { backgroundImage: `url(${eventImagem})` }
          : { backgroundImage: `url(${NewYear})` }
      }
    >
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
