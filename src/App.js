import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
// import AddItem from "./components/AddItems";

function App() {
  const products = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList product={products}/>    //product is prop name 
      </main>    

      <Footer />
    </>
  );
}

export default App;