import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Product({ imageURL, name, price }) {
  const navigate = useNavigate();

  const priceFixed = Number(price / 100)
    .toFixed(2)
    .replace(".", ",");
  const productId = encodeURIComponent(name);

  return (
    <Container onClick={() => navigate("/product/" + productId)}>
      <img src={imageURL} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>R$ {priceFixed}</ProductPrice>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 9px 8px;

  width: 167px;
  height: 167px;

  background-color: white;
  border-radius: 10px;
  box-shadow: -1px 4px 7px rgba(0, 0, 0, 0.15);

  img {
    width: 90px;
  }
`;
const ProductName = styled.p`
  width: 167px;

  text-align: center;
  margin-top: 7px;
  font-size: 15px;
  font-weight: 600;
  color: black;
`;

const ProductPrice = styled.p`
  width: 167px;

  text-align: center;
  margin-top: 7px;
  font-size: 15px;
  font-weight: 300;
  color: black;
`;
