import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import CompletePage from './pages/complete';
import OrderPage from "./pages/order";
import SummaryPage from "./pages/summary";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderPage />}></Route>
        <Route path="/check" element={<SummaryPage />}></Route>
        <Route path="/complete" element={<CompletePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;