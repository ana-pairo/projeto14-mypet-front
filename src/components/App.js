import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../common/Footer/Footer";

import GlobalStyle from "../common/GlobalStyles";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Search from "./Search/Search";
import ProductDescription from "./Products/ProductDescription";
import Home from "./home/Home";
import NewProduct from "./NewProduct/NewProduct";
import TypeSearch from "./Search/TypeSearch";

export default function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>HELLO WORD</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/product/:productId" element={<ProductDescription />} />
          <Route path="/search/:search" element={<Search />} />
          <Route path="/:typeSearch" element={<TypeSearch />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/checkout" element={<div>checkou</div>} />
          <Route path="/admin/newproduct" element={<NewProduct/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
