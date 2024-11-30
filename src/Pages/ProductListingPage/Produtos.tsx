import React from 'react';
import FilterSection from '../../components/FilterGroup/Filter';
import ProductList from '../../components/ProductListing/Listing';
import '../../Pages/ProductListingPage/StyleProdutos/Produtos.css';

const Produtos: React.FC = () => {
  return (
    <div className="product-listing-page">
      <div className="header">
        <div className="title-row">
          <h2>Resultados para "Tênis" -</h2>
          <div className="product-info">
            <span>389 produtos</span>
          </div>
          <div className="sort-container">
            <label htmlFor="sort-options" className="sort-label">
              Ordenar por:
              <select id="sort-options" className="sort-dropdown">
                <option value="relevance">Mais relevantes</option>
                <option value="lowest-price">Menor preço</option>
                <option value="highest-price">Maior preço</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="content">
        <FilterSection />
        <ProductList />
      </div>
    </div>
  );
};

export default Produtos;
