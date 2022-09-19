import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/logomarca.png";
import user from "../../assets/img/user-icon.svg";
import search from "../../assets/img/search-icon.svg";
import { searchProductsByName } from "../../services/MyPet_API";

import { useState } from "react";
// import axios from "axios";

export default function Menu() {
  const [form, setForm] = useState({
    search: "",
  });

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ [e.target.name]: e.target.value });
  }
  async function sendForm() {
    if (!form.search) return;
    try {
      const res = await searchProductsByName(form.search);
      navigate(`/search/${form.search}`, { teste: 1 });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <MenuContainer>
        <Logo>
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
        </Logo>

        <Tittle onClick={() => navigate("/")}>MyPets</Tittle>

        <User>
          <img
            src={user}
            alt="userImage"
            onClick={() => navigate("/profile")}
          />
        </User>
      </MenuContainer>

      <ContainerSearchBar>
        <input
          placeholder="Buscar"
          name="search"
          onChange={handleForm}
          value={form.search}
          required
        ></input>
        <img
          alt="searchIcon"
          src={search}
          onClick={() => {
            sendForm();
          }}
        />
      </ContainerSearchBar>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  color: red;
`;
const MenuContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  width: 100%;
  height: 7vh;
`;
const Logo = styled.div`
  width: 15%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 75%;
    height: 75%;
  }
`;
const Tittle = styled.div`
  width: 60%;

  display: flex;
  align-items: center;
  justify-content: left;

  font-weight: 600;
  font-size: 20px;
  color: #34495e;
`;
const User = styled.div`
  width: 15%;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 65%;
    height: 65%;
  }
`;
const ContainerSearchBar = styled.form`
  margin-top: 15px;
  margin-bottom: 35px;
  width: 90%;
  height: 5vh;
  position: relative;

  input {
    width: 100%;
    height: 100%;

    background: #ffffff;
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border: none;
    outline: none;
    padding-left: 50px;
  }
  img {
    position: absolute;
    right: 20px;
    bottom: 10px;
  }
`;
