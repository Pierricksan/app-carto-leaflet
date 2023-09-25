import {Marker, useMapEvents} from "react-leaflet";
import {LatLngExpression, LeafletMouseEvent} from "leaflet";
import React, {useState} from "react";


const LocationMarker = () => {
    const [positions, setPositions] = useState<LatLngExpression[]>([])
    useMapEvents({
        click(event: LeafletMouseEvent) {
            setPositions([...positions, event.latlng])
        },
    });
    return <>
        {positions.map(position => {
                return <Marker position={position}></Marker>
            }
        )}</>
}

export default LocationMarker
