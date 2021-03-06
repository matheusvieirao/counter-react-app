import React, { Component } from "react";

// stateless functional component (quando a classe nao tem nenhum estado ou metodo, podemos usar uma funcao ao inves de classe)
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Carrinho de Compras{" "}
        <span className="badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
