import React from 'react';

interface CartSummaryProps {
  subtotal: number;
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, onCheckout }) => {
  return (
    <div className="p-4 shadow-md rounded-lg bg-white space-y-6">
      <h2 className="font-bold text-3xl text-center">Resumen del Pedido</h2>
      <div>
        <label htmlFor="promoCode" className="font-bold text-xl">Código Promocional</label>
        <input type="text" id="promoCode" className="w-full p-2 border rounded mt-1" />
      </div>
      <h3 className="text-xl">Subtotal: ${subtotal.toFixed(2)}</h3>
      <h3 className="text-xl">Descuentos:</h3>
      <h3 className="text-xl">Envío:</h3>
      <h3 className="text-xl">Total:</h3>
      <div className="flex justify-center">
        <button className="mt-4 py-2 px-4 bg-green-500 text-white rounded-md" onClick={onCheckout}>
          Pedir por WhatsApp
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
