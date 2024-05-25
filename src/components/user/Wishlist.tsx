import React from "react";
import { Image, Card, Button, CardBody } from "@nextui-org/react";
import { useRouter } from "next/router";
import { ProductIdNameImage } from "@/types/productType";
import FavoriteIcon from "../products/favoriteIcon";

interface WishlistProps {
  products: ProductIdNameImage[];
}

const Wishlist: React.FC<WishlistProps> = ({ products }) => {
  const router = useRouter();

  const navigateToProduct = (id: string) => {
    router.push(`/products/product?productId=${id}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-4xl font-bold text-center mb-6">Lista de Deseos</h2>
      {products.map((product) => (
        <Card
          key={product.id}
          className="mb-4"
          isPressable
          onPress={() =>
            router.push(`/products/product?productId=${product.id}`)
          }
        >
          <CardBody className="flex items-center">
            <Image
              alt={product.name}
              src={product.image}
              width="250"
              height={250}
            />
            <div className="flex flex-col ml-4">
              <h3 className="text-2xl font-semibold">{product.name}</h3>
            </div>
            <div className="">
              <FavoriteIcon productId={product.id} />
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Wishlist;
