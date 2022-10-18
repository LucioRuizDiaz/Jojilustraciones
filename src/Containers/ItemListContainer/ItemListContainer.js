import React, { useEffect, useState } from "react";
// import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greeting }) => {
  // const stock = 0;
  // const inicial = 1;

  // const onAdd = (cont) => {
  //   console.log(`Agregado ${cont} productos al carrito!`);
  // };

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        console.log(data);
        setProductos(data);
      } catch {
        console.log("error");
      } finally {
        setCargando(false);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <h2>{greeting}</h2>
      {
        <>
          {cargando ? (
            <h1>Cargando....</h1>
          ) : (
            <ItemList productos={productos} />
          )}
        </>
      }

      {/* <ItemCount stock={stock} inicial={inicial} onAdd={onAdd} /> */}
    </>
  );
};
