import { useCallback } from "react";
import { ProductCartType } from "@/types/productType";
import useSWR from "swr";

type ProductCart = {
  productId: string;
  formatId: string;
  quantity: number;
  colorSetId: string;
};

type UseCartReturn = {
  getProducts: () => Promise<ProductCartType[]>;
  addProduct: (product: ProductCart) => void;
};

export function useCart(): UseCartReturn {
  const { data: cartProductsCache, mutate: mutateCartProducts } = useSWR<
    ProductCart[]
  >("/cart-cache", null, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
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
      const data = await response.json();
      mutateCartProducts(data);
    },
    [mutateCartProducts]
  );

  const getProducts = useCallback(async () => {
    const response = await fetch("/api/cart/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
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
    console.log("products", products);

    mutateCartProducts(productsFormated);
    return productsFormated;
  }, [mutateCartProducts]);

  return {
    getProducts,
    addProduct,
  };
}
