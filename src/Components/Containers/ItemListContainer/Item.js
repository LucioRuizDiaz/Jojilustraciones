import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <Card sx={{ width: 300 }} style={style.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={producto.image}
          alt={producto.title}
          style={style.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${producto.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/producto/" + producto.id}>
          <Button size="small" color="primary">
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

const style = {
  card: {
    width: "30vw",
    height: "100vh",
    marginBottom: 25,
  },

  img: {
    height: "70vh",
  },
};

export default Item;
