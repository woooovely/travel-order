import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutCastleTown from "./pages/about/castle";
import AboutDortmund from "./pages/about/dortmund";
import AboutLondon from "./pages/about/london";
import AboutWashington from "./pages/about/washington";
import CompletePage from "./pages/complete";
import ProductLists from "./pages/lists";
import MainPage from "./pages/main";
import OrderPage from "./pages/order";
import SummaryPage from "./pages/summary";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="lists" element={<ProductLists />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
          <Route path="/check" element={<SummaryPage />}></Route>
          <Route path="/complete" element={<CompletePage />}></Route>
          <Route
            path="/about/usa-washington"
            element={<AboutWashington />}
          ></Route>
          <Route path="/about/uk-london" element={<AboutLondon />}></Route>
          <Route
            path="/about/germany-dortmund"
            element={<AboutDortmund />}
          ></Route>
          <Route
            path="/about/portland-castletown"
            element={<AboutCastleTown />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
