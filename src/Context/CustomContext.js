import React, { useEffect, useState, createContext } from "react";

export const Context = createContext();

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCantidad(cart.reduce((total, item) => total + item.cantidad, 0));
    setTotal(
      cart.reduce((total, item) => total + item.cantidad * item.price, 0)
    );
  }, []);

  const addItem = (products, cont) => {
    if (isInCart(products.id)) {
      const modificado = cart.map((producto) => {
        if (producto.id === products.id) {
          producto.cont += cont;
        }
        return producto;
      });
      setCart(modificado);
    } else {
      setCart([...cart, { ...products, cont }]);
    }
    setCantidad(cantidad + cont);
    setTotal(total + products.price * cont);
  };

  const deleteItem = (id) => {
    const found = cart.find((producto) => producto.id === id);

    setCart(cart.filter((item) => item.id !== id));
    setCantidad(cantidad - found.cont);
    setTotal(total + found.price * found.cont);
  };

  const isInCart = (id) => cart.some((item) => item.id === id);

  const clear = () => {
    setCart([]);
    setCantidad(0);
    setTotal(0);
  };

  return (
    <Context.Provider
      value={{
        cart,
        cantidad,
        total,
        addItem,
        deleteItem,
        isInCart,
        clear,
      }}
    >
      {children}
    </Context.Provider>
  );
};
