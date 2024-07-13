import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div
      key={pokemon.id}
      className="border rounded-lg p-4 m-2 shadow-lg w-48 text-center"
    >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto"
      />
      <h2 className="text-xl font-semibold mt-2">{pokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;
