import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { getDoc, collection, doc } from "firebase/firestore";
import { dataBase } from "../../../firebase/firebase";

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const productCollection = collection(dataBase, "productos");
    const refDoc = doc(productCollection, id);

    getDoc(refDoc)
      .then((result) => {
        setProductos({
          id: result.id,
          ...result.data(),
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setCargando(false));
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
            <ItemDetail productos={productos} />
          )}
        </>
      }
    </>
  );
};
