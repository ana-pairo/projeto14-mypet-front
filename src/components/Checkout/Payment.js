import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { MenuCheckoutContainer, Title, Icons, Container, Forms, ButtonStyle} from "./Checkout"

export default function Payment (){
    const navigate = useNavigate()
    return(
        <Container>
            <MenuCheckoutContainer>
                <Icons>◄</Icons>
                <Title>Forma de Pagamento</Title>
            </MenuCheckoutContainer>

            <Forms>
                <input placeholder="Numero do Cartão *"></input>
                <input placeholder="Nome impresso no Cartão *"></input>
                <input placeholder="CPF do titular *"></input>
                <input placeholder="Validade do Cartão"></input>
                <input placeholder="Codigo de segurança"></input>
                <div>1x R$ 100,00 </div>
            </Forms>

            <ButtonStyle onClick={() => navigate("/thankyou")}>Finalizar pedido</ButtonStyle>

    
        </Container>
    
    )
}
