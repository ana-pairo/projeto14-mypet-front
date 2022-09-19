import styled from "styled-components";

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
  height: 62%;
  transition: height 0.5s;
  align-items: center;
  position: absolute;
  top: 60px;
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
  font-weight: 500;
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
  justify-content: space-between;
`;

const Price = styled.div`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
`;

const Counter = styled.div`
  height: 30px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Quantity = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
`;

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

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 61%;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: fixed;
  top: 100px;
  overflow-y: scroll;
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  color: rgb(0, 0, 0, 0.5);
  img {
    width: 80%;
    object-fit: cover;
    margin-bottom: 20px;
  }
`;

export {
  Wrapper,
  ListContainer,
  Product,
  Image,
  DetailsContainer,
  Details,
  Title,
  Trash,
  LineSeparator,
  PriceDetails,
  Price,
  Counter,
  Quantity,
  Total,
  FinalPrice,
  EmptyCart,
};
