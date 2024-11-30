import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import logo from '../Logo/logo.png';
import './Header.css';

const HomePage: React.FC = () => {
  const location = useLocation();
  
  // Exibir a Navbar apenas na rota "/"
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <>
      {/* Cabeçalho para Desktop */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-web" />
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Pesquisar produto..." />
          <button>
            <FaSearch />
          </button>
        </div>

        <div className="auth-links">
          <Link to="/cadastre-se" className="register-link">Cadastre-se</Link>
          <button className="login-button">Entrar</button>
          <FaShoppingCart className="shopping-cart" />
        </div>
      </header>

      <nav>
        <ul>
          <li>
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
    </>
  );
};

export default HomePage;
