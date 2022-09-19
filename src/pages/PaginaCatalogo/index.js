import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import {Container, Logotipo, Instrução} from '../PaginaCadastro/style.js'
import { Footer, StyledLink, Livro, Catalogo } from "./style.js";

export default function PaginaCatalogo(){
    const { userName } = useContext(UserContext);

    function mostrarCarrinho(e) {
        e.target.style.opacity = '0.8';
    }
    function esconderCarrinho(e) {
        e.target.style.opacity = '0';
    }
    function adicionarAoCarrinho(_id){
        alert(`Criar função que adiciona o livro de id ${_id} ao carrinho`);
    }
    const chumbado = [
        {   _id: 1,
            capa: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png',
            titulo: 'A volta dos que não foram',
            autor: 'Fulano de Assis',
            preco: 43.97,
            descrição: 'O livro fala sobre kdsjfnjsdhfidhsifhdsifuhds',
            estoque: 5
        },
        {   _id: 1,
            capa: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png',
            titulo: 'A volta dos que não foram',
            autor: 'Fulano de Assis',
            preco: 43.97,
            descrição: 'O livro fala sobre kdsjfnjsdhfidhsifhdsifuhds',
            estoque: 5
        },
        {   _id: 1,
            capa: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png',
            titulo: 'A volta dos que não foram',
            autor: 'Fulano de Assis',
            preco: 43.97,
            descrição: 'O livro fala sobre kdsjfnjsdhfidhsifhdsifuhds',
            estoque: 5
        },
        {   _id: 1,
            capa: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png',
            titulo: 'A volta dos que não foram',
            autor: 'Fulano de Assis',
            preco: 43.97,
            descrição: 'O livro fala sobre kdsjfnjsdhfidhsifhdsifuhds',
            estoque: 5
        },
        {   _id: 1,
            capa: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png',
            titulo: 'A volta dos que não foram',
            autor: 'Fulano de Assis',
            preco: 43.97,
            descrição: 'O livro fala sobre kdsjfnjsdhfidhsifhdsifuhds',
            estoque: 5
        },
        {   _id: 1,
            capa: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png',
            titulo: 'A volta dos que não foram',
            autor: 'Fulano de Assis',
            preco: 43.97,
            descrição: 'O livro fala sobre kdsjfnjsdhfidhsifhdsifuhds',
            estoque: 5
        },
        {   _id: 1,
            capa: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png',
            titulo: 'A volta dos que não foram',
            autor: 'Fulano de Assis',
            preco: 43.97,
            descrição: 'O livro fala sobre kdsjfnjsdhfidhsifhdsifuhds',
            estoque: 5
        },
        {   _id: 1,
            capa: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png',
            titulo: 'A volta dos que não foram',
            autor: 'Fulano de Assis',
            preco: 43.97,
            descrição: 'O livro fala sobre kdsjfnjsdhfidhsifhdsifuhds',
            estoque: 5
        },
        {   _id: 1,
            capa: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png',
            titulo: 'A volta dos que não foram',
            autor: 'Fulano de Assis',
            preco: 43.97,
            descrição: 'O livro fala sobre kdsjfnjsdhfidhsifhdsifuhds',
            estoque: 5
        },
        {   _id: 1,
            capa: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png',
            titulo: 'A volta dos que não foram',
            autor: 'Fulano de Assis',
            preco: 43.97,
            descrição: 'O livro fala sobre kdsjfnjsdhfidhsifhdsifuhds',
            estoque: 5
        },
        {   _id: 1,
            capa: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png',
            titulo: 'A volta dos que não foram',
            autor: 'Fulano de Assis',
            preco: 43.97,
            descrição: 'O livro fala sobre kdsjfnjsdhfidhsifhdsifuhds',
            estoque: 5
        },
       
    ];
    return(
        <Container>
            <Logotipo>ReadMore</Logotipo>
            {userName!==""? <Instrução>Olá, {userName}! Veja nosso catálogo e adicione livros ao seu carrinho.</Instrução>: <Instrução>Caro visitante, para comprar no nosso site, favor efetuar login.</Instrução> }
            <Catalogo>
            { chumbado.map( (livro) => 
                <Livro>
                    <img src={livro.capa}></img>
                    <div>{livro.titulo}</div>
                    <div>{livro.autor}</div>
                    <div>R${livro.preco}</div>
                    {userName!==""?<ion-icon name="cart-outline" onMouseOver={mostrarCarrinho} onMouseOut={esconderCarrinho} onClick={()=>adicionarAoCarrinho(livro._id)}></ion-icon>:""}
                </Livro>
            )}
            </Catalogo>
            <Footer>
                {userName!==""? 
                <>
                    <StyledLink to='/carrinho'>
                        Carrinho
                        <ion-icon name="cart-outline"></ion-icon>
                    </StyledLink>
                    <StyledLink onClick={()=> window.location.reload()}>
                        Logout
                        <ion-icon name="log-out-outline"></ion-icon>
                    </StyledLink>
                </> : 
                <>
                    <StyledLink to='/cadastro'>
                        Cadastro
                        <ion-icon name="clipboard-outline"></ion-icon>
                    </StyledLink>
                    <StyledLink to='/login'>
                        Login
                        <ion-icon name="log-in-outline"></ion-icon>
                    </StyledLink>
                </>}    
            </Footer>
        </Container>
    )
};