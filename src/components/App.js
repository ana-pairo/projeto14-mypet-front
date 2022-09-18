import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../common/Footer/Footer";

import GlobalStyle from "../common/GlobalStyles";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import ProductDescription from "./Products/ProductDescription";
import Register from "./Register/Register";
import Search from "./Search/Search";

export default function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(true)
  const [search, setSearch] = useState()

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>

      <Menu menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} search={search} setSearch={setSearch}/>

        <Routes>

          <Route path="/" element={<div>HELLO WORD</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/home" element={<Footer />} />
          <Route path="/product/:productId" element={<ProductDescription />} />
          <Route path="/search/:search" element={<Search search={search} setSearch={setSearch}/>} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/checkout" element={<div>checkou</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
