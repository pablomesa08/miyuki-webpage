import { ProductFavorite } from "@/types/productType";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import { useRouter } from "next/router";

export default function ProductFavoriteCard({
  product,
}: Readonly<{ product: ProductFavorite[] }>) {
  const router = useRouter();
  return (
    <div>
      {product.map((favorite, index) => (
        <Card
          shadow="sm"
          isPressable
          onPress={() =>
            router.push(`/products/product?productId=${favorite.id}`)
          }
          key={index.valueOf()}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={favorite.name}
              className="object-cover h-[250px] max-w-[250px]"
              src={favorite.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{favorite.name}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
