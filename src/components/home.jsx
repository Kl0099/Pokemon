import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import PokemonCard from "./PokemonCard";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=100`
      );
      const results = await Promise.all(
        res.data.results.map(async (pokemon) => {
          const pokeDetails = await axios.get(pokemon.url);
          return pokeDetails.data;
        })
      );
      setPokemonList(results);
      //   console.log("results :", results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="text-4xl font-bold my-4">Pokémon</h1>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {filteredPokemon?.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
