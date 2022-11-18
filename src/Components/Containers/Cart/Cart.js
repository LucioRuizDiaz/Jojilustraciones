import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Context/CustomContext";
import { dataBase } from "../../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const Cart = () => {
  const { cart, total, clear, cantidad } = useContext(Context);
  const [finCompra, setFinCompra] = useState(true);

  const comprador = {
    nombre: "Gaston",
    apellido: "AAAAAAAAAAaaa",
    email: "aAAAa@test.com",
  };

  const finalizarCompra = () => {
    const ventasCollection = collection(dataBase, "ventas");
    addDoc(ventasCollection, {
      comprador,
      items: cart,
      total: total,
      date: serverTimestamp(),
    });
    setFinCompra(false);
    clear();
  };

  return (
    <>
      {cart.length === 0 ? (
        <h1>
          No hay productos agregados al carrito, podes agregarlos desde
          <Link to="/"> acá </Link>
        </h1>
      ) : (
        <>
          {cart.map((producto) => (
            <h3 key={producto.id}>
              {producto.title} {producto.cont} ${producto.price * producto.cont}
            </h3>
          ))}
          <h4>
            Tenes {cantidad} productos por un precio de ${total}
          </h4>
          {finCompra ? (
            <button onClick={finalizarCompra}>Finalizar compra</button>
          ) : (
            <h2>Gracias por tu compra!</h2>
          )}
        </>
      )}
    </>
  );
};
