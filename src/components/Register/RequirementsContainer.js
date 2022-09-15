import styled from "styled-components";
import { VscClose, VscCheck } from "react-icons/vsc";

export default function RequirementsContainer({
  password,
  passwordLength,
  containsNumbers,
  containsUpperCase,
  containsSymbols,
}) {
  function Requirement(rule, message) {
    return (
      <Wrapper>
        {rule ? (
          <VscCheck style={{ color: "#00FC7E" }} size="27px" />
        ) : (
          <VscClose style={{ color: "#FC0000" }} size="27px" />
        )}
        <p>{message}</p>
      </Wrapper>
    );
  }

  return (
    <Container length={password.length}>
      {password.length > 0 ? (
        <>
          {Requirement(passwordLength, "Possui mais de 4 caracteres")}
          {Requirement(containsNumbers, "Possui números")}
          {Requirement(containsSymbols, "Possui símbolos")}
          {Requirement(containsUpperCase, "Possui letra maiúscula")}
        </>
      ) : (
        ""
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.length > 0 ? " 10px 0px 10px 20px" : "")};
  font-size: 20px;
  font-weight: 400;
  color: #000000;
`;

const Wrapper = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;

  p {
    margin-left: 5px;
  }
`;
