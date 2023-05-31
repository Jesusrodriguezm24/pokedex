import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Common/Layout/Layout";
import ProtectedRouter from "../components/Common/ProtectedRouter/ProtectedRouter";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import { pokedexLoader } from "./loaders/pokedexLoader";

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
                element: <Pokedex/>,
                loader: pokedexLoader, 
            },
            {
                path: "/pokedex/:pokemonId",
                element: <h1>Detalles de los pokemons</h1>,
            },
           
        ]
    },
    {
        path: "/config",
        element: <h1>Ruta de config</h1>,
    },
    {
        path: "*",
        element: <h1>EROR 404 - Page Not Found...</h1>
    }



]);