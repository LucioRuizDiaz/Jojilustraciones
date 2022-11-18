import React, { useEffect, useState } from "react";

import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { getDocs, collection, query, where } from "firebase/firestore";
import { dataBase } from "../../../firebase/firebase";

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  const productCollection = collection(dataBase, "productos");
  const productQuery = id
    ? query(productCollection, where("category", "==", id))
    : productCollection;

  useEffect(() => {
    getDocs(productQuery)
      .then((result) => {
        const listProducts = result.docs.map((item) => {
          return {
            ...item.data(),
            id: item.id,
          };
        });
        setProductos(listProducts);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setCargando(false));
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
    </>
  );
};
