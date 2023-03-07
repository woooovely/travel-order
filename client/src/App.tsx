import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutWashington from './pages/about/washington';
import CompletePage from './pages/complete';
import ProductLists from './pages/lists';
import MainPage from './pages/main';
import OrderPage from "./pages/order";
import SummaryPage from "./pages/summary";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="lists" element={<ProductLists />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
        <Route path="/check" element={<SummaryPage />}></Route>
        <Route path="/complete" element={<CompletePage />}></Route>
        <Route path="/about/usa-washington" element={<AboutWashington />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;