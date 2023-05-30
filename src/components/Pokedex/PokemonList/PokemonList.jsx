import { useState } from 'react'
import { usePagination } from '../../../hooks/UsePagination';
import PagesComponents from '../PagesComponents/PagesComponents';
import PokemonCard from '../PokemonCard/PokemonCard';



import './PokemonList.css'
import FiltersForm from '../FiltersForm/FiltersForm';
import { Link } from 'react-router-dom';


const PokemonList = ({ pokemons }) => {

  const [pokemonsPerPege, setPokemonsPerPege] = useState(20);
  const [currentPage, totalPages, pokemonsSlice, changePageTo ] = usePagination(pokemons, pokemonsPerPege);

  return (
    <section>
      
        <FiltersForm/>

        <PagesComponents totalPages={totalPages} onChangePage={changePageTo} 
                         onNextPage={()=>changePageTo(currentPage + 1)}
                         onBackPage={()=>changePageTo(currentPage - 1)}
                         />

        <ul>
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