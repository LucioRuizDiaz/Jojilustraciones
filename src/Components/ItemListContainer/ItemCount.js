import React, { useState } from "react";

export const ItemCount = ({ stock, inicial, onAdd }) => {
  const [cont, setCont] = useState(inicial);

  const clickAdd = () => {
    if (stock != 0) {
      if (cont < stock) setCont(cont + 1);
    }
  };
  const clickRestar = () => {
    if (stock != 0) {
      if (cont > inicial) setCont(cont - 1);
    }
  };
  const clickOnAdd = () => {
    onAdd();
  };

  return (
    <div>
      <h1>{cont}</h1>
      <div>
        <button onClick={clickRestar}>Restar</button>
        <button onClick={clickOnAdd}>Agregar</button>
        <button onClick={clickAdd}>Sumar</button>
      </div>
      <h3>El stock disponible es = {stock}</h3>
    </div>
  );
};
