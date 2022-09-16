import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Biblioteca from "./pages/Biblioteca.js";
import Carrinho from "./pages/Carrinho.js"


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/biblioteca" element={<Biblioteca/>} />
                <Route path="carrinho" element={<Carrinho />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;