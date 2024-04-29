import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function ProductGrid() {
  const router = useRouter();
  const list = [
    {
      title: "Orange",
      img: "/Images/backround/azul.png",
      price: "$5.50",
      uuid: "1",
    },
    {
      title: "Tangerine",
      img: "/Images/backround/verdeazul.png",
      price: "$3.00",
      uuid: "2",
    },
    {
      title: "Raspberry",
      img: "/Images/backround/morado.png",
      price: "$10.00",
      uuid: "3",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() =>
            router.push(`/products/product?productId=${item.uuid}`)
          }
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="object-cover h-[250px] max-w-[250px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className=" text-small justify-between">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
