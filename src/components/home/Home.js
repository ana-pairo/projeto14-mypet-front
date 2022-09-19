import styled from "styled-components"
import Product from "./product"
import IconPets from "./IconPets"
import Vantagens from "./Vantagens"
import Menu from "../Menu/Menu"
import Footer from "../../common/Footer/Footer"
import { useNavigate } from "react-router-dom"
import { searchAll } from "../../services/MyPet_API"
import { useEffect, useState} from "react"

export default function Home (){

    const navigate = useNavigate()
    const [array, setArray] = useState()
    const [bestSellers, setBestSellers] = useState()

    function compareSells(a, b) {
        return a.sellsNumber - b.sellsNumber;
    }
    
    async function searchNewest(){
        let arr = await searchAll()
        arr = arr.data.reverse().filter((e, i)=> i < 10) //10 ultimos lançamentos
        setArray(arr)
    }
    async function searchBestSeller(){
        let arr = await searchAll()
        arr = arr.data.sort(compareSells).reverse().filter((e, i)=> i < 10) //10 mais vendidos
        setBestSellers(arr)
    }
    
    useEffect(()=>{
        searchNewest()
        searchBestSeller()
    }, [])

    console.log(bestSellers)
    return(
        <>
            <Menu/>
            
            <Container>

                <ContainerPets>

                    <IconPets type={"Cachorros"}/>
                    <IconPets type={"Gatos"}/>
                    <IconPets type={"Passaros"}/>
                    <IconPets type={"Peixes"}/>
                    <IconPets type={"Outros"}/>

                </ContainerPets>
                
                <Setor>
                    <Title>Lançamentos</Title>

                    <Products>

                        {(array) ? (array.map((e, i) => <Product imageURL={e.imageURL} name={e.name} price={e.price} key={i}/>)):(<></>)}

                    </Products>
                </Setor>

                <ContainerVantagens>

                    <Title>Vantagens de Comprar na MyPet</Title>

                    <Vantagens/>

                </ContainerVantagens>

                <Setor>
                    <Title>Mais vendidos</Title>

                    <Products>

                        {(bestSellers) ? (bestSellers.map((e, i) => <Product imageURL={e.imageURL} name={e.name} price={e.price} key={i}/>)):(<></>)}

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
