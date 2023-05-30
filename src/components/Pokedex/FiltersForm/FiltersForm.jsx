import { Form } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllTypes } from '../../../services/getAllTypes';

import './FiltersForm.css';


const FiltersForm = () => {
    const [types, setTypes] = useState([])
    const [pokemonNameValue, setPokemonNameValue] = useState('');
    const [typeValue, setTypeValue] = useState('')

    const handleChange = (e) => {
        const newValue = e.target.value;

        setPokemonNameValue(newValue);
    }

    const handleTypeChange = (e) => {
        const newTypeValue = e.target.value;
        setTypeValue(newTypeValue);
    }

    useEffect(() => {
      const loadTypes = async () => {
        const typesList = await getAllTypes();
        setTypes(typesList);
      }

      loadTypes();
    }, [])

    useEffect(() => {
      
    }, [])

    useEffect(() => {
      
    }, [])
    
    
  return (

    <Form>

        <h2>Filtros de busqueda</h2>
        <div>
            <input type="text" value={pokemonNameValue} onChange={handleChange} placeholder="Write the pokemon" name="pokemonName"></input>
            <button>Buscar</button>

            <select name="pokemonType" value={typeValue} placeholder='Alls pokemons' >
                { types.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                )) }
            </select>
        </div>
        
    </Form>
  )
}

export default FiltersForm