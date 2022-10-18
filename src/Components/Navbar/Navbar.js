import React from "react";
import logo from "../../multimedia/img/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { styles } from "./Navbar.style";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const categorias = [
    { nombre: "electronics", id: 0, ruta: "/categoria/electronics" },
    { nombre: "jewelery", id: 1, ruta: "/categoria/jewelery" },
    { nombre: "men's clothing", id: 2, ruta: "/categoria/men's clothing" },
    { nombre: "women's clothing", id: 3, ruta: "/categoria/women's clothing" },
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

      <CartWidget />
    </header>
  );
};

export default Navbar;
