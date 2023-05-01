import React from "react";

export default function Pokecard(props) {
  function addLeadingZeros(id) {
    if (id < 10) {
      return `00${id}`;
    } else if (id < 100) {
      return `0${id}`;
    } else {
      return id.toString();
    }
  }

  const pokeImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addLeadingZeros(
    props.id
  )}.png`;

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={pokeImg} alt={props.name} />
      <h3>Type: {props.type}</h3>
      <h4>EXP: {props.base_experience}</h4>
    </div>
  );
}

//   const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
