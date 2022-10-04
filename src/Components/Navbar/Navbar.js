import React from "react";
import logo from "../../multimedia/img/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { styles } from "./Navbar.style";

const Navbar = () => {
  const categorias = [
    { nombre: "Prints", id: 0, ruta: "#" },
    { nombre: "Stickers", id: 1, ruta: "#" },
    { nombre: "Ropa", id: 2, ruta: "#" },
  ];

  return (
    <header style={styles.container}>
      <img style={styles.images} src={logo} alt="tienda online" />
      <h1 style={styles.titulo}> Jojilustraciones</h1>
      <nav>
        {categorias.map((categoria) => {
          return (
            <a
              key={categoria.id}
              style={styles.categorias}
              href={categoria.ruta}
            >
              {categoria.nombre}
            </a>
          );
        })}
      </nav>

      <CartWidget />
    </header>
  );
};

export default Navbar;
