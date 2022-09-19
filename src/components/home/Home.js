import styled from "styled-components"
import Product from "./product"
import IconPets from "./IconPets"
import Vantagens from "./Vantagens"
import Menu from "../Menu/Menu"
import Footer from "../../common/Footer/Footer"
import { useNavigate } from "react-router-dom"

export default function Home (){

    const navigate = useNavigate()
    return(
        <>
            <Menu/>
            
            <Container>

                <ContainerPets>

                    <IconPets type={"Cachorros"}/>
                    <IconPets type={"Gatos"} onClick={() => navigate(`/Gatos`)}/>
                    <IconPets type={"Passaros"} onClick={() => navigate(`/Passaros`)}/>
                    <IconPets type={"Peixes"} onClick={() => navigate(`/Peixes`)}/>
                    <IconPets type={"Outros"} onClick={() => navigate(`/Outros`)}/>

                </ContainerPets>
                
                <Setor>
                    <Title>Lançamentos</Title>

                    <Products>

                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>

                    </Products>
                </Setor>

                <ContainerVantagens>

                    <Title>Vantagens de Comprar na MyPet</Title>

                    <Vantagens/>

                </ContainerVantagens>

                <Setor>
                    <Title>Mais vendidos</Title>

                    <Products>

                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>

                    </Products>
                </Setor>

            </Container>

            <Footer/>
        </>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding-bottom:100px;
`
const Setor = styled.div`
    margin-bottom:20px;
    width:95%;
    height:250px;
`
const ContainerVantagens = styled.div`
    margin-bottom:20px;
    width:95%;
    height:100%;
`
const ContainerPets = styled.div`
    width: 95%;
    height: 147px;
    border-bottom: solid 4px #f3f3f3;

    display:grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 18px;
    /* align-items:center;
    justify-content:center; */
    overflow-x: auto;

    ::-webkit-scrollbar {
    display: none;
    }
    
`
const Title = styled.div`
    display:flex;
    align-items:center;
    justify-content:left;

    width:100%;
    height: 67px;

    font-size: 19px;
    font-weight: 600;
    color: #34495E;
`
const Products = styled.div`
    display:grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 14px;

    overflow-x: auto;

    ::-webkit-scrollbar {
    display: none;
    }
    
`
