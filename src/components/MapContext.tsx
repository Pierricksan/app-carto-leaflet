import React, { useState, createContext, useContext } from "react";
import { LatLngExpression } from "leaflet";

type MapContextProviderProps = {
  children: React.ReactNode;
};

type MapContextType = {
  markPosition: LatLngExpression;
  setMarkPosition: React.Dispatch<React.SetStateAction<LatLngExpression>>;
};

const MapContextInitial: MapContextType = {
  markPosition: [48, 2],
  setMarkPosition: () => void 0,
};

export const MapContext = createContext<MapContextType>(MapContextInitial);
function MapContextProvider({ children }: MapContextProviderProps) {
  const [markPosition, setMarkPosition] = useState<LatLngExpression>([48, 2]);

  return (
    <MapContext.Provider value={{ markPosition, setMarkPosition }}>
      {children}
    </MapContext.Provider>
  );
}

export default MapContextProvider;

export function useMapContext() {
  const mappingContext = useContext(MapContext);
  if (!mappingContext) {
    throw new Error(
      "useMapContext doit être utilisé dans le MapContextProvider",
    );
  }
}
