import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function Product ({name, rate, price, imageURL}){
    const priceFixed = Number(price/100).toFixed(2).replace(".",",")
    const rateFixed = Number(rate/10).toFixed(1).replace(".",",")
    const navigate = useNavigate()
    const productId = encodeURIComponent(name);
    return(
        <Container onClick={() => navigate("/product/" + productId)}>

            <ContainerImage>
                <img src={imageURL}/>
            </ContainerImage>

            <ContainerInfo>
                <ProductTitle>{name}</ProductTitle>
                <ProductRate> {rateFixed} / 5 ★</ProductRate>
                <ProductPrice>R$ {(priceFixed)}</ProductPrice>
            </ContainerInfo>

        </Container>
    )
}

const Container = styled.div`

    height:180px;

    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 18px;

    border-bottom: 3px solid #f7f7f7;
    //border-top: 3px solid #f7f7f7;
`
const ContainerImage = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    img {
        width: 160px;
        height: 160px;
    }

`
const ContainerInfo = styled.div`
    margin-top:18px;
    display:grid;
    grid-template-rows: 2fr 1fr 1fr;
    grid-row-gap: 5px;
`
const ProductTitle = styled.p`
    color: #555;
    font-size: 16px;
`
const ProductRate = styled.p`
    color: #F1C40F;
    font-size: 18px;
    font-weight:700;
`
const ProductPrice = styled.p`
    color: #007dc5;
    font-size:18px;
    font-weight: 700;
`