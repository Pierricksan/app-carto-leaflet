import React, { useContext } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import LocationMarker from "./locationMarker";
import MapsButton from "./mapsButton";
import { MapContext } from "./MapContext";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const ReactMapContainer = () => {
  const { markPosition } = useContext(MapContext);

  return (
    <>
      <MapContainer
        center={[48.8749, 2.3377]}
        zoom={11}
        style={{ width: "90%", height: "90vh" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[48.874976569303506, 2.337761386973]}>
          <Tooltip>"Bonjour je suis une tooltip"</Tooltip>
          <Popup>"Je suis une belle pop-up</Popup>
        </Marker>
        <LocationMarker />
        <Polyline
          positions={[
            [48.72, 2.8],
            [49, 1.9],
          ]}
        ></Polyline>
        <Marker position={markPosition}></Marker>
      </MapContainer>
      <MapsButton>Autre button</MapsButton>
    </>
  );
};

export default ReactMapContainer;
