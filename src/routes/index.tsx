import Checkout from "pages/Checkout";
import Home from "pages/Home";
import { Routes, Route } from "react-router-dom";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="checkout" element={<Checkout />} />
  </Routes>
);

export default MainRoutes;
