import React from "react";
import { ItemCount } from "./ItemCount";

export const ItemListContainer = ({ greeting }) => {
  const stock = 0;
  const inicial = 1;

  const onAdd = (cont) => {
    console.log(`Agregado ${cont} productos al carrito!`);
  };

  return (
    <>
      <h2>{greeting}</h2>
      <ItemCount stock={stock} inicial={inicial} onAdd={onAdd} />
    </>
  );
};
