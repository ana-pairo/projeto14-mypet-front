import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "../common/GlobalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>HELLO WORD</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
