import { Outlet } from "react-router-dom";
import LinesTopStyle from "./LinesTopStyle/LinesTopStyle";
import './Layout.css';
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <header>
        <LinesTopStyle/> 
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
