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
  basePrice: number;
  addedDate: Date;
  isAvailable: boolean;
  categories: Category[];
  formats: Format[];
  colorSets: ColorSet[];
  image: string;
};

export type ProductFavorite = {
  id: string;
  name: string;
  image: string;
};
