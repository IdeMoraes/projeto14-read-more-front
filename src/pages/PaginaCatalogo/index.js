import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function PaginaCatalogo(){
    const { userName } = useContext(UserContext);
    return(
        <>
            <h1>{userName!==""?<h1>Olá {userName}</h1>:""}</h1>
            <h1>Página que mostra nosso catálogo de livros à venda!</h1>
        </>

    )
};