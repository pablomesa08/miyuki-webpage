import {
  ProductData,
  ProductGridType,
  ProductIdNameImage,
} from "@/types/productType";
import useSWR, { mutate } from "swr";
import { useCallback } from "react";

type UseProductReturn = {
  getProductById: (id: string) => Promise<ProductData>;
  getFavoriteProducts: () => Promise<ProductData[]>;
  getFavoriteProductId: (productId: string) => Promise<boolean>;
  setFavoriteProduct: (productId: string, status: boolean) => Promise<void>;
  getAllProducts: () => Promise<ProductGridType[]>;
  getProductByCategoriesAndFormats: (
    categories: string[],
    formats: string[]
  ) => Promise<ProductGridType[]>;
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
    revalidateOnMount: false,
  });

  const { data: allProductsCache, mutate: mutateAllProducts } = useSWR<
    ProductGridType[]
  >("/all-products-cache", null, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
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
          id: set.id,
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
    const favorites = data.map((product: ProductIdNameImage) => ({
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

  const getAllProducts = useCallback(async () => {
    console.log("getting all products in the hook");
    const response = await fetch(`/api/product/`);

    // map the response to  ProductIdNameImage array
    const data = await response.json();
    const products: ProductGridType[] = data.map(
      (product: ProductGridType) => ({
        id: product.id,
        name: product.name,
        image: "https://source.unsplash.com/random/200x200",
        basePrice: product.basePrice,
      })
    );

    mutateAllProducts(products, false);

    return products;
  }, [mutateAllProducts]);

  const getProductByCategoriesAndFormats = useCallback(
    async (
      categories: string[],
      formats: string[]
    ): Promise<ProductGridType[]> => {
      console.log("getting products by categories and formats");
      return productsFetcher(categories, formats);
    },
    []
  );

  return {
    getProductById,
    getFavoriteProducts,
    getFavoriteProductId,
    setFavoriteProduct,
    getAllProducts,
    getProductByCategoriesAndFormats,
  };
}

async function productsFetcher(
  categories: string[],
  formats: string[]
): Promise<ProductGridType[]> {
  let products: ProductGridType[] = [];
  console.log("getting products by categories and formats");
  console.log("categories", categories);
  console.log("formats", formats);
  if (categories.length === 0 && formats.length === 0) {
    return [];
  }
  // first fetch all categories
  if (categories.length > 0) {
    const responseCategories = await fetch(`/api/product/categories`, {
      method: "POST",
      body: JSON.stringify({ categories }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // map the response to  ProductGridType array and append to products
    const dataCategories = await responseCategories.json();
    products = dataCategories.map((product: ProductGridType) => ({
      id: product.id,
      name: product.name,
      image: "https://source.unsplash.com/random/200x200",
      basePrice: product.basePrice,
    }));
  }
  // then fetch all formats
  if (formats.length > 0) {
    const responseFormats = await fetch(`/api/product/formats`, {
      method: "POST",
      body: JSON.stringify({ formats }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // map the response to  ProductGridType array and append to products
    const dataFormats = await responseFormats.json();
    products = dataFormats.map((product: ProductGridType) => ({
      id: product.id,
      name: product.name,
      image: "https://source.unsplash.com/random/200x200",
      basePrice: product.basePrice,
    }));
  }

  return products;
}
