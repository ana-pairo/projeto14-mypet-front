import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "../common/GlobalStyles";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Register from "./Register/Register";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>HELLO WORD</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/home" element={<div>home</div>} />
          <Route path="/carrinho" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
