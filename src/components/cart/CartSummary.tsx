import React from 'react';

interface CartSummaryProps {
  subtotal: number;
  onCheckout: () => void;
}

const cartSummary: React.FC<CartSummaryProps> = ({ subtotal, onCheckout }) => {
  return (
    <div className="p-4 shadow-md rounded-lg bg-white">
      <h2 className="font-bold text-lg">Resumen del Pedido</h2>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <button className="mt-4 py-2 px-4 bg-green-500 text-white rounded-md" onClick={onCheckout}>
        Pedir por WhatsApp
      </button>
    </div>
  );
};

export default cartSummary;
