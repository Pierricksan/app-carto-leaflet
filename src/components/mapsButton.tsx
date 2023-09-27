import React, { useContext } from "react";
import { MapContext } from "./MapContext";

type Props = {
  children: string;
};
const MapsButton = ({ children }: Props) => {
  const { markPosition, setMarkPosition } = useContext(MapContext);

  function ltnAleatoire() {
    const min: number = 48.72;
    const max: number = 49;
    const numberRandom = (Math.random() * (max - min) + min).toFixed(3);
    return parseFloat(numberRandom);
  }
  function lgnAleatoire() {
    const min: number = 1.9;
    const max: number = 2.8;
    const numberRandom = (Math.random() * (max - min) + min).toFixed(3);
    return parseFloat(numberRandom);
  }
  function handleNumber() {
    const ltn = ltnAleatoire();
    const lgn = lgnAleatoire();
    console.log("les valeurs : ", ltn, lgn);
    setMarkPosition([ltn, lgn]);
    console.log(markPosition);
  }

  return <button onClick={handleNumber}>{children}</button>;
};

export default MapsButton;
