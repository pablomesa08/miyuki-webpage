import React from "react";
import { Image, Card, CardBody } from "@nextui-org/react";
import { useRouter } from "next/router";
import { ProductIdNameImage } from "@/types/productType";
import FavoriteIcon from "../products/favoriteIcon";

interface WishlistProps {
  products: ProductIdNameImage[];
}

const Wishlist: React.FC<WishlistProps> = ({ products }) => {
  const router = useRouter();
  const backgroundImageUrl = "/Images/backround/verde.png"; // Define la imagen de fondo aquí

  const navigateToProduct = (id: string) => {
    router.push(`/products/product?productId=${id}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-6">Lista de Deseos</h2>
      <div className="w-full max-w-3xl flex flex-col items-center">
        {products.map((product) => (
          <Card
            key={product.id}
            className="mb-8 w-full max-w-md relative"
            isPressable
            onPress={() => navigateToProduct(product.id)}
          >
            <CardBody className="flex flex-col sm:flex-row items-center sm:justify-between relative z-10">
              <Image
                alt="background"
                src={backgroundImageUrl}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
              />
              <Image
                alt={product.name}
                src={product.image}
                width="200"
                height="200"
                className="object-cover mb-4 sm:mb-0 relative z-10"
              />
              <div className="flex flex-col items-center sm:items-start ml-0 sm:ml-4 relative z-10">
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
              </div>
              <div className="mt-4 sm:mt-0 relative z-10">
                <FavoriteIcon productId={product.id} />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
