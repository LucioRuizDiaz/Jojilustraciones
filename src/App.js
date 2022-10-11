import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";

const App = () => {
  const mensaje = "Bienvenido a Jojilustraciones";
  const stock = 9;
  const inicial = 1;

  const onAdd = () => {
    console.log("Agregado al carrito!");
  };

  return (
    <>
      <Navbar />
      <ItemListContainer
        greeting={mensaje}
        stock={stock}
        inicial={inicial}
        onAdd={onAdd}
      />
    </>
  );
};

export default App;
