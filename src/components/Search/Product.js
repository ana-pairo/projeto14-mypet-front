import styled from "styled-components"

export default function Product ({teste}){
    return(
        <Container>

            <ContainerImage>
                <img src="https://static.petz.com.br/fotos/1627308032393.jpg"/>
            </ContainerImage>

            <ContainerInfo>
                <ProductTitle>{"Ração Úmida Dog Chow Sabor Carne para Cães Adultos de Raças Pequenas- 100g"}</ProductTitle>
                <ProductRate> {4.7} / 5 ★</ProductRate>
                <ProductPrice>{"R$ 49,00"}</ProductPrice>
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