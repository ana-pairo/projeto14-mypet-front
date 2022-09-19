import styled from "styled-components"
import Product from "./Product"
import { searchProductsByName } from "../../services/MyPet_API"
import { useLocation } from "react-router-dom"
import Menu from "../Menu/Menu"
import { useEffect, useState } from "react"

export default function Search() {
    const location = useLocation()
    console.log()
    let search = decodeURIComponent(location.pathname.replace("/search/", ""))

    const [array, setArray] = useState([])

    async function searchFunction(){
        setArray(await searchProductsByName(search))
    }

    useEffect(() => {
        searchFunction()
    }, [search])
    
    return (
        <>
            <Menu/>
            
            <Container>

                <Title><p>Resultados para "{search}"</p></Title>

                <ContainerProducts>

                    {(array.data) ? (

                    array.data.map((e, i)=><Product name={e.name} rate={e.rate} price={e.price} imageURL={e.imageURL} key={i}/>)

                    ):(<p>carregando...</p>)}
                
                </ContainerProducts>
            </Container>
        </>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    
    width:100%;
    height: 100%;
`
const ContainerProducts = styled.div`

    display:grid;
    grid-template-columns: 1fr;
    grid-row-gap:15px;

`
const Title = styled.div`
    display:flex;
    align-items:center;
    justify-content:left;

    width:95%;
    padding-bottom:12px;
    border-bottom: 3px solid #f7f7f7;

    p {
        font-size:17px;
        font-weight:700;
        color:#b3b3b3;
    }
    
`