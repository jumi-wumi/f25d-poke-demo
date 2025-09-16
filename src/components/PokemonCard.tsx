import type { Pokemon } from "../types"

interface Props {
    pokemon: Pokemon
    onRemove?: (id:number) => void
}

const PokemonCard = ({ pokemon, onRemove} :Props) => {
    // Visa en random pokemon med namn och bild
    // Kunna ta bort en pokemon från vårt team 
  return (
    <div>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.image} alt={pokemon.name} />
        <button onClick={() => onRemove(pokemon.id)}>X</button>
    </div>
  )
}

export default PokemonCard