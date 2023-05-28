import pokedexImg from "../../assets/img/pokedex.png";
import './Home.css';
const Home = () => {
  return (
    <section className="home_container">  

      <div className="home_pekedex_img">
        <img src={pokedexImg} alt="" />
      </div>

      <h1 className="home_pekedex_title">¡Hello trainer!</h1>

      <p className="home_pekedex_text">Please, in order to begin, give me your name...</p>

      <form>
        <div className="home_pokedex_start">
          <input className="home_pokedex_input_name" type="text" placeholder=" Your name" />
          <button className="home_pokedex_btn_comenzar">Comenzar</button>
        </div>
      </form>

    </section>
    
  )
}

export default Home