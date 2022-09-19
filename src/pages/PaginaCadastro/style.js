import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    background-color: #E2C9AD;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding-top: 75px;
    padding-bottom: 50px;

`;
const Logotipo = styled.div`
    width: 100vw;
    height: 75px;
    background-color: #825139;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 40px;
    color: black;
    position: fixed;
    left: 0;
    top: 0;
`;
const StyledLink = styled(Link)`
    width: 100vw;
    height: 50px;
    background-color: #383F31;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
    position: fixed;
    right: 0;
    bottom: 0;
`;
const Instrução = styled.div`
    margin-top: 40px;
    font-size: 25px;
    margin-bottom: 40px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    width: 300px;
    height: 58.33px;
    padding-left: 16.67px;
    font-size: 25px;
    margin-bottom: 21.67px;
    ::placeholder{
        color: #788875;
    }
`;
const Button = styled.button`
    width: 300px;
    height: 66.67px;
    background-color: #788875;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 233.33px;
    font-size: 33.33px;
    margin-bottom: 21.67px;
`;

export {
    Container, Logotipo, StyledLink, Instrução, Form, Input, Button
}