import './PokemonCard.css'

const PokemonCard = ({ pokemon }) => {
  return (
    <article>
        <div>
            <img src="" alt="" />
        </div>

        <h2>Bulbasaur</h2>

        <section>
            <h3>Tipo</h3>
            <ul>
                <li>Planta</li>
                <li>Veneno</li>
            </ul>
        </section>

        <section>
            <ul>
                <li>
                    <em>HP</em>
                    <span>59</span>
                </li>
                <li>
                    <em>ATAQUE</em>
                    <span>20</span>
                </li>
                <li>
                    <em>DEFENSA</em>
                    <span>49</span>
                </li>
                <li>
                    <em>VELOCIDAD</em>
                    <span>45</span>
                </li>
            </ul>
        </section>
        
       
    </article>
  )
}

export default PokemonCard