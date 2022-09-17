import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import logoImg from "../../assets/img/Yellow.png";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <FiHome
        size="30px"
        color="#C0C0C0"
        onClick={() => {
          navigate("/home");
        }}
      />

      <img src={logoImg} />

      <BsCart
        size="30px"
        color="#c0c0c0"
        onClick={() => {
          navigate("/carrinho");
        }}
      />
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

  img {
    position: absolute;
    bottom: 30%;
    border-radius: 100%;
    height: 70px;
    border: 2px solid #f1c40f;
  }
`;
