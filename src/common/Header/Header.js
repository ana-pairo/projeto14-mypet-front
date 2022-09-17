import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircle, BsSearch } from "react-icons/bs";

export default function Header({ children, showSearchBox, setShowSearchBox }) {
  const navigate = useNavigate();
  return (
    <Wrapper showSearchBox={showSearchBox}>
      <Top>
        <BsArrowLeftCircle
          size="30px"
          color="#F1C40F"
          onClick={() => {
            navigate("/home");
          }}
        />
        {children}
        <BsSearch
          size="30px"
          color="#F1C40F"
          onClick={() => {
            setShowSearchBox(!showSearchBox);
          }}
        />
      </Top>
      <SearchBox>
        <input placeholder="Pesquisar no carrinho" />
      </SearchBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 10px 10px 20px 10px;
  height: ${(props) => (props.showSearchBox ? "100px" : "50px")};
  transition: height 0.5s;
  width: 100%;
  position: relative;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  overflow-y: hidden;
`;

const SearchBox = styled.div`
  height: 50px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    height: 40px;
    width: 90%;
    text-decoration: none;
    border: none;
    margin: 15px 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.5);
    padding-left: 20px;
    outline: none;
    background: rgba(196, 196, 196, 0.35);
    border-radius: 30px;

    border: 1px solid #d1d1d1;
    box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.07);
  }
  input::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  font-weight: 600;
  color: #f1c40f;
`;
