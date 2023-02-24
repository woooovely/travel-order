import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import OrderPage from "./pages/order";
import SummaryPage from "./pages/summary";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderPage />}></Route>
        <Route path="/check" element={<SummaryPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;