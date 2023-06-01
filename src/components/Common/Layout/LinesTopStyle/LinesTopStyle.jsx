import { Link } from "react-router-dom";
import pokedexImg from "../../../../assets/img/pokedex.png";
import './LinesTopStyle.css'

const LinesTopStyle = () => {
  return (
    <section className='line_container_top'>
        <div className='line_red_top'>
            <img src={pokedexImg} alt="" />
            <Link to="/">
              <button className="btn_go_home">Home</button>
            </Link> 
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