// src/Pages/ProductListingPage/RotaProduto.tsx
import React from 'react';
import Produtos from './Produtos'; // ajuste o caminho conforme necessário
import HeaderProduto from './HeaderProdutos/HeaderProduto';

const ProductListingPage: React.FC = () => {
  return (
    <>
      <HeaderProduto />
      <Produtos />
      
    </>
  );
};

export default ProductListingPage;
