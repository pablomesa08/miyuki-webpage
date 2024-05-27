import { useCallback } from "react";

type UseOrderReturn = {
  createOrder: (promotionId?: string) => Promise<boolean>;
};

export function useOrders(): UseOrderReturn {
  const createOrder = useCallback(
    async (promotionId?: string): Promise<boolean> => {
      try {
        const body = promotionId ? { promotion: promotionId } : {};
        const response = await fetch("/api/orders/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error("Failed to create order");
        }

        // Optionally process the order data if needed
        await response;

        // Return true to indicate success
        return true;
      } catch (error) {
        console.error("Error creating order:", error);
        // Return false or rethrow the error based on your error handling policy
        return false;
      }
    },
    []
  );

  return {
    createOrder,
  };
}
