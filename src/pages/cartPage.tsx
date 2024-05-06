import React, { useState } from 'react';
import CartItem from '../components/cart/cartItem';
import CartSummary from '../components/cart/CartSummary';

interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Nombre Producto', price: 19.99, color: 'purple', quantity: 2 },
    { id: 2, name: 'Nombre Producto', price: 29.99, color: 'blue', quantity: 3 },
  ]);

  const handleRemove = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    setProducts(products.map(product => product.id === id ? { ...product, quantity: newQuantity } : product));
  };

  const handleCheckout = () => {
    console.log('Checkout');
    // Implementa la funcionalidad para pedir por WhatsApp aquí
  };

  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">CARRITO DE COMPRAS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          {products.map(product => (
            <CartItem key={product.id} product={product} onRemove={handleRemove} onUpdateQuantity={handleUpdateQuantity} />
          ))}
        </div>
        <CartSummary subtotal={subtotal} onCheckout={handleCheckout} />
      </div>
    </div>
  );
};

export default CartPage;
