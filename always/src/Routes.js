import React from "react";
import {Routes, Router, Route} from 'react-router-dom'
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Pagamento from "./Pages/Pagamento";
import Pedido from "./Pages/Pedido";
import Pedido_Final from "./Pages/Pedido_Final";
import Cardapio from "./Pages/Cardapio";
import Pagamento_Final from "./Pages/Pagamento_Final";
import Chat from "./Pages/Chat";
const db = require("./db");

export default () =>{

    return(
        
        <Routes>
            <Route path="/*" element={ <Login />}>
            </Route>

            <Route path="/Cadastro" element={ <Cadastro />}>
            </Route>

            <Route path="/Pagamento" element={ <Pagamento />}>
            </Route>

            <Route path="/Pagamento_Final" element={ <Pagamento_Final />}>
            </Route>

            <Route path="/Pedido" element={ <Pedido />}>
            </Route>

            <Route path="/Pedido_Final" element={ <Pedido_Final />}>
            </Route>

            <Route path="/Cardapio" element={ <Cardapio />}>
            </Route>

            <Route path="/Chat" element={ <Chat />}>
            </Route>

       </Routes>
    );
}

