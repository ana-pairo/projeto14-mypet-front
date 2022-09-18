import Cachorros from '../../assets/img/cachorro-icon.jpg'
import Gatos from '../../assets/img/gato-icon.jpeg'
import Passaros from '../../assets/img/passaro-icon.jpeg'
import Peixes from '../../assets/img/peixe-icon.jpeg'
import Outros from '../../assets/img/other-icon.jpeg'

import styled from 'styled-components'

export default function IconPets({type}){
    function ConverterType (e){
        switch (e) {
            case "Cachorros":
                return Cachorros
            case "Gatos":
                return Gatos
            case "Passaros":
                return Passaros
            case "Peixes":
                return Peixes
            default:
                return Outros  
                break;     
        }
    }
    return(

        <Container onClick={() => console.log("Voce clicou em " + type)}>
            <PetImage src={ConverterType(type)}/>
            <PetSubtitle>{type}</PetSubtitle>
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const PetImage = styled.img`
    width:75px;
    height: 75px;

    border-radius: 50px;
    border: solid 4px #F1C40F;
`
const PetSubtitle = styled.p`
    margin-top:7px;
    font-size:13px;
    letter-spacing: 1.5px;
`