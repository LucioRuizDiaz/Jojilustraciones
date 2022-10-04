import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
  const colorCarrito = "#f7f5dd";

  return (
    <ShoppingCartIcon
      sx={{ color: colorCarrito }}
      fontSize="large"
      style={styles.carrito}
    />
  );
};

const styles = {
  carrito: {
    marginRight: 30,
  },
};
