import styled from "styled-components";

const FormsStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  position: relative;
  max-width: 600px;
  input {
    height: 58px;
    text-decoration: none;
    opacity: ${(props) => (props.isDisable ? 0.8 : 1)};
    border: none;
    margin-top: 13px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.5);
    padding-left: 40px;
    padding-right: 60px;
    outline: none;
    background: rgba(196, 196, 196, 0.35);
    border-radius: 30px;
  }
  input::placeholder {
    color: rgba(0, 0, 0, 0.5);
    opacity: ${(props) => (props.isDisable ? 0.5 : 1)};
  }
`;

export default FormsStyle;
