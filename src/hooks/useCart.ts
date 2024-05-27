import { useCallback } from "react";
import { ProductCartType, ProductCart, Promotion } from "@/types/productType";
import useSWR from "swr";

type UseCartReturn = {
  getProducts: () => Promise<ProductCartType[]>;
  addProduct: (product: ProductCart) => Promise<boolean>;
  removeProduct: (productCartId: string) => void;
  getDiscount: (discountCode: string) => Promise<Promotion>;
};

export function useCart(): UseCartReturn {
  const { data: cartProductsCache, mutate: mutateCartProducts } = useSWR<
    ProductCartType[]
  >("/api/cart/products", fetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });

  const addProduct = useCallback(
    async (product: ProductCart) => {
      console.log("adding product to cart");
      const response = await fetch("/api/cart/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newProduct = await response.json();
      mutateCartProducts(
        cartProductsCache ? [...cartProductsCache, newProduct] : [newProduct],
        false
      );
      if (newProduct) {
        console.log("Product added to cart");
        return true;
      } else {
        console.error("Failed to add product to cart");
        return false;
      }
    },
    [mutateCartProducts, cartProductsCache]
  );

  const getProducts = useCallback(async (): Promise<ProductCartType[]> => {
    return cartProductsCache || [];
  }, [cartProductsCache]);

  const removeProduct = useCallback(
    async (productCartId: string) => {
      console.log("removing product from cart");
      await fetch("/api/cart/products", {
        method: "DELETE",
        body: JSON.stringify({ productCartId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (cartProductsCache) {
        const updatedCart = cartProductsCache.filter(
          (product) => product.id !== productCartId
        );
        mutateCartProducts(updatedCart, false);
      }
    },
    [mutateCartProducts, cartProductsCache]
  );

  const getDiscount = useCallback(
    async (discountCode: string): Promise<Promotion> => {
      console.log("getting discount");
      // Corrige la ruta para que coincida con la estructura de archivos de Next.js
      const response = await fetch(`/api/promotions/${discountCode}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.error("Failed to get discount");
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const promotion: Promotion = {
        id: data.id,
        name: data.name,
        value: data.value,
        isAvailable: data.isAvailable,
      };
      return promotion;
    },
    []
  );

  return {
    getProducts,
    addProduct,
    removeProduct,
    getDiscount,
  };
}

// Fetcher function as modified by you
async function fetcher() {
  const response = await fetch("/api/cart/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const products = await response.json();

  const productsFormated = products.map((product: any) => ({
    id: product.id,
    name: product.product.name,
    image: "https://via.placeholder.com/300x250",
    basePrice: product.product.baseprice,
    format: {
      id: product.format.id,
      name: product.format.name,
      price: product.format.price,
    },
    colorSet: {
      id: product.colorset.id,
      name: product.colorset.name,
      colors: product.colorset.colors,
    },
    quantity: product.quantity,
  }));
  return productsFormated;
}
