import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";

const App = () => {
  const mensaje = "Bienvenido a Jojilustraciones";

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={mensaje} />
    </>
  );
};

export default App;
