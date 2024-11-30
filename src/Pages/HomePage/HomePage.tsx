import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import ProductOptions from '../../components/ProductOptions/ProductOpition';
import Section from '../../components/Section/Section';
import ProductList from '../../components/ProductListing/Listing';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Section title="Carrossel">
        <Carousel />
      </Section>

      <Section title="Coleções em Destaque">
        <ProductOptions />
      </Section>

      <Section title="Produtos em alta">
      <div className="highlighted-header">
        <h2 className="highlighted-title">Produtos em alta</h2>
        <button className="view-more-button">Ver todos</button>
      </div>
      <ProductList />
      </Section>
    </div>
  );
};

export default HomePage;
