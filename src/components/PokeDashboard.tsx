import PokemonCard from "./PokemonCard";
import Team from "./Team";
import type { Pokemon } from "../types";
import { useState, useEffect } from "react";

const PokeDashboard = () => {
  // State för att hålla koll på och hålla vårt team
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [wildPokemon, setWildPokemon] = useState<Pokemon | null>(null);

  // funktion som visar en random pokemon
  const showWildPokemon = async () => {
    const randomID = Math.floor(Math.random() * 1025) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomID}`
    );
    const data = await response.json();

    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
    };

    setWildPokemon(pokemon);
  };

  // Visa en random pokemon vid mount
  useEffect(() => {
    showWildPokemon();
  }, []);

  // Funktion for att fanga wildPokemon
  const catchWildPokemon = (wildPokemon: Pokemon) => {
    if (team.length >= 6) {
      alert("Ditt team är fullt. Ta bort någon om du vill fånga en ny ");
      return;
    }

    setTeam((prev) => [...prev, wildPokemon]);
    showWildPokemon(); // visa en ny
  };

  const removePokemon = (id: number) => {
    // i teamet om id matcha filter arrayn
    setTeam((prev) => prev.filter((pokemon) => pokemon.id !== id));
  };

  return (
    <div>
      {wildPokemon ? (
        <div>
          <PokemonCard pokemon={wildPokemon} />
          <button onClick={() => catchWildPokemon(wildPokemon)}>Fånga</button>
        </div>
      ) : (
        <p>laddar..</p>
      )}
      
      <Team pokemons={team} onRemove={removePokemon} />
    </div>
  );
};

export default PokeDashboard;
