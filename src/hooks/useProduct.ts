import { ProductData } from "@/types/productType";
import useSWR, { mutate } from "swr";

type UseProductReturn = {
  getProductById: (id: string) => Promise<ProductData>;
};

export function useProduct(): UseProductReturn {
  const getProductById = async (id: string) => {
    const response = await fetch(`/api/product/${id}`);

    // Await the product data from the response
    const data = await response.json();
    console.log(data);
    const product: ProductData = {
      name: data.name,
      description: data.description,
      basePrice: data.baseprice,
      price: parseFloat(data.price), // Make sure to convert string to number if needed
      stock: data.stock,
      mass: data.mass,
      addedDate: new Date(data.addeddate), // Assuming 'addeddate' is the API's date field
      image: "https://via.placeholder.com/300x250", //image from pexels
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
    console.log(product);
    mutate(`/api/product/${id}`, product, false);
    return product;
  };

  return { getProductById };
}
