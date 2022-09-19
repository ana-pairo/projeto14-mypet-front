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
import TypeSearch from "./Search/TypeSearch";
import Checkout from "./Checkout/Checkout";
import Payment from "./Checkout/Payment";
import CompletedPurchase from "./Checkout/ CompletedPurchase";
import CheckoutContext from "../contexts/CheckoutContext";
import Profile from "./Profile/Profile";


export default function App() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("Cart"))
  );
  const [form, setForm] = useState({
    CEP:"",
    Endereço:"",
    Numero:"",
    Complemento:"",
    Bairro:"",
    Cidade:"",
    Estado:"",
    FormaDeEntrega:"",
    
    CardNumber:"",
    CardName:"",
    CPF:"",
    CardValidData:"",
    CardSecurityCode:"",
  })

  return (
    <>
      <GlobalStyle />
      <CartContext.Provider  value={{ cartItems, setCartItems, form, setForm}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>HELLO WORD</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/search/:search" element={<Search />} />
            <Route path="/:typeSearch" element={<TypeSearch />} />
            <Route path="/home" element={<Home />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/checkout/payment" element={<Payment/>} />
            <Route path="/thankyou" element={<CompletedPurchase/>} />
            <Route path="/admin/newproduct" element={<NewProduct />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
      
    </>
  );
}
