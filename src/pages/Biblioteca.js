import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading.js"
import CartazDoLivro from "./CartazDoLivro.js";

export default function Biblioteca() {

    const [livros, setLivros] = useState([]);

    useEffect(() => {

        const promisse = axios.get("https://read-more-store.herokuapp.com/biblioteca")
        promisse.then((resposta) => {
            setLivros(resposta.data);
            console.log("DATA: ",resposta.data);
        })
        promisse.catch(error => {
            console.log(error);
            alert("ERRO! Verifique a conexão")
        });
    }, [])

    return (
        <Align>
            <header>Read More</header>
            <nav></nav>
            <main className="biblioteca-main">
                {(livros.length === 0) ?
                    (<Loading />) :
                    (livros.map(livro => {
                        return (<CartazDoLivro id={livro._id} titulo={livro.titulo} autor={livro.autor} preco={livro.preco} capa={livro.capa} />)
                    }))
                }
            </main>
        </Align>
    )
}
const Align = styled.div`

    header{
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        font-size: 36px;
        background-color: #AB492E;
        color: white;
        padding: 15px;
        z-index: 1;
    }
    nav{
        position: fixed;
        top: 66px;
        left: 0;
        width: 100%;
        height: 40px;
        background-color: #39170B;
        color: white;
        z-index: 1;
    }
    main{
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        margin-top: 110px;
    }
    
`;