import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../common/Footer/Footer";

import GlobalStyle from "../common/GlobalStyles";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import ProductDescription from "./Products/ProductDescription";
import Register from "./Register/Register";

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
          <Route path="/cadastro" element={<Register />} />
          <Route path="/home" element={<Footer />} />
          <Route path="/product/:productId" element={<ProductDescription />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/checkout" element={<div>checkou</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
