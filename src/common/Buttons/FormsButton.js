import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function Button({ children, isDisable, disabled, waiting }) {
  if (waiting === undefined) {
    return (
      <ButtonWrapper disabled={disabled} isDisable={isDisable}>
        {isDisable ? (
          <ThreeDots
            height="20"
            width="80"
            radius="9"
            color="white"
            ariaLabel="three-dots-loading"
          />
        ) : (
          children
        )}
      </ButtonWrapper>
    );
  } else {
    return (
      <ButtonWrapper
        waiting={waiting}
        disabled={disabled}
        isDisable={isDisable}
      >
        {waiting && isDisable ? (
          <ThreeDots
            height="20"
            width="80"
            radius="9"
            color="white"
            ariaLabel="three-dots-loading"
          />
        ) : (
          children
        )}
      </ButtonWrapper>
    );
  }
}

const ButtonWrapper = styled.button`
  width: 100%;
  text-decoration: none;
  border: none;
  background: #f1c40f;
  border-radius: 30px;
  opacity: ${(props) => (props.isDisable ? 0.7 : 1)};
  height: 60px;
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
  line-height: 30px;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: #a328d6;
  margin-top: 40px;
`;
