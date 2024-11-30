import React from 'react';
import HeaderProduto from '../ProductListingPage/HeaderProdutos/HeaderProduto';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductList from '../../components/ProductListing/Listing';
import Section from '../../components/Section/Section'; // Certifique-se de importar a Section
import './ProductViewPage.css'; // Adicionei a importação do arquivo CSS, caso necessário.

const ProductViewPage: React.FC = () => {
  return (
    <>
      <HeaderProduto />
      <ProductCard />
      
      <div className="product-view-container">
        <Section title="Produtos Relacionados">
          <div className="high-header">
            <h2 className="high-title">Produtos Relacionados</h2>
            <button className="view-more">Ver todos</button>
          </div>
          
          <ProductList />
        </Section>
      </div>
    </>
  );
};

export default ProductViewPage;
