import { useState } from 'react'
import { usePagination } from '../../../hooks/UsePagination';
import PagesComponents from '../PagesComponents/PagesComponents';
import PokemonCard from '../PokemonCard/PokemonCard';
import { Link } from 'react-router-dom';


import './PokemonList.css'
const PokemonList = ({ pokemons }) => {

  const [pokemonsPerPege, setPokemonsPerPege] = useState(20);
  const [currentPage, totalPages, pokemonsSlice, changePageTo ] = usePagination(pokemons, pokemonsPerPege);

  return (
    <section>
      
        <PagesComponents totalPages={totalPages} onChangePage={changePageTo} 
                         onNextPage={()=>changePageTo(currentPage + 1)}
                         onBackPage={()=>changePageTo(currentPage - 1)}
                         />

        <ul className='pokemons_list_container'>
            { pokemonsSlice.map((pokemon)=> <li key={pokemon.url}>
                                            <Link to={`/pokedex/${pokemon.url.split("/").at(-2)}`}>
                                               <PokemonCard pokemonId={pokemon.url.split("/").at(-2)} /> 
                                            </Link>
                                            </li> )}
        </ul>   

        <PagesComponents totalPages={totalPages} onChangePage={changePageTo} 
                         onNextPage={()=>changePageTo(currentPage + 1)}
                         onBackPage={()=>changePageTo(currentPage - 1)}
                         />   
    </section>
  )
}

export default PokemonList