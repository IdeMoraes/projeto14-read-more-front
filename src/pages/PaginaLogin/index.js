import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext.js";
import api from "../../services/api.js";
import {Container, Logotipo, StyledLink, Instrução, Form, Input, Button} from '../PaginaCadastro/style.js'

export default function PaginaLogin(){
    const {setUserName, setUserEmail, setUserToken} = useContext(UserContext);
    const navigate = useNavigate();
    const [dados, setDados] = useState({
        email: '',
        senha: '',
    });
    function handleChange(event){
        setDados({...dados, [event.target.name]: event.target.value});
    }
    async function handleSubmit(event){
        event.preventDefault();
        try {
            let promise = await api.logarUsuario({
                email: dados.email,
                senha: dados.senha,
            });
            setUserEmail(promise.data.email);
            setUserName(promise.data.nome);
            setUserToken(promise.data.token);
            navigate("/catalogo");
        } catch (error) {
            alert('Erro no login, tente novamente');
            console.log(error);
        }
        
    }

    return(
        <Container>
            <Logotipo>ReadMore</Logotipo>
            <Instrução>Preencha seus dados de login:</Instrução>
            <Form onSubmit={handleSubmit}>
                <Input placeholder='E-mail'type='email' onChange={(event)=>handleChange(event)} name='email' value= {dados.email} required/>
                <Input placeholder='Senha'type='password' onChange={(event)=>handleChange(event)} name='senha' value= {dados.senha} required/>
                <Button>Entrar</Button>
            </Form>
            <StyledLink to='/cadastro'>Não tem uma conta? Cadastre-se agora!</StyledLink>
        </Container>
    )
}