import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation(); // Para obter a rota atual

  // Exibir a Navbar apenas na rota "/"
  if (location.pathname !== '/') {
    return null;
  }
  
  return (
    <nav>
      <ul>
        <li>
          {/* Web */}
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Produtos">Produtos</Link>
        </li>
        <li>
          <Link to="/categorias">Categorias</Link>
        </li>
        <li>
          <Link to="/meus-pedidos">Meus Pedidos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

