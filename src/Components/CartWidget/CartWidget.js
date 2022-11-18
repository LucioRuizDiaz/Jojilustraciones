import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Context } from "../../Context/CustomContext";

export const CartWidget = () => {
  const colorCarrito = "#f7f5dd";
  const { cantidad } = useContext(Context);

  return (
    <>
      {cantidad === 0 ? (
        <ShoppingCartIcon
          sx={{ color: colorCarrito }}
          fontSize="large"
          style={styles.carrito}
        />
      ) : (
        <>
          <p>{cantidad}</p>
          <ShoppingCartIcon
            sx={{ color: colorCarrito }}
            fontSize="large"
            style={styles.carrito}
          />
        </>
      )}
    </>
  );
};

const styles = {
  carrito: {
    marginRight: 30,
  },
  carritoOutlined: {
    display: "flex",
    justifyContent: "center",
  },
};
