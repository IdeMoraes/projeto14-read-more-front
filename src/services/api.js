import axios from "axios";

const base_URL = "http://localhost:5000";

async function cadastrarUsuario(dados){
    axios.post(`${base_URL}/cadastro`, dados);
}

const api = {
    cadastrarUsuario
}

export default api;