import React from "react";
import "./App.css";
import ReactMapContainer from "./components/reactMapContainer";
import MapsButton from "./components/mapsButton";
import MapContextProvider from "./components/MapContext";

function App() {
  return (
    <div>
      <MapContextProvider>
        <ReactMapContainer />
        <MapsButton>Je suis un bouton pour créer un marker</MapsButton>
      </MapContextProvider>
    </div>
  );
}

export default App;
