import styled from "styled-components";

export default function FooterButton({ children, onClick }) {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  width: 85%;
  text-decoration: none;
  border: none;
  background: #f1c40f;
  border-radius: 30px;
  height: 50px;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  line-height: 22px;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: #a328d6;
  margin-top: 5px;
`;
