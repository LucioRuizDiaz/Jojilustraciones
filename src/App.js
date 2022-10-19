import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./Containers/ItemListContainer/ItemListContainer";
import { Cart } from "./Containers/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const mensaje = "Bienvenido a Jojilustraciones";

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting={mensaje} />}
        ></Route>
        <Route
          path="/categoria/:id"
          element={<ItemListContainer greeting={mensaje} />}
        ></Route>
        <Route path="/producto/:id" element={<ItemDetailContainer />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
