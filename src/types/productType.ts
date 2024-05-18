export type ColorSet = {
  id: string;
  name: string;
  colors: string[];
};

export type Format = {
  id: string;
  name: string;
  price: number;
};

export type Category = {
  id: string;
  name: string;
};

export type ProductData = {
  id: string;
  name: string;
  description: string; // Agregar esta línea si aún no está
  basePrice: number;
  price: number; // Agregar esta línea si aún no está
  stock: number; // Agregar esta línea
  mass: number; // Agregar esta línea si aún no está
  addedDate: Date;
  isAvailable: boolean;
  categories: Category[];
  formats: Format[];
  colorSets: ColorSet[];
  image: string;
};

export type ProductIdNameImage = {
  id: string;
  name: string;
  image: string;
};

export type ProductGridType = {
  id: string;
  name: string;
  image: string;
  basePrice: number;
};

export type ProductCartType = {
  id: string;
  name: string;
  image: string;
  basePrice: number;
  format: Format;
  colorSet: ColorSet;
  quantity: number;
};
