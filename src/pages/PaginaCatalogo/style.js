import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.div`
    width: 100vw;
    height: 50px;
    background-color: #383F31;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 20px;
    color: white;
    position: fixed;
    right: 0;
    bottom: 0;

`;
const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    color: white;
`;
const Livro = styled.div`
    width: 175px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 25px;
    position: relative;
    img{
        height: 125px;
        width: 125px;
    }
    div{
        text-align: center;
    }
    ion-icon{
        font-size: 125px;
        position: absolute;
        top: 0px;
        left: opx;
        background-color: white;
        opacity: 0;
    }
`;
const Catalogo = styled.div`
width: 100vw;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

export {
    Footer, StyledLink, Livro, Catalogo
}