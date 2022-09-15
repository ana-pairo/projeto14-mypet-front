import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "../common/GlobalStyles";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";

export default function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(true)

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>

      <Menu menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}/>

        <Routes>

          <Route path="/" element={<div>HELLO WORD</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<div>cadastro</div>} />
          <Route path="/home" element={<div>home</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
