import { Outlet, useNavigate } from "react-router-dom";
import LinesTopStyle from "./LinesTopStyle/LinesTopStyle";
import './Layout.css';
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { UserNameContext } from "../../../context/UserNameContext";

const Layout = () => {
  const { removeUserName } = useContext(UserNameContext);
  const navigate = useNavigate();

  const logout = () => {
    removeUserName();
    navigate('/');

  }

  return (
    <>
      <header>
        <LinesTopStyle /> 
        <button onClick={logout}>Log out</button>
      </header>
      <main className="main_container">
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Layout;
