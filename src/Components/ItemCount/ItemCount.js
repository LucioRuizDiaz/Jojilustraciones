import React, { useState, useEffect } from "react";

export const ItemCount = ({ stock, inicial, onAdd }) => {
  const [cont, setCont] = useState(inicial);

  const clickAdd = () => {
    if (cont < stock) setCont(cont + 1);
  };
  const clickRestar = () => {
    if (cont > 1) setCont(cont - 1);
  };
  const clickOnAdd = () => {
    onAdd(cont);
  };

  return (
    <div>
      <h1>{cont}</h1>
      <div>
        <button onClick={clickRestar}>Restar</button>
        <button disabled={stock === 0} onClick={clickOnAdd}>
          Agregar
        </button>
        <button onClick={clickAdd}>Sumar</button>
      </div>
      <h3>El stock disponible es = {stock}</h3>
    </div>
  );
};
