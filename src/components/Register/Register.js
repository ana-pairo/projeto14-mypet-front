import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { VscClose, VscCheck } from "react-icons/vsc";

import { isPasswordValid, isPasswordMatching } from "./PasswordValidation";
import { createClient } from "../../services/MyPet_API";
import Logo from "../../common/Logo/Logo";
import FormsStyle from "../../common/FormsStyle/FormsStyle";
import FormsButton from "../../common/Buttons/FormsButton";
import StyledLink from "../../common/Links/StyledLink";
import RequirementsContainer from "./RequirementsContainer";

export default function Register() {
  const navigate = useNavigate();

  const [warningMessage, setWarningMessage] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  const [containsNumbers, setContainsNumbers] = useState(false);
  const [containsUpperCase, setContainsUpperCase] = useState(false);
  const [containsSymbols, setContainsSymbols] = useState(false);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleForm(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  async function sendRegister(e) {
    e.preventDefault();

    if (
      passwordLength &&
      containsNumbers &&
      containsUpperCase &&
      containsSymbols
    ) {
      setIsDisable(true);
      setWaiting(true);

      try {
        await createClient(inputData);
        navigate("/login");
      } catch (error) {
        setIsDisable(false);
        console.log(error);
        alert(error.message);
      }
    }
  }

  return (
    <>
      <Wrapper padding={inputData.password.length > 0}>
        <Logo />
        <FormsStyle isDisable={isDisable} onSubmit={sendRegister}>
          <input
            required
            type="text"
            name="name"
            placeholder="Nome"
            disabled={isDisable}
            onChange={handleForm}
            value={inputData.name}
          />
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
            onChange={(e) => {
              handleForm(e);
              isPasswordValid({
                e,
                setContainsNumbers,
                setPasswordLength,
                setContainsSymbols,
                setContainsUpperCase,
              });
            }}
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

          <RequirementsContainer
            password={inputData.password}
            passwordLength={passwordLength}
            containsNumbers={containsNumbers}
            containsUpperCase={containsUpperCase}
            containsSymbols={containsSymbols}
          />

          <input
            required
            type="password"
            placeholder="Confirme a senha"
            onKeyUp={(e) => {
              isPasswordMatching({ e, setWarningMessage, inputData });
            }}
            disabled={isDisable}
          />
          {warningMessage !== "" ? (
            <Message>
              <VscClose style={{ color: "#FC0000" }} size="30px" />
              <p>{warningMessage}</p>
            </Message>
          ) : (
            ""
          )}

          <FormsButton
            type="submit"
            isDisable={isDisable}
            disabled={warningMessage !== "" ? true : ""}
            waiting={waiting}
            setWaiting={setWaiting}
          >
            Cadastrar
          </FormsButton>
        </FormsStyle>
        <Shadow />
        <StyledLink to="/login">Já tem uma conta? Entre agora!</StyledLink>
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
  padding-top: ${(props) => (props.padding ? "240px" : "50px")};
`;

const Message = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 0 20px;
  p {
    margin-left: 5px;
    font-size: 20px;
    color: #000000;
  }
`;

const EyeIcon = styled.div`
  position: absolute;
  right: 5.5%;
  top: 172px;
`;

const Shadow = styled.div`
  width: 80%;
  min-height: 50px;
  margin-top: 10px;
  box-shadow: 0 20px 25px -20px #333;
`;
