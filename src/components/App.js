import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "../common/GlobalStyles";
import Login from "./Login/Login";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
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
