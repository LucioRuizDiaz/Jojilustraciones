import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { Context } from "../../../Context/CustomContext";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ItemDetail = ({ productos }) => {
  const [irCarrito, setIrCarrito] = useState(true);
  const { addItem } = useContext(Context);

  const stock = productos.stock;
  const inicial = 1;

  const onAdd = (cont) => {
    addItem(productos, cont);
    setIrCarrito(false);
  };

  return (
    <div style={style.container}>
      <Card style={style.card} sx={{ width: "80%" }}>
        <CardMedia
          style={style.img}
          component="img"
          image={productos.image}
          alt={productos.title}
        />
        <div style={style.cardContent}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {productos.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productos.description}
            </Typography>
            <Typography variant="h7" color="text.secondary">
              ${productos.price}
            </Typography>
          </CardContent>
          <CardActions>
            {irCarrito ? (
              <ItemCount stock={stock} inicial={inicial} onAdd={onAdd} />
            ) : (
              <Link to={"/cart"}>
                <button>Ir al carrito</button>
              </Link>
            )}
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 100,
    flexDirection: "row",
    height: 900,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  cardContent: {
    height: "100%",
    content: "center",
    width: "30%",
  },
  img: {
    height: "100%",
    width: "70%",
  },
};

//
