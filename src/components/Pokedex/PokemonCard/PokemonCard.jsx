import { useEffect, useState } from 'react'
import { getPokemonById } from '../../../services/getPokemonById'
import './PokemonCard.css'

const statsTarget = ['hp', 'attack', 'defense', 'speed'];

const PokemonCard = ({ pokemonId }) => {
   const [pokemon, setPokemon] = useState(null);

   const stats = pokemon?.stats.filter(stat => statsTarget.includes(stat.name.toLowerCase()));

    useEffect(() => {
      const loadPokemon = async () => {
        const pokemonData = await getPokemonById(pokemonId);
        setPokemon(pokemonData);
      }
      loadPokemon();
    }, [])
    
  return (
    <article>

        {(!pokemon) ? <p>Cargando pokemon...</p> 
                            :(
                            <section>
                                     <div>
                                        <img src={pokemon.image} alt={pokemon.name} />
                                    </div>

                                    <h2>{pokemon.name}</h2>

                                    <section>
                                        <h3>Type</h3>
                                        <ul>
                                            {pokemon.types.map((type, i) => <li key={i}>{type}</li>)}
                                        </ul>
                                    </section>

                                    <section>
                                        <ul>
                                            {stats.map((stat, i) => (
                                                <li key={i}>
                                                    <em>{stat.name.toUpperCase()}</em>
                                                    <span>{stat.value}</span>
                                                </li>

                                            ))}
                                            
                                        
                                        </ul>
                                    </section>
                               
                            </section>
                            )} 
        
        
       
    </article>
  )
}

export default PokemonCard