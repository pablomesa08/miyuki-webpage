import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import { ProductIdNameImage } from "@/types/productType";

export default function ProductGrid({
  products,
}: {
  products: ProductIdNameImage[];
}) {
  const router = useRouter();

  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center">
      {products.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => router.push(`/products/product?productId=${item.id}`)}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.name}
              className="object-cover h-[250px] max-w-[250px]"
              src={item.image}
            />
          </CardBody>
          <CardFooter className=" text-small justify-between">
            <b>{item.name}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
