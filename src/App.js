import React, { useState } from "react";
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import PaginaCadastro from "./pages/PaginaCadastro";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaCatalogo from "./pages/PaginaCatalogo";
import PaginaCarrinho from "./pages/PaginaCarrinho";
import PaginaSucesso from "./pages/Sucesso";
import UserContext from "./contexts/UserContext";

function App(){
    const [userName, setUserName ] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userToken, setUserToken ] = useState('');
    return(
        <UserContext.Provider value={{userName, setUserName, userEmail, setUserEmail, userToken, setUserToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Navigate to="/cadastro" /> }/>
                    <Route path="/cadastro" element={<PaginaCadastro/>}/>
                    <Route path="/login" element={<PaginaLogin/>}/>
                    <Route path="/catalogo" element={<PaginaCatalogo/>}/>
                    <Route path="/carrinho" element={<PaginaCarrinho/>}/>
                    <Route path="/sucesso" element={<PaginaSucesso/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>

    )
}

export default App;