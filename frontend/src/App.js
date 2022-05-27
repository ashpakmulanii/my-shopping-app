import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { HomeScreen } from "./Screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductScreen } from "./Screens/ProductScreen";
import { CartScreen } from "./Screens/CartScreen";
import React from "react";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="cart" element={<CartScreen />}>
          <Route path=":id" element={<CartScreen />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
