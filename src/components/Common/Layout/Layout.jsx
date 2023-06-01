import { Outlet } from "react-router-dom";
import LinesTopStyle from "./LinesTopStyle/LinesTopStyle";
import './Layout.css';

const Layout = () => {
  return (
    <>
      <header>
        <LinesTopStyle/> 
      </header>
      <main className="main_container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
