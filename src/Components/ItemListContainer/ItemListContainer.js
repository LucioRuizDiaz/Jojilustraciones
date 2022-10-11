import React from "react";
import { ItemCount } from "./ItemCount";

export const ItemListContainer = ({ greeting, stock, inicial, onAdd }) => {
  return (
    <>
      <h2>{greeting}</h2>
      <ItemCount stock={stock} inicial={inicial} onAdd={onAdd} />
    </>
  );
};
