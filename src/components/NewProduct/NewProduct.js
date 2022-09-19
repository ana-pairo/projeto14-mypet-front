import styled from "styled-components"
import FormsStyle from "../../common/FormsStyle/FormsStyle"
import FormsButton from "../../common/Buttons/FormsButton";
import { useState } from "react";

export default function NewProduct(){

    const [form, setForm] = useState({

        name:"",
        description:"",
        price:"",
        imageURL:"",
        useRecommendation:"",
        sellsNumber:"",
        rate:""
        
    })

    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    function sendForm(){
        console.log(form)
    }

    return(
        <Container>
            <Title>Novo Produto</Title>
            <SubTitle>Pagina para testes</SubTitle>
            <FormsStyle>

                <input placeholder="Nome do Produto" name="name" value={form.name} onChange={handleForm} required></input>

                <input placeholder="Descrição" name="description" value={form.description} onChange={handleForm} required></input>

                <input placeholder="Preço" name="price" value={form.price} onChange={handleForm} required></input>

                <input placeholder="Link da Imagem" name="imageURL" value={form.imageURL} onChange={handleForm} required></input>

                <input placeholder="Recomendação de uso" name="useRecommendation" value={form.useRecommendation} onChange={handleForm} required></input>

                <input placeholder="Numero de Vendas" name="sellsNumber" value={form.sellsNumber} onChange={handleForm} required></input>

                <input placeholder="Nota do Produto" name="rate" value={form.rate} onChange={handleForm} required></input>

                <Button onClick={() => sendForm()}>Cadastrar</Button>
            </FormsStyle>
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:start;
    flex-direction:column;
    padding-top:60px;

    width:100%;
    height: 100vh;

`
const Title = styled.div`
    font-size:32px;
    font-weight:700;
    color:#F1C40F;
    margin: 30px 0;
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 58px;
    background: #f1c40f;
    border-radius: 30px;
    
    font-size: 25px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    color: #ffffff;
    margin-top: 40px;
`
const SubTitle = styled.div`
    font-size:15px;
    color:lightgray;
    margin: 0 0;
`
