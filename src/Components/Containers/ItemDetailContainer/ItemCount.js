import React, { useState } from "react";

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
      <div style={styles.container}>
        <div style={styles.botones}>
          <button onClick={clickRestar}>Restar</button>
          <p style={styles.num}>{cont}</p>
          <button onClick={clickAdd}>Sumar</button>
        </div>
        <div>
          <button disabled={stock === 0} onClick={clickOnAdd}>
            Agregar
          </button>
        </div>
      </div>

      <h3>
        {stock === 0
          ? "No hay stock disponible"
          : ` El stock disponible es = ${stock}`}
      </h3>
    </div>
  );
};

const styles = {
  container: {
    height: 70,
    display: "flex",
    justifyContent: "spaceAround",
    flexDirection: "column",
  },
  botones: {
    height: 20,
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
  },
  num: {},
};
