import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/" + id);
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
      {
        <>
          {cargando ? (
            <h1>Cargando....</h1>
          ) : (
            <ItemDetail
              productos={productos}
              style={{ display: "flex", justifyContent: "center" }}
            />
          )}
        </>
      }
    </>
  );
};
