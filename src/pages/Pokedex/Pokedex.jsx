import { useContext, useEffect, useState } from 'react';
import { UserNameContext } from "../../context/UserNameContext";
import { getAllPokemons } from '../../services/getAllPokemons';



import './Pokedex.css'
import PokemonList from '../../components/Pokedex/PokemonList/PokemonList';
import { useLoaderData } from 'react-router-dom';
const Pokedex = () => {
   const { userName } = useContext(UserNameContext);
   const [pokemons, setPokemons] = useState([]);
    useLoaderData();

   useEffect(() => {
     const loadPokemons = async () => {
        const pokemonsData = await getAllPokemons();
        setPokemons(pokemonsData);
     }

     loadPokemons();
   }, [])
   

  return (
    <section className='pokedex_container'>
        <p className='pokedex_messege'>
            <em className='pokedex_username'>Welcome {userName}...!</em>, here you can find your favorite pokemon
        </p>

        { !pokemons.length ? <p>No Hay pokemons</p> 
                           : <PokemonList pokemons={pokemons}/> }
    </section>
  )
}

export default Pokedex