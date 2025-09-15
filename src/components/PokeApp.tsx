import { useState, useEffect } from "react";

// Skapa en interface för att beskriva vårt pokemon-objekt. Som ett kontrakt som säger vi vill ha: namn och bild inget mer, inget mindre
interface Pokemon {
  name: string;
  image: string;
}

const PokeApp = () => {
  // State som håller och set:ar vår pokemon
  // Init-värde ar null (ingen pokemon än). TS-generics
  const [firstPokemon, setFirstPokemon] = useState<Pokemon | null>(null);

  // Vill komma åt sidoeffekt (component lifecycle svar i funktionella-komponenter)
  useEffect(() => {
    const fetchFirstPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/3");
      const data = await response.json();

    // mappa properties:arna vi vill ha från API-svaret till vår typ: Pokemon så att TS kan kolla åt oss att vi inte missar något eller att vi sätter fel typ
    const pokemon: Pokemon = {
      name: data.name,
      image: data.sprites.front_default,
    };

    setFirstPokemon(pokemon);
  }
  fetchFirstPokemon();
}, []);

  return (
    <>
    <h1>PokéApp</h1>
    {/* conditional render ifall vi har eller inte har datan från API:et tillgängligt */}
    {/* JS ternary operator: condition ? truty : falsy  */}
    {firstPokemon ? (
        <>
        <p>{firstPokemon.name}</p>
        <img src={firstPokemon.image} alt={firstPokemon.name} />
        </>
    ) : (
        <p>Laddar...</p>
    )}
    </>
  );
};

export default PokeApp;
