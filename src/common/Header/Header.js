import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function Header({ children }) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>
        <BsArrowLeftCircle
          size="30px"
          color="#F1C40F"
          onClick={() => {
            navigate("/home");
          }}
        />
      </div>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
