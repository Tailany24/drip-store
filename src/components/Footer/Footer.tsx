import React from 'react';
import './Footer.css'; // Estilos separados
import logo from '../Logo/logo footer.png'; // Importe o logo
import facebookIcon from '../Logo/face footer.png'; // Importe o ícone do Facebook
import instagramIcon from '../Logo/insta footer.png'; // Importe o ícone do Instagram
import twitterIcon from '../Logo/twitter footer.png'; // Importe o ícone do Twitter

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo" />
          <p className="footer-lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi animi cupiditate quibusdam accusamus ipsum nisi fuga culpa commodi, 
            veniam consectetur sed eligendi. Modi consequatur velit officiis, quae ipsum aut dolorem.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook-icon">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>
        </div>

        <div className="footer-info">
          <div className="informacao">
            <h1>Informação</h1>
            <ul>
              <li>Sobre drip Story</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus Pedidos</li>
            </ul>
          </div>
          <div className="categorias">
            <h1>Categorias</h1>
            <ul>
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </div>
          <div className="contato">
            <h1>Contatos</h1>
            <p>
              AV. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
              <br /> <br />
              &#40;85&#41; 3051-3411
            </p>
          </div>
        </div>
      </div>
      
      <hr className="footer-line" />
      <div className="footer-bottom">
        <p>&copy; {currentYear} Digital College</p>
      </div>
    </footer>
  );
};

export default Footer;
