import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import OrderPage from "./pages/order";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;