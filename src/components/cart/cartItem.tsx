import React from 'react';

interface CartItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    color: string;
    quantity: number;
  };
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
}

const cartItem: React.FC<CartItemProps> = ({ product, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
      <div className="flex items-center">
        <div className="w-24 h-24 bg-purple-300 mr-4"></div> {/* Placeholder for product image */}
        <div>
          <h3 className="font-bold">{product.name}</h3>
          <p>{product.price.toFixed(2)}</p>
          <div className="flex items-center">
            <button onClick={() => onUpdateQuantity(product.id, product.quantity - 1)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => onUpdateQuantity(product.id, product.quantity + 1)}>+</button>
          </div>
        </div>
      </div>
      <button className="text-red-500" onClick={() => onRemove(product.id)}>X</button>
    </div>
  );
};

export default cartItem;
