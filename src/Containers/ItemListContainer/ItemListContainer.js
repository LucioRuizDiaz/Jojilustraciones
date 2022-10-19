import React, { useEffect, useState } from "react";
// import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 50 }}
            >
              <CircularProgress color="secondary" />
            </Box>
          ) : (
            <ItemList productos={productos} />
          )}
        </>
      }

      {/* <ItemCount stock={stock} inicial={inicial} onAdd={onAdd} /> */}
    </>
  );
};
