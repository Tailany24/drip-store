import React from 'react';

const Filter: React.FC = () => {
  return (
    <aside className="filter-section">
      <h3>Filtrar por</h3>
      <div className="filter-category">
        <h4>Marca</h4>
        <ul>
          <li><input type="checkbox" id="adiddas" /> <label htmlFor="adiddas">Adiddas</label></li>
          <li><input type="checkbox" id="calenciaga" /> <label htmlFor="calenciaga">Calenciaga</label></li>
          <li><input type="checkbox" id="k-swiss" /> <label htmlFor="k-swiss">K-Swiss</label></li>
          <li><input type="checkbox" id="nike" /> <label htmlFor="nike">Nike</label></li>
          <li><input type="checkbox" id="puma" /> <label htmlFor="puma">Puma</label></li>
        </ul>
      </div>
      <div className="filter-category">
        <h4>Categoria</h4>
        <ul>
          <li><input type="checkbox" id="esporte-lazer" /> <label htmlFor="esporte-lazer">Esporte e Lazer</label></li>
          <li><input type="checkbox" id="casual" /> <label htmlFor="casual">Casual</label></li>
          <li><input type="checkbox" id="utilitario" /> <label htmlFor="utilitario">Utilitário</label></li>
          <li><input type="checkbox" id="corrida" /> <label htmlFor="corrida">Corrida</label></li>
        </ul>
      </div>
      <div className="filter-category">
        <h4>Gênero</h4>
        <ul>
          <li><input type="checkbox" id="masculino" /> <label htmlFor="masculino">Masculino</label></li>
          <li><input type="checkbox" id="feminino" /> <label htmlFor="feminino">Feminino</label></li>
          <li><input type="checkbox" id="unisex" /> <label htmlFor="unisex">Unisex</label></li>
        </ul>
      </div>
      <div className="filter-category estado-category">
        <h4>Estado</h4>
        <ul>
          <li><input type="checkbox" id="novo" /> <label htmlFor="novo">Novo</label></li>
          <li><input type="checkbox" id="usado" /> <label htmlFor="usado">Usado</label></li>
        </ul>
      </div>
    </aside>
  );
};

export default Filter;
