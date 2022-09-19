import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FiHome } from "react-icons/fi";
import { BsCart } from "react-icons/bs";

import logoImg from "../../assets/img/Yellow.png";
import CartContext from "../../contexts/CartContext";

export default function Footer() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const itemsQuantity = cartItems.reduce((a, c) => a + c.quantity, 0);

  return (
    <Wrapper>
      <FiHome
        size="35px"
        color="#f1c40f"
        onClick={() => {
          navigate("/home");
        }}
      />

      <img src={logoImg} alt="LogoMarca" />

      <Container
        onClick={() => {
          navigate("/carrinho");
        }}
      >
        <BsCart size="40px" color="#f1c40f" />
        {cartItems.length !== 0 ? (
          <ItemsQuantity>{itemsQuantity}</ItemsQuantity>
        ) : (
          ""
        )}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  height: 9%;
  box-shadow: 0 30px 20px 25px #333;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;

  img {
    position: absolute;
    bottom: 30%;
    border-radius: 100%;
    height: 70px;
    border: 2px solid #f1c40f;
  }
`;
const Container = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemsQuantity = styled.div`
  border-radius: 100%;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  height: 25px;
  width: 25px;
  background-color: rgb(233, 150, 122);
  position: absolute;
  right: 0;
  bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;
