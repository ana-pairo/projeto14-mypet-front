import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60%;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: fixed;
  top: 70px;
  overflow-y: scroll;
  padding: 20px;
`;

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 61%;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: fixed;
  top: 70px;
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

const Image = styled.div`
  width: 75%;
  min-width: 250px;
  height: 300px;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 8px -3px #333;
  object-fit: fill;
  position: absolute;
  top: 10px;

  img {
    max-height: 280px;
    max-width: 240px;
  }
`;

const Details = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 330px;
`;

const Title = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
  color: #000000;
`;

const Description = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;
  resize: vertical;
`;

const AddCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 14.5%;

  button {
    height: 50px;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
    background: #f1c40f;
    border-radius: 30px;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    line-height: 22px;
    font-weight: 700;
    color: #ffffff;
    outline: #a328d6;
    margin-top: 5px;
  }
`;

const Price = styled.div`
  width: 75%;
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

export {
  Wrapper,
  Header,
  Container,
  NotFound,
  Image,
  Details,
  Title,
  Description,
  AddCart,
  Price,
};
