import { ProductData, ProductFavorite } from "@/types/productType";
import useSWR, { mutate } from "swr";
import { useCallback } from "react";

type UseProductReturn = {
  getProductById: (id: string) => Promise<ProductData>;
  getFavoriteProducts: () => Promise<ProductData[]>;
  getFavoriteProductId: (productId: string) => Promise<boolean>;
  setFavoriteProduct: (productId: string, status: boolean) => Promise<void>;
};

export function useProduct(): UseProductReturn {
  const { data: productCache, mutate: mutateProduct } = useSWR<
    Map<string, ProductData>
  >("/product-cache", null, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const { data: favoriteProductsCache, mutate: mutateFavorites } = useSWR<
    ProductData[]
  >("/favorites-cache", null, {
    fallbackData: [],
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 2000, // Espera 2 segundos antes de permitir otra solicitud
  });

  const getProductById = useCallback(
    async (id: string) => {
      console.log("getting product by id");
      if (productCache?.has(id)) {
        return productCache.get(id)!;
      }

      const response = await fetch(`/api/product/${id}`);
      const data = await response.json();
      const product: ProductData = {
        name: data.name,
        basePrice: data.baseprice,
        addedDate: new Date(data.addeddate),
        image: "https://via.placeholder.com/300x250",
        colorSets: data.colorsets.map((set: any) => ({
          name: set.name,
          colors: set.colors,
        })),
        formats: data.formats.map((format: any) => ({
          id: format.id,
          name: format.name,
          price: parseFloat(format.price),
        })),
        id: data.id,
        isAvailable: data.isavailable,
        categories: data.categories.map((category: any) => ({
          id: category.id,
          name: category.name,
        })),
      };

      productCache?.set(id, product);
      mutateProduct(productCache, false);

      return product;
    },
    [productCache, mutateProduct]
  );

  const getFavoriteProducts = useCallback(async (): Promise<ProductData[]> => {
    console.log("getting all favorite products");
    if (favoriteProductsCache && favoriteProductsCache.length > 0) {
      return favoriteProductsCache;
    }

    const response = await fetch("/api/product/favorite", {
      method: "POST",
      body: "{}",
    });

    const data = await response.json();
    const favorites = data.map((product: ProductFavorite) => ({
      id: product.id,
      name: product.name,
      image: "https://source.unsplash.com/random/200x200",
    }));

    mutateFavorites(favorites, false);

    return favorites;
  }, [favoriteProductsCache, mutateFavorites]);

  const getFavoriteProductId = useCallback(
    async (productId: string) => {
      const favorites = await getFavoriteProducts();
      return favorites.some((product) => product.id === productId);
    },
    [getFavoriteProducts]
  );

  const setFavoriteProduct = useCallback(
    async (productId: string, status: boolean) => {
      console.log("changing favorite product of id", productId);
      const response = await fetch("/api/product/favorite", {
        method: "POST",
        body: JSON.stringify({ productId, status }),
      });

      if (response.ok) {
        mutateFavorites([], false);
      }
    },
    [mutateFavorites]
  );

  return {
    getProductById,
    getFavoriteProducts,
    getFavoriteProductId,
    setFavoriteProduct,
  };
}
