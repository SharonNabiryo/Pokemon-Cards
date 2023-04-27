import React from "react";
import Pokecard from "./Pokecard";

export default function Pokedex(props) {
  return (
    <div className="pokedex">
      {/* <h1>Pokedex</h1> */}
      <div>{Pokecard(props)}</div>
    </div>
  );
}
