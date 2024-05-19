import React, { useState } from "react";
import { Button, Image } from "@nextui-org/react";
import { Format, ColorSet, ProductCartType } from "@/types/productType";
import { getPath } from "../products/colorWheel";

export default function CartItem({
  product,
}: Readonly<{ product: ProductCartType }>) {
  const getPrice = () => {
    console.log("Calculating price");
    console.log(product.basePrice);
    console.log(product.format.price);
    let price =
      (Number(product.basePrice) + Number(product.format.price)) *
      Number(product.quantity);
    console.log(price);
    return price;
  };

  return (
    <div className="relative bg-white p-4 shadow-md rounded-lg flex items-center">
      {/* Botón de cerrar en la esquina superior derecha */}
      <Button
        isIconOnly
        radius="full"
        className="absolute top-2 right-2 bg-black text-white p-2"
      >
        X
      </Button>
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
              defaultValue={product.format.name}
            >
              <option value={product.format.name}>{product.format.name}</option>
            </select>
          </div>
          {/* Seleccionar color */}
          <div className="mb-4">
            <label className="font-bold">Colores:</label>
            <div className="flex gap-2">
              <Button
                isIconOnly
                className={` h-[60px] w-[60px] p-0 rounded-full `}
              >
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  {product.colorSet.colors.map((color, colorIndex) => (
                    <path
                      key={colorIndex}
                      d={getPath(colorIndex, product.colorSet.colors.length)}
                      fill={color}
                    />
                  ))}
                </svg>
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <label className="font-bold">Cantidad:</label>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 border border-gray-300 rounded-md">
                -
              </button>
              <span className="w-10 h-10 bg-blue-500 text-white text-center rounded-full flex items-center justify-center">
                {product.quantity}
              </span>
              <button className="px-2 py-1 border border-gray-300 rounded-md">
                +
              </button>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold">${getPrice().toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
