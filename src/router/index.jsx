import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Common/Layout/Layout";
import ProtectedRouter from "../components/Common/ProtectedRouter/ProtectedRouter";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/pokedex",
        element: <ProtectedRouter>
                    <Layout/> 
                </ProtectedRouter>,
        children: [
            {
                path: "",
                element: <Pokedex/>
            },
            {
                path: "/pokedex/:pokemonId",
                element: <h1>Detalles de los pokemons</h1>
            },
        ]
    },
    {
        path: "*",
        element: <h1>EROR 404 - Page Not Found...</h1>
    }



]);