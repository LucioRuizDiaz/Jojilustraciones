import React, { useEffect, useState } from "react";
// import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  // const stock = 0;
  // const inicial = 1;

  // const onAdd = (cont) => {
  //   console.log(`Agregado ${cont} productos al carrito!`);
  // };

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  const URL_BASE = "https://fakestoreapi.com/products";
  const URL_ID = `${URL_BASE}/category/${id}`;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(id ? URL_ID : URL_BASE);
        const data = await response.json();

        setProductos(data);
      } catch {
        console.log("error");
      } finally {
        setCargando(false);
      }
    };

    getProducts();
  }, [id]);

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