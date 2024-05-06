import React, { useState } from 'react';
import { Button, Image } from "@nextui-org/react";
import { Format, ColorSet } from "@/types/productType"; // Asegúrate de que estos tipos están correctamente importados.

interface CartItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    color: string;
    quantity: number;
    image: string;
    colorSets: ColorSet[]; // Asegúrate de que la propiedad colorSets existe.
    formats: Format[]; // Asegúrate de que la propiedad formats existe.
  };
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, onRemove, onUpdateQuantity }) => {
  const [selectedColorSet, setSelectedColorSet] = useState<ColorSet | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<Format | null>(null);

  return (
    <div className="relative bg-white p-4 shadow-md rounded-lg">
      {/* Botón de cerrar en la esquina superior derecha */}
      <button className="absolute top-2 right-2 bg-black text-white rounded-full p-2" onClick={() => onRemove(product.id)}>
        X
      </button>
      <div className="flex items-center">
        <Image
          alt={product.name}
          src={product.image}
          width={275}
          height={250}
        />
        <div className="flex flex-col ml-5 gap-2">
          <h2 className="text-3xl font-semibold">{product.name}</h2>
          <h3 className="text-xl">${product.price.toFixed(2)}</h3>

          {/* Seleccionar color */}
          <div>
            <p className="font-bold">Colores:</p>
            <div className="flex gap-2">
              {product.colorSets.map((colorSet) => (
                <button
                  key={colorSet.id}
                  className={`h-8 w-8 rounded-full`}
                  style={{ backgroundColor: colorSet.colors[0] }} // Asume que hay al menos un color por set.
                  onClick={() => setSelectedColorSet(colorSet)}
                />
              ))}
            </div>
          </div>

          {/* Seleccionar formato */}
          <div>
            <p className="font-bold">Formatos:</p>
            <div className="flex gap-2">
              {product.formats.map((format) => (
                <button
                  key={format.id}
                  className={`px-3 py-1 border ${selectedFormat === format ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-300'}`}
                  onClick={() => setSelectedFormat(format)}
                >
                  {format.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button onClick={() => onUpdateQuantity(product.id, product.quantity - 1)}>-</button>
            <span className="w-10 h-10 bg-blue-500 text-white text-center rounded-full flex items-center justify-center">{product.quantity}</span>
            <button onClick={() => onUpdateQuantity(product.id, product.quantity + 1)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
