import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"

import styled from "styled-components"
import { MenuCheckoutContainer, Title, Icons, Container, Forms, ButtonStyle} from "./Checkout"
import CartContext from "../../contexts/CartContext";
import { sendClientDataForm } from "../../services/MyPet_API"



export default function Payment (){
    const navigate = useNavigate()
    let total = 0;
    const {form, setForm, cartItems} =  useContext(CartContext)


    total = cartItems.map((e)=> total += ((e.price/100) * e.quantity))

    if(form.FormaDeEntrega === "Sedex") total= Number(total) + 25.62

    let totalFixed = String(Number(total).toFixed(2)).replace(".", ",")

    async function sendForm(){
        try {
            const body = {
                ...form,
                cartItems
            }
            console.log(body)
            const res = await sendClientDataForm(body)
            if( res ) navigate("/thankyou")
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    return(
        <Container>
            <MenuCheckoutContainer>
                <Icons onClick={()=> navigate("/checkout")}>◄</Icons>
                <Title>Forma de Pagamento</Title>
            </MenuCheckoutContainer>

            <Forms>
                <input placeholder="Numero do Cartão *" name="CardNumber" onChange={handleForm}  required></input>
                <input placeholder="Nome impresso no Cartão *" name="CardName" onChange={handleForm}  required></input>
                <input placeholder="CPF do titular *" name="CPF" onChange={handleForm}  required></input>
                <input placeholder="Validade do Cartão" name="CardValidData" onChange={handleForm}  required></input>
                <input placeholder="Codigo de segurança" name="CardSecurityCode" onChange={handleForm}  required></input>
                <div>1x {totalFixed} </div>
            </Forms>

            <ButtonStyle onClick={() => sendForm()}>Finalizar pedido</ButtonStyle>

    
        </Container>
    
    )
}
