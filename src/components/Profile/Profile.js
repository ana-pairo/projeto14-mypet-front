import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import userImage from "../../assets/img/user-icon.svg";
import FooterButton from "../../common/Buttons/FooterButton";
import { getClientData, deleteSession } from "../../services/MyPet_API";
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function Profile() {
  const navigate = useNavigate();
  let user;

  async function logOut() {
    if (window.confirm("Deseja realmente encerrar sua sessão?")) {
      try {
        await deleteSession(JSON.parse(localStorage.getItem("UserToken")));

        localStorage.removeItem("UserToken");

        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  }

  if (JSON.parse(localStorage.getItem("UserToken")) === null) {
    return (
      <>
        <Header>Perfil</Header>
        <Container>
          <img alt="userImage" src={userImage} />
          <FooterButton onClick={() => navigate("/login")}>Entrar</FooterButton>
        </Container>
        <Footer />
      </>
    );
  } else {
    getClientData(JSON.parse(localStorage.getItem("UserToken")))
      .then((res) => (user = res.data.name))
      .catch((err) => console.log(err));

    return (
      <>
        <Header>Perfil</Header>
        <Container>
          <img alt="userImage" src={userImage} />
          <RiLogoutBoxRLine onClick={logOut} size="30px" color="#f1c40f" />
        </Container>
        <Footer />
      </>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 62%;
  transition: height 0.5s;
  align-items: center;
  position: absolute;
  top: 60px;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 20px;
    height: 150px;
    margin-bottom: 30px;
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
    color: rgb(0, 0, 0, 0.5);
    margin-bottom: 20px;
  }
`;
