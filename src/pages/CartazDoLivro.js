import styled from "styled-components";

export default function CartazDoLivro(props) {
    console.log("try here")
    const { titulo, autor, preco, capa } = props;
    return (
        <Cartaz>
            <div><img src={capa} alt="capa" /></div>
            <h2>{titulo}</h2>
            <p>{autor}</p>
            <h3>{preco}</h3>
            <div>
                <button>Comprar</button>
                <button><ion-icon name="cart-outline"></ion-icon></button>
            </div>
        </Cartaz>
    )
}
const Cartaz = styled.section`
    background-color: whitesmoke;
    width: 201px;
    margin: auto;
    margin-top: 15px;
    padding: 15px;
    border: 1px solid #AB492E;
    border-radius: 5px; 
    div{
        display: flex;
        justify-content: center;
    }
    img{
        height: 171px;
        margin-bottom: 10px;
    }
    h2{
        font-size: 22px;
        margin: 0 0 3px 0;
    }
    h3{
        font-size: 18px;
        margin: 0 0 3px 0;
    }
    p{
        font-size: 14px;
        margin: 0 0 3px 0;
    }
    button{
        margin: auto;
        margin-top: 10px;
        font-size: 20px;
        display: block;
    }
`;