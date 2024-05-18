import React, { useState } from 'react';
import { Button, Image } from "@nextui-org/react";
import { Format, ColorSet } from "@/types/productType";

interface CartItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    color: string;
    quantity: number;
    image: string;
    colorSets: ColorSet[];
    formats: Format[];
  };
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, onRemove, onUpdateQuantity }) => {
  const [selectedColorSet, setSelectedColorSet] = useState<ColorSet | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<Format | null>(null);

  return (
    <div className="relative bg-white p-4 shadow-md rounded-lg flex items-center">
      {/* Botón de cerrar en la esquina superior derecha */}
      <button className="absolute top-2 right-2 bg-black text-white rounded-full p-2" onClick={() => onRemove(product.id)}>
        X
      </button>
      <Image
        alt={product.name}
        src={product.image}
        width={200}
        height={200}
        className="mr-4"
      />
      <div className="flex flex-col justify-between w-full">
        <h2 className="text-3xl font-semibold">{product.name}</h2>
        <div className="mt-2">
          {/* Seleccionar formato */}
          <div className="mb-4">
            <label className="font-bold">Formato:</label>
            <select
              className="border border-gray-300 rounded-md ml-2 p-2"
              value={selectedFormat?.id || ""}
              onChange={(e) => {
                const format = product.formats.find(f => f.id === e.target.value);
                setSelectedFormat(format || null);
              }}
            >
              <option value="">Seleccionar Formato</option>
              {product.formats.map((format) => (
                <option key={format.id} value={format.id}>
                  {format.name}
                </option>
              ))}
            </select>
          </div>
          {/* Seleccionar color */}
          <div className="mb-4">
            <label className="font-bold">Colores:</label>
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
          <div className="flex items-center gap-4">
            <label className="font-bold">Cantidad:</label>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 border border-gray-300 rounded-md" onClick={() => onUpdateQuantity(product.id, product.quantity - 1)}>-</button>
              <span className="w-10 h-10 bg-blue-500 text-white text-center rounded-full flex items-center justify-center">{product.quantity}</span>
              <button className="px-2 py-1 border border-gray-300 rounded-md" onClick={() => onUpdateQuantity(product.id, product.quantity + 1)}>+</button>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold">${product.price.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
