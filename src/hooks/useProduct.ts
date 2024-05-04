import { ProductData, ProductFavorite } from "@/types/productType";
import { mutate } from "swr";

type UseProductReturn = {
  getProductById: (id: string) => Promise<ProductData>;
  getFavoriteProducts: () => Promise<ProductData[]>;
  getFavoriteProductId: (productId: string) => Promise<boolean>;
  setFavoriteProduct: (productId: string, status: boolean) => Promise<void>;
};

export function useProduct(): UseProductReturn {
  // Cache para evitar llamadas redundantes al servidor
  const productCache = new Map<string, ProductData>();
  let favoriteProductsCache: ProductData[] | null = null;

  const getProductById = async (id: string) => {
    if (productCache.has(id)) {
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

    productCache.set(id, product);
    mutate(`/api/product/${id}`, product, false);

    return product;
  };

  const getFavoriteProducts = async (): Promise<ProductData[]> => {
    if (favoriteProductsCache) {
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

    favoriteProductsCache = favorites;
    mutate("/api/product/favorite", favorites, false);

    return favorites;
  };

  const getFavoriteProductId = async (productId: string) => {
    const favorites = await getFavoriteProducts();
    return favorites.some((product) => product.id === productId);
  };

  const setFavoriteProduct = async (productId: string, status: boolean) => {
    const response = await fetch("/api/product/favorite", {
      method: "POST",
      body: JSON.stringify({ productId, status }),
    });

    if (response.ok) {
      // Limpiamos la caché de productos favoritos
      favoriteProductsCache = null;
      const data = await response.json();
      mutate("/api/product/favorite", data, false);
    }
  };

  return {
    getProductById,
    getFavoriteProducts,
    getFavoriteProductId,
    setFavoriteProduct,
  };
}
