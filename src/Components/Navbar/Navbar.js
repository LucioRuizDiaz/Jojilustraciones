import React from "react";
import logo from "../../multimedia/img/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { styles } from "./Navbar.style";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const categorias = [
    { nombre: "prints", id: 0, ruta: "/categoria/print" },
    { nombre: "stickers", id: 1, ruta: "/categoria/sticker" },
  ];

  return (
    <header style={styles.container}>
      <Link to="/" style={styles.images}>
        <img style={styles.images} src={logo} alt="tienda online" />
      </Link>

      <h1 style={styles.titulo}> Jojilustraciones</h1>
      <nav>
        {categorias.map((categoria) => {
          return (
            <NavLink
              key={categoria.id}
              style={styles.categorias}
              to={categoria.ruta}
            >
              {categoria.nombre}
            </NavLink>
          );
        })}
      </nav>
      <NavLink to="/cart">
        <CartWidget />
      </NavLink>
    </header>
  );
};

export default Navbar;
