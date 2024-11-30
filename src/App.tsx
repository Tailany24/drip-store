import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import ProductListingPage from './Pages/ProductListingPage/RotaProduto';
import ProductViewPage from './Pages/ProductViewPage/ProductViewPage'; // Importar a página de visualização do produto

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Produtos" element={<ProductListingPage />} />
        <Route path="/ProductViewPage/:id" element={<ProductViewPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

