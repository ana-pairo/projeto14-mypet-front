import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import Footer from "../../common/Footer/Footer";

export default function ProductDescription(req) {
  const navigate = useNavigate();
  const { productId } = useParams();
  return (
    <Wrapper>
      <Header>
        <div>
          <BsArrowLeftCircle
            size="30px"
            color="#F1C40F"
            onClick={() => {
              navigate("/home");
            }}
          />
        </div>
        Produto
      </Header>
      <Container>
        <Image>
          <img src="https://static.petz.com.br/fotos/1660162896325_mini.jpg" />
        </Image>
        <Details>
          <Title>Product Name</Title>
          <Description>Product Description</Description>
        </Details>
      </Container>
      <AddCart>
        <Price>
          Preço:
          <div>R$ 2584,55</div>
        </Price>
        <button>Adicionar ao carrinho</button>
      </AddCart>

      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #f1c40f;

  div {
    display: flex;
    position: absolute;
    top: 13px;
    left: 15px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 61%;
  align-items: center;
  position: fixed;
  top: 70px;
  overflow-y: scroll;
  padding: 10px;
`;

const Image = styled.div`
  width: 75%;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 8px -3px #333;
  object-fit: cover;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Details = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Title = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin-bottom: 20px;
`;

const AddCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 14.5%;

  button {
    height: 50px;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
    background: #f1c40f;
    border-radius: 30px;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    line-height: 22px;
    font-weight: 700;
    color: #ffffff;
    outline: #a328d6;
    margin-top: 5px;
  }
`;

const Price = styled.div`
  width: 75%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  div {
    display: flex;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
  }
`;
