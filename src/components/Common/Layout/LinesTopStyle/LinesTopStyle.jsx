import { Link, useNavigate } from "react-router-dom";
import pokedexImg from "../../../../assets/img/pokedex.png";
import { useContext } from "react";
import { UserNameContext } from "../../../../context/UserNameContext";
import './LinesTopStyle.css'

const LinesTopStyle = () => {

  const { removeUserName } = useContext(UserNameContext);
  const navigate = useNavigate();
 
  const logout = () => {
    removeUserName();
    navigate('/');
  }

  return (
    <section className='line_container_top'>
        <div className='line_red_top'>
            <Link to="/pokedex">
              <img src={pokedexImg} alt="" />
            </Link>
            <button className="btn_go_home" onClick={logout}>
              {/* <i className='bx bx-log-out'></i> */}
               Log out
            </button>
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