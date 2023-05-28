import { useContext } from "react";
import pokedexImg from "../../assets/img/pokedex.png";
import UserNameForm from "../../components/Home/UserNameForm/UserNameForm";
import { UserNameContext } from "../../context/UserNameContext";
import { useNavigate } from "react-router-dom";


import './Home.css';
const Home = () => {

  const navigate =  useNavigate();
  const { seveUserName } = useContext(UserNameContext);

  const handleSendName = (userNameValue) => {
    seveUserName(userNameValue);
    navigate('/pokedex');
  }

  return (
    <section className="home_container">  

      <div className="home_pekedex_img">
        <img src={pokedexImg} alt="" />
      </div>

      <h1 className="home_pekedex_title">¡Hello trainer!</h1>

      <p className="home_pekedex_text">Please, in order to begin, give me your name...</p>

      <UserNameForm onSendName={handleSendName}/>

    </section>
    
  )
}

export default Home