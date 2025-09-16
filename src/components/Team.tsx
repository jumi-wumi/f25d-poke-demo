import PokemonCard from "./PokemonCard";
import type { Pokemon } from "../types";

interface Props {
  pokemons: Pokemon[];
  onRemove: (id: number) => void;
}

const Team = ({ pokemons, onRemove }: Props) => {
  // useState i parent
  // Visa vårt team av max 6st. pokemon
  // Varje pokemon finns i ett PokemonCard
  return (
    <div>
      <h3>Mitt Team:</h3>
      <div></div>
      {pokemons.length === 0 ? (
        <p>Inga pokemon i ditt team</p>
      ) : (
        pokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onRemove={onRemove}
            />
          );
        })
      )}
    </div>
  );
};

export default Team;
