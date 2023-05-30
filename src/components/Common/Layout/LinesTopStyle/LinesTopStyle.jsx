import pokedexImg from "../../../../assets/img/pokedex.png";
import './LinesTopStyle.css'

const LinesTopStyle = () => {
  return (
    <section className='line_container'>
        <div className='line_red'>
            <img src={pokedexImg} alt="" />
        </div>

        <div className='circule_out'>
            <div className='circule_in'>

            </div>
        </div>

        <div className='line_black'>

        </div>

    </section>
  )
}

export default LinesTopStyle