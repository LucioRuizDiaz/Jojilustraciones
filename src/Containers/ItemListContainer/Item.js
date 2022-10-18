import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Item = ({ producto }) => {
  return (
    <Card sx={{ width: 300 }} style={style.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={producto.image}
          alt={producto.title}
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
        <Button size="small" color="primary">
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
};

const style = {
  card: {
    width: "30vw",
    height: "60vh",
    marginBottom: 25,
  },
};

export default Item;
