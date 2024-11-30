import React from 'react';
import { Link } from 'react-router-dom';
import cdesconto from '../../components/Logo/cdesconto.png';
import sdesconto from '../../components/Logo/sdesconto.png';

const descontoImg = [cdesconto, cdesconto, sdesconto, sdesconto, sdesconto, sdesconto];
const discountImgs = [sdesconto, sdesconto, sdesconto, sdesconto, sdesconto, sdesconto, sdesconto, sdesconto, sdesconto];

const ProductList: React.FC = () => {
  return (
    <div className="list-product">
      {descontoImg.map((src, index) => (
        <Link key={index} to={`/ProductViewPage/${index}`} className="card-product">
          <img src={src} alt={`Desconto ${index}`} className="image-discount" />
        </Link>
      ))}
      {discountImgs.map((src, index) => (
        <Link key={index} to={`/ProductViewPage/${index}`} className="card-product">
          <img src={src} alt={`Desconto ${index}`} className="image-discount" />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
