import { useContext, useEffect, useState } from 'react';
import { UserNameContext } from "../../context/UserNameContext";
import { getAllPokemons } from '../../services/getAllPokemons';



import './Pokedex.css'
import PokemonList from '../../components/Pokedex/PokemonList/PokemonList';
import { useLoaderData } from 'react-router-dom';
import FiltersForm from '../../components/Pokedex/FiltersForm/FiltersForm';
import LoadingPokemons from '../../components/LoadingPokemons/LoadingPokemons';
const Pokedex = () => {
   const { userName } = useContext(UserNameContext);
   const { pokemons, pokemonName, pokemonTypeId } = useLoaderData();
   

  return (
    <section className='pokedex_container'>
        <p className='pokedex_messege'>
            <em className='pokedex_username'>Welcome {userName}...!,</em> here you can find your favorite pokemon
        </p>

        <FiltersForm nameInitial={pokemonName} typeInitial={pokemonTypeId}/> 
        
        { !pokemons.length ?  <LoadingPokemons/> 
                           : <PokemonList pokemons={pokemons}/> }
    </section>
  )
}

export default Pokedex