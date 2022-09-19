import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";
import {Container, Logotipo, StyledLink, Instrução, Form, Input, Button} from './style.js'

export default function PaginaCadastro(){
    const navigate = useNavigate();
    const [dados, setDados] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmaSenha: '',
    });
    function handleChange(event){
        setDados({...dados, [event.target.name]: event.target.value});
    }
    async function handleSubmit(event){
        event.preventDefault();
        if(dados.senha!==dados.confirmaSenha){
            alert("As senhas digitadas não são iguais!");
            return
        }
        try {
            await api.cadastrarUsuario({
                nome: dados.nome,
                email: dados.email,
                senha: dados.senha,
            });
            navigate("/catalogo");
        } catch (error) {
            alert('Erro no cadastro, tente novamente');
            console.log(error);
        }
        
    }

    return(
        <Container>
            <Logotipo>ReadMore</Logotipo>
            <Instrução>Preencha seus dados de cadastro:</Instrução>
            <Form onSubmit={handleSubmit}>
                <Input placeholder='Nome' type='text' onChange={(event)=>handleChange(event)} name='nome' value= {dados.nome} required/>
                <Input placeholder='E-mail'type='email' onChange={(event)=>handleChange(event)} name='email' value= {dados.email} required/>
                <Input placeholder='Senha'type='password' onChange={(event)=>handleChange(event)} name='senha' value= {dados.senha} required/>
                <Input placeholder='Confirme a senha'type='password' onChange={(event)=>handleChange(event)} name='confirmaSenha' value= {dados.confirmaSenha} required/>
                <Button>Cadastrar</Button>
            </Form>
            <StyledLink to='/login'>Já tem uma conta? Entre agora!</StyledLink>
        </Container>
    )
}