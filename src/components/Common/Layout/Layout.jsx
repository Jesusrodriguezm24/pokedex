import { Outlet } from "react-router-dom";
import LinesTopStyle from "./LinesTopStyle/LinesTopStyle";

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
