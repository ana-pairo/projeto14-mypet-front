import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

import styled from "styled-components";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import FooterButton from "../../common/Buttons/FooterButton";

export default function Cart() {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox}>
        Carrinho
      </Header>
      <ListContainer showSearchBox={showSearchBox}>
        <Product>
          <Image>
            <img src="https://static.petz.com.br/fotos/1660162896325_mini.jpg" />
          </Image>
          <DetailsContainer>
            <Details>
              <Title>Ração super premium a</Title>
              <Trash>
                <BsTrash size="30px" />
              </Trash>
            </Details>
            <LineSeparator />
            <PriceDetails>
              <Price>R$ 3258,56</Price>
              <Counter />
            </PriceDetails>
          </DetailsContainer>
        </Product>
        <Product>
          <Image>
            <img src="https://static.petz.com.br/fotos/1660162896325_mini.jpg" />
          </Image>
          <DetailsContainer>
            <Details>
              <Title>Ração super premium a</Title>
              <Trash>
                <BsTrash size="30px" />
              </Trash>
            </Details>
            <LineSeparator />
            <PriceDetails>
              <Price>R$ 3258,56</Price>
              <Counter />
            </PriceDetails>
          </DetailsContainer>
        </Product>
        <Product>
          <Image>
            <img src="https://static.petz.com.br/fotos/1660162896325_mini.jpg" />
          </Image>
          <DetailsContainer>
            <Details>
              <Title>Ração super premium a</Title>
              <Trash>
                <BsTrash size="30px" />
              </Trash>
            </Details>
            <LineSeparator />
            <PriceDetails>
              <Price>R$ 3258,56</Price>
              <Counter />
            </PriceDetails>
          </DetailsContainer>
        </Product>
      </ListContainer>

      <Total>
        <FinalPrice>
          Total:
          <div>R$ 2584,55</div>
        </FinalPrice>
        <FooterButton
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Checkout
        </FooterButton>
      </Total>

      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => (props.showSearchBox ? "55%" : "62%")};
  transition: height 0.5s;
  align-items: center;
  position: absolute;
  top: ${(props) => (props.showSearchBox ? "110px" : "60px")};
  transition: top 0.5s;
  overflow-y: scroll;
`;

const Product = styled.div`
  margin-top: 10px;
  width: 85%;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 1px 8px -5px #333;
  resize: vertical;
  box-sizing: content-box;
`;

const Image = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: fill;
  }
`;

const DetailsContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  margin-left: 5px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 45px;
`;

const Title = styled.div`
  width: 90%;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  margin-right: 2px;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Trash = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LineSeparator = styled.div`
  width: 100%;
  border-top: 1px solid rgb(0, 0, 0, 0.2);
  margin: 10px 0;
`;

const PriceDetails = styled.div`
  min-height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Price = styled.div`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
`;

const Counter = styled.div``;

const Total = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 12.5%;
`;

const FinalPrice = styled.div`
  width: 70%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  div {
    display: flex;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
  }
`;
