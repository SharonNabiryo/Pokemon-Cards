import React from "react";

export default function Pokecard(props) {
  const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={pokeImg} alt={props.name} />
      <h3>Type: {props.type}</h3>
      <h4>EXP: {props.base_experience}</h4>
    </div>
  );
}
