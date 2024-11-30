// BuyBox.tsx
import React from 'react';

interface BuyBoxProps {
  price: string;
  discount: string;
  buttonLabel: string;
}

const BuyBox: React.FC<BuyBoxProps> = ({ price, discount, buttonLabel }) => {
  return (
    <div className="buy-box">
      <h3>Preço: {price}</h3>
      <p>Desconto: {discount}</p>
      <button>{buttonLabel}</button>
    </div>
  );
};

export default BuyBox;
