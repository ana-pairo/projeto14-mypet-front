import styled from "styled-components"
import checkImage from "../../assets/img/check-image.png"

export default function CompletedPurchase(){
    return(
        <Container>
            <img src={checkImage}/>
            <Title>Compra Finalizada</Title>
            <p>Falta pouco pra seus pedido chegar ate você! Agora é só esperar enquanto direcionamos ele para você!! Agradecemos pela confiaça ♥</p>
           
            <ButtonStyle>Voltar para Pagina Inicial</ButtonStyle>
            
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;

    font-family: "Montserrat", sans-serif !important;

    width:100%;
    height:100vh;
    padding-bottom:100px;

    img {
        width:80px;
    }
    p {
        font-size: 20px;
        text-align:center;
        margin-top: 30px;
        line-height: 30px;
        letter-spacing: 1.5px;
        width: 90%;
        
    }

`
const Title = styled.div`

    font-size:25px;
    font-weight:700;
    color: #59b159;
    margin-top: 30px;
    
`
const ButtonStyle = styled.div`

    width: 80%;
    border-radius: 50px;
    height: 58px;

    font-size: 18px;
    font-weight: 700;
    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 40px;
    background-color: #59b159;
`