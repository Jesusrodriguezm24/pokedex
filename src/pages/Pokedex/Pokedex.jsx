import { useContext, useEffect, useState } from 'react';
import { UserNameContext } from "../../context/UserNameContext";
import './Pokedex.css'
import { getAllPokemons } from '../../services/getAllPokemons';
import { Link } from 'react-router-dom';
import PokemonCard from '../../components/Pokedex/PokemonCard/PokemonCard';

const Pokedex = () => {
   const { userName } = useContext(UserNameContext);
   const [pokemons, setPokemons] = useState([]);

   useEffect(() => {
     const loadPokemons = async () => {
        const pokemonsData = await getAllPokemons();
        setPokemons(pokemonsData);
     }

     loadPokemons();
   }, [])
   

  return (
    <section>
        <p className='pokedex_messege'>
            <em className='pokedex_username'>Welcome {userName}...!</em>, here you can find your favorite pokemon
        </p>

        { !pokemons.length ? <p>No Hay pokemons</p> 
                           : (
                            <section>
                                <ul>
                                    { pokemons.map((pokemon)=> <li key={pokemon.url}>
                                                                    <PokemonCard pokemon={pokemon} /> 
                                                               </li> )}
                                </ul>
                            </section>


                           )}
      
    </section>
  )
}

export default Pokedex