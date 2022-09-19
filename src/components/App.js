import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../common/Footer/Footer";

import CartContext from "../contexts/CartContext";
import GlobalStyle from "../common/GlobalStyles";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import ProductPage from "./Products/ProductPage";
import Register from "./Register/Register";

export default function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("Cart"))
  );

  return (
    <>
      <GlobalStyle />
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <BrowserRouter>
          <Menu
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
          <Routes>
            <Route path="/" element={<div>HELLO WORD</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/home" element={<Footer />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/checkout" element={<div>checkou</div>} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}
