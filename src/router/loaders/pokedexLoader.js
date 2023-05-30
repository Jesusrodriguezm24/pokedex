import { getAllPokemons } from "../../services/getAllPokemons";
import { getPokemonById } from "../../services/getPokemonById";

export const pokedexLoader = async ({ request }) => {
    const url = new URL(request.url);
    const pokemonName = url.searchParams.get('pokemonName');
    const pokemonTypeId = url.searchParams.get('pokemonType');


    let pokemons;

    if (pokemonName)
        pokemons = pokemons.filter((pokemon)=>pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
        );

    if (pokemonName && pokemonTypeId){
        pokemons = await getPokemonById(pokemonTypeId);
        pokemons = pokemons.filter((pokemon)=> pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()));
    }else if (!pokemonName && !pokemonTypeId) {
        
    }


    return { pokemons };
}