import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Button from "../../common/Buttons/FormsButton"

export default function Checkout (){
    const navigate = useNavigate()

    const [form, setForm] = useState({
        CEP:"",
        Endereço:"",
        Numero:"",
        Complemento:"",
        Bairro:"",
        Cidade:"",
        Estado:"",
        FormaDeEntrega:"",
    })
    function sendForm(){
        console.log(form)
    }
    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value})
    }
    return(
    <Container>
        <MenuCheckoutContainer>
            <Icons>◄</Icons>
            <Title>Endereço de Entrega</Title>
        </MenuCheckoutContainer>

        <Forms>
            <input placeholder="CEP *" name="CEP" onChange={handleForm} value={form.CEP} required></input>
            <input placeholder="Endereço *" name="Endereço" onChange={handleForm} value={form.Endereço} required></input>
            <input placeholder="Numero *" name="Numero" onChange={handleForm} value={form.Numero} required></input>
            <input placeholder="Complemento" name="Complemento" onChange={handleForm} value={form.Complemento} required></input>
            <input placeholder="Bairro *" name="Bairro" onChange={handleForm} value={form.Bairro} required></input>
            <input placeholder="Cidade *" name="Cidade" onChange={handleForm} value={form.Cidade} required></input>
            <input placeholder="Estado *" name="Estado" onChange={handleForm} value={form.Estado} required></input>
        </Forms>

        <SubTitle>Forma de Entrega</SubTitle>

        <FormsEntrega>

            <input type="radio" name="FormaDeEntrega" value="Sedex" onChange={handleForm} required></input>
            <span>Sedex: R$ 25,62 (5 dias uteis)</span>
            <input type="radio" name="FormaDeEntrega" value="PAC" onChange={handleForm} required></input>
            <span>PAC: Grátis (14 dias uteis)</span>

        </FormsEntrega>

        <ButtonStyle onClick={() => sendForm()}>Ir para o Pagamento</ButtonStyle>
        {/* () => navigate("/checkout/payment") */}
    </Container>
    )
}
export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:start;
    flex-direction: column;
    font-family: "Montserrat", sans-serif !important;
    margin-top:30px;

    width:100%;
    height:100vh;

`
export const MenuCheckoutContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 5fr 1fr;

    width:100%;
`
export const Title = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    font-size:25px;
    font-weight:700;
    color:#F1C40F;

`
export const Icons = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    font-size:25px;
    color:#F1C40F;
`
export const Forms = styled.form`

    display:grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    
    width: 85%;
    margin-top:35px;
    
    input {

        height: 58px;
        
        border: none;
        padding-left: 40px;
        padding-right: 40px;
        border-radius: 30px;

        font-weight: 500;
        font-size: 20px;
        text-decoration: none;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.5);
        outline: none;
        background: rgba(196, 196, 196, 0.35);       
    }
    input::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }
    div {

        display:flex;
        align-items:center;
        justify-content:center;

        height: 50px;
        
        border: none;
        padding-left: 40px;
        padding-right: 40px;
        border-radius: 30px;

        font-weight: 500;
        font-size: 20px;
        text-decoration: none;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.5);
        outline: none;
        background: rgb(98 98 98 / 30%);
    }
`

const FormsEntrega = styled.form`

    display:grid;
    grid-template-columns: 1fr 5fr;
    grid-row-gap: 20px;

    width: 85%;
    margin-top:25px;
    
    input {
        height: 25px;
        width:100%;
    }
    span {
        height: 20px;

        display:flex;
        align-items:center;
        justify-content:left;

        font-size:15px;
        font-weight: 500;
        margin-top:3.5px;
    }
`
const SubTitle = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;

    font-size:25px;
    font-weight:700;
    color:#F1C40F;
    
    margin-top:40px;
`
export const ButtonStyle = styled.div`

    width: 80%;
    background-color: #f1c40f;
    border-radius: 50px;
    height: 58px;

    font-size: 20px;
    font-weight: 700;
    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 40px;
`
    
    
