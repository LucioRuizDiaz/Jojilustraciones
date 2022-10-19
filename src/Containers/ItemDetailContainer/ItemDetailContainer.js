import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 50 }}
            >
              <CircularProgress color="secondary" />
            </Box>
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
