import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CartContext from "../contexts/CartContext";
import GlobalStyle from "../common/GlobalStyles";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Search from "./Search/Search";
import ProductPage from "./Products/ProductPage";
import Home from "./home/Home";
import NewProduct from "./NewProduct/NewProduct";

export default function App() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("Cart"))
  );

  return (
    <>
      <GlobalStyle />
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>HELLO WORD</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/search/:search" element={<Search />} />
            <Route path="/home" element={<Home />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/checkout" element={<div>checkou</div>} />
            <Route path="/admin/newproduct" element={<NewProduct />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}
