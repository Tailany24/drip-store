import React, { useState } from 'react';
import colecao1 from '../../components/Logo/colecao1.png';
import colecao2 from '../../components/Logo/colecao2.png';
import colecao3 from '../../components/Logo/colecao3.png';
import produto1 from '../../components/Logo/produto1.png';
import frame1 from '../../components/Logo/Frame1.png';
import produto2 from '../../components/Logo/produto2.png';
import frame2 from '../../components/Logo/Frame2.png';
import produto3 from '../../components/Logo/produto3.png';
import frame3 from '../../components/Logo/Frame3.png';
import produto4 from '../../components/Logo/produto4.png';
import frame4 from '../../components/Logo/Frame4.png';
import produto5 from '../../components/Logo/produto5.png';
import frame5 from '../../components/Logo/Frame5.png';


const colecaoImages = [colecao1, colecao2, colecao3];
const colecaoproduto = [
  { produto: produto1, frame: frame1, label: 'Camisetas' },
  { produto: produto2, frame: frame2, label: 'Calças' },
  { produto: produto3, frame: frame3, label: 'Bonés' },
  { produto: produto4, frame: frame4, label: 'Headphones' },
  { produto: produto5, frame: frame5, label: 'Tênis' },
];

const ProductOptions: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div>
      {/* Coleções */}
      <div className="collections-section">
        <h2 className="collections-title">Coleções em destaque</h2>
        <div className="collections-cards">
          {colecaoImages.map((src, index) => (
            <div key={index} className="collection-card">
              <img src={src} alt={`Coleção ${index}`} className="collection-image" />
              <button className="collection-button">Comprar</button>
            </div>
          ))}
        </div>
      </div>

      {/* Produtos */}
      <div className="collections-product">
        <h2 className="Product-title">Produtos em Destaque</h2>
        <div className="Product-icons">
          {colecaoproduto.map((item, index) => (
            <div
              key={index}
              className="Product-card"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="Product-content">
                <img
                  src={hoverIndex === index ? item.frame : item.produto}
                  alt={item.label}
                  className="Product-image"
                />
                <p className="Product-label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
