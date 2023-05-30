import { useContext } from "react";
import pokedexImg from "../../assets/img/pokedex.png";
import UserNameForm from "../../components/Home/UserNameForm/UserNameForm";
import { UserNameContext } from "../../context/UserNameContext";
import { useNavigate } from "react-router-dom";
import charmander from "../../assets/gif/charmander.gif";

import "./Home.css";
import LineStyle from "../../components/Home/LineStyle/LineStyle";
const Home = () => {
  const navigate = useNavigate();
  const { seveUserName } = useContext(UserNameContext);

  const handleSendName = (userNameValue) => {
    seveUserName(userNameValue);
    navigate("/pokedex");
  };

  return (
    <section className="home_container">
      <div className="home_pekedex_img">
        <img src={pokedexImg} alt="" />
      </div>

      <h1 className="home_pekedex_title">¡Hello trainer!</h1>

      <p className="home_pekedex_text">
        Please, in order to begin, give me your name...
      </p>

      <UserNameForm onSendName={handleSendName} />

      <div className="item_container">
        <img className="charmander" src={charmander} alt="GIF" />
      </div>

      <LineStyle />
    </section>
  );
};

export default Home;
