import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProtectedRouter from "../components/ProtectedRouter/ProtectedRouter";
import Home from "../pages/Home/Home";

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
                element: <h1>Lista de pokemons</h1>
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