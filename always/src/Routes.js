import React from "react";
import {Routes, Router, Route} from 'react-router-dom'
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";

export default () =>{

    return(
        
        <Routes>
            <Route path="/*" element={ <Login />}>
            </Route>

            <Route path="/Cadastro" element={ <Cadastro />}>
            </Route>

       </Routes>
    );
}

