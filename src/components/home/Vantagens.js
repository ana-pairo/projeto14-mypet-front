import styled from "styled-components"
import EntregaRapida from "../../assets/img/entrega-rapida.svg"
import CompraSegura from "../../assets/img/compra-segura.svg"
import CompraParcelada from "../../assets/img/compra-parcelada.svg"
import FreteGratis from "../../assets/img/frete-gratis.svg"

export default function Vantagens() {
    return(
        <Container>
            <ContainerGrid>
                
                <Vantagem>
                    <img src={EntregaRapida}/>
                    <Title>Entrega Rápida</Title>
                    <SubTitle>Sua Compra em ate 2 dias</SubTitle>
                </Vantagem>
                <Vantagem>
                    <img src={FreteGratis}/>
                    <Title>Frete Grátis</Title>
                    <SubTitle>Para todo o Brasil</SubTitle>
                </Vantagem>
                <Vantagem>
                    <img src={CompraParcelada}/>
                    <Title>Parcele sua compra</Title>
                    <SubTitle>Até 10x Sem Juros</SubTitle>
                </Vantagem>
                <Vantagem>
                    <img src={CompraSegura}/>
                    <Title>Compra Segura</Title>
                    <SubTitle>seus dados criptografados</SubTitle>
                </Vantagem>

            </ContainerGrid>
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const ContainerGrid = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap:15px;
    grid-row-gap:15px;

`
const Vantagem = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    width: 180px;
    height: 130px;
    text-align:center;
    background-color:lightgray;
    border-radius: 10px;
    img {
        width: 45px;
    }
`
const Title = styled.p`
    width:100%;
    margin-top: 13px;
    font-size: 17px;
    color: #171717;
    font-weight: 700;

`
const SubTitle = styled.p`
    width:100%;
    margin-top: 5px;
    font-size: 15px;
    color: #454545;
`