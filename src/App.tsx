import React from "react";
import "./App.css";
import ReactMapContainer from "./components/reactMapContainer";
import MapsButton from "./components/mapsButton";

function App() {
  return (
    <div>
      <ReactMapContainer />
      <MapsButton>Je suis un bouton pour créer un marker</MapsButton>
    </div>
  );
}

export default App;
