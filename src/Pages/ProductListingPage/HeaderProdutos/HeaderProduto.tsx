import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa'; 
import logo from '../../../components/Logo/logo.png';
import './HeaderProduto.css';

const HeaderProduto: React.FC = () => {
  const location = useLocation();

  // Exibir a Navbar nas rotas "/Produtos" e "/ProductViewPage/:id"
  const shouldShowNavbar = location.pathname === '/Produtos' || location.pathname.startsWith('/ProductViewPage');

  if (!shouldShowNavbar) {
    return null;
  }

  return (
    <>
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
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link 
              to="/Produtos" 
              className={(location.pathname === '/Produtos' || location.pathname.startsWith('/ProductViewPage')) ? 'active' : ''}
            >
              Produtos
            </Link>
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

export default HeaderProduto;
