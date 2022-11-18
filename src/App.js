import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemDetailContainer } from "./Components/Containers/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./Components/Containers/ItemListContainer/ItemListContainer";
import { Cart } from "./Components/Containers/Cart/Cart";
import { CustomProvider } from "./Context/CustomContext";
import { Form } from "./Components/Containers/Cart/Form";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const mensaje = "Bienvenido a Jojilustraciones";

  return (
    <CustomProvider>
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
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </CustomProvider>
  );
};

export default App;
