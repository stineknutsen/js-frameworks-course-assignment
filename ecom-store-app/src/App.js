import "./App.css";
import Layout from "./components/Layout";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
        <Route path="/checkout/success" element={<h1>Checkout Success</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
