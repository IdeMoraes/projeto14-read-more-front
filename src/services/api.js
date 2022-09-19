import axios from "axios";

const base_URL = "http://localhost:5000";

async function cadastrarUsuario(dados){
    axios.post(`${base_URL}/cadastro`, dados);
}

async function logarUsuario(dados){
    const token = axios.post(`${base_URL}/login`, dados);
    return token;
}

const api = {
    cadastrarUsuario, logarUsuario
}

export default api;