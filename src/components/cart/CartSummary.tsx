import { Promotion } from "@/types/productType";
import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";

interface CartSummaryProps {
  subtotal: number;
  promoTotal: number;
  total: number;
  onCheckout: () => void;
  onPromotion: (promoCode: string) => void;
  promo: Promotion | null;
}

export default function CartSummary({
  subtotal,
  onCheckout,
  onPromotion,
  promo,
  promoTotal,
  total,
}: CartSummaryProps) {
  const [promoCode, setpromoCode] = useState("");

  const handlepromo = async (promoCode: string) => {
    const promo = onPromotion(promoCode);
    if (promo === undefined) {
      setpromoCode("");
    }
  };
  return (
    <div className="p-4 shadow-md rounded-lg bg-white space-y-6">
      <h2 className="font-bold text-3xl text-center">Resumen del Pedido</h2>
      <div>
        <label htmlFor="promoCode" className="font-bold text-xl">
          Código Promocional
        </label>
        <Input
          isDisabled={promo === null ? false : true}
          id="promoCode"
          value={promoCode}
          onValueChange={setpromoCode}
        />
        <Button
          isIconOnly
          isDisabled={promo === null ? false : true}
          onPress={() => {
            if (!promo) {
              return handlepromo(promoCode);
            }
          }}
        >
          <Icon path={mdiPlus} size={1} />
        </Button>
        {promo && (
          <p className="text-green-500 mt-2">
            Se ha aplicado el código de descuento: {promoCode}
          </p>
        )}
      </div>
      <h3 className="text-xl">Subtotal: ${subtotal.toFixed(2)}</h3>
      <h3 className="text-xl">Descuentos: ${promoTotal}</h3>
      <h3 className="text-xl">Envío:</h3>
      <h3 className="text-xl">Total: ${total}</h3>
      <div className="flex justify-center">
        <button
          className="mt-4 py-2 px-4 bg-green-500 text-white rounded-md"
          onClick={onCheckout}
        >
          Pedir por WhatsApp
        </button>
      </div>
    </div>
  );
}
