import pokedexImg from "../../../../assets/img/pokedex.png";
import './LinesTopStyle.css'

const LinesTopStyle = () => {
  return (
    <section className='line_container_top'>
        <div className='line_red_top'>
            <img src={pokedexImg} alt="" />
        </div>

        <div className='circule_out_top'>
            <div className='circule_in_top'>

            </div>
        </div>

        <div className='line_black_top'>

        </div>

    </section>
  )
}

export default LinesTopStyle