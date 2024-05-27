import { useCallback } from "react";
import { ProductCartType, ProductCart } from "@/types/productType";
import useSWR from "swr";

type UseCartReturn = {
  getProducts: () => Promise<ProductCartType[]>;
  addProduct: (product: ProductCart) => Promise<boolean>;
  removeProduct: (productCartId: string) => void;
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

  return {
    getProducts,
    addProduct,
    removeProduct,
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
    //public/Images/9ecbdfdd-9246-4260-a4d9-8af3efe3d777.png
    image: `public/Images/${product.id}.png`,
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
