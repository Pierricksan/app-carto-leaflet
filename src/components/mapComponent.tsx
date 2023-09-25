import React, {useEffect, useRef} from "react";
import "leaflet/dist/leaflet.css";
import L, {DomUtil, LeafletMouseEvent, Map, Marker, Polyline, TileLayer} from "leaflet";

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const MapComponent = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!DomUtil.get("map")?.hasChildNodes()) {


            // On instancie la carte.
            const map = new Map(mapRef.current!)
                // Définition de paramètres pour la vue de la carte :
                .setView(
                    // Le centre initial.
                    [48.874976569303506, 2.337761386973],
                    // Le niveau de zoom initial.
                    11
                );
            map.on("click", (event: LeafletMouseEvent) => {
                // Callback exécutée à chaque clic.
                console.log(event.latlng)
                const toto = new Marker(event.latlng).addTo(map)
                toto.on("mouseover", () =>{
                    console.log("mouseover");
                })
            })
// On crée une première couche de données, qu'on ajoute à la carte.
            const baseLayer = new TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
            map.addLayer(baseLayer);
            new Marker([48.874976569303506, 2.337761386973]).bindTooltip('Welcome To Lafayette').addTo(map);
            new Marker([48.685, 1.983]).addTo(map);
            new Polyline([[48.72, 2.8], [49, 1.9]], {color: '#D034DA', weight: 4}).bindPopup('Je suis une pop-up').addTo(map);
            // D034DA
        }

    }, []);

    return <div ref={mapRef} style={{width: "100%", height: "100vh"}} id="map">
    </div>;
}

export default MapComponent;
