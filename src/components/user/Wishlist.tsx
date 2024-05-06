import React from 'react';

interface Product {
  id: number;
  name: string;
  format: string;
  color: string;
  price: number;
}

interface WishlistProps {
  products: Product[];
}

const Wishlist: React.FC<WishlistProps> = ({ products }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Lista de Deseos</h2>
      {products.map(product => (
        <div key={product.id} className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-4">
            <div className={`h-16 w-16 bg-${product.color}-300`}></div>
            <div>
              <h3>{product.name}</h3>
              <p>Formato: {product.format}</p>
              <p>Color: {product.color}</p>
              <p>${product.price.toFixed(2)}</p>
            </div>
          </div>
          <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-400">Agregar</button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
