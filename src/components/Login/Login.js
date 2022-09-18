import { useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useState } from "react";
import styled from "styled-components";

import { openClientSession } from "../../services/MyPet_API";
import FormsStyle from "../../common/FormsStyle/FormsStyle";
import Logo from "../../common/Logo/Logo";
import FormsButton from "../../common/Buttons/FormsButton";
import StyledLink from "../../common/Links/StyledLink";

export default function Login() {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  async function sendLogin(e) {
    e.preventDefault();
    setIsDisable(true);

    try {
      const response = await openClientSession(inputData);

      localStorage.setItem("UserToken", JSON.stringify(response.data));
      navigate("/home");
    } catch (error) {
      setIsDisable(false);
      console.log(error.message);
      alert(error.message);
    }
  }

  return (
    <>
      <Wrapper>
        <Logo />
        <FormsStyle isDisable={isDisable} onSubmit={sendLogin}>
          <input
            required
            type="email"
            name="email"
            placeholder="E-mail"
            disabled={isDisable}
            onChange={handleForm}
            value={inputData.email}
          />
          <input
            required
            type={isShown ? "text" : "password"}
            name="password"
            placeholder="Senha"
            disabled={isDisable}
            onChange={handleForm}
            value={inputData.password}
          />
          <EyeIcon>
            {isShown ? (
              <BsEye
                color=" rgba(0, 0, 0, 0.5)"
                size="25px"
                onClick={() => {
                  setIsShown(!isShown);
                }}
              />
            ) : (
              <BsEyeSlash
                color=" rgba(0, 0, 0, 0.5)"
                size="25px"
                onClick={() => {
                  setIsShown(!isShown);
                }}
              />
            )}
          </EyeIcon>
          <FormsButton type="submit" isDisable={isDisable}>
            Entrar
          </FormsButton>
        </FormsStyle>
        <Shadow />
        <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`;

const EyeIcon = styled.div`
  position: absolute;
  right: 4.5%;
  top: 101px;
`;

const Shadow = styled.div`
  width: 80%;
  min-height: 60px;
  margin-top: 10px;
  box-shadow: 0 20px 25px -20px #333;
`;
