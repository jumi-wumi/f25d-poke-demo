// våra types i sin egen fil så vi kan använda samma interface i flera komponenter 
export interface Pokemon {
    id: number // unikt id som kopplar till pokedex nummer 
    name: string // namn på vår pokemon
    image: string // bild från URL till "sprite"
}