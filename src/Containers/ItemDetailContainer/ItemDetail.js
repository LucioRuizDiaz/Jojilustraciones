import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { dividerClasses } from "@mui/material";

export const ItemDetail = ({ productos }) => {
  return (
    <div style={style.container}>
      <Card sx={{ width: 500 }}>
        <CardMedia
          component="img"
          height="500"
          image={productos.image}
          alt={productos.title}
        />
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
          <Link to={"/cart"}>
            <Button size="small">Agregar al carrito</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

const style = {
  container: { display: "flex", justifyContent: "center", marginTop: 50 },
};
