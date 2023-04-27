import "../App.css";
import React from "react";
import Pokedex from "./Pokedex";
import Pokedata from "./Pokedata";

function App() {
  const pokeElements = Pokedata.map((poke) => {
    return (
      <Pokedex
        key={poke.id}
        {...poke}
        // name={poke.name}
        // type={poke.type}
        // exp={poke.base_experience}
      />
    );
  });

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="pokedex">{pokeElements}</div>
    </div>
  );
}

export default App;
