import React, { useState } from "react";
import CartItem from "../components/cart/cartItem";
import CartSummary from "../components/cart/CartSummary";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import Footer from "@/components/ui/navbar/footer";
import { Format, ColorSet } from "@/types/productType"; // Asegúrate de que estos tipos están correctamente importados.

interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  quantity: number;
  image: string;
  colorSets: ColorSet[]; // Asegúrate de que la propiedad colorSets existe.
  formats: Format[]; // Asegúrate de que la propiedad formats existe.
}

const CartPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Nombre Producto 1",
      price: 19.99,
      color: "purple",
      quantity: 2,
      image: "/images/backround/morado.png",
      colorSets: [
        { name: "bb", id: "12", colors: ["#FFDA03", "#A52A2A", "#228B22"] },
      ],
      formats: [],
    },
    {
      id: 2,
      name: "Nombre Producto 2",
      price: 29.99,
      color: "blue",
      quantity: 3,
      image: "/images/backround/azul.png",
      colorSets: [
        { name: "bb", id: "12", colors: ["#A52A2A", "#FFDA07", "#228B22"] },
      ],
      formats: [],
    },
  ]);

  const handleRemove = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const handleCheckout = () => {
    console.log("Checkout");
  };

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="flex flex-col min-h-[100vh] justify-between">
      <NavbarHome />
      <main className="flex flex-1 items-center justify-center">
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold text-center mb-6">
            CARRITO DE COMPRA
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-4">
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  onRemove={handleRemove}
                  onUpdateQuantity={handleUpdateQuantity}
                />
              ))}
            </div>
            <CartSummary subtotal={subtotal} onCheckout={handleCheckout} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
