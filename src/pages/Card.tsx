import React from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type CardProps = {
  product: Product;
};

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="border p-4 shadow rounded">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="font-bold text-lg">{product.title}</h2>
      <p className="text-sm text-gray-600">${product.price}</p>
    </div>
  );
};

export default Card;
