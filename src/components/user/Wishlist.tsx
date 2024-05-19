import React from 'react';
import { Image } from "@nextui-org/react";
import { Format, ColorSet } from "@/types/productType";

interface Product {
  id: number;
  name: string;
  format: string;
  color: string;
  price: number;
  formats: Format[];
  colorSets: ColorSet[];
  image: string;
  quantity: number; // Añadir el campo de cantidad
}

interface WishlistProps {
  products: Product[];
}

const getColorGradient = (colors: string[]) => {
  const step = 100 / colors.length;
  return `conic-gradient(${colors.map((color, index) => `${color} ${index * step}%, ${color} ${(index + 1) * step}%`).join(', ')})`;
};

const Wishlist: React.FC<WishlistProps> = ({ products }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-4xl font-bold text-center mb-6">Lista de Deseos</h2>
      {products.map(product => (
        <div key={product.id} className="relative mb-6 p-4 rounded shadow-lg bg-transparent">
          <button 
            className="absolute top-2 right-2 p-2 bg-black text-white rounded-full" 
            onClick={() => console.log('Remove item', product.id)}>
            X
          </button>
          <div className="flex items-center">
            <Image
              alt={product.name}
              src={product.image}
              width={150}
              height={150}
              className="rounded"
            />
            <div className="ml-6 flex-grow">
              <h3 className="text-2xl font-semibold">{product.name}</h3>

              {/* Format Display */}
              <div className="mt-2">
                <label className="block font-bold">Formato:</label>
                <p className="mt-1 p-2 border rounded bg-gray-100">{product.format}</p>
              </div>

              {/* Color and Quantity Display */}
              <div className="mt-2 flex items-center">
                <p className="block font-bold">Colores:</p>
                <div className="flex gap-2 ml-2">
                  {product.colorSets.map(colorSet => (
                    <div
                      key={colorSet.id}
                      className="h-8 w-8 rounded-full"
                      style={{ background: getColorGradient(colorSet.colors) }}
                    />
                  ))}
                </div>
                <p className="block font-bold ml-4">Cantidad: {product.quantity}</p>
              </div>

              {/* Price and Add Button */}
              <div className="mt-2 flex items-center justify-between">
                <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
                <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-400">
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
